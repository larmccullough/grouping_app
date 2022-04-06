import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Delete, Search } from "@mui/icons-material";
import { userColumns, userRows } from "../../dataTableSource";
import { useState } from "react";

const Table = () => {
  //Stuff for data column control
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const [data, setData] = useState(userRows);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="#" style={{ textDecoration: "none" }}>
              <div className="viewButton">
                <Search />
                View
              </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              <Delete />
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="table">
      <div className="dataTitle">Student Data</div>
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default Table;
