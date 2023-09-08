import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';

const DoctorDashboard = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState({});
  const [newTimeSlot, setNewTimeSlot] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

//   useEffect(() => {
//     // Fetch the doctor's profile and appointments when the component mounts
//     const fetchDoctorProfile = async () => {
//       try {
//         const response = await axios.get(`/api/doctors/${doctorId}`);
//         setDoctor(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDoctorProfile();
//   }, [doctorId]);

  const handleTimeSlotChange = (e) => {
    setNewTimeSlot(e.target.value);
  };

  const handleAddTimeSlot = () => {
    if (newTimeSlot.trim() !== '') {
      setAvailableTimeSlots([...availableTimeSlots, newTimeSlot]);
      setNewTimeSlot('');
    }
  };

  // Add UI elements to display doctor's profile and appointments
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Doctor Dashboard</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Profile:</h3>
        <p>Name: {doctor.name}</p>
        <p>Email: {doctor.email}</p>
        <p>Experience: {doctor.experience}</p>
        <p>Token Fee: {doctor.tokenFee}</p>
        <p>Timing: {doctor.timing}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Available Time Slots:</h3>
        {availableTimeSlots.length === 0 ? (
          <p>No available time slots set.</p>
        ) : (
          <ul>
            {availableTimeSlots.map((slot, index) => (
              <li key={index}>{slot}</li>
            ))}
          </ul>
        )}
        <div className="flex mt-2">
          <input
            type="text"
            className="w-full border rounded-lg py-2 px-3 text-gray-700 mr-2"
            placeholder="Add a new time slot (e.g., 'Sunday 10:00 AM - 12:00 PM')"
            value={newTimeSlot}
            onChange={handleTimeSlotChange}
          />
          <button
            className="bg-primaryColor text-white font-semibold py-2 px-4 rounded-lg"
            onClick={handleAddTimeSlot}
          >
            Add
          </button>
        </div>
      </div>

      {/* Add a form to update the doctor's profile */}
    </div>
  );
};

export default DoctorDashboard;
