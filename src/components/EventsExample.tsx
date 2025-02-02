import React, { ChangeEvent, DragEvent, FC, MouseEvent, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
    
    
    // console.log(value)
    // setValue("Нажал на баттон");
  };

  const dragHandler = (event: DragEvent<HTMLDivElement>) => {
    console.log('startDrag');
    
  }

  const dragWithPreventHandler = (event: DragEvent<HTMLDivElement>) => {
   event.preventDefault() 
   setIsDrag(true)
  }

  const leaveHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault() 
    setIsDrag(false)
   }
 
   const dropHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault() 
    setIsDrag(false)
    console.log('Drop');
   }
 

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" placeholder="upravliaemiy" />
      <input ref={inputRef} type="text" placeholder="Neupravlaemiy" />
      <button onClick={clickHandler}>button</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: "none", border: "1px solid black" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{ width: 200, height: 200, background: isDrag ? "blue" : "green" , marginTop: 15 }}
      ></div>
    </div>
  );
};

export default EventsExample;
