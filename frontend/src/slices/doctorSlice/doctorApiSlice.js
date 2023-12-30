import { apiSlice } from "../apiSlice";

const USERS_URL = '/api/doctor';


export const DoctorApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDoctors: builder.mutation({
            query: () => ({
                url: `${USERS_URL}`,
                method: 'GET',
            })
        }),
    })
        
})

export const {useGetDoctorsMutation,} = DoctorApiSlice;