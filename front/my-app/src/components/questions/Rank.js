import React, { useEffect, useState } from "react";
import { findAllUsers } from "../../service/LoginService";
import Navbar from "../navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import './Rank.css';

function Rank() {
  const [rows, setRows] = useState([]);
  const columns = [
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'tokens',
      headerName: 'Tokens',
      type: 'number',
      width: 110,
    },
    { field: 'badges', headerName: 'Badges', width: 500 },
  ];
  useEffect(() => {
    findAllUsers().then((rez) => {
      console.log(rez.data);
      setRows(rez.data)
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div style={{height: 300, width: "100%" }} className="rank">
        <DataGrid rows={rows} columns={columns} pageSize={5}
              rowsPerPageOptions={[5]} />
      </div>
      Rank
    </div>
  );
}

export default Rank;
