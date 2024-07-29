import React, { useState } from "react";
import styled from "styled-components";
import { menu, arrow } from "../utils/Icon";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [main, setMain] = useState(true);
  return (
    <SidebarMain>
      <SidebarList>
        <div className="card">
          <div className="d-flex">
            <img src={menu} alt="" />
            Maintenance
          </div>
          <img src={arrow} alt="" onClick={() => setMain(!main)} />
        </div>
        {main ? (
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/truck">Truck</Link>
            </li>
            <li>
              <Link to="/tire">Tire</Link>
            </li>
            <li>
              <Link to="/cluth-plate">Cluth Plate</Link>
            </li>
            <li>
              <Link>Oil</Link>
            </li>
            <li>
              <Link>Air Filter</Link>
            </li>
            <li>
              <Link>Half Grecing</Link>
            </li>
          </ul>
        ) : null}
      </SidebarList>
    </SidebarMain>
  );
};

export default Sidebar;

const SidebarMain = styled.div`
  background-color: #262626;
  width: 100%;
  height: 100vh;
  padding-top: 3.7rem;
`;

const SidebarList = styled.div`
  border-top: 2px solid #171717;
  border-bottom: 2px solid #171717;
  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 25px;
    color: #fff;
    font-size: 18px;

    div {
      img {
        margin-right: 0.4rem;
      }
    }
    img {
      cursor: pointer;
    }
  }
  ul {
    padding: 20px 25px;
    padding-top: 0px;
    li {
      margin-bottom: 0.9rem;
      a {
        color: #fff;
        font-size: 16px;
      }
    }
  }
`;
