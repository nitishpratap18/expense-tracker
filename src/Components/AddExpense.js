import React from "react";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
const AddExpense  = ()=>{
    return (
        <>
            <div>
                <div style={{backgroundColor: "rgba(66, 150, 144, 1)", height:'33.33vh',width:'100vw', borderEndEndRadius:'10%', borderBottomLeftRadius:'10%'}}>
                        <div style={{display:'flex', justifyContent:'space-evenly' , color:'white' , alignItems:'center',paddingTop:'6vh',}}>
                                <ChevronLeftIcon ></ChevronLeftIcon>
                                <h2>Add Expense</h2>
                                <h1 style={{marginBottom:'2rem'}}>...</h1>
                        </div>
                        <div style={{width:"80vw", height:"33.3vh",backgroundColor:'rgba(0, 0, 0, 0.08)'}}>

                        </div>
                </div>
            </div>
        </>
    )
}
export default AddExpense