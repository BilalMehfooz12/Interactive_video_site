import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CottageIcon from "@mui/icons-material/Cottage";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import logo from "../../src/Images/logo-removebg-preview.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import imgOne from "../../src/Images/Patricia Denkler/Patricia Denkler.png";
import imgTwo from "../../src/Images/Rosemarie Mariner/Rosemarie Mariner.png";
import imgThree from "../../src/Images/Daisy Morgan/Daisy Morgan.png";
import imgFour from "../../src/Images/Gwen Hall/Gwen Hall.png";
import imgFive from "../../src/Images/Kathleen Owens/Kathleen Owens.png";
import videoOneIn from "../../src/Images/Patricia Denkler/Patricia Denkler in.mp4";
import videoOneOut from "../../src/Images/Patricia Denkler/Patricia Denkler out.mp4";
import videoTwoIn from "../../src/Images/Rosemarie Mariner/Rosemarie Mariner in.mp4";
import videoTwoOut from "../../src/Images/Rosemarie Mariner/Rosemarie Mariner out.mp4";
import videoThreeIn from "../../src/Images/Daisy Morgan/Daisy Morgan in.mp4";
import videoThreeOut from "../../src/Images/Daisy Morgan/Daisy Morgan out.mp4";
import viderFourIn from "../../src/Images/Gwen Hall/Gwen Hall in.mp4";
import viderFourOut from "../../src/Images/Gwen Hall/Gwen Hall out.mp4";
import videoFiveIn from "../../src/Images/Kathleen Owens/Kathleen Owens in.mp4";
import videoFiveOut from "../../src/Images/Kathleen Owens/Kathleen Owens out.mp4";
import "./Main.css";

function Main() {
  const [introVideoEnd, setIntroVideoEnd] = useState(true);
  const [secondVideo, setSecondVideo] = useState(false);
  const [ThiredVideo, setThiredVedio] = useState(false);
  const [fourVideo, setFourVideo] = useState(false);
  const [fiveVideo, setFiveVideo] = useState(false);
  const [sixVideo, setSixVideo] = useState(false);
  const [videoDynamic, setVideoDynamic] = useState(false);
  const [playBtn, setPlayBtn] = useState(false);
  const [introVideosplay, setIntroVideoplay] = useState(false);
  const [checkIntroVideo, setcheckIntroVideo] = useState("");
  const [selectedData, setSelectedData] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userslist, setuserlist] = useState([]);
  fetch("../../list.txt")
    .then((response) => response.text())
    .then((text) => {
      // Assuming each user is on a new line
      const userList = text.split("\r\n").filter(Boolean);
      // setUsers(userList);
      // console.log(userList)
      setuserlist(userList);
    });
  const stateVideoInRef = useRef(null);
  const stateVideoOutRef = useRef(null);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFiveVideo(false);
      setSixVideo(true);
    }, 20000);
    return () => clearTimeout(timeOut);
  }, [fiveVideo]);
  const videos = [
    "./INTRO.mp4",
    "./INTRO loop.mp4",
    "./Menu background.mp4",
    "./Transitions alpha.mp4",
  ];

  const obj = [
    {
      image: imgOne,
      videoIn: videoOneIn,
      videoOut: videoOneOut,
      name: "Patricia Denkler",
    },
    {
      image: imgTwo,
      videoIn: videoTwoIn,
      videoOut: videoTwoOut,
      name: "Rosemarie Mariner",
    },
    {
      image: imgThree,
      videoIn: videoThreeIn,
      videoOut: videoThreeOut,
      name: "Daisy Morgan",
    },
    {
      image: imgFour,
      videoIn: viderFourIn,
      videoOut: viderFourOut,
      name: "Gwen Hall",
    },

    {
      image: imgFive,
      videoIn: videoFiveIn,
      videoOut: videoFiveOut,
      name: "Kathleen Owens",
    },
  ];
  // useEffect(() => {
  //   if (!introVideoEnd) {
  //     stateVideoInRef?.current?.play();
  //   }
  // }, [introVideoEnd]);

  const handleVideoEnd = () => {
    setIntroVideoEnd(false);
    setSecondVideo(true);
  };
  const handleClickToHome = () => {
    setSecondVideo(true);
    setFourVideo(false);
  };
  const handleEndThiredVideo = () => {
    setThiredVedio(false);
    setFourVideo(true);
  };

  const handleClickFourVideo = () => {
    // if (checkIntroVideo !== null && checkIntroVideo !== undefined) {
    //   setPlayBtn(true);
    // } else {
    console.log("test123");
    setFiveVideo(false);
    setSixVideo(true);
    // }
  };

  const handleClickToAllVideos = () => {
    setFourVideo(true);
    setFiveVideo(false);
    setSixVideo(false);
    setVideoDynamic(false);
  };
  const handleEndFiveVideo = () => {
    setSixVideo(false);
    setFourVideo(true);
  };
  const handleClick = () => {
    setIntroVideoEnd(false);
    setSecondVideo(false);
    setThiredVedio(true);
  };

  const handleSelectData = (item) => {
    fetch(`../../src/images/${item}/introduction.mp4`)
      .then((response) => {
        if (!response.ok) {
          setPlayBtn(false);
          throw new Error("Failed to fetch video");
        }
        return response.url;
      })
      .then((videoUrl) => {
        setcheckIntroVideo(videoUrl);
        setFiveVideo(true);
        setFourVideo(false);
        setSelectedData(item);
        setCurrentIndex(userslist.indexOf(item));
      })
      .catch((err) => {
        console.log("Fetch error:", err);
      });
  };

  const handleNext = () => {
    console.log(currentIndex, videoDynamic);
    setVideoDynamic(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === userslist.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setVideoDynamic(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? userslist.length - 1 : prevIndex - 1
    );
  };

  const handlePlayVideo = () => {
    setIntroVideoplay(true);
  };
  const handleEndIntroVideos = () => {
    setIntroVideoplay(false);
    setSixVideo(true);
    setFiveVideo(false);
    // setSixVideo(true);
    // console.log("test123");
    // setFourVideo(false);
    // setSixVideo(true);
  };
  // console.log("seletedt", currentIndex);

  return (
    <AnimatePresence>
      {introVideoEnd && (
        <motion.video
          key="introVideo"
          muted
          autoPlay
          className="mainvideo"
          onEnded={handleVideoEnd}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <source src={videos[0]} type="video/mp4" />
        </motion.video>
      )}
      {secondVideo && (
        <motion.video
          key="loopVideo"
          muted
          autoPlay
          loop
          className="mainvideo"
          onClick={handleClick}
          // ref={stateVideoInRef}
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible", opacity: 1 }}
          exit={{ visibility: "hidden", opacity: 0 }}
        >
          <source src={videos[1]} type="video/mp4" />
        </motion.video>
      )}
      {ThiredVideo && (
        <motion.video
          key="thiredVideo"
          muted
          autoPlay
          className="mainvideo"
          onEnded={handleEndThiredVideo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <source src={videos[3]} type="video/mp4" />
        </motion.video>
      )}
      {fourVideo && (
        <div className="video_image_main" key="videoImageMain">
          <div className="thired_video">
            <video
              key="thiredVideo"
              muted
              autoPlay
              loop
              // className="thired_video"

              // onEnded={handleEndThiredVideo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={videos[2]} type="video/mp4" />
            </video>
          </div>
          <div className="image_overlap">
            <div>
              <CottageIcon
                className="icon_overlap"
                style={{ fontSize: 150 }}
                onClick={handleClickToHome}
              />
            </div>
            <img src={logo} className="logo" />
            <br></br>
            <br></br>
            <div className="container">
              <Swiper
                style={{ height: "51vh", marginTop: "-8%" }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
              >
                {userslist.map((item, index) => {
                  return (
                    <SwiperSlide key={`swiperSlide-${index}`}>
                      <img
                        src={`../../src/images/${item}/${item}.png`}
                        alt="slide_image"
                        onClick={() => handleSelectData(item)}
                        // style={{
                        //   height: "70vh",
                        //   width: "100%",
                        //   marginTop: "-50rem",
                        // }}
                      />
                    </SwiperSlide>
                  );
                })}

                <div className="slider-controler">
                  <div
                    className="swiper-button-prev slider-arrow"
                    id="slider_left_to_right_icon_right"
                  >
                    {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
                    <KeyboardArrowLeftIcon />
                  </div>
                  <div
                    className="swiper-button-next slider-arrow"
                    id="slider_left_to_right_icon"
                  >
                    <ArrowForwardIosIcon
                      style={{ fontSize: 200 }}
                      // className="icon_left"
                    />

                    {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                  </div>
                  {/* <div className="swiper-pagination"></div> */}
                </div>
              </Swiper>
            </div>
            {/* <img src={selectedData.image} />
            <h2>{selectedData.name}</h2>
            <video autoPlay loop muted>
            <source src={selectedData.videoOut} type="video/mp4" />
          </video> */}
            {/* 
            {obj.map((item) => {
              return (
                <video autoPlay loop muted>
                <source src={item?.videoOut} type="video/mp4" />
                </video>
              );
            })} */}
          </div>
        </div>
      )}
      {/* {fiveVideo && (
        <motion.video
          key="introVideo"
          muted
          autoPlay
          className="mainvideo"
          onEnded={handleEndFourVideo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <source src={videoFiveIn} type="video/mp4" />
        </motion.video>
      )} */}
      {fiveVideo && selectedData && (
        <div>
          <div className="video_image_main">
            <div className="thired_video">
              <motion.video
                key={`video-${currentIndex}`}
                muted
                autoPlay
                // loop
                // className="mainvideo"
                onClick={handleClickFourVideo}
                // ref={stateVideoInRef}
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible", opacity: 1 }}
                exit={{ visibility: "hidden", opacity: 0 }}
              >
                <source
                  src={
                    videoDynamic
                      ? `../../src/images/${userslist[currentIndex]}/${userslist[currentIndex]} in.mp4`
                      : `../../src/images/${selectedData}/${selectedData} in.mp4`
                  }
                  type="video/mp4"
                />
              </motion.video>
            </div>
          </div>
          <div>
            <div
              style={{
                position: "absolute",
                top: "2%",
                display: "flex",
                left: "35%",
                justifyContent: "center",
              }}
            >
              <CottageIcon
                className="icon_overlap"
                style={{ fontSize: 150 }}
                onClick={handleClickToAllVideos}
              />

              <PlayCircleFilledIcon
                key="test1234"
                className="icon_overlap"
                onClick={handlePlayVideo}
                style={{ fontSize: 150, marginLeft: "5%" }}
              />
            </div>
            <div
              className="slider-controler"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "96%",
                bottom: "5px",
              }}
            >
              <div
                className="swiper-button-prev slider-arrow"
                id="slider_left_to_right_icon_right"
                style={{ marginTop: "-15%" }}
                onClick={handlePrevious}
              >
                <KeyboardArrowLeftIcon />
              </div>
              <div
                className="swiper-button-next slider-arrow"
                id="slider_left_to_right_icon"
                style={{ marginTop: "-15%" }}
                onClick={handleNext}
              >
                <ArrowForwardIosIcon style={{ fontSize: 200 }} />
              </div>
            </div>

            {/* <img src={selectedData.image} />
            <h2>{selectedData.name}</h2>
            <video autoPlay loop muted>
            <source src={selectedData.videoOut} type="video/mp4" />
          </video> */}
            {/* 
            {obj.map((item) => {
              return (
                <video autoPlay loop muted>
                <source src={item?.videoOut} type="video/mp4" />
                </video>
              );
            })} */}
          </div>
        </div>
      )}
      {introVideosplay && selectedData && (
        <motion.video
          key="introVideos_play"
          muted
          autoPlay
          className="mainvideo"
          onClick={handleEndIntroVideos}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // onError={() => setSixVideo(true)}
        >
          <source src={checkIntroVideo} type="video/mp4" />
        </motion.video>
      )}

      {sixVideo && selectedData && (
        <motion.video
          key="six_Video"
          muted
          autoPlay
          className="mainvideo"
          onEnded={handleEndFiveVideo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <source
            src={
              `../../src/images/${selectedData}/${selectedData} out.mp4`

              // selectedData.videoOut
            }
            type="video/mp4"
          />
        </motion.video>
      )}
      {/* {fiveVideo && selectedData && (
        <motion.video
          key="introVideo"
          muted
          autoPlay
          className="mainvideo"
          onEnded={handleEndFiveVideo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <source src={selectedData.videoOut} type="video/mp4" />
        </motion.video>
      )} */}
    </AnimatePresence>
  );
}

export default Main;
