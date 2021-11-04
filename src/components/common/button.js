import React from "react";

function button({ title, onClickhandler = null }) {


  return (
    <button
          className="focus:outline-none px-4 py-3 text-xs leading-none md:text-base md:px-8 md:py-11px md:leading-none bg-purpleBrand text-white shadow-btn hover:shadow-none transition-all duration-300 ease-in-out hover:scale-110 hover:bg-skyBlue transform"
      onClick={e=>onClickhandler && onClickhandler()}
    >
          <p className="-mt-1">{title}</p>
    </button>
  );
}

export default button;
