import ProfileImage from "../components/ProfileImage"

export default function About() {
  return (

    <div className="max-w-7xl h-screen mx-auto px-4 sm:px-6 lg:px-8 py-20 md:flex md:items-center justify-center">
      <div className="flex items-center justify-center">
      <ProfileImage/>
      </div>
      <div className="max-w-3xl mx-auto mt-6">
        <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        </div>
        <p className="text-lg text-gray-600 mb-5">
          I am passionate about creating exceptional digital experiences that
          combine beautiful design with seamless functionality.
        </p>
        <div className="prose prose-indigo">
          <div className="text-center flex items-center justify-center mb-4 text-xl font-bold gap-4">
            <div className="h-[1px] w-[10vh] bg-black"></div>
          <p>
          कायदे मै रहिये छोटे  <br />
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
  );
}