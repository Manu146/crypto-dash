import React from "react";
import styled from "styled-components";

const Container = styled.a`
  display: none;
  align-items: center;
  padding: 0.75rem;
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-bg-secondary)"
      : "var(--dark-bg-secondary)"};
  border-radius: 0.5rem;
  transition: background 0.2s ease-in;
  overflow: hidden;
  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === "light" ? "#caf0ff" : "#2C2F49"};
  }
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

const ImgWrapper = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  min-width: 2.25rem;
  border-radius: 50%;
  overflow: hidden;
  & img {
    width: 100%;
    height: auto;
  }
`;

const Username = styled.span`
  font-size: 1rem;
  font-weight: bold;
  display: ${({ isOpen }) => (isOpen ? "inline" : "none")};
  margin-left: 1rem;
  white-space: nowrap;
`;

export default function UserCard({ userInfo, isOpen }) {
  return (
    <Container>
      <ImgWrapper>
        <img src={userInfo.img} alt="" />
      </ImgWrapper>
      <Username isOpen={isOpen}>{userInfo.username}</Username>
    </Container>
  );
}
