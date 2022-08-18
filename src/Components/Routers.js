import React from 'react'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import OnBoarding from "./OnBoarding";
import Transaction from "./Transaction";
const Routers = ()=>{
    return(
        <>
            <Router>
                <Link to='/getStarted'style={{textDecoration:'none'}} ></Link>
                <Link to='/'style={{textDecoration:'none'}} ></Link>
                <Routes>

                    <Route exact path="/getStarted" element={<Transaction/>}/>
                    <Route exact path="/" element={<OnBoarding/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default Routers