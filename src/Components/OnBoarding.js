import man from '../assets/Man.png'
import backGroundImg from '../assets/Group2.png'
import gateStarted from  '../assets/Group27.png'
import transaction from "./Transaction";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import Transaction from "./Transaction";
function OnBoarding() {
    return (
        < >

            <div className="background" style={{backgroundImage : "url(../assets/Group2.png)"}}>
                < img src={man} alt="man"/>
                <div style={{color : 'rgba(105, 174, 169, 1)'}}>
                <h1>Spend Smarter</h1>
                <h1>Save More</h1>
                </div>
            </div>




           <a href={'/getStarted'}> <img src={gateStarted} alt="man" style={{width : "100vw" , height : "67"}}/></a>
            <div style={{display:"flex" , justifyContent : "space-evenly", color : 'rgba(105, 174, 169, 1)', marginTop: '-3rem' }}>
                <p>Already have a account?</p>

                <a href={"g"} style={{textDecoration:'none' }}>
                    <p style={{color : 'rgba(105, 174, 169, 1)' , textDecoration : 'none' , }}>login</p></a>

            </div>



        </>
    );
}

export default OnBoarding;
