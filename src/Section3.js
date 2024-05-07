import React, { useEffect, useState } from "react";

const Section3 = () => {
  const firstVideoLink =
    "https://www.youtube.com/embed/xuP4g7IDgDM?autoplay=1&mute=1";
  const secondVideoLink =
    "https://www.youtube.com/embed/y1ITlvCq5Ro?autoplay=1&mute=1";
  const thirdVideoLink =
    "https://www.youtube.com/embed/q1vN28g7OhI?autoplay=1&mute=1";
  const fourthVideoLink =
    "https://www.youtube.com/embed/J1qsrBl_CR0?autoplay=1&mute=1";

  const [playingVideo, setPlayingVideo] = useState(null);

  useEffect(() => {
    handlePlayingVideoOne();
  }, []);

  function handlePlayingVideoOne() {
    setPlayingVideo(firstVideoLink);
    document.getElementById("tab1").classList.add("bg-blue-700");
    document.getElementById("tab2").classList.remove("bg-blue-700");
    document.getElementById("tab3").classList.remove("bg-blue-700");
    document.getElementById("tab4").classList.remove("bg-blue-700");
  }

  function handlePlayingVideoTwo() {
    setPlayingVideo(secondVideoLink);
    document.getElementById("tab1").classList.remove("bg-blue-700");
    document.getElementById("tab2").classList.add("bg-blue-700");
    document.getElementById("tab3").classList.remove("bg-blue-700");
    document.getElementById("tab4").classList.remove("bg-blue-700");
  }

  function handlePlayingVideoThree() {
    setPlayingVideo(thirdVideoLink);
    document.getElementById("tab1").classList.remove("bg-blue-700");
    document.getElementById("tab2").classList.remove("bg-blue-700");
    document.getElementById("tab3").classList.add("bg-blue-700");
    document.getElementById("tab4").classList.remove("bg-blue-700");
  }

  function handlePlayingVideoFour() {
    setPlayingVideo(fourthVideoLink);
    document.getElementById("tab1").classList.remove("bg-blue-700");
    document.getElementById("tab2").classList.remove("bg-blue-700");
    document.getElementById("tab3").classList.remove("bg-blue-700");
    document.getElementById("tab4").classList.add("bg-blue-700");
  }

  return (
    <div className="text-center">
      <div className="flex flex-1 gap-1">
        <button
          id="tab1"
          className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePlayingVideoOne}
        >
          Tab1
        </button>
        <button
          id="tab2"
          className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePlayingVideoTwo}
        >
          Tab2
        </button>
        <button
          id="tab3"
          className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePlayingVideoThree}
        >
          Tab3
        </button>
        <button
          id="tab4"
          className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePlayingVideoFour}
        >
          Tab4
        </button>
      </div>
      {/* style={{ display: "flex", padding: "2%" }} */}
      <div className="flex p-2 justify-evenly">
        <iframe
          style={{ width: "40vw", height: "40vh" }}
          src={playingVideo}
          frameBorder="0"
          allowFullScreen
          title="steps"
        ></iframe>
        <a
          href={playingVideo}
          target="_blank"
          className="self-center"
          rel="noreferrer"
        >
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-min">
            Get Started &rarr;
          </button>
        </a>
      </div>
    </div>
  );
};

export default Section3;
