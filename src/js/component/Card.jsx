import React from "react";


const Card = () => {

    return (

        <div className="card container-fluid p-1" style={{ width: "17rem" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9L9R3BG4eZbDo8u2DLQ9rSUAjTryMhk_fA&usqp=CAU" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    );
};

export default Card;