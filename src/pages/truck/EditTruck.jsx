import React, { useState, useEffect } from "react";
import AppLayout from "../../utils/AppLayout";
import { FormTitile, CardSection, Form } from "../../utils/Styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { left } from "../../utils/Icon";
import axios from "axios";
import { toast } from "react-toastify";

const EditTruck = () => {
  const trucks = {
    vehicleNo: "",
    weight: "",
  };
  const [truck, setTruck] = useState(trucks);
  const navigate = useNavigate();
  const { id } = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setTruck({ ...truck, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://transport-system-api.vercel.app/get-truck-id/${id}`
        );
        setTruck(response.data.truckExist);
        console.log(response.data.truckExist);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://transport-system-api.vercel.app/update-truck/user/${id}`,
        truck
      )
      .then((response) => {
        toast.success("Truck Updated Successfully");
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
          Update Truck Maintenance
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
              <label>Enter Vehicle No</label>
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
            <div className="submit-btn" onClick={submitForm}>
              Submit
            </div>
          </div>
        </Form>
      </CardSection>
    </div>
  );
};

export default AppLayout()(EditTruck);
