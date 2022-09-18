import { createSlice } from "@reduxjs/toolkit";
import reducers from './authReducers';

const authSlice = createSlice({
	name: "auth",
	initialState: {
		
			email: "",
			password: "",
	
	},
	reducers: reducers,
});

export const { updateEmail, updatePassword, updateWholeUser} = authSlice.actions;

export default authSlice.reducer;
