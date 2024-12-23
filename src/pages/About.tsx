import { Volume2, VolumeX } from "lucide-react";
import ProfileImage from "../components/ProfileImage";
import { useState, useEffect } from "react";

export default function About() {
  const [play, setPlay] = useState(false);


  const audio = new Audio("/kgf.mp3");

  const playSound = () => {
    audio.play();
    audio.loop = true;
  };

  const stopSound = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  useEffect(() => {
    if (play) {
      playSound();
    } else {
      stopSound();
    }

    // Cleanup on component unmount
    return () => {
      stopSound();
    };
  }, [play]);

  return (
    <>
      <div className="max-w-7xl h-screen mx-auto px-4 sm:px-6 lg:px-8 py-20 md:flex md:items-center justify-center">
        <div className="flex items-center justify-center">
          <ProfileImage />
        </div>
        <div className="max-w-3xl mx-auto mt-6">
          <div className="text-center md:text-left flex items-center justify-center md:justify-start mb-6 gap-8">
            <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
            <div>
              {play ? (
                <div
                  className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
                  onClick={() => setPlay(false)}
                >
                  <Volume2 />
                </div>
              ) : (
                <div
                  className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
                  onClick={() => setPlay(true)}
                >
                  <VolumeX />
                </div>
              )}
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-5">
            I am passionate about creating exceptional digital experiences that
            combine beautiful design with seamless functionality.
          </p>
          <div className="prose prose-indigo">
            <div className="text-center flex items-center justify-center mb-4 text-xl font-bold gap-4">
              <div className="h-[1px] w-[10vh] bg-black"></div>
              <p>
                कायदे मै रहिये छोटे <br />
                वर्ना गांड पै लगेंगे सोट्टे
              </p>
              <div className="h-[1px] w-[10vh] bg-black"></div>
            </div>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
