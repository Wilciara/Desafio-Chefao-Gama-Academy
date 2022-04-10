import React from 'react';
import styled from "styled-components";
import Logo from "../atoms/Logo";
import Link from "../atoms/Link";
import Button from "../atoms/Button";
import { COLORS } from "../constants";

function Header() {
  return (
    <Wrapper>
      <Logo />
      <Nav>
        <Link type="headerLink" target="/">Para canditados</Link>
        <Link type="headerLink" target="/">Para empresas</Link>
        <Button type="secondary" size="sm">Login</Button>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 120px;
    height: 80px;
    background-color: ${COLORS.grey.primary};
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 40px;
`

export default Header