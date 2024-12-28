

const ProfileImage = () => {
  return (
    // <div className="relative w-64 h-64 flex items-center justify-center">
    //   {/* Gray background for 3D effect */}
    //   <div className="absolute inset-0 bg-gray-200 rounded-xl shadow-lg transform translate-y-4"></div>

    //   {/* Profile image */}
    //   <div className="relative z-10 bottom-0">
    //     <img
    //       src="/vijay.png" // Replace with the actual image path
    //       alt="Profile Image"
    //       width={200} // Specify the size of the image
    //       height={200} // Specify the size of the image
    //       className="rounded-lg object-cover"
    //     />
    //   </div>
    // </div>
    <div className="h-[40vh] w-[40vh] md:h-[50vh] md:w-[50vh] bg-gradient-to-l from-gray-400 to-gray-700 md:rounded-2xl rounded-full flex flex-col justify-between items-center">
      <img src="./vector-girl.png" alt="vijay bhai" className="h-full w-full rounded-full md:rounded-2xl object-cover" />
    </div>
  );
};

export default ProfileImage;
