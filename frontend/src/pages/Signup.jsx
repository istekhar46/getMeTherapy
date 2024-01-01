import signup from "../assets/images/signup.gif";
import avatar from "../assets/images/avatar-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/userApiSlice/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import uploadToCloudinary from "../utils/cloudinary";

const Signup = () => {
  const [selectFile, setSelectFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cnfPassword: "",
    gender: "",
    role: "patient",
    photo: selectFile,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadToCloudinary(file);
    console.log(data.url);
    setSelectFile(data.url);
    setPreviewUrl(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);
  const [register, { isLoading }] = useRegisterMutation();

  const submitHandler = async (event) => {
    event.preventDefault();
    // try{
    //   isLoading = true;

    //   const res = await useRegisterMutation(formData).unwrap();
    //   dispatch(setCredentials(...res))
    //   isLoading = false;
    // }catch(err){
    //   console.log(err);
    // }
    console.log(formData);
  };


  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* =====img box====== */}
          <div className="hidden lg:block bg-primaryColor rounded-lg">
            <figure className="rounded-lg">
              <img src={signup} alt="img" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* =====signup form====== */}

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an
              <span className="text-primaryColor ml-2">account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                />
              </div>
              <div className="mb-5">
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                />
              </div>
              <div className="mb-5">
                <input
                  required
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                />
              </div>
              <div className="mb-5">
                <input
                  required
                  type="password"
                  name="cnfPassword"
                  value={formData.cnfPassword}
                  onChange={handleInputChange}
                  placeholder="confirm Password"
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img src={avatar} alt="img" className="w-full rounded-full" />
                </figure>
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button className="w-full bg-primaryColor text-white text-[18px] leading-[30px] px-4 py-3 rounded-lg">
                  Sign Up
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Aready have an account?
                <Link
                  to="/login"
                  className="text-primaryColor  font-semibold ml-2 "
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
