import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

const StyledForm = styled.form`
  display: flex;
  padding: 0;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  background-color: var(--light-bg-secondary);
  border-radius: 0.75rem 0 0 0.75rem;
  border: 2px solid transparent;
  transition: border 0.2s ease;
  padding: 0.5rem 0.75rem;
  flex-grow: 1;
  &:focus {
    border-color: var(--light-primary-text);
  }
`;

const SearchButton = styled.button`
  border: none;
  background-color: var(--brand-color);
  cursor: pointer;
  border-radius: 0 0.75rem 0.75rem 0;
  padding: 0.5rem;
  &:disabled {
    background-color: grey;
  }
  & svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--light-primary-text);
  }
`;

export default function SearchComp({ submitFn }) {
  const [state, setState] = useState("");
  return (
    <StyledForm>
      <SearchInput
        type="search"
        placeholder="search coins"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <SearchButton
        onClick={(e) => {
          e.preventDefault();
          submitFn(state);
        }}
      >
        <SearchIcon />
      </SearchButton>
    </StyledForm>
  );
}
