import React from "react";

function button({ title, onClickhandler = null, tailwind = null }) {


  return (
    <button
      className={"font-wraith focus:outline-none px-8 py-3 text-xs md:text-base md:py-11px bg-purpleBrand text-white shadow-btn hover:shadow-none transition-all duration-300 ease-in-out hover:scale-110 hover:bg-skyBlue transform " + tailwind}
      onClick={e => onClickhandler && onClickhandler()}
    >
      <p className="-mt-1">{title}</p>
    </button>
  );
}

export default button;
