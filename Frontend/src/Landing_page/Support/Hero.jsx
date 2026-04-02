import React from 'react';

function Hero() {
    return ( 
        
       <div className="container-fluid  " id='supportHero' >
        <div className="container mt-5 mb-5">
        <div className="row mb-5">
            <div className="col-1"></div>
          <div className="col-5">
            <p>Support Portal</p>
          </div>
           <div className="col-1"></div>
          <div className="col-5" id='tickets'>
            <a href=''>Track Tickets</a>
          </div>
        </div>
        <div className="row ">
            <div className="col-1"></div>
            <div className="col-5 ">
                <h5 className='mb-3'>Search for an answer or browser help topics
                    <br></br>to create a ticket
                </h5>
                <input  placeholder='Eg. how do i activities F&O, why is my order getting rejected...' className='mb-3 mt-3' style={{width:"90%",height:"30%"}}></input>
                <br></br>
                <a href='' className='mb-3'>Track account opening</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href='' className='mb-3'>Track segment activation</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href='' className='mb-3'>Intraday</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <br></br>
                <a href='' className='mb-3'>margins</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href='' className='mb-3'>Kite user manual</a>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
                <h5>Featured</h5>
                1. <a href='' className='mb-3'>Current Takeovers and Delisting- January 2024</a>
                <br></br>
                <br></br>
                2. <a href='' className='mb-3'>Lastest Intraday leverages- MIS & CO</a>
            </div>
        </div>
       </div>
       </div>
     );
}

export default Hero;