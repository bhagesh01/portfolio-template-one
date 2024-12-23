import ProfileImage from "../components/ProfileImage";

export default function About() {
  // const [play, setPlay] = useState(false);


  // const audio = new Audio("/kgf.mp3");

  // const playSound = () => {
  //   audio.play();
  //   audio.loop = true;
  // };

  // const stopSound = () => {
  //   audio.pause();
  //   audio.currentTime = 0;
  // };

  // useEffect(() => {
  //   if (play) {
  //     playSound();
  //   } else {
  //     stopSound();
  //   }

  //   // Cleanup on component unmount
  //   return () => {
  //     stopSound();
  //   };
  // }, [play]);

  return (
    <>
      <div className="max-w-7xl h-screen mx-auto px-4 sm:px-6 lg:px-8 py-20 md:flex md:items-center justify-center">
        <div className="flex items-center justify-center">
          <ProfileImage />
        </div>
        <div className="max-w-3xl mx-auto mt-6">
          <div className="text-center md:text-left flex items-start justify-center md:justify-start mb-6 gap-8">
            <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
          </div>
          <p className="text-lg text-gray-600 mb-5">
            I am passionate about creating exceptional digital experiences that
            combine beautiful design with seamless functionality.
          </p>
          <div className="prose prose-indigo">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequuntur.
              </p>
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
