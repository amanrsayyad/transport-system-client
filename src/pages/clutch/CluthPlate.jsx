import React, { useEffect, useState } from "react";
import AppLayout from "../../utils/AppLayout";
import {
  FormTitile,
  FormTable,
  AddContent,
  CardSection,
  Error,
  ExcelBtn,
  FilterSelect,
} from "../../utils/Styles";
import { edit, add } from "../../utils/Icon";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const CluthPlate = () => {
  const [lists, setLists] = useState([]);
  const [count, setCount] = useState(1);
  const [searchItem, setSearchItem] = useState("");
  const [filteredNo, setFilteredNo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://transport-system-api.vercel.app/clutch-plate/get-clutch-plate"
        );
        setLists(response.data.plates);
        setFilteredNo(response.data.plates);
        console.log(response.data.plates);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, [count]);

  const deleteUser = async (id) => {
    await axios
      .delete(
        `https://transport-system-api.vercel.app/clutch-plate/delete-clutch-plate/${id}`
      )
      .then((response) => {
        setLists((prevUser) => prevUser.filter((item) => item._id !== id));
        toast.success("Deleted Record Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    const filteredNo = lists.filter((item) =>
      item.vehicleNo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNo(filteredNo);
  };

  return (
    <div>
      <CardSection className="d-start">
        <FormTitile>Cluth Plate Maintenance</FormTitile>
        <AddContent to="/add-cluth-plate" className="d-flex">
          <img src={add} alt="" />
          Add Cluth Plate Maintenance
        </AddContent>
        <ExcelBtn className="d-flex">
          <img src={edit} alt="" />
          Download CSV
        </ExcelBtn>
        <FilterSelect>
          <input
            type="text"
            placeholder="Search Vehicle No"
            value={searchItem}
            onChange={handleInputChange}
          />
        </FilterSelect>
      </CardSection>
      <FormTable>
        <thead>
          <th>Date</th>
          <th>Vehicle No</th>
          <th>Company</th>
          <th>Mechanic</th>
          <th>From Km</th>
          <th>Live Km</th>
          <th>Final Km</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {filteredNo?.map((item) => {
            return (
              <tr>
                <td>{item.date}</td>
                <td>{item.vehicleNo}</td>
                <td>{item.company}</td>
                <td>{item.mechanic}</td>
                <td>{item.intialKm} Km</td>
                <td>{item.liveKm} Km</td>
                <td>{item.finalKm} Km</td>
                <td>
                  <div className="table-button">
                    <Link to={`/update-clutch/` + item._id}>
                      <div className="btn-edit btn">
                        <img src={edit} alt="" /> Edit
                      </div>
                    </Link>
                    <div
                      className="btn-delete btn"
                      onClick={() => {
                        deleteUser(item._id), setCount(count + 1);
                      }}
                    >
                      <img src={edit} alt="" /> Delete
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </FormTable>
      {lists.length === 0 ? (
        <Error>
          <p>No data to display</p>
        </Error>
      ) : null}
    </div>
  );
};

export default AppLayout()(CluthPlate);
