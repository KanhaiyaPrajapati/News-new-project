import React from "react";
import { Hoc } from "../Components/Hoc";
import { Container } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";

const Users = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullName", headerName: "FullName", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "phone", headerName: "Phone", width: 130 },
    { field: "gender", headerName: "Gender", width: 130 },
    { field: "role", headerName: "Role", width: 130 },
    { field: "area", headerName: "Area", width: 130 },
    { field: "is_active", headerName: "Is_active", width: 130 },

    // {
    //   field: "age",
    //   headerName: "Age",
    //   type: "number",
    //   width: 90,
    // },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) =>
    //     `${row.firstName || ""} ${row.lastName || ""}`,
    // },
  ];

  const rows = [

        // { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    // { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    // { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    // { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    // { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 40 },
    // { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    // { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    // { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    // { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    {
      id: 1,
      fullName: "Snow",
      email: "Snow12@gmail.com",
      phone: 7823459083,
      age: 35,
      gender: "Male",
      role: "Admin",
      area: "Surat",
      is_active: "Active",
    },
    {
      id: 2,
      fullName: "Piyush",
      email: "Piyush123@gmail.com",
      phone: 923459083,
      age: 25,
      gender: "Male",
      role: "User",
      area: "Ahemdabad",
      is_active: "Active",
    },
    {
      id: 3,
      fullName: "Sharvan",
      email: "Sharvan12@gmail.com",
      phone: 9873459083,
      age: 45,
      gender: "Male",
      role: "Admin",
      area: "Goa",
      is_active: "Active",
    },
    {
      id: 4,
      fullName: "Rahul",
      email: "Rahul12@gmail.com",
      phone: 6373459083,
      age: 15,
      gender: "Male",
      role: "Admin",
      area: "Vadodara",
      is_active: "Active",
    },
    {
      id: 5,
      fullName: "Helina",
      email: "Helina13@gmail.com",
      phone: 9343459083,
      age: 25,
      gender: "Female",
      role: "User",
      area: "Delhi",
      is_active: "Active",
    },
  ];

  return (
    <Container>
      <div className="data-grid">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </Container>
  );
};

export default Hoc(Users);
