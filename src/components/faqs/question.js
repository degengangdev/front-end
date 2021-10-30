import React, { useState } from "react";

function Question({ data, i }) {
  const [ans, setAns] = useState(0);
  return (
    <div key={i} className="bg-black py-4 px-4 md:py-8 md:px-8  xl:px-16 w-full mb-5 relative">
      <div className="flex items-center justify-between w-full">
        <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white">{data.question}</p>
        <button
          onClick={() => setAns(-1)}
          className={`${
            ans === i ? "" : "hidden"
          } text-white focus-within:outline-none`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 md:w-auto icon icon-tabler icon-tabler-minus"
            width={56}
            height={56}
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1={5} y1={12} x2={19} y2={12} />
          </svg>
        </button>
        <button
          className={`${
            ans === i ? "hidden" : ""
          } text-white focus-within:outline-none`}
        >
          <svg
            onClick={() => setAns(i)}
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 md:w-auto icon icon-tabler icon-tabler-plus"
            width={56}
            height={56}
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1={12} y1={5} x2={12} y2={19} />
            <line x1={5} y1={12} x2={19} y2={12} />
          </svg>
        </button>
      </div>

      <p
        className={`${
          ans === i ? "max-h-ease mt-4 lg:mt-6" : "max-h-none"
        } overflow-hidden text-white text-xs md:text-lg lg:text-xl f-f-r`}
      >
        {data.answer}
      </p>
    </div>
  );
}

export default Question;
