import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  authSelector,
  authStatusSelector,
  login,
  clearStatus,
} from "../../redux/auth/authSlice";
import { useHistory } from "react-router";
import { getBalances } from "../../redux/balance/balanceSlice";
import { DefaultContainer } from "../../components/layout/DefaultContainer";
import LinkButton from "../../components/common/LinkButton";
import useFormValidation from "../../custom-hooks/useFormValidation";
import toast from "react-hot-toast";
import LoadingDots from "../../components/loadingDots/LoadingDots";

const Container = styled(DefaultContainer)`
  width: 100%;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  input {
    margin-bottom: 1.25rem;
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  font-size: 1.25rem;
  border: 2px solid
    ${({ theme }) =>
      theme.mode === "light"
        ? "var(--light-bg-primary)"
        : "var(--dark-bg-primary)"};
  border-radius: 0.75rem;
  color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-primary-text)"
      : "var(--dark-primary-text)"};
  padding: 0.5rem 1rem;
  transition: border-color 0.2s ease-in;
  &:hover,
  &:focus {
    border-color: var(--brand-color);
  }

  &:focus {
    outline: none;
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: -0.75rem;
  left: 1rem;
  font-size: 0.75rem;
  color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-primary-text)"
      : "var(--dark-primary-text)"};
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-bg-secondary)"
      : "var(--dark-bg-secondary)"};
  padding: 0.25rem;
`;

const validations = {
  email: {
    required: {
      value: true,
      message: "Email is required",
    },
  },
  password: {
    required: {
      value: true,
      message: "Password is required",
    },
  },
};

export default function Login() {
  const history = useHistory();
  const status = useSelector(authStatusSelector);
  const authData = useSelector(authSelector);
  const [loginData, setLogin] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const { handleSubmit, errors } = useFormValidation(
    loginData,
    validations,
    () => onSubmitLogin(loginData.email, loginData.password)
  );
  const onSubmitLogin = (email, password) => {
    console.log(email, password);
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (status === "succeeded") {
      dispatch(getBalances());
      toast.success("Logged in", { duration: 1500 });
      setTimeout(() => {
        history.push("/home");
      }, 1500);
    }
    if (status === "failed") toast.error("An error ocurred, try again later.");
  }, [status]);
  return (
    <>
      <Container>
        <h1>Welcome back</h1>
        <Form>
          <InputContainer>
            <InputLabel>Email</InputLabel>
            <Input
              type="email"
              value={loginData.email}
              onChange={(e) =>
                setLogin((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </InputContainer>
          <InputContainer>
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              value={loginData.password}
              onChange={(e) =>
                setLogin((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </InputContainer>
          <LinkButton
            onClick={(e) => handleSubmit(e)}
            tag="button"
            disabled={status === "loading"}
          >
            {status === "loading" ? <LoadingDots /> : "Login"}
          </LinkButton>
        </Form>
      </Container>
    </>
  );
}
