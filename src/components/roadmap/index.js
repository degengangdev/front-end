import React from "react";
import Fade from "react-reveal/Fade";
import Button from "../common/button";

function Index() {
    return (
            <div
                id="roadmap"
                style={{ backgroundImage: `url(images/RoadmapBackground.png)` }}
                className="bg-cover bg-center h-full w-full py-16 md:py-24 xl:py-32"
            >
                <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-8 text-white f-f-r">
                    <p className="text-white text-large font-wraith text-2xl">POST LAUNCH ROADMAP</p>
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-8  pl-8 max-w-screen-lg pt-16">
                        <div className="col-span-4">
                            <p className="pl-12 w-64 text-white mt-8 font-wraith text-2xl pt-2 pb-4" style={{ backgroundImage: `url(images/PhaseBackground.png)` }}>
                                Phase 1
                            </p>
                            <p className="text-white mt-8 text-2xl">
                                Degen Street Cred Launch & DAO
                            </p>
                            <p className="text-white mt-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                        <div className="col-span-3 mt-20">
                            <img
                                className="mt-8 lg:w-2/5 lg:pr-5 xl:w-1/2 xl:pr-10 "
                                src="/images/Governance.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-8  pl-8 max-w-screen-lg pt-16">
                        <div className="col-span-3 mt-20">
                            <img
                                className="mt-6 lg:w-2/5 lg:pr-5 xl:w-1/2 xl:pr-10"
                                src="/images/RoadMapBeast.png"
                                alt=""
                            />
                        </div>
                        <div className="col-span-4">
                            <p className="pl-12 w-64 text-white mt-8 font-wraith text-2xl pt-2 pb-4" style={{ backgroundImage: `url(images/PhaseBackground.png)` }}>
                                Phase 2
                            </p>
                            <p className="text-white mt-8 text-2xl">
                                Activate Beast Mode ...
                            </p>
                            <p className="text-white mt-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-8  pl-8 max-w-screen-lg pt-16">
                        <div className="col-span-4">
                            <p className="pl-12 w-64 text-white mt-8 font-wraith text-2xl pt-2 pb-4" style={{ backgroundImage: `url(images/PhaseBackground.png)` }}>
                                Phase 3
                            </p>
                            <p className="text-white mt-8 text-2xl">
                                BAR FIGHTS V1 & DEGEN DOLLA
                            </p>
                         <p className="text-white mt-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                        <div className="col-span-3 mt-20">
                            <img
                                className="-mt-6 lg:pr-5 xl:pr-10"
                                src="/images/RoadMapBarFights.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-8  pl-8 max-w-screen-lg">
                        <div className="col-span-3">
                            <img
                                className="mt-20 lg:w-2/5 lg:pr-5 xl:w-1/2 xl:pr-10"
                                src="/images/RoadMapBarFightsV2.png"
                                alt=""
                            />
                        </div>
                        <div className="col-span-4">
                            <p className="pl-12 w-64 text-white mt-8 font-wraith text-2xl pt-2 pb-4" style={{ backgroundImage: `url(images/PhaseBackground.png)` }}>
                                Phase 4
                            </p>
                            <p className="text-white mt-8 text-2xl">
                                DEGEN BAR AND BAR FIGHTS V2
                            </p>
                            <p className="text-white mt-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Index;
