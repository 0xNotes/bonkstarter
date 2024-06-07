import { ConnectButton } from "@rainbow-me/rainbowkit";
import snacker from "../assets/snacker.png";
import { useEffect, useState } from "react";
import DescriptionBox from "../components/DescriptionBox";
import PictureBox from "../components/PictureBox";
import KillDetails from "../components/KillDetails";
import KillMiniDetails from "../components/KillMiniDetails";
import KillList from "../components/KillList";


import ape from "../assets/contentImages/ape.png";
import ape2 from "../assets/contentImages/ape2.png";
import ape3 from "../assets/contentImages/ape3.png";



export default function HomePage() {

  const contentImages = [ape, ape2, ape3];
  const styleImages = [ape3, ape, ape2];
  const outputImages = [ape3, ape3, ape];

  const [position, setPosition] = useState(0)
  const [contentImage, setContentImage] = useState(contentImages[position]);
  const [styleImage, setStyleImage] = useState(styleImages[position]);
  const [outputImage, setOutputImage] = useState(outputImages[position]);

  const mql = window.matchMedia("(min-width: 1300px)");
  const [isLargeScreen, setIsLargeScreen] = useState(mql.matches);

  useEffect(() => {
    const handleResize = (e: MediaQueryListEvent) => {
      setIsLargeScreen(e.matches);
    };
    mql.addListener(handleResize);
    return () => {
      mql.removeListener(handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position + 1) % contentImages.length);
      setContentImage(contentImages[position]);
      setStyleImage(styleImages[position]);
      setOutputImage(outputImages[position]);
    }, 3500);
    return () => clearInterval(interval);
  }, [position]);

  function pickImage(imgList: any[], counter: number, setter: React.Dispatch<React.SetStateAction<number>>) {
    setter(counter++ % imgList.length)
    return (imgList[counter]);
  }


  function textRepeat(int: number) {
    let s = ""
    for (let i = 0; i < (int - 1); i++) {
      s += "SNACKER ";
    }
    s += "SNACKER";
    return s;
  }

  return (
    <div className="HomePage">

      <div className="Header">
        <div className="HeaderLinkContainer">
          <a href="https://github.com/0xNotes/snacker-fe-v2">Github</a>
          <a href="https://www.google.com">Medium</a>
          <a href="https://www.google.com">Discord</a>
        </div>
        <div className="ConnectContainer">
          <ConnectButton />
        </div>
      </div>

      <div className="ContentContainer">


        {isLargeScreen ? (
          <div className="Marquee">
            <div className="MarqueeInnerLeft">
              <div className="SnackerText">{textRepeat(20)}</div>
            </div>
            <pre>" "</pre>
            <div className="MarqueeInnerLeft">
              <div className="SnackerText">{textRepeat(20)}</div>
            </div>
            <pre>" "</pre>
            <div className="MarqueeInnerLeft">
              <div className="SnackerText">{textRepeat(20)}</div>
            </div>
          </div>
        ) : (<div />)}


        <div className="CenterContainer">
          <DescriptionBox />
          <div className="ContentStyleContainer">
            <PictureBox text="CONTENT IMAGE" image={contentImage} />
            <PictureBox text="STYLE IMAGE" image={styleImage} />
          </div>
          <div className="OutputContainer">
            <PictureBox text="OUTPUT IMAGE" image={outputImage} />
          </div>

          <div className="KillContainer">
            <KillDetails />
            <div className="KillDetailsContainer">
              <PictureBox text="Recent Kills" image={ape} />
              <KillMiniDetails />
            </div>
          </div>
          
          <div className="KillListHomeContainer">
          <KillList/>
          </div>

          {/* <div
              style={{
                marginTop: "auto",
                marginBottom: "7rem",
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <img src={snacker}></img>
            </div> */}
        </div>

        {isLargeScreen ? (<div className="Marquee">
          <div className="MarqueeInnerRight">
            <div className="SnackerText">{textRepeat(20)}</div>
          </div>
          <pre>" "</pre>
          <div className="MarqueeInnerRight">
            <div className="SnackerText">{textRepeat(20)}</div>
          </div>
          <pre>" "</pre>
          <div className="MarqueeInnerRight">
            <div className="SnackerText">{textRepeat(20)}</div>
          </div>
        </div>) : (<div />)}


      </div>

    </div>
  );
}

//Global tracking of scroll position
// const [scrollPosition, setScrollPosition] = useState(0);

// const handleScroll = () => {
//   const position = window.pageYOffset;
//   setScrollPosition(position);
//   // console.log(scrollPosition);
// };

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }

// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

{
  /* <div style={{ height: "200px", width: "200px", backgroundColor: "red", marginTop: "75rem", marginRight: "140rem", transform: `translateX(${scrollPosition - 2}px)` }}>test</div> */
}
