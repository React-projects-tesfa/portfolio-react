import React from "react";
import avatar from "../imgs/avatar-nobg.png";
import tesfa from "../imgs/headshot-nobg.png";
export default function Avatar() {
  return (
    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96">
      <img src={tesfa} alt="avatar logo" />
    </div>
  );
}
