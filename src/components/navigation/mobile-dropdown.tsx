import { useRef } from "react";
import RightArrow from "@/assets/icons/right-white.png";
import type { MobileDropDownProps } from "@/util/interface.ts";
import LinkItem from "./linkItem-react.tsx";
import uuid from "react-uuid";
import "./nav-style.css";

const MobileDropDown = (props: MobileDropDownProps) => {
  const { label, options, currentPath } = props;
  const labelRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLImageElement>(null);
  const dropdownRef = useRef<HTMLElement>(null);

  const clickEvent = () => {
    if (arrowRef.current) {
      if (!arrowRef?.current?.classList.contains("openArrow")) {
        arrowRef?.current?.classList.add("openArrow");
      } else {
        arrowRef?.current?.classList.remove("openArrow");
      }
    }
    if (dropdownRef.current) {
      if (!dropdownRef.current.classList.contains("closeDropdown")) {
        dropdownRef.current.classList.add("closeDropdown");
      } else {
        dropdownRef.current.classList.remove("closeDropdown");
      }
    }
  };
  return (
    <>
      <div
        className="flex whitespace-nowrap gap-[0px] cursor-pointer ml-0 hover:text-primaryC"
        onClick={clickEvent}
      >
        <div className={`peer nav-link w-nav-link`} ref={labelRef}>
          {label}
        </div>
        <img
          src={RightArrow.src}
          alt="drop down menu"
          ref={arrowRef}
          className="w-[32px] h-[32px] transform-all duration-500 my-auto"
        />
      </div>
      <nav
        className="grid transform-all duration-500 overflow-hidden closeDropdown dropdownStyle"
        style={{ height: `${options.length * 50}px` }}
        ref={dropdownRef}
      >
        {options &&
          options.length > 0 &&
          options.map((opt) => (
            <LinkItem
              currentPath={currentPath}
              href={opt.link}
              key={uuid()}
              label={opt.label}
            />
          ))}
      </nav>
    </>
  );
};

export default MobileDropDown;
