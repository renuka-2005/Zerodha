import React from "react";

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore
}){
   
  return (
   <div className="container mt-5 ">
      <div className="row">
       
        <div className="col-6 mt-5 pt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{textDecoration:"none"}}>{learnMore}</a>
          </div>
         
        </div>
         <div className="col-6  ">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
