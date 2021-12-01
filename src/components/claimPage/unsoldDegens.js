import React, { useState } from 'react';
import Button from "../common/button";

export default function UnsoldDegens() {
  const [menu, setmenu] = useState(false);
  const [unclaimedDegens, setUnclaimedDegens] = useState([]);
  const [maxCols, setMaxCols] = useState("cols-1");

  //Fetch unsold Degens
  const fetchUnsoldDegens = () => {
    var unclaimed = [
      { id: "1", imageUrl: "https://degengang.mypinata.cloud/ipfs/QmSfh7bVQDXBpe97EvyP83dtPg16Tp9z9xpNmEZj5yvyiY" },
      { id: "2", imageUrl: "https://degengang.mypinata.cloud/ipfs/QmPNbocHt5jYNXJXSQgozSKpdpRHtpENAhN7NXFrweLXkm" },
      { id: "3", imageUrl: "https://degengang.mypinata.cloud/ipfs/QmQfiRkTvpLacqBmFh8jje5NPnSNgjdSZeBms3nrbhYNUc" },
      { id: "4", imageUrl: "https://degengang.mypinata.cloud/ipfs/Qmb3tBoeat8Zg1ghvisn9NrVRYdxWu5b6snDqR3DRzngMJ" },
      { id: "5", imageUrl: "https://degengang.mypinata.cloud/ipfs/Qme15FN7VZsirfHW8QasHaysDYJgpSvrMsWn2sr7aJeW2k" },
      { id: "6", imageUrl: "https://degengang.mypinata.cloud/ipfs/QmdCpRXs5TkTQBkL9pUqQnvmT1n4W8A9YNwKUrtaP1wtyK" },
      { id: "7", imageUrl: "https://degengang.mypinata.cloud/ipfs/QmbGYXgWyKmYHxwFEtNp7huZ84iXwSor74uKfj4C1NG6iK" },
      { id: "8", imageUrl: "https://degengang.mypinata.cloud/ipfs/QmaMtd3v7TPp5eXRAbpQB1i7kykKbMbvHX2TJDbAXH736N" },
      { id: "9", imageUrl: "https://degengang.mypinata.cloud/ipfs/QmSfh7bVQDXBpe97EvyP83dtPg16Tp9z9xpNmEZj5yvyiY" }
    ];
    var colsAttrs = [];
    if (unclaimed.length < 4) {
      colsAttrs.push("sm:grid-cols-" + unclaimed.length);
      colsAttrs.push("md:grid-cols-" + unclaimed.length);
      colsAttrs.push("lg:grid-cols-" + unclaimed.length);
    }
    else if (unclaimed.length < 8) {
      colsAttrs.push("sm:grid-cols-4");
      colsAttrs.push("md:grid-cols-" + unclaimed.length);
      colsAttrs.push("lg:grid-cols-" + unclaimed.length);
    }
    else if (unclaimed.length < 12) {
      colsAttrs.push("sm:grid-cols-4");
      colsAttrs.push("md:grid-cols-8");
      colsAttrs.push("lg:grid-cols-" + unclaimed.length);
    }
    else {
      colsAttrs.push("sm:grid-cols-4");
      colsAttrs.push("md:grid-cols-8");
      colsAttrs.push("lg:grid-cols-12");
    }
    setMaxCols(colsAttrs.join(" "));
    setUnclaimedDegens(unclaimed);
  }

  React.useEffect(() => {
    fetchUnsoldDegens();
  },[])

  return (
    <>
      <div
        style={{ backgroundImage: `url(images/ClaimPageLitepaperBackground.png)` }}
        className="bg-cover bg-center h-full w-full py-24 md:py-32 lg:py-40 xl:py-60 z-10"
      >
        <div className="flex flex-col items-center justify-center mx-auto container px-4 xl:px-0">
          <p className="text-white text-md sm:test-lg md:text-3xl lg:text-4xl xl:text-41">
            Degens Still At Large
          </p>
          <p className="text-white text-sm lg:text-md">
            Click to claim yours
          </p>
          <div className={"mt-16 px-16 grid grid-cols-1 gap-y-2 gap-x-8 " + maxCols}>
            {unclaimedDegens.map((unclaimedDegen) => (
              <div key={ unclaimedDegen.id } className="col-span-1 justify-center">
                <img alt="" className="w-44" src={unclaimedDegen.imageUrl} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
      );
}
