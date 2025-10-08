function Banner() {
  return (
    <>
      <div className="absolute top-0 left-0 z-[-1] h-44 w-full overflow-hidden block">
        <div className="w-full h-1/2 flex">
          <div className="bg-[#EFCEFF] w-[20%] h-full" />
          <div className="bg-[#E6E9FF] w-[20%] h-full" />
          <div className="bg-[#EFCEFF] w-[20%] h-full" />
          <div className="bg-[#E6E9FF] w-[20%] h-full" />
          <div className="bg-[#EFCEFF] w-[20%] h-full" />
        </div>
        <div className="w-full h-1/2 flex">
          <div className="bg-[#E6E9FF] w-[20%] h-full" />
          <div className="bg-[#EFCEFF] w-[20%] h-full" />
          <div className="bg-[#E6E9FF] w-[20%] h-full" />
          <div className="bg-[#EFCEFF] w-[20%] h-full" />
          <div className="bg-[#E6E9FF] w-[20%] h-full" />
        </div>
      </div>
    </>
  );
}

export default Banner;
