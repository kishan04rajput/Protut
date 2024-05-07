import React, { useState, useEffect } from "react";

const Section2 = () => {
  const firstVideoLink = "https://www.youtube.com/embed/xuP4g7IDgDM?autoplay=1&mute=1";
  const secondVideoLink =
    "https://www.youtube.com/embed/y1ITlvCq5Ro?autoplay=1&mute=1";
  const thirdVideoLink = "https://www.youtube.com/embed/q1vN28g7OhI?autoplay=1&mute=1";
  const fourthVideoLink =
    "https://www.youtube.com/embed/J1qsrBl_CR0?autoplay=1&mute=1";

  const [playingVideo, setPlayingVideo] = useState(null);
  // const [player, setPlayer] = useState(null);
  //try

  useEffect(()=>{
    handleFirstVideoButton();
    // document.getElementById("videopart").play();
  },[]);

  function handleFirstVideoButton() {
    setPlayingVideo(firstVideoLink);
    document.getElementById("firstvideo").classList.add("bg-blue-700");
    document.getElementById("secondvideo").classList.remove("bg-blue-700");
    document.getElementById("thirdvideo").classList.remove("bg-blue-700");
    document.getElementById("fourthvideo").classList.remove("bg-blue-700");
  }

  function handleSecondVideoButton() {
    setPlayingVideo(secondVideoLink);
    document.getElementById("firstvideo").classList.remove("bg-blue-700");
    document.getElementById("secondvideo").classList.add("bg-blue-700");
    document.getElementById("thirdvideo").classList.remove("bg-blue-700");
    document.getElementById("fourthvideo").classList.remove("bg-blue-700");
  }

  function handleThirdVideoButton() {
    setPlayingVideo(thirdVideoLink);
    document.getElementById("firstvideo").classList.remove("bg-blue-700");
    document.getElementById("secondvideo").classList.remove("bg-blue-700");
    document.getElementById("thirdvideo").classList.add("bg-blue-700");
    document.getElementById("fourthvideo").classList.remove("bg-blue-700");
  }

  function handleFourthVideoButton() {
    setPlayingVideo(fourthVideoLink);
    document.getElementById("firstvideo").classList.remove("bg-blue-700");
    document.getElementById("secondvideo").classList.remove("bg-blue-700");
    document.getElementById("thirdvideo").classList.remove("bg-blue-700");
    document.getElementById("fourthvideo").classList.add("bg-blue-700");
  }

  // useEffect(() => {
  //   // Dynamically load YouTube Player API script
  //   const tag = document.createElement('script');
  //   tag.src = 'https://www.youtube.com/iframe_api';
  //   const firstScriptTag = document.getElementsByTagName('script')[0];
  //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  //   // Callback function when YouTube Player API script is loaded
  //   window.onYouTubeIframeAPIReady = () => {
  //     setPlayer(new window.YT.Player('videopart', {
  //       events: {
  //         'onStateChange': (event) => onPlayerStateChange(event, 'videopart')
  //       }
  //     }));
  //     console.log("YouTube Player API script loaded!");
  //   };
  // }, []);

  // const onPlayerStateChange = (event, iframeId) => {
  //   if (iframeId === 'videopart' && event.data === window.YT.PlayerState.ENDED) {
  //     // Video has stopped playing
  //     console.log('Video stopped');
  //   }
  // };



  return (
    <div>
      <div className="text-center">
      <h2 className="text-2xl font-bold">Here's is how it works</h2>
        <p>Start a free trail &rarr;</p>
      </div>
      <div className="flex justify-evenly">
        {/* leftSide */}
        <div className="text-center flex flex-col justify-evenly">
          <div>
            <button
              id="firstvideo"
              className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
              onClick={handleFirstVideoButton}
            >
              Step 1: First Video
            </button>
          </div>
          <div className="border border-gray-400 ">
            <button
              id="secondvideo"
              className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
              onClick={handleSecondVideoButton}
            >
              Step 2: Second Video
            </button>
          </div>
        </div>
        {/* videoPart */}
        <div>
          <iframe
            id="videopart"
            style={{ width: "40vw", height: "40vh" }}
            src={playingVideo}
            frameborder="0"
            allowfullscreen
            title="Embedded YouTube Video"
          ></iframe>
        </div>
        {/* rightSide */}
        <div className="text-center flex flex-col justify-evenly">
          <div>
            <button
              id="thirdvideo"
              className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
              onClick={handleThirdVideoButton}
            >
              Step 3: Third Video
            </button>
          </div>
          <div className="border border-gray-400 ">
            <button
              id="fourthvideo"
              className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
              onClick={handleFourthVideoButton}
            >
              Step 4: Fourth Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
