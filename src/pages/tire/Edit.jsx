import React, { useState, useEffect } from "react";
import AppLayout from "../../utils/AppLayout";
import { FormTitile, CardSection, Form } from "../../utils/Styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { left } from "../../utils/Icon";
import axios from "axios";
import { toast } from "react-toastify";

const Edit = () => {
  const tires = {
    date: "",
    vehicleNo: "",
    tireName: "",
    purchaseShop: "",
    tireRate: "",
    intialKm: "",
    liveKm: "",
    finalKm: "",
    mileage: "",
    tireNo: "",
    sellRemoved: "",
  };

  const [tire, setTire] = useState(tires);
  const navigate = useNavigate();
  const { id } = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setTire({ ...tire, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get-tire-id/${id}`
        );
        setTire(response.data.tireExist);
        console.log(response.data.tireExist);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update-tire/user/${id}`, tire)
      .then((response) => {
        toast.success("Tire Maintenance Updated Successfully");
        navigate("/tire");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <CardSection className="a-start flex-col">
        <FormTitile className="a-start">
          <Link to="/tire">
            <img src={left} alt="" />
          </Link>
          Update Tire Maintenance
        </FormTitile>
        <Form>
          <div className="grid">
            <div className="input-container">
              <label>Enter Date</label>
              <input
                type="date"
                id="date"
                value={tire.date}
                onChange={inputHandler}
                name="date"
              />
            </div>
            <div className="input-container">
              <label>Enter Tire No</label>
              <select
                id="vehicleNo"
                value={tire.vehicleNo}
                onChange={inputHandler}
                name="vehicleNo"
              >
                <option>Select Tire No</option>
                <option>MH11RN1611</option>
                <option>MH502025</option>
              </select>
            </div>
            <div className="input-container">
              <label>Enter Tire Name</label>
              <input
                type="text"
                id="tireName"
                value={tire.tireName}
                onChange={inputHandler}
                name="tireName"
              />
            </div>
            <div className="input-container">
              <label>Enter Tire No</label>
              <input
                type="text"
                id="tireNo"
                value={tire.tireNo}
                onChange={inputHandler}
                name="tireNo"
              />
            </div>
            <div className="input-container">
              <label>Enter Purchase Shop</label>
              <input
                type="text"
                id="purchaseShop"
                value={tire.purchaseShop}
                onChange={inputHandler}
                name="purchaseShop"
              />
            </div>
            <div className="input-container">
              <label>Enter Tire Rate</label>
              <input
                type="text"
                id="tireRate"
                value={tire.tireRate}
                onChange={inputHandler}
                name="tireRate"
              />
            </div>
            <div className="input-container">
              <label>Enter Intial Km</label>
              <input
                type="text"
                id="intialKm"
                value={tire.intialKm}
                onChange={inputHandler}
                name="intialKm"
              />
            </div>
            <div className="input-container">
              <label>Enter Live KM</label>
              <input
                type="text"
                id="liveKm"
                value={tire.liveKm}
                onChange={inputHandler}
                name="liveKm"
              />
            </div>
            <div className="input-container">
              <label>Enter Final Km</label>
              <input
                type="text"
                id="finalKm"
                value={tire.finalKm}
                onChange={inputHandler}
                name="finalKm"
              />
            </div>
            <div className="input-container">
              <label>Enter Mileage</label>
              <input
                type="text"
                id="mileage"
                value={tire.mileage}
                onChange={inputHandler}
                name="mileage"
              />
            </div>
            <div className="input-container">
              <label>Sell Or Removed</label>
              <select
                id="sellRemoved"
                value={tire.sellRemoved}
                onChange={inputHandler}
                name="sellRemoved"
              >
                <option>--- Select Action ---</option>
                <option>Sell</option>
                <option>Removed</option>
              </select>
            </div>
          </div>
          <div className="a-start">
            <div className="submit-btn" onClick={submitForm}>
              Submit
            </div>
          </div>
        </Form>
      </CardSection>
    </div>
  );
};

export default AppLayout()(Edit);
