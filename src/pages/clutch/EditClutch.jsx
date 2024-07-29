import React, { useState, useEffect } from "react";
import AppLayout from "../../utils/AppLayout";
import { FormTitile, CardSection, Form } from "../../utils/Styles";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { left } from "../../utils/Icon";
import axios from "axios";
import { toast } from "react-toastify";

const EditClutch = () => {
  const plates = {
    date: "",
    vehicleNo: "",
    company: "",
    mechanic: "",
    intialKm: "",
    liveKm: "",
    finalKm: "",
  };
  const [plate, setPlate] = useState(plates);
  const navigate = useNavigate();
  const { id } = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setPlate({ ...plate, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://transport-system-api.vercel.app/clutch-plate/get-clutch-plate-id/${id}`
        );
        setPlate(response.data.plateExist);
        console.log(response.data.plateExist);
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
        `https://transport-system-api.vercel.app/clutch-plate/update-clutch-plate/${id}`,
        plate
      )
      .then((response) => {
        toast.success("Clutch Plate Updated Successfully");
        navigate("/cluth-plate");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <CardSection className="a-start flex-col">
        <FormTitile className="a-start">
          <Link to="/cluth-plate">
            <img src={left} alt="" />
          </Link>
          Update Clutch Plate
        </FormTitile>
        <Form>
          <div className="grid">
            <div className="input-container">
              <label>Enter Date</label>
              <input
                type="date"
                id="date"
                value={plate.date}
                onChange={inputHandler}
                name="date"
              />
            </div>
            <div className="input-container">
              <label>Enter Vehicle No</label>
              <select
                id="vehicleNo"
                value={plate.vehicleNo}
                onChange={inputHandler}
                name="vehicleNo"
              >
                <option>Select Tire No</option>
                <option>MH11RN1611</option>
                <option>MH502025</option>
              </select>
            </div>
            <div className="input-container">
              <label>Enter Company Name</label>
              <input
                type="text"
                id="company"
                value={plate.company}
                onChange={inputHandler}
                name="company"
              />
            </div>
            <div className="input-container">
              <label>Enter Mechanic Name</label>
              <input
                type="text"
                id="mechanic"
                value={plate.mechanic}
                onChange={inputHandler}
                name="mechanic"
              />
            </div>
            <div className="input-container">
              <label>Enter From Km</label>
              <input
                type="text"
                id="intialKm"
                value={plate.intialKm}
                onChange={inputHandler}
                name="intialKm"
              />
            </div>
            <div className="input-container">
              <label>Enter Live Km</label>
              <input
                type="text"
                id="liveKm"
                value={plate.liveKm}
                onChange={inputHandler}
                name="liveKm"
              />
            </div>
            <div className="input-container">
              <label>Enter Final Km</label>
              <input
                type="text"
                id="finalKm"
                value={plate.finalKm}
                onChange={inputHandler}
                name="finalKm"
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

export default AppLayout()(EditClutch);
