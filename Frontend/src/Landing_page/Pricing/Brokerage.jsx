import React from 'react';

function Brokerange() {
    return ( 
        <div className="container border-top mb-5">
            <div className="row mt-2">
                <div className="col-8 p-4 text-center">
                    <div className='mb-3 '>
                    <a href="" style={{textDecoration:"none",lineHeight: "2.5",paddingRight:"50%"}}>Brokrage calculator</a>
                    </div>
                <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-mut"
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
                </div>
                <div className="col-4 p-4">
                     <a href="" style={{ textDecoration: "none" }}>
            <a style={{textDecoration:"none"}}>List of charges</a>
          </a>
                </div>
            </div>
        </div>
     );
}

export default Brokerange;