import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    appointmentInfo: localStorage.getItem('appointmentInfo') ? JSON.parse(localStorage.getItem('appointmentInfo')) : null,
}


const appointmentSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        setAppointments: (state, action) => {
            state.appointmentInfo = action.payload
            localStorage.setItem('appointmentInfo', JSON.stringify(action.payload))
        },
        resetAppointment: (state, action) => {
            state.appointmentInfo = null
            localStorage.removeItem('appointmentInfo')
        },
    },
});


export const { setAppointments, resetAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;