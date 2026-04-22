import React, { useRef, useState } from "react";

const App = () => {
  console.log("app rendering....");
  let inpRef = useRef({});

  return (
    <div>
      <h2>Hello</h2>

      <input
        ref={(e) => (inpRef.current.name = e)}
        type="text"
        placeholder="Enter value"
      />

      <audio ref={audioRef} src="hof.mp3"></audio>
      <button onClick={() => audioRef.current.play()}>Play</button>
      <button onClick={() => audioRef.current.pause()}>Stop</button>
      <button onClick={() => (audioRef.current.currentTime = 0)}>Reset</button>

      <div>
        <input
          ref={(e) => (inpRef.current.name = e)}
          type="text"
          placeholder="Enter Name"
        />

        <input
          ref={(e) => (inpRef.current.email = e)}
          type="text"
          placeholder="Enter Email"
        />
        <button
          onClick={() => {
            console.log(inpRef.current.name.value);
            console.log(inpRef.current.email.value);
          }}
        >
          Get value
        </button>
      </div>
    </div>
  );
};

export default App;
