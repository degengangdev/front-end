import React from "react";

function Index() {
  return (
    <div id="soldOut">
      <div className="h-auto w-full pt-6 z-10 px-8">
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
          <img
            alt=""
            className="mt-6 hidden md:block lg:hidden 2xl:block"
            src="images/SoldOutLeftMullet.png"
          />
          <img
            alt=""
            className="mt-8 md:hidden lg:block"
            src="images/SoldOutLeftTwo.png"
          />
          <img
            alt=""
            className="mt-6 ml-8"
            src="images/sold-out-smaller.gif"
          />
          <img
            alt=""
            className="ml-6 md:hidden lg:block"
            src="images/SoldOutRightTwo.png"
          />
          <img
            alt=""
            className="-ml-6 hidden md:block lg:hidden 2xl:block"
            src="images/SoldOutRightSingle.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
