import React from "react";

function Team() {
  return (
    <div className="container ">
            <div className="row p-3 border-top">
            <h2 className='fs-2 text-center'>
                People</h2>
        </div>
         <div className="row p-5  text-muted fs-6" style={{lineHeight:"1.8" ,fontSize:"1.2em"}} >
            <div className="col-6 p-3 text-center">
                <img style={{borderRadius:"100%" ,width:"50%"}} src="media/images/nithinKamath.jpg"/>
                <h4 className="mt-5">Nithin Kamath</h4>
                <h6>Founder, CEO</h6>
            </div>
            <div className="col-6 p-3 text-muted">
             <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>

<p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
            </div>
        </div>
        </div>
  );
}

export default Team;
