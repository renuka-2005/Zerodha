import React from 'react';


function States() {
    return ( 
       <div className='container p-3'>
        <div className="row p-5">
            <div className="col-6 p-5">
                <h1 className='fs-2 mb-5'>Trust with Confidence</h1>
                <h2 className='fs-4'>Customer-first always</h2>
                <p className='text-muted'>That`s why 1.3+ core customers trust Zerodha with 3.5+lakh crores worth of equity investments.</p>
                <h2 className='fs-4'>No spam or ginmicks</h2>
                <p className='text-muted'>No ginmicks,spam,"gamification",or annoying push notification. High quality apps that you use at your place, the way you like.</p>
                <h2 className='fs-4'>The Zerodha universe</h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h2 className='fs-4'>Do Better with money</h2>
                <p className='text-muted'>With initiative like Nudge and kill Switch, we don`t just faciliates transactions ,but actively help you do better with your money. </p>
            </div>
            <div className="col-6 p-5">
                <img src='media/images/ecosystem.png' style={{width:"75%"}}/>
               <div className='text-center'>
                <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our product <i class="fa-solid fa-arrow-right"></i></a>
                <a href='' style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>

               </div>
            </div>
        </div>

       </div>
     );
}

export default States;