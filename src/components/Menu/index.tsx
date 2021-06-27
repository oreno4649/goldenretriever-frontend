import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import MenuItemList from './config'

const Nav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 62px;
  padding: 0 14px 0 18px;
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
    font-size: 14px;
    padding: 0 21.5px;
    line-height: 59px;
    text-align: center;
    border-bottom: 2px solid transparent;
    opacity: 0.36;
    &.github {
      opacity: 1;
      display: flex;
    }
  }

  a.active {
    opacity: 1;
    font-weight: bold;
    border-image: linear-gradient(90deg, #0947e7, #cf00f0);
    border-image-slice: 1;
  }

  a > img {
    width: 18px;
  }
`

const Menu = () => {
  const location = useLocation()
  const { t } = useTranslation()

  return (
    <Nav>
      <a href="/" className="logo">
        <img src="/images/h_logo.png" alt="Golden retriever finance" />
      </a>
      <NavList>
        {MenuItemList.map((item, index) => (
          <a href={item.href} className={location.pathname === item.href ? 'active' : ''}>
            {t(item.label)}
          </a>
        ))}
        <a href="/#" className="github">
          <img src="/images/mark-github.png" alt="github" />
        </a>
      </NavList>
      <div className="personal">
        <div>
          <button type="button">Connect</button>
        </div>
        <a href="/">
          <div className="profile" />
        </a>
      </div>
    </Nav>
  )
}

export default Menu
