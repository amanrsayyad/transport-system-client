import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormTitile = styled.h2`
  font-weight: 700;
  font-size: 25px;

  a {
    margin-right: 1rem;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const CardSection = styled.div`
  margin-bottom: 1.5rem;
`;

export const AddContent = styled(Link)`
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-weight: 600;
  color: #222;
  padding: 15px 36px;
  margin-left: 2rem;
  border-radius: 6px;
  cursor: pointer;

  img {
    margin-right: 0.8rem;
  }
`;

export const ExcelBtn = styled.div`
  background-color: #1d4ed8;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  padding: 15px 20px;
  margin-left: 1.5rem;
  border-radius: 6px;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
  }
`;

export const FilterSelect = styled.div`
  margin-left: 1.5rem;
  input {
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

export const FormTable = styled.table`
  width: 100%;
  overflow-x: scroll;
  border-collapse: collapse;

  th {
    background-color: #d4d4d4;
    border: 1px solid #fff;
    text-align: left;
    padding: 15px;
    color: #262626;
  }
  td {
    background-color: #f5f5f5;
    border: 1px solid #fff;
    padding: 10px;
    font-weight: 500;
    color: #262626;

    .table-button {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .btn {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: #fff;
        border-radius: 5px;
        padding: 7px 10px;
        cursor: pointer;
        font-size: 14px;

        img {
          margin-right: 3px;
        }
      }
      .btn-edit {
        background-color: #1d4ed8;
        margin-right: 10px;
      }
      .btn-delete {
        background-color: #d97706;
        color: #fff;
      }
    }
  }
`;

export const Form = styled.div`
  width: 100%;
  margin-top: 1.8rem;

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    .input-container {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      label {
        margin-bottom: 0.3rem;
        font-weight: 500;
      }
      input {
        outline: none;
        border: none;
        border: 1px solid #222;
        width: 100%;
        padding: 14px 20px;
        border-radius: 6px;
        font-size: 15px;
        font-weight: 500;
      }
      select {
        outline: none;
        border: none;
        border: 1px solid #222;
        width: 100%;
        padding: 14px 20px;
        border-radius: 6px;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
  .submit-btn {
    padding: 14px 20px;
    border-radius: 6px;
    background-color: #171717;
    width: 10%;
    color: #fff;
    text-align: center;
    margin-top: 1rem;
    cursor: pointer;
  }
  .clear-form {
    padding: 14px 20px;
    border-radius: 6px;
    background-color: lightgray;
    width: 10%;
    color: #171717;
    text-align: center;
    margin-top: 1rem;
    cursor: pointer;
    margin-right: 1rem;
    font-weight: 500;
  }
`;

export const Error = styled.div`
  background-color: #f5f5f5;
  padding: 15px;
  p {
    color: #222;
    font-weight: 500;
    font-size: 17px;
  }
`;
