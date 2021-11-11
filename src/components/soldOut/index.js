import React from "react";

function Index() {
    return (
        <div id="soldOut">
            <div className="h-auto w-full py-6 z-10 mb-8">
                <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-1 text-white f-f-r">
                    <div class="grid grid-cols-1 md:grid-cols-8 gap-0 md:place-items-end pl-8 max-w-screen-lg ">
                        <div>
                            <img
                                alt=""
                                className=""
                                src="images/SoldOutLeftMullet.png"
                            />
                        </div>
                        <div className="col-span-2">
                            <img
                                alt=""
                                className="w-11/12"
                                src="images/SoldOutLeftTwo.png"
                            />
                        </div>
                        <div className="col-span-2">
                            <img
                                alt=""
                                className=""
                                src="images/SoldOutLogo.png"
                            />
                        </div>
                        <div className="col-span-2">
                            <img
                                alt=""
                                className="w-11/12"
                                src="images/SoldOutRightTwo.png"
                            />
                        </div>
                        <div>
                            <img
                                alt=""
                                className="-ml-8"
                                src="images/SoldOutRightSingle.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
      </div>
  );
}

export default Index;
