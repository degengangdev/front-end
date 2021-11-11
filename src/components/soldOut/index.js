import React from "react";

function Index() {
    return (
        <div>
            <div className="h-auto w-full py-6 z-10">
                <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-1 text-white f-f-r">
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-0 md:place-items-end pl-8 max-w-screen-md ">
                        <div>
                            <img
                                alt=""
                                className="sm:w-32 lg:h-32 lg:w-32"
                                src="images/SoldOutLeftMullet.png"
                            />
                        </div>
                        <div>
                            <img
                                alt=""
                                className="sm:w-32 lg:h-32 lg:w-32"
                                src="images/SoldOutLeftTwo.png"
                            />
                        </div>
                        <div>
                            <img
                                alt=""
                                className="sm:w-32 lg:h-32 lg:w-32"
                                src="images/SoldOutLogo.png"
                            />
                        </div>
                        <div>
                            <img
                                alt=""
                                className="sm:w-32 lg:h-32 lg:w-32"
                                src="images/SoldOutRightTwo.png"
                            />
                        </div>
                        <div>
                            <img
                                alt=""
                                className="sm:w-32 lg:h-32 lg:w-32"
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
