import Slate from "./Slate";

export default function Hero() {
  return (
    <>
      {/* for mobile and small screens*/}
      <div className="flex lg:hidden w-screen h-screen items-center justify-center bg-blue-900 px-6">
        <p className="text-white text-xl font-semibold text-center">
          Please visit with a desktop for a better viewing experience : /
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center w-screen h-screen bg-blue-950 gap-10">
        <h1 className="text-white text-5xl font-semibold">Tenzies!</h1>
        <Slate />
      </div>
    </>
  );
}
