import { useState, useEffect, useRef, type ReactHTMLElement } from "react";
import PracticeArea from "@/data/practice-areas.js";
import uuid from "react-uuid";
import emailjs from "@emailjs/browser";
import { BusinessInfo } from "@/data/business-info";
import MessageComponent from "./MessageComponent";

const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
const TEMPLATE_KEY = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;

const ContactFromComponent = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number | null>();
  const [service, setService] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleEmail = (evt: any) => {
    setEmail(evt.target.value);
  };

  const handleName = (evt: any) => {
    setName(evt.target.value);
  };

  const handlePhone = (evt: any | null) => {
    setPhone(evt.target.value);
  };

  const handleService = (evt: any) => {
    setService(evt.target.value);
  };

  const handleMessage = (evt: any) => {
    setMessage(evt.target.value);
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPhone(null);
    setService("");
    setMessage("");
  };

  const messageRef = useRef<HTMLElement>(null);

  const DisplayMessage = () => {
    if (messageRef.current) {
      messageRef?.current?.classList.remove("MessageFadeOut");
      setTimeout(() => {
        messageRef?.current?.classList.add("MessageFadeOut");
      }, 2000);
    }
  };

  const HandleSubmit = (evt: any) => {
    evt.preventDefault();

    let templateParams = {
      to_name: BusinessInfo.owner,
      from_name: name,
      subject_line: `Someone sent you a new message through ${BusinessInfo.websiteURL}`,
      service,
      phone_number: phone,
      message: message,
      reply_to: email,
    };
    emailjs.send(SERVICE_ID, TEMPLATE_KEY, templateParams, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        reset();
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        DisplayMessage();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form
      id="email-form"
      name="email-form"
      data-name="Email Form"
      method="get"
      className="contact-form"
      onSubmit={HandleSubmit}
    >
      <MessageComponent
        message="Your message has been sent."
        messageRef={messageRef}
      />
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
          className="button-large w-button duration-500"
          value="Send Message"
        />
      </div>
    </form>
  );
};

export default ContactFromComponent;
