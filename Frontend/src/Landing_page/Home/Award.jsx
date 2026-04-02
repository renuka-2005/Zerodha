import React from 'react';

function Award() {
    return ( 
       <div className='container mt-5'>
        <div className="row">
           <div className="col-6 p-5">
            <img src='media/images/largestBroker.svg'></img>
           </div>
            <div className="col-6 p-5 mt-5">
               <h1>Largest stock broker in India</h1>
               <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all volume in India daily by trading and investing in:</p>
               <div className="row">
                <div className="col-6">
                    <ul>
                        <li>Future and options</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>
                </div>
                 <div className="col-6">
                    <ul>
                        <li>Stocks and IPOs</li>
                        <li>Direct mutual fund</li>
                        <li>Bond and Growth</li>
                    </ul>
                 </div>
               </div>
               <img style={{width:"90%"}} src="media/images/pressLogos.png"  />
            </div>
        </div>

       </div>
     );
}

export default Award;