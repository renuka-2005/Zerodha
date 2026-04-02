import React from 'react';


function Education() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img style={{width:"70%"}} src='media/images/education.svg'></img>
                </div>
                 <div className="col-6">
                    <h1 className='fs-2 mb-5'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>Varsity</a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>TrandingQ&A</a>
                 </div>
            </div>
        </div>
     );
}

export default Education;