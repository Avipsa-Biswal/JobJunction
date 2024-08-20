import{ createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name:"company",
    initialState:{
        singleCompany:null,
        companies:[],
        searchCompanyByText:"",
    },
    reducers:{
        //actions
        setSingleCompany:(state,action) => {
            state.singleCompany = action.payload;
        },
        setSingleCompany:(state,action) => {
            state.singleCompany = action.payload;
        },
        setSearchCompanyByText:(state,action) => {
            state.searchCompanyByText = action.payload;
        }
    }
});
export const {setSingleCompany, setCompanies,setSearchCompanyByText} = companySlice.action;
export default companySlice.reducer;