import { apiSlice } from "../apiSlice";

const USERS_URL = '/api/doctor';

export const appointmentApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createAppointment: builder.mutation({
            query: ({doctorId, formData}) => ({
                url: `${USERS_URL}/${doctorId}/appointments`,
                method: 'POST',
                body: formData,
            }),
        }),
    }),
});

export const { useCreateAppointmentMutation } = appointmentApiSlice;
