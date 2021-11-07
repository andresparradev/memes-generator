import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiMenuFill, RiCloseFill, RiStore2Line } from "react-icons/ri";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";

import Logo from "./Logo";
import Button from "./Button";

import useDarkMode from "../hooks/useDarkMode";
import useUser from "../hooks/useUser";
import UserAvatar from "./UserAvatar";

const WrapperHeader = styled.header`
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
`;

const Nav = styled.nav``;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;

  @media screen and (max-width: 960px) {
    margin: 0;
    width: 50%;
    height: 100vh;
    position: fixed;
    right: ${(props) => (props.isOpen ? "0" : "-100%")};
    top: 0;
    background-color: ${(props) => props.theme.colors.background};
    align-items: flex-start;
    flex-direction: column;
    padding: 4rem 1rem 1rem 1rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 15px 25px,
      rgba(0, 0, 0, 0.15) 0px 5px 10px;
    transition: all 400ms;
    z-index: 9;

    li,
    button {
      width: 100%;
    }
  }
`;

const IconToggle = styled.span`
  cursor: pointer;

  @media screen and (min-width: 961px) {
    display: none;
  }
`;

const IconClose = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;

  @media screen and (min-width: 961px) {
    display: none;
  }
`;

function Header() {
  const { mode, toggleMode } = useDarkMode();
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { user, logout } = useUser();

  const handleOpenNav = () => {
    setIsOpenNav(true);
  };

  const handleCloseNav = () => {
    setIsOpenNav(false);
  };

  const handleClickMenu = () => {
    setIsOpenNav(false);
  };

  return (
    <WrapperHeader>
      <Link to="/">
        <Logo>MemesGenerator</Logo>
      </Link>
      <Nav>
        <IconToggle onClick={handleOpenNav}>
          <RiMenuFill size={24} />
        </IconToggle>

        <Menu isOpen={isOpenNav} onClick={handleClickMenu}>
          <li>
            <Button
              color="gray"
              icon={
                mode === "light" ? (
                  <MdOutlineLightMode color="fff" size={20} />
                ) : (
                  <MdOutlineDarkMode color="fff" size={20} />
                )
              }
              onClick={toggleMode}
            ></Button>
          </li>
          <li>
            <Link to="/discover">
              <Button color="secondary" icon={<RiStore2Line size={18} />} />
            </Link>
          </li>

          {user ? (
            <UserAvatar user={user} logout={logout} />
          ) : (
            <>
              <li>
                <Link to="/login">
                  <Button color="primary" icon={<BiLogIn />}>
                    Login
                  </Button>
                </Link>
              </li>

              <li>
                <Link to="/register">
                  <Button color="primary" icon={<BiLogIn />}>
                    Register
                  </Button>
                </Link>
              </li>
            </>
          )}

          <IconClose onClick={handleCloseNav}>
            <RiCloseFill size={24} />
          </IconClose>
        </Menu>
      </Nav>
    </WrapperHeader>
  );
}

export default Header;
