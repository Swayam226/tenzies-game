import { useState } from "react";
import Hero from "./components/Hero";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Hero />
      <Analytics />
    </>
  );
}

export default App;
