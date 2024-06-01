import { useState, useEffect, useRef } from "react";
import PracticeArea from "@/data/practice-areas.js";
import uuid from "react-uuid";

const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
const TEMPLATE_KEY = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;

const ContactFromComponent = (props) => {
  const {} = props;
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleEmail = (evt: any) => {
    setEmail(evt.target.value);
  };

  const handleName = (evt: any) => {
    setName(evt.target.value);
  };

  const handlePhone = (evt: any) => {
    setPhone(evt.target.value);
  };

  const handleService = (evt: any) => {
    setService(evt.target.value);
  };

  const handleMessage = (evt: any) => {
    setMessage(evt.target.value);
  };

  return (
    <form
      id="email-form"
      name="email-form"
      data-name="Email Form"
      method="get"
      className="contact-form"
      data-wf-page-id="663690b06ff2152d9a1b9e1c"
      data-wf-element-id="578df7e1-f4ff-e7a7-6436-8847b1666e0e"
    >
      <div className="contact-input-fields">
        <div className="contact-form-left-wrap">
          <div className="input-wrap">
            <input
              className="input-field contact-form-input w-input"
              maxLength={256}
              name="name"
              data-name="Name"
              placeholder="Your Name Here"
              type="text"
              id="name"
              value={name}
              onChange={handleName}
              required
            />
          </div>
          <div className="input-wrap">
            <input
              className="input-field contact-form-input w-input"
              maxLength={256}
              name="email"
              data-name="Email"
              placeholder="Your Email Here"
              type="email"
              id="email"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
        </div>
        <div className="contact-form-right-wrap">
          <div className="input-wrap">
            <select
              value={service}
              onChange={handleService}
              name="service"
              className="hidden min-[412px]:block w-full bg-transparent ml-0 mr-auto border-b-solid border-b-[1px] border-b-[#3b434e] text-left pt-[25px] pb-[25px] px-0 text-secondaryF text-[17px] sm:text-[20px] font-[400] align-middle mb-[10px] [&>option]:text-black ![&>option]:text-left ![&>option]:ml-0 [&>option]:mr-auto"
            >
              <option value="" disabled>
                What service are you interested in?
              </option>
              {PracticeArea &&
                PracticeArea.length > 0 &&
                PracticeArea.map((service) => (
                  <option key={uuid()} value={service.type}>
                    {service.type}
                  </option>
                ))}
              <option>Other</option>
            </select>
            <select
              value={service}
              onChange={handleService}
              name="service"
              className="block min-[412px]:hidden w-full bg-transparent ml-0 mr-auto border-b-solid border-b-[1px] border-b-[#3b434e] text-left pt-[25px] pb-[25px] px-0 text-secondaryF text-[17px] sm:text-[20px] font-[400] align-middle mb-[10px] [&>option]:text-black ![&>option]:text-left ![&>option]:ml-0 [&>option]:mr-auto"
            >
              <option value="" disabled>
                Service interested in
              </option>
              {PracticeArea &&
                PracticeArea.length > 0 &&
                PracticeArea.map((service) => (
                  <option key={uuid()} value={service.type}>
                    {service.type}
                  </option>
                ))}
              <option>Other</option>
            </select>
          </div>
          <div className="input-wrap">
            <input
              className="input-field contact-form-input w-input"
              name="Phone-Number"
              placeholder="Your Phone Number"
              id="Phone-Number"
              value={phone}
              onChange={handlePhone}
              type="number"
            />
          </div>
        </div>
      </div>
      <div className="input-wrap">
        {/* <input
          className="input-field text-area w-input"
          maxLength={256}
          name="Your-Message"
          data-name="Your Message"
          placeholder="Your Message"
          type="text"
          id="Your-Message"
          value={message}
          onChange={handleMessage}
        /> */}
        <textarea
          onChange={handleMessage}
          className="input-field text-area w-input resize-none"
          name="Your-Message"
          data-name="Your Message"
          placeholder="Your Message"
          id="Your-Message"
          value={message}
        ></textarea>
      </div>
      <div className="contact-form-button">
        <input
          type="submit"
          data-wait="Please wait..."
          className="button-large w-button"
          value="Send Message"
        />
      </div>
    </form>
  );
};

export default ContactFromComponent;
