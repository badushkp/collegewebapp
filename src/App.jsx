import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { useState } from "react";

function App() {
  const [playState, setPlayState] = useState(false);
  return (
    <>
      <div>
        <NavBar />
        <Main />
        <div className="container">
          <Title subTitle="Our Program" title="What We Offer" />
          <Programs />
          <About setPlayState={setPlayState} />
          <Title subTitle="Gallery" title="Campus Photos" />
          <Campus />
          <Title subTitle="Testimonials" title="What Students Says" />
          <Testimonials />
          <Title subTitle="Contact US" title="Get in Touch" />
          <Contact />
          <Footer />
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    </>
  );
}

export default App;
