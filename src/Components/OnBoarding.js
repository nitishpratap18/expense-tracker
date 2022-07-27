import man from '../assets/Man.png'
import backGroundImg from '../assets/Group2.png'
import gateStarted from  '../assets/Group27.png'
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

           <a href={'google.com'}> <img src={gateStarted} alt="man" style={{width : "100vw" , height : "67"}}/></a>
            <div style={{display:"flex" , justifyContent : "space-evenly"}}>
                <p>Already have a account?</p>
                <a href={"google.com"}><p>login</p></a>
            </div>


        </>
    );
}

export default OnBoarding;
