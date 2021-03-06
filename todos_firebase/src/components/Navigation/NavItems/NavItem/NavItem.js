import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NavItems } from "../NavItems";

const Li = styled.li`
  display: flex;
  height: 100;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  border-bottom: ${(props) =>
    props.mobile ? "1px solid transparent" : "2px solid transparent"};
  font-size: 1.2rem;
  padding: ${(props) => (props.mobile ? ".5rem 2rem" : "1rem")};
  margin: ${(props) => (props.mobile ? "2rem 0" : "0 1rem")};
  font-weight: 400;
  color: var(--color-white);
  transition: all 0.2s;

  &:hover {
    border-bottom: ${(props) =>
      props.mobile
        ? "1px solid var(--color-white)"
        : "1px solid var(--color-white)"};
  }
  &.active {
    border-bottom: ${(props) =>
      props.mobile
        ? "1px solid var(--color-white)"
        : "2px solid var(--color-white)"};
  }
`;

export const NavItem = ({ link, children, mobile, clicked }) => {
  return (
    <Li>
      <StyledNavLink exact activeClassName="active" onClick={clicked} mobile={mobile} to={link}>
        {children}
      </StyledNavLink>
    </Li>
  );
};
