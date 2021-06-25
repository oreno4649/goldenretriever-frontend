import React from 'react'
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 62px;
  border-bottom: 1px solid #422794;
  align-items: center;

  a.logo {
    display: block;
    width: 259px;
  }
`

const NavList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  a {
    color: #ffffff;
    display: block;
    line-height: 59px;
    width: 100px;
    text-align: center;
    border-bottom: 2px solid transparent;
    opacity: 0.36;
  }

  a.active {
    opacity: 1;
    font-weight: bold;
    border-image: linear-gradient(90deg, #0947E7, #CF00F0);
    border-image-slice: 1;
  }

  a > img {
    width: 18px;
  }
`


const Menu = () => {
  return (
    <Nav>
      <a href="/" className="logo"><img src="/images/h_logo.png" alt="Golden retriever finance"/></a>
      <NavList>
        <a href="/" className="active">Home</a>
        <a href="/swap">Exchange</a>
        <a href="/#/pool">Liquidity</a>
        <a href="/farms">Farms</a>
        <a href="/pool">Pools</a>
        <a href="/#">Info</a>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label,jsx-a11y/alt-text */}
        <a href="/#"><img src="/images/mark-github.png"/></a>
      </NavList>
      <div className="personal">
        <div>
          <button type="button">Connect</button>
        </div>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label,jsx-a11y/anchor-is-valid */}
        <div className="profile"><a href="#"/></div>
      </div>
    </Nav>
  )
}

export default Menu
