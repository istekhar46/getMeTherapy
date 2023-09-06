import {doctors} from '../../assets/data/doctors'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Testimonial from '../../components/Testimonial/Testimonial';

const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="contianer text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-center">
            <input
              type="text"
              placeholder="Search for a doctor"
              className="w-full px-4 pl-4 pr-2 bg-transparent focus:outline-none cursor-pointer placeholder:text-textColor "
            />
            <button className="bg-[#0066ff] px-5 py-3 text-white font-bold rounded-md">
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4">
            {doctors.map((doctors) => (
              <DoctorCard key={doctors.id} doctors={doctors} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patients say</h2>
            <p className="text_para text-center">
              World class care of everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial/>
        </div>
      </section>
    </>
  );
};

export default Doctors;
