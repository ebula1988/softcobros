import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
      id: "1",
      nombres: "Edgar Romero Bula",
      dni: "1102819375",
      telefono: "2748596"
    },
    {
      id: "2",
      nombres: "Jose Perez Ricardo",
      dni: "1102819376",
      telefono: "2748597"
    },
    {
        id: "3",
        nombres: "Luis Lopez Gomez",
        dni: "1102819377",
        telefono: "2748598"
      },
  ];



const clientsSlice = createSlice ({
    name: "clients",
    initialState : initialState,
    reducers: { //funciones que van a cambiar el estado


    }

})


export default clientsSlice.reducer