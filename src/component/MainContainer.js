import React, { useState }  from "react";
import "./MainContainer.css";
import foto from "../foto";
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";

function MainContainer () {
    const [ index, setIndex ] = useState(0);
    const {name, src, description} = foto[index];

    const RandomNumber = () => {
       const newValue = Math.floor( Math.random() * foto.length  );
       setIndex( newValue );
    };

    const IndexIf = (number) =>{
        if( number  >= foto.length - 1) {
            setIndex(0)
        }
        if( number < 0 ) {
           return foto.length - 1
        }
        return number
        
    };


    const handleRight = () => {
        setIndex((index) => {
            const newValue = index + 1;
           return  IndexIf(newValue);
        });
    };

    const handleLeft = () => {
        setIndex((index) => {
            const newValue = index - 1;
            return IndexIf(newValue)
        });
    };

    return (
        <article className="container">
            <img src={src} alt={name} />
            <h3 className="title">{name}</h3>
            <p className="description">{description}</p>
            <div className="button-container">
                <button className="left-a" onClick={handleLeft}>
                    <BsFillArrowLeftSquareFill />
                </button>
                <button className="random-button" onClick={RandomNumber}>
                    Random foto
                </button>
                <button className="right-a" onClick={handleRight}>
                    <BsFillArrowRightSquareFill />
                </button>
            </div>
        </article>
    
    )
};

export default MainContainer;