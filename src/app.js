import React from "react";
import Suggester from "./components/Suggester/Suggester";

export default function App() {
  return (
    <>
      <h1 className="sr-only">Auto suggester</h1>
      <div className="bg-dark">content before suggester...</div>
      <Suggester></Suggester>
      <div className="bg-dark">content after suggester...</div>
    </>
  );
}
