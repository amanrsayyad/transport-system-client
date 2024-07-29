import React, { useState } from "react";
import AppLayout from "../utils/AppLayout";
import addNotification from "@bdhamithkumara/react-push-notification";
import { FormTable } from "../utils/Styles";
import { edit } from "../utils/Icon";
import {
  tire,
  pedal,
  oil,
  filter,
  parts,
  greasing,
  truckImg,
} from "../utils/Image";
import { notification } from "../utils/Image";
import styled from "styled-components";

const Home = () => {
  const [show, setShow] = useState(true);

  const clickToNotify = () => {
    addNotification({
      title: "Alert Permission Allowed",
      message: "Alert will be shown by alert setup",
      duration: 4000,
      native: true,
    });
  };

  return (
    <>
      {show ? (
        <NotificationContainer>
          <h4>Click Here To Allow Push Notification</h4>
          <div className="d-flex">
            <button onClick={clickToNotify}>Allow Notification</button>
            <button onClick={() => setShow(false)}>Cancel</button>
          </div>
        </NotificationContainer>
      ) : null}
      <div>
        <CategoryTitle>Category Created</CategoryTitle>
        <CategoryCard>
          <Card className="d-start">
            <img src={truckImg} alt="" />
            Truck
          </Card>
          <Card className="d-start">
            <img src={tire} alt="" />
            Tire
          </Card>
          <Card className="d-start">
            <img src={pedal} alt="" />
            Cluth Plate
          </Card>
          <Card className="d-start">
            <img src={oil} alt="" />
            Oil
          </Card>
          <Card className="d-start">
            <img src={filter} alt="" />
            Air Filter
          </Card>
          <Card className="d-start">
            <img src={parts} alt="" />
            Part Changes
          </Card>
          <Card className="d-start">
            <img src={greasing} alt="" />
            Half Grecing
          </Card>
        </CategoryCard>
      </div>
      <AlertBox>
        <p className="d-flex">
          <img src={notification} alt="" />
          Notification Will Be Show Here
        </p>
      </AlertBox>
    </>
  );
};

export default AppLayout()(Home);

const DashGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
`;

const CategoryTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

const CategoryCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;

const Card = styled.div`
  background-color: #eee;
  width: 100%;
  padding: 20px;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 500;

  img {
    width: 45px;
    height: 45px;
    margin-right: 0.7rem;
  }
`;

const FilterInput = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  /* margin-top: 2rem; */

  select {
    width: 100%;
    padding: 10px 20px;
    margin-bottom: 1rem;
    outline: none;
    border: none;
    border: 1px solid #222;
    width: 100%;
    padding: 14px 20px;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 500;
  }
`;

const DashTable = styled.div`
  margin-top: 2rem;
`;

const AlertBox = styled.div`
  position: relative;
  height: 35vh;
  background-color: rgb(247, 251, 252);
  border: 2px solid #262626;
  border-style: dashed;
  border-radius: 10px;
  margin-top: 1.5rem;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 17px;
    font-weight: 500;
    color: #262626;
    background-color: #fbe9e9;
    padding: 13px 30px;
    border-radius: 10px;
    text-transform: uppercase;

    img {
      width: 45px;
      height: 45px;
      margin-right: 0.7rem;
    }
  }
`;

const NotificationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f7ea95;
  padding: 25px 25px;
  margin-bottom: 1.5rem;
  border-radius: 10px;

  h4 {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
  }
  div {
    button {
      color: #fff;
      border: none;
      outline: none;
      padding: 15px 15px;
      border: none;
      margin-right: 1rem;
      border-radius: 3px;
      font-weight: 500;
      font-size: 15px;

      &:nth-child(1) {
        background-color: #262626;
      }
      &:nth-child(2) {
        background-color: #6786f7;
      }
    }
  }
`;
