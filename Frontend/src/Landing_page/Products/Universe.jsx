import React from "react";

function Universe() {
  return (
    
    <div className="container mt-5 text-center mb-5 ">
      <div className="row text-center ">
        <p className="mb-5 mt-5">Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
        <h4 className="mt-5 p-3">The Zerodha Universe</h4>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4  p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "30%" }}
          ></img>
          <p className="text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4  p-3">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "30%" }}
          ></img>
          <p className="text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4  p-3 ">
          <img src="media/images/dittoLogo.png" style={{ width: "30%" }}></img>
          <p className="text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-4  p-3">
          <img src="media/images/streakLogo.png" style={{ width: "30%" }}></img>
          <p className="text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4  p-3">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "30%" }}
          ></img>
          <p className="text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4  p-3 ">
          <img
            src="media/images/goldenpiLogo.png"
            style={{ width: "30%" }}
          ></img>
          <p className="text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
