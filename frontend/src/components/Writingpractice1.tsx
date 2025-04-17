// working code for just writing practice
// "use client";

// import { useState, useRef } from "react";

// interface WritingPracticeProps {
//   onBack: () => void;
// }

// const WritingPractice: React.FC<WritingPracticeProps> = ({ onBack }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [drawing, setDrawing] = useState(false);
//   const [isErasing, setIsErasing] = useState(false); // Erasing mode toggle

//   const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     ctx.lineWidth = isErasing ? 20 : 3; // Eraser is thicker
//     ctx.strokeStyle = isErasing ? "#ffffff" : "#000000"; // White for erasing, black for writing
//     ctx.lineCap = "round";

//     ctx.beginPath();
//     ctx.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
//     setDrawing(true);
//   };

//   const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
//     if (!drawing) return;
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     ctx.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
//     ctx.stroke();
//   };

//   const stopDrawing = () => {
//     setDrawing(false);
//   };

//   const clearCanvas = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <canvas
//         ref={canvasRef}
//         width={400}
//         height={400}
//         className="border-2 border-gray-400 bg-white"
//         onMouseDown={startDrawing}
//         onMouseMove={draw}
//         onMouseUp={stopDrawing}
//         onMouseLeave={stopDrawing}
//       />
//       <div className="mt-4 flex space-x-4">
//         <button
//           className={`px-4 py-2 rounded ${
//             isErasing ? "bg-red-500 text-white" : "bg-gray-300"
//           }`}
//           onClick={() => setIsErasing(!isErasing)}
//         >
//           {isErasing ? "Stop Erasing" : "Erase"}
//         </button>
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={clearCanvas}
//         >
//           Reset
//         </button>
//         <button
//           className="px-4 py-2 bg-green-500 text-white rounded"
//           onClick={onBack}
//         >
//           Back to Tracing
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WritingPractice;



// "use client";

// import { useState, useRef } from "react";

// interface WritingPracticeProps {
//   onBack: () => void;
//   onNextLetter: () => void;
// }

// const WritingPractice: React.FC<WritingPracticeProps> = ({ onBack, onNextLetter }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [drawing, setDrawing] = useState(false);
//   const [isErasing, setIsErasing] = useState(false);
//   const [accuracy, setAccuracy] = useState<number | null>(null);
//   const [submitted, setSubmitted] = useState(false);

//   const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     ctx.lineWidth = isErasing ? 20 : 3;
//     ctx.strokeStyle = isErasing ? "#ffffff" : "#000000";
//     ctx.lineCap = "round";

//     ctx.beginPath();
//     ctx.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
//     setDrawing(true);
//   };

//   const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
//     if (!drawing) return;
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     ctx.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
//     ctx.stroke();
//   };

//   const stopDrawing = () => {
//     setDrawing(false);
//   };

//   const clearCanvas = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     setAccuracy(null);
//     setSubmitted(false);
//   };

//   const submitDrawing = () => {
//     const randomAccuracy = Math.floor(Math.random() * 101);
//     setAccuracy(randomAccuracy);
//     setSubmitted(true);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <canvas
//         ref={canvasRef}
//         width={400}
//         height={400}
//         className="border-2 border-gray-400 bg-white"
//         onMouseDown={startDrawing}
//         onMouseMove={draw}
//         onMouseUp={stopDrawing}
//         onMouseLeave={stopDrawing}
//       />
//       <div className="mt-4 flex space-x-4">
//         <button
//           className={`px-4 py-2 rounded ${isErasing ? "bg-red-500 text-white" : "bg-gray-300"}`}
//           onClick={() => setIsErasing(!isErasing)}
//         >
//           {isErasing ? "Stop Erasing" : "Erase"}
//         </button>
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={clearCanvas}
//         >
//           Reset
//         </button>
//         <button
//           className="px-4 py-2 bg-green-500 text-white rounded"
//           onClick={onBack}
//         >
//           Back to Tracing
//         </button>
//       </div>
//       {!submitted ? (
//         <button
//           className="mt-4 px-4 py-2 bg-purple-500 text-white rounded"
//           onClick={submitDrawing}
//         >
//           Submit
//         </button>
//       ) : (
//         <div className="mt-4 text-center">
//           <p className="text-xl font-bold">Accuracy: {accuracy}%</p>
//           <button
//             className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded"
//             onClick={onNextLetter}
//           >
//             Continue to Next Letter
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WritingPractice;



"use client";

import { useState, useRef, useEffect } from "react";

interface WritingPracticeProps {
  onBack: () => void;
  onNextLetter: () => void;
  userId: string | null;           // 👈 Add this
  currentLetter: string;           // 👈 Add this
}

const WritingPractice: React.FC<WritingPracticeProps> = ({ onBack, onNextLetter,userId,currentLetter }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [penColor, setPenColor] = useState("#000000");
 // const [isErasing, setIsErasing] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // Sidebar toggle
  


  const fillCanvasWhite = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    fillCanvasWhite();
  }, []);

  const startDrawing = (x: number, y: number) => {
    if (submitted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.lineWidth = isErasing ? 20 : 3;
    // ctx.strokeStyle = isErasing ? "#ffffff" : "#000000";
    // ctx.lineWidth = isErasing ? eraserSize : penSize;
    ctx.strokeStyle = isErasing ? "#ffffff" : penColor;

    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(x, y);
    setDrawing(true);
  };

  const draw = (x: number, y: number) => {
    if (!drawing || submitted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    startDrawing(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    draw(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    startDrawing(touch.clientX - rect.left, touch.clientY - rect.top);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    draw(touch.clientX - rect.left, touch.clientY - rect.top);
  };

  const clearCanvas = () => {
    if (submitted) return;
    fillCanvasWhite();
    setAccuracy(null);
    setSubmitted(false);
  };

  // const submitDrawing = () => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;
  //   const ctx = canvas.getContext("2d");
  //   if (!ctx) return;

  //   const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //   const pixels = imageData.data;

  //   let drawnPixels = 0;
  //   for (let i = 0; i < pixels.length; i += 4) {
  //     if (pixels[i] < 100 || pixels[i + 1] < 100 || pixels[i + 2] < 100) {
  //       drawnPixels++;
  //     }
  //   }

  //   let accuracy;
  //   if (drawnPixels < 100) {
  //     accuracy = 0;
  //   } else if (drawnPixels < 1500) {
  //     accuracy = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
  //   } else if (drawnPixels > 5000) {
  //     accuracy = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
  //   } else {
  //     accuracy = Math.floor(Math.random() * (90 - 75 + 1)) + 75;
  //   }

  //   setAccuracy(accuracy);
  //   setSubmitted(true);
  // };

  const submitDrawing = async () => {
    setShowMenu(prev => false)
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
  
    let drawnPixels = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i] < 100 || pixels[i + 1] < 100 || pixels[i + 2] < 100) {
        drawnPixels++;
      }
    }
  
    let accuracy;
    if (drawnPixels < 100) {
      accuracy = 0;
    } else if (drawnPixels < 1500) {
      accuracy = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
    } else if (drawnPixels > 5000) {
      accuracy = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
    } else {
      accuracy = Math.floor(Math.random() * (90 - 75 + 1)) + 75;
    }
  
    setAccuracy(accuracy);
    setSubmitted(true);
   console.log(userId);
   console.log(currentLetter);
    // ✅ Use props here
    if (userId && currentLetter) {
      try {
        await fetch("http://127.0.0.1:3000/submit-accuracy/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: userId,
            letter: currentLetter,
            accuracy: accuracy,
          }),
        });
        console.log("Accuracy submitted");
      } catch (err) {
        console.error("Failed to submit accuracy", err);
      }
    } else {
      console.warn("Missing userId or currentLetter, not submitting accuracy");
    }
  };
  

  const getStarCount = (accuracy: number) => {
    if (accuracy >= 100) return 3;
    if (accuracy >= 65) return 2;
    if (accuracy >= 35) return 1;
    return 0;
  };


  return (

<div className="flex flex-col items-center">


  <div className="relative w-full flex justify-center items-center" id="canvas-wrapper">
  <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="border-2 border-gray-400 bg-white"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={stopDrawing}
      />
        {/* Toggle Button */}
  <button
  onClick={() => setShowMenu(prev => !prev)}
  className="absolute top-4 left-4 z-50 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
>
  🧰
</button>
<div
  className={`absolute top-0 left-[-150px] w-36 bg-white shadow-lg rounded-xl p-3 z-50 transition-all duration-300 ${
    showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`}
>
  <p className="text-center font-bold mb-3">🧰 Tools</p>

  <div className="mb-4">
    <p className="text-sm font-semibold">Pen Colors</p>
    <div className="flex gap-2 mt-2 flex-wrap">
      {["#000000", "#ff0000", "#008000", "#0000ff", "#ffa500"].map((color) => (
        <button
          key={color}
          className="w-6 h-6 rounded-full border-2 border-white shadow-md hover:scale-110 transition"
          style={{ backgroundColor: color }}
          onClick={() => {
            setPenColor(color);
            setIsErasing(false);
          }}
        />
      ))}
    </div>
  </div>

  <div className="mt-2">
    <p className="text-sm font-semibold">Tool</p>
    <button
    className="w-full py-1 mt-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
    onClick={() => {
      setIsErasing(false);
    }}
  >
    ✏️ Pen
  </button>

  {/* Eraser Button */}
  <button
    className="w-full py-1 mt-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
    onClick={() => {
      setIsErasing(true);
    }}
  >
    🧽 Eraser
  </button>
      <button
       className="mt-2 w-full py-1 bg-purple-500 hover:bg-purple-600 text-white rounded-md shadow hover:scale-105 transition-transform font-semibold"
   // className="mt-3 w-full py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md shadow hover:scale-105 transition-transform font-semibold"
    onClick={fillCanvasWhite}
  >
    ♻️ Reset
  </button>
  </div>
</div>
</div>


{submitted && accuracy !== null && (
        <div className="mt-4 w-64">
          <div className="relative w-full h-4 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500"
              style={{ width: `${accuracy}%` }}
            ></div>
          </div>
          <p className="text-center mt-2">Accuracy: {accuracy}%</p>
          <div className="flex justify-center mt-2 space-x-1 text-yellow-500">
            {[...Array(3)].map((_, index) => (
              <span key={index} className={`text-2xl ${index < getStarCount(accuracy) ? '' : 'opacity-30'}`}>
                ★
              </span>
            ))}
          </div>
        </div>
      )}
      
            {!submitted && (
        <>
          <div className="mt-4 flex space-x-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={onBack}>
            ⬅️ Back
            </button>
          </div>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded" onClick={submitDrawing}>
          ✅ Submit
          </button>
        </>
      )}

      {submitted && accuracy !== null && (
        <>
          {accuracy < 60 ? (
            <button
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded"
              onClick={() => {
                fillCanvasWhite();
                setAccuracy(null);
                setSubmitted(false);
              }}
            >
              🔁 Practice Again
            </button>
          ) : (
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded" onClick={onNextLetter}>
              ➡️ Next letter
            </button>
          )}
        </>
      )}

    </div>
  );
};

export default WritingPractice;