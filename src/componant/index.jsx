import React, { useState } from "react";

import "../componant/index.css";

function Calculater(){

    // let sting = "";
    let colorButtons = document.querySelectorAll("button");

    // colorButtons.forEach((button) => {
    //     button.addEventListener("mouseover", (event) => {
    //         event.target.style.backgroundColor = "green";
    //         event.target.style.transition = 0.2;
    //     });
    // });
    // colorButtons.forEach((button) => {
    //     button.addEventListener("mouseout", (event) => {
    //         event.target.style.backgroundColor = "white";
    //     });
    // });
    


    const [number,setNumber] = useState(0)

    const [newstring, setNewstring] = useState("");

    function numberclick(event){

        let num= event.target.textContent;

        setNumber(newstring)

        setNewstring((newvalue)=>{

       const updatestring = newvalue + num

       setNumber(updatestring);

       return updatestring;

        }

        )

    }

    function ans(){


        setNumber(eval(number));

    }


    function clear(){

        setNumber(0);
        setNewstring("")

    }

    function back(){

        setNewstring((newval)=>{
            const updateString = newval.slice(0,-1);
            setNumber(updateString || 0);
            return updateString;
        })
    }

    
    let d=document.getElementById("Main-class")


    function change_light(){

     
            d.style.backgroundColor = "white";

    }


    return(

        <div className="Main-class">


            <div className="main-change">

            <input id="text" value={number}/>



            </div>

            <div className="buttons-page">

                <button onClick={numberclick}>1</button>
                <button onClick={numberclick}>2</button>
                <button onClick={numberclick}>3</button>
                <button onClick={numberclick}>4</button>
                <button onClick={numberclick}>5</button>
                <button onClick={numberclick}>6</button>
                <button onClick={numberclick}>7</button>
                <button onClick={numberclick}>8</button>
                <button onClick={numberclick}>9</button>
                <button onClick={numberclick}>+</button>
                <button onClick={numberclick}>-</button>
                <button onClick={numberclick}>*</button>
                <button onClick={numberclick}>/</button>
                <button  onClick={ans} id="ans">=</button>
                <button onClick={clear}>clear</button>
                <button onClick={back}>back</button>
            </div>


            <button id="light" onClick={change_light}>LigthMode</button>



        </div>
       



    )



}

export  default Calculater;