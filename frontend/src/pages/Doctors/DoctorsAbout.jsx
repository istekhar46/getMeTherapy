import { formatDate } from "../../utils/formatDate";

const DoctorsAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Muhibur Rahman
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          suscipit sint aliquam, iure aut quo modi, quidem numquam asperiores,
          blanditiis ipsam rerum. Fugiat quaerat quod, nemo omnis veritatis
          numquam hic?
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mn-[30px]">
            <div>
              <span className="text-irisBlueColor font-bold text-[15px] leading-6">
                {formatDate("01-06-2018")} - {formatDate("02-12-2022")}
              </span>
              <p className="text-textColor font-medium text-[16px] leading-6">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-textColor font-medium text-[14px] leading-5">
              New Apollo Hospital, New York
            </p>
          </li>

          <div className="mt-12">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mn-[30px]">
              <div>
                <span className="text-irisBlueColor font-bold text-[15px] leading-6">
                  {formatDate("02-12-2011")} - {formatDate("02-12-2015")}
                </span>
                <p className="text-textColor font-medium text-[16px] leading-6">
                  PHD in Surgeon
                </p>
              </div>
              <p className="text-textColor font-medium text-[14px] leading-5">
                New Apollo Hospital, New York
              </p>
            </li>
          </div>
        </ul>
      </div>

      <div className="mt-12">
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formatDate("01-06-2018")} - {formatDate("02-12-2022")}
                </span>
                <p className="text-textColor font-medium text-[16px] leading-6">
                  Sr. Surgeon
                </p>
                <p className="text-textColor font-medium text-[14px] leading-5">
                New Apollo Hospital, New York
              </p>
            </li>
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formatDate("01-06-2018")} - {formatDate("02-12-2022")}
                </span>
                <p className="text-textColor font-medium text-[16px] leading-6">
                  Sr. Surgeon
                </p>
                <p className="text-textColor font-medium text-[14px] leading-5">
                New Apollo Hospital, New York
              </p>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorsAbout;
