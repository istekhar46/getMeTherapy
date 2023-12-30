import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    doctorsInfo: localStorage.getItem('doctorsInfo') ? JSON.parse(localStorage.getItem('doctorsInfo')) : null,
}


const doctorSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        setDoctorsInfo: (state, action) => {
            state.doctorsInfo = action.payload
            localStorage.setItem('doctorsInfo', JSON.stringify(action.payload))
        },
    },
});

export const selectDoctorById = (state, id) => {
    if (!state.doctors) {
        return null; // Return null if doctorsInfo is not available yet
    }

    return state.doctors.find((doctors) => doctors._id === id);
};



export const { setDoctorsInfo } = doctorSlice.actions;
export default doctorSlice.reducer;