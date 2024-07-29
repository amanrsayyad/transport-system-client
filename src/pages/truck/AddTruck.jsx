import React, { useState } from "react";
import AppLayout from "../../utils/AppLayout";
import { FormTitile, CardSection, Form } from "../../utils/Styles";
import { Link, useNavigate } from "react-router-dom";
import { left } from "../../utils/Icon";
import axios from "axios";
import { toast } from "react-toastify";

const AddTruck = () => {
  const trucks = {
    vehicleNo: "",
    weight: "",
  };
  const [truck, setTruck] = useState(trucks);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setTruck({ ...truck, [name]: value });
  };

  const SubmitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("https://transport-system-api.vercel.app/truck/create-truck", truck)
      .then((response) => {
        toast.success("Truck Created Successfully");
        navigate("/truck");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <CardSection className="a-start flex-col">
        <FormTitile className="a-start">
          <Link to="/truck">
            <img src={left} alt="" />
          </Link>
          Add Truck Maintenance
        </FormTitile>
        <Form>
          <div className="grid">
            <div className="input-container">
              <label>Enter Vehicle No</label>
              <input
                type="text"
                id="vehicleNo"
                value={truck.vehicleNo}
                onChange={inputHandler}
                name="vehicleNo"
              />
            </div>
            <div className="input-container">
              <label>Enter weight</label>
              <input
                type="number"
                id="weight"
                value={truck.weight}
                onChange={inputHandler}
                name="weight"
              />
            </div>
          </div>
          <div className="a-start">
            <div className="submit-btn" onClick={SubmitForm}>
              Submit
            </div>
          </div>
        </Form>
      </CardSection>
    </div>
  );
};

export default AppLayout()(AddTruck);
