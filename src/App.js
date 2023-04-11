import "./App.css";
import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Sophie.jsx";
import Dude from "./Dude.jsx";
import DudeDance from "./DudeDance";

function DudeStatic() {
  return (
    <div>
      <h1>DUDE</h1>
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          background: "linear-gradient(#e66465, #9198e5)",
          width: "45vw",
          height: "80vh",
          borderRadius: "1rem",
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Dude position={[0.025, -0.9, 0]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

function DudeSilly() {
  return (
    <div>
      <h1>DUDE DANCING</h1>
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          // backgroundColor: "#111a21",
          background: "linear-gradient(#e66465, #9198e5)",
          width: "45vw",
          height: "80vh",
          borderRadius: "1rem",
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <DudeDance position={[0.025, -0.9, 0]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

function App() {
  const [moves, setMoves] = useState(false);
  return (
    <div className="wrapper">
      <h1>GENERIC REACT APP</h1>
      <div className="whitespace"></div>
      {!moves ? <DudeStatic /> : <DudeSilly />}
      <button className="danceButton" onClick={() => setMoves(!moves)}>
        TOGGLE DANCING
      </button>
      {/* <DudeStatic />
      <DudeSilly /> */}
    </div>
  );
}

export default App;
