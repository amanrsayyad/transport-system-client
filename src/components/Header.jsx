import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { home, setting } from "../utils/Icon";
import { avatar } from "../utils/Image";

const Header = () => {
  return (
    <HeaderMain>
      <HeadList className="d-flex">
        <li>
          <Link to="/" className="d-flex">
            <img src={home} alt="" className="icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="d-flex">
            <img src={setting} alt="" className="icon" />
            Setting
          </Link>
        </li>
      </HeadList>
      <Avatar className="d-flex">
        <img src={avatar} alt="" />
        RDS Transport
      </Avatar>
    </HeaderMain>
  );
};

export default Header;

const HeaderMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px;
  background-color: #171717;
  z-index: 100000000;
  width: 100%;
`;

const Avatar = styled.div`
  background-color: #fff;
  padding: 7px 15px;
  border-radius: 8px;
  font-weight: 500;
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    margin-right: 0.6rem;
  }
`;

const HeadList = styled.ul`
  li {
    margin-right: 2rem;
    a {
      color: #fff;
      font-weight: 400;
      font-size: 16px;

      .icon {
        margin-right: 0.3rem;
      }
    }
  }
`;
