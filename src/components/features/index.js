import React from "react";
import Fade from "react-reveal/Fade";
import Button from "../common/button";

function Index() {
  return (
    <div
      id="keyfeatures"
      style={{ backgroundImage: `url(images/KeyFeatures.png)` }}
      className="bg-cover bg-center h-full w-full py-16 md:py-24 xl:py-32 mb-4 mt-4"
    >
      <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-8 text-white f-f-r">
        <p className="text-white text-large font-wraith text-2xl">KEY FEATURES</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-2 lg:gap-4  max-w-screen-lg pt-8">
          <div className="flex flex-col items-center justify-center mb-12 ">
            <span className="text-white text-md f-r-r uppercase text-2xl md:text-3xl">Degen Bar</span>
            <img
              alt=""
              className="mt-4"
              src="images/degen-bar.png"
            />
            <p className="mt-6 w-80 md:w-64 h-180px px-2">
              The Degen Bar is exclusive to Degen Gang NFT holders. From here you can hang out with fellow degens, play games (bar fights, poker, slots and more), access the VIP lounge, attend live shows and events and more.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mb-12 ">
            <span className="text-white text-md f-r-r uppercase text-2xl md:text-3xl">Rewards</span>
            <img
              alt=""
              className="mt-4"
              src="images/rewards.png"
            />
            <p className="mt-6 w-80 md:w-64 h-180px px-2">
              The ecosystem is fundamentally designed to reward Degen Gang NFT holders through token yielding, airdrops, exclusive NFTs and much much more.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mb-12 pt-6">
            <span className="text-white text-md f-r-r uppercase text-2xl md:text-3xl">Bar Fights</span>
            <img
              alt=""
              className="mt-4"
              src="images/barfights.png"
            />
            <p className="mt-6 w-80 md:w-64 h-180px px-2">
              Bar Fights is a first of its kind arcade NFT game, where you can use your Pixel Degen to fight others and earn our degen dolla!
            </p>
            <div className="pt-6" />
          </div>
        </div>
        <p className="text-white text-large font-wraith text-2xl mt-16">PARTNERS</p>
        <img
          className="w-1/2 md:w-1/4 xl:pr-10 mt-16"
          src="/images/NetVrkLogo.png"
          alt=""
        />
        <p className="text-white text-large font-wraith text-2xl mt-16">Team</p>
        <div className="max-w-screen-md pt-16 text-center">
          <p className="ml-16 mr-16">
            The team is anonymous, however, have a combined experience of over 30 years in blockchain.
          </p>
          <p className="ml-16 mr-16 text-center mt-8">
            With extensive backgrounds in marketing, business strategy, tech, finance and the art
            sectors, Degen Gang is poised to become a potential leader on the charge into the NFT P2E gaming space.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8  max-w-screen-xl pt-24">
          <div >
            <img
              alt=""
              className="w-56"
              src="images/overlord.jpeg"
            />
            <p className="w-56 mt-2 font-thin text-center">Overlord Degen</p>
          </div>
          <div >
            <img
              alt=""
              className="w-56"
              src="images/dr-degen.jpg"
            />
            <p className="w-56 mt-2 font-thin text-center">Dr Degen</p>
          </div>
          <div >
            <img
              alt=""
              className="w-56"
              src="images/FrugLife.jpg"
            />
            <p className="w-56 mt-2 font-thin text-center">Frug Life</p>
          </div>
          <div >
            <img
              alt=""
              className="w-56"
              src="images/skeleton-prince.jpg"
            />
            <p className="w-56 mt-2 font-thin text-center">Skeleton Prince</p>
          </div>
          <div >
            <img
              alt=""
              className="w-56"
              src="images/winndix.jpg"
            />
            <p className="w-56 mt-2 font-thin text-center">WinnDix</p>
          </div>
          <div >
            <img
              alt=""
              className="w-56"
              src="images/thebull.jpg"
            />
            <p className="w-56 mt-2 font-thin text-center">The Bull</p>
          </div>
          <div >
            <img
              alt=""
              className="w-56"
              src="images/thelion.jpeg"
            />
            <p className="w-56 mt-2 font-thin text-center">The Lion</p>
          </div>
          <div >
            <img
              alt=""
              className="w-56"
              src="images/nickfury.jpg"
            />
            <p className="w-56 mt-2 font-thin text-center">Degen Fury</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Index;
