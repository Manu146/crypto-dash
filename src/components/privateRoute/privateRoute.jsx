import { Route, Redirect } from "react-router";
import { authSelector } from "../../redux/auth/authSlice";
import { useSelector } from "react-redux";
export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const authData = useSelector(authSelector);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        Object.keys(authData).length > 0 ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
}
