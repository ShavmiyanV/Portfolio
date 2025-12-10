import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col text-white gap-4">
      <SingleInfo text="shavmiyan16@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+94768816747" Image={FiPhone} />
      <SingleInfo text="Colombo, Sri Lanka" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
