import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Header />
        <DashboardLayout>
          <Sidebar />
          <DashCard>
            <div className="card">
              <WrappedComponent {...props} />
            </div>
          </DashCard>
        </DashboardLayout>
      </>
    );
  };
};

export default AppLayout;

const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 13.5% 86.5%;
  position: relative;
`;

const DashCard = styled.div`
  background-color: rgb(239, 239, 239);
  border: 1px solid #000;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding-top: 4.9rem;
  padding-left: 0.5rem;

  .card {
    background-color: #fff !important;
    width: 100%;
    padding: 15px;
    border-radius: 7px;
  }
`;
