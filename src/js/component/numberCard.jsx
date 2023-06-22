import React from "react";

function NumberCard(props){
    return(
        <div className="col bg-dark">
            <h1 className="text-light text-center">{props.number}</h1>
        </div>
    );
}

export default NumberCard;
