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

const Truck = () => {
  const [lists, setLists] = useState([]);
  const [count, setCount] = useState(1);
  const [searchItem, setSearchItem] = useState("");
  const [filteredNo, setFilteredNo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://transport-system-api.vercel.app/truck/get-truck"
        );
        setLists(response.data.trucks);
        setFilteredNo(response.data.trucks);
        console.log(response.data.trucks);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, [count]);

  const deleteUser = async (id) => {
    await axios
      .delete(
        `https://transport-system-api.vercel.app/truck/delete-truck/${id}`
      )
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
    let headers = ["Id, Vehicle No, Weight"];
    // Convert users data to a csv
    let truckCsv = lists.reduce((acc, truck) => {
      const { _id, vehicleNo, weight } = truck;
      acc.push([_id, vehicleNo, weight].join(","));
      return acc;
    }, []);
    downloadFile({
      data: [...headers, ...truckCsv].join("\n"),
      fileName: "trucks.csv",
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
        <FormTitile>Add Truck</FormTitile>
        <AddContent to="/add-truck" className="d-flex">
          <img src={add} alt="" />
          Add Truck
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
          <th>Sr No.</th>
          <th>Vehicle No</th>
          <th>Weight</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {filteredNo?.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.vehicleNo}</td>
                <td>{item.weight} Ton</td>
                <td>
                  <div className="table-button">
                    <Link to={`/update-truck/` + item._id}>
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

export default AppLayout()(Truck);
