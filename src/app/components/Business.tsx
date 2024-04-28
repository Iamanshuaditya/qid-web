import Image from "next/image";
 
function Business() {
  return (
    <div className="relative -mt-2">
      <div className="h-screen border-b border-gray-800/80">
              <Image
                  fill
          src={'/assets/adha.png'}
          className="h-full w-full object-cover"
          alt="Background"
        ></Image>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col  2xl:px-[750px] xl:px-52 px-12   items-center">
          <div className=" mt-12 text-center text-4xl md:text-7xl 2xl:text-8xl font-medium text-white">
            <span className="italic font-bold">qid</span> for{" "}
            <span className="bg-gradient-to-br from-gray-100/10 to-white bg-clip-text text-transparent">business</span>
          </div>
          <div className="mt-4 text-xl text-center  md:text-4xl font-medium text-white">
          manage all your IDs with one QR
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;