import Slate from "./Slate";

export default function Hero() {
  return (
    <div className=" flex flex-col justify-center items-center w-screen h-screen bg-blue-950 gap-10">
      <h1 className="text-white text-5xl font-semibold">Tenzes!</h1>
      <Slate />
    </div>
  );
}
