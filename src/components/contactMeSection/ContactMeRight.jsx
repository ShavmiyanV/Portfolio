import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="/Portfolio/images/email-image.png"
        alt="contact me"
        className="max-w-[300px]"
      />
      <ContactInfo/>
      <ContactSocial/>
    </div>
  );
};

export default ContactMeRight;
