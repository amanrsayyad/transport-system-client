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

const Tire = () => {
  const [lists, setLists] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredNo, setFilteredNo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/get-tire-maintenance"
        );
        setLists(response.data.tires);
        setFilteredNo(response.data.tires);
        console.log(response.data.tires);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (id) => {
    await axios
      .delete(`http://localhost:8000/api/delete-tire/${id}`)
      .then((responce) => {
        setLists((prevUser) => prevUser.filter((item) => item._id !== id));
        toast.success("Deleted Record Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType });
    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  const exportToCsv = (e) => {
    e.preventDefault();
    let headers = [
      "Id, Date, Vehicle No, Tire Name, Purchase Shop, Tire Rate, Start Km, Live Km, Final Km, Mileage, Tire No, Sell Or Removed",
    ];
    // Convert users data to a csv
    let tireCsv = lists.reduce((acc, tire) => {
      const {
        _id,
        date,
        vehicleNo,
        tireName,
        purchaseShop,
        tireRate,
        intialKm,
        liveKm,
        finalKm,
        mileage,
        tireNo,
        sellRemoved,
      } = tire;
      acc.push(
        [
          _id,
          date,
          vehicleNo,
          tireName,
          purchaseShop,
          tireRate,
          intialKm,
          liveKm,
          finalKm,
          mileage,
          tireNo,
          sellRemoved,
        ].join(",")
      );
      return acc;
    }, []);
    downloadFile({
      data: [...headers, ...tireCsv].join("\n"),
      fileName: "tire.csv",
      fileType: "text/csv",
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
        <FormTitile>Tire Maintenance</FormTitile>
        <AddContent to="/add-tire" className="d-flex">
          <img src={add} alt="" />
          Add Tire Maintenance
        </AddContent>
        <ExcelBtn className="d-flex" onClick={exportToCsv}>
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
          <th>Tire Name</th>
          <th>Purchase Shop</th>
          <th>Tire Rate</th>
          <th>Start Km</th>
          <th>Live Km</th>
          <th>Final Km</th>
          <th>Mileage</th>
          <th>Tire No</th>
          <th>Sell Or Removed</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {filteredNo?.map((item) => {
            return (
              <tr>
                <td>{item.date}</td>
                <td>{item.vehicleNo}</td>
                <td>{item.tireName}</td>
                <td>{item.purchaseShop}</td>
                <td>{item.tireRate} /-</td>
                <td>{item.intialKm} Km</td>
                <td>{item.liveKm} Km</td>
                <td>{item.finalKm} Km</td>
                <td>{item.mileage} Kmpl</td>
                <td>{item.tireNo}</td>
                <td>{item.sellRemoved}</td>
                <td>
                  <div className="table-button">
                    <Link to={`/update/` + item._id}>
                      <div className="btn-edit btn">
                        <img src={edit} alt="" /> Edit
                      </div>
                    </Link>
                    <div
                      className="btn-delete btn"
                      onClick={() => deleteUser(item._id)}
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

export default AppLayout()(Tire);
