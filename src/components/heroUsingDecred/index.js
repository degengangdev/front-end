import React from "react";

function Index() {
    return (
        <div>
            <div className="h-full w-full py-20 md:py-20 lg:py-20 xl:py-20 z-10">
                <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-8 text-white f-f-r">
                    <p className="font-wraith text-2xl">How can I use</p>
                    <p className="font-wraith text-2xl">my $DCRED?</p>
                    <div className="flow-root text-white w-full mt-16">
                        <div className="float-left ml-96">
                            <img
                                alt=""
                                className="sm:w-1/2 xl:h-32 xl:w-32"
                                src="images/nameyourdegen.png"
                            />
                        </div>
                        <div className="float-left ml-16  w-2/5 h-16">
                            <div className="text-2xl font-bold">Name your Degen on the blockchain.</div>
                            <div className="mt-8">Congratulations. You’re now a true degen. Time to let the rest of the world know. 300 $DCRED to make it permanent on the blockchain and 300 $DCRED to tell them your story and write a lore. </div>
                        </div>
                    </div>
                    <div className="flow-root text-white w-full mt-8">
                        <div className="float-left ml-96">
                            <img
                                alt=""
                                className="sm:w-1/2 xl:h-32 xl:w-32"
                                src="images/breed.png"
                            />
                        </div>
                        <div className="float-left ml-16 w-2/5 h-16">
                            <div className="text-2xl  font-bold">Breed a New Degen...</div>
                            <div className="mt-8">There’s rumours of evil scientists selling beasts in the degen labs. It will cost you 1000 $DCRED and you may not like what you find...Activate Beast Mode?</div>
                        </div>
                    </div>
                    <div className="flow-root text-white w-full mt-8">
                        <div className="float-left ml-96">
                            <img
                                alt=""
                                className="sm:w-1/2 xl:h-32 xl:w-32"
                                src="images/governance.png"
                            />
                        </div>
                        <div className="float-left ml-16 w-2/5 h-16">
                            <div className="text-2xl  font-bold">Governance</div>
                            <div className="mt-8">Vote on matters of importance to Degen Gang and help shape the future of the ecosystem. </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  );
}

export default Index;
