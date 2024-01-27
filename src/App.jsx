import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("green");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg bg-white gap-3 px-3 py-2 rounded-full">
          <button
            onClick={() => setColor("red")}
            className="px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("pink")}
            className="px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("aqua")}
            className="px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "aqua" }}
          >
            Aqua
          </button>
          <button
            onClick={() => setColor("white")}
            className="px-4 py-1 rounded-full text-black shadow-sm"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("black")}
            className="px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
