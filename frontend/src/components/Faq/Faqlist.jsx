import { faqs } from "./../../assets/data/faqs";
import FaqItem from "./FaqItem";

const Faqlist = () => {
  return (
    <ul className="mt-[38px]">
      {faqs.map((item, index) => (
        <FaqItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default Faqlist;
