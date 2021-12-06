import React from "react";

function Index() {
  return (
    <div>
      <div className="h-auto w-full py-10 md:py-10 lg:py-20 xl:py-20 z-10">
        <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-8 text-white f-f-r">
          <p className="font-wraith text-2xl">How can I use</p>
          <p className="font-wraith text-2xl">my $DCRED?</p>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:place-items-end pt-8 pl-8 max-w-screen-md ">
            <div>
              <img
                alt=""
                className="sm:w-32 lg:h-32 lg:w-32"
                src="images/NameYourDegen.png"
              />
            </div>
            <div className="md:col-span-3">
              <div className="text-lg xl:text-2xl font-bold">Name your Degen on the blockchain.</div>
              <div className="mt-2 text-sm xl:text-md">Congratulations. You’re now a true degen. Time to let the rest of the world know. </div>
            </div>
            <div>
              <img
                alt=""
                className="sm:w-32 lg:h-32 lg:w-32"
                src="images/Breed.png"
              />
            </div>
            <div className="md:col-span-3">
              <div className="text-lg xl:text-2xl font-bold">Breed a New Degen...</div>
              <div className="mt-2">There's rumours of evil scientists selling beasts in the degen labs.</div>
            </div>
            <div>
              <img
                alt=""
                className="sm:w-32 xl:h-32 xl:w-32"
                src="images/Governance.png"
              />
            </div>
            <div className="md:col-span-3">
              <div className="text-lg xl:text-2xl font-bold">Governance</div>
              <div className="mt-2">Vote on matters of importance to Degen Gang and help shape the future of the ecosystem. </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
