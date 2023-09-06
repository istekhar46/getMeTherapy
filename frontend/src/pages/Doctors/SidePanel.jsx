const SidePanel = () => {
  return (
    <div className="shadow-panelShodow p-3 lg:p5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para font-semibold mt-0">Ticket price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          500 BDT
        </span>
      </div>

      <div className="mt-[30px]">
          <p className="text_para mt-0 font-semibold text-headingColor">
            Available Time Slots:
          </p>
          <ul className="mt-3">
            <li className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">Sunday</p>
              <p className="text-[15px] leading-6 text-headingColor">
                10:00 AM - 12:00 PM
              </p>
            </li>
            <li className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">Monday</p>
              <p className="text-[15px] leading-6 text-headingColor">
                10:00 AM - 12:00 PM
              </p>
            </li>
            <li className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">Tuesday</p>
              <p className="text-[15px] leading-6 text-headingColor">
                10:00 AM - 12:00 PM
              </p> 
            </li>
          </ul>
      </div>

      <button className="btn px-2 w-full rounded-md">Book Appointment</button>
    </div>
  );
};

export default SidePanel;
