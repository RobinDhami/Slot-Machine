import React,{useState} from "react";
import "./App.css";
import SlotM from "./Slot";

const App = () => {
  const [slotValues, setSlotValues] = useState({x: "😄", y: "😄", z: "😄"});

  const Try = () =>{
    // Array of emoji images
    const emojis = ["😄", "🎉", "💰", "🍀", "🎁", "🍒", "🍇"];
  
    // Generate random index for each slot
    const xIndex = Math.floor(Math.random() * emojis.length);
    const yIndex = Math.floor(Math.random() * emojis.length);
    const zIndex = Math.floor(Math.random() * emojis.length);
  
    // Get emoji image for each slot using the random index
    const x = emojis[xIndex];
    const y = emojis[yIndex];
    const z = emojis[zIndex];
    
  console.log(x);
  console.log(y);
  console.log(z);
    // Update state with new slot values
    setSlotValues({x, y, z});
  }
  
 
  return (<>
  <div className="container">
  <h1 className="heading_style"> 🎰  Welcome to {""}<span style={{ background:"gray",
      fontWeight: "bold"
    }}>Slot machine game</span> 🎰 </h1>
  </div>
  
    <div className="slotMachine">
    <SlotM x={slotValues.x} y={slotValues.y} z={slotValues.z} />
       <button onClick={Try}>Click here</button>
    </div>

  </>)
};

export default App;
