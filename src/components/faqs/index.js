import React from "react";
import data from "./question.json";
import Question from "./question";
import Fade from "react-reveal/Fade";
function Index() {
  return (
    <Fade bottom>
      <div
        id="faq"
        style={{ backgroundImage: `url(images/first.png)` }}
        className="bg-cover bg-center h-full w-full py-16 md:py-24 xl:py-32"
      >
        <div className="mx-auto container flex flex-col items-center justify-center px-4 xl:px-0">
          <div className="xl:w-7/12 2xl:w-3/5">
            <div className="flex flex-col items-center justify-center ">
              <p className="text-white text-xl md:text-3xl lg:text-4xl xl:text-41">
                FAQs
              </p>
              <p className="text-base md:text-lg lg:text-2xl f-f-r mt-8 md:mt-10 lg:mt-14 xl:mt-20 text-center text-white">
                If you have other questions, join # questions-and-suggestions
                channel on our Discord server
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:w-11/12 xl:w-9/12 mt-12">
            {data.map((_data, i) => {
              return <Question key={i} data={_data} i={i} />;
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Index;
