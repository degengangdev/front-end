import React from "react";

function Index() {
    return (
        <div>
            <div
                style={{ backgroundImage: `url(images/BarDoorBackground.png)` }}
                className="bg-cover bg-center h-full w-full py-4 md:py-10 lg:py-10 xl:py-10 z-10">
                <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-8 text-white f-f-r pl-12 pr-12 max-w-screen-sm md:pt-28 md:pb-40">
                    <p className="font-wraith text-lg md:text-2xl">DEGEN DOLLAS</p>
                    <p className="font-wraith text-lg md:text-2xl">$DEGEN</p>
                    <p className="pt-12 text-center">Degen Dollas, $DEGEN, is our ingame currency earned from winning BAR FIGHTS. </p>
                    <p className="pt-12 w-11/12">What Can I Spend My Degen Dollas On?</p>
                    <ul className="pt-12 w-11/12 list-disc list-inside">
                        <li>Weapons for Bar Fights</li>
                        <li>Armour for Bar Fights</li>
                        <li>Finishing Moves for Bar Fights</li>
                        <li>Bar Tip Jar - Tip your friends or charity</li>
                        <li>Slots - Degen slot machines</li>
                        <li>Buy your friends a drink at the Degen Bar</li>
                        <li>Buy a booth in the VIP area and customise it</li>
                        <li>Hire a poker room to play with your friends</li>
                        <li>Tickets to exclusive events and live shows</li>
                        <li>Exclusive NFTs in the Degen Blackmarket</li>
                        <li>Whitelist spots to future IDOs</li>
                    </ul>
                </div>
            </div>
      </div>
  );
}

export default Index;
