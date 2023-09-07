import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome </span> back 🎉
        </h3>
        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onClick={handleInputChange}
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
              onClick={handleInputChange}
              placeholder="Password"
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
            />
          </div>

          <div className="mt-7">
            <button className="w-full bg-primaryColor text-white text-[18px] leading-[30px] px-4 py-3 rounded-lg" >Login </button>
          </div>
          
          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account? <Link to='/register' className='text-primaryColor  font-semibold ml-2 '>Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
