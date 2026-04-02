import React from 'react';

function Hero() {
    return ( 
       <div className="container">
        <div className="row text-center p-5 mt-5 border-bottom ">
            <h1 className='p-3'>Pricing</h1>
            <p className='mb-5 text-muted'>Free equality investments and flat  ₹ 20  trandy and F&O trandes.</p>
        </div>
        <div className="row mt-5 text-center p-5">
            <div className="col-4">
                <img src='media/images/pricing0.svg' style={{width:'60%'}}></img>
               <h3 className='mb-4 mt-5'>Free equity delivery</h3>
               <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4">
                <img src='media/images/intradayTrades.svg' style={{width:'60%'}}></img>
                 <h3 className='mb-4 mt-5'>Intraday and F&O trades</h3>
               <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-4">
                <img src='media/images/pricingMF.svg' style={{width:'60%'}}></img>
                <h3 className='mb-4 mt-5'>Free direct MF</h3>
               <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                
            </div>
        </div>
       </div>
     );
}

export default Hero;