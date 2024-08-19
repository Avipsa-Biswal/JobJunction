import{ createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name:"company",
    initialState:{
        singleCompany:null,
        companies:[],
    },
    reducers:{
        //actions
        setSingleCompany:(state,action) => {
            state.singleCompany = action.payload;
        },
        setSingleCompany:(state,action) => {
            state.singleCompany = action.payload;
        }
    }
});
export const {setSingleCompany, setCompanies} = companySlice.action;
export default companySlice.reducer;