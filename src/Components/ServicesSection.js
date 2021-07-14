import React from 'react';
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () =>{
    return(
        <div>
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icons">
                            <img src={clock}  alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, necessitatibus?</p>
                    </div>
                    <div className="card">
                        <div className="icons">
                            <img src={teamwork}  alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, necessitatibus?</p>
                    </div>
                    <div className="card">
                        <div className="icons">
                            <img src={diaphragm}  alt="diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, necessitatibus?</p>
                    </div>
                    <div className="card">
                        <div className="icons">
                            <img src={money}  alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, necessitatibus?</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="camera" />
            </div>
        </div>
    )
}

export default ServicesSection;