import React from "react";
import Fade from "react-reveal/Fade";
import Button from "../common/button";

function Index() {
  return (
    <Fade bottom>
      <div
        id="about"
        style={{ backgroundImage: `url(images/LitePaperBackground.png)` }}
        className="bg-cover bg-center h-full w-full py-16 md:py-24 xl:py-32"
          >
              <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-8 text-white f-f-r">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:place-items-end pl-8 max-w-screen-lg ">
                      <div>
                          <img
                              className="lg:w-2/5 lg:pr-5 xl:w-4/5 xl:pr-10"
                              src="/images/DEGEN-GANG-LOGO 1.png"
                              alt=""
                          />
                          <p className="text-white mt-8">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                          </p>
                          <p className="text-white mt-8">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                          </p>
                          <p className="mt-8">
                              <a href="http://bbc.co.uk" target="__blank">
                                  <Button title="Litepaper" />
                              </a>
                          </p>
                     </div>
                      <div>
                          <img
                              className="lg:w-2/5 lg:pr-5 xl:w-11/12 xl:pr-10 pb-24"
                              src="/images/FeatureCharacter.png"
                              alt=""
                          />
                     </div>
                  </div>
              </div>
      </div>
    </Fade>
  );
}

export default Index;
