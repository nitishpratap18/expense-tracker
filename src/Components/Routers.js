import React from 'react'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import OnBoarding from "./OnBoarding";
import Transaction from "./Transaction";
import SignUp from "./SignUp";
import LoginPage from "./LoginPage";
import AddExpense from "./AddExpense";
const Routers = ()=>{
    return(
        <>
            <Router>
                <Link to='/getStarted'style={{textDecoration:'none'}} ></Link>
                <Link to='/'style={{textDecoration:'none'}} ></Link>
                <Link to='/signin'style={{textDecoration:'none'}} ></Link>
                <Link to='/signup' style={{textDecoration:'none'}} ></Link>
                <Link to='/add' style={{textDecoration:'none'}} ></Link>
                <Routes>

                    <Route exact path="/getStarted" element={<Transaction/>}/>
                    <Route exact path="/" element={<OnBoarding/>}/>
                    <Route exact path="/signin" element={<LoginPage/>}/>
                    <Route exact path="/signup" element={<SignUp/>}/>
                    <Route exact path="/signup" element={<SignUp/>}/>
                    <Route exact path="/add" element={<AddExpense/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default Routers