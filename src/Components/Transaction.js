import NotificationsIcon from '@material-ui/icons/Notifications'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import TransactionList from "./TransactionList";
import AddIcon from "@material-ui/icons/Add"
function Transaction() {
    var tempObject ={
        nameOfUser :'Nitish Pratap Yadav',
        totalAmount :  2548.00,
        income : 1840.00,
        Expenses :284.00,
    }
    return(
        <>
            <div className="rectangle-9" style={{position: "absolute", width: '100vw',height:'15rem',left:'0px',top:'0px' ,backgroundColor:'rgba(66, 150, 144, 1)',borderBottomRightRadius: '20%',borderBottomLeftRadius: '20%',color:'rgba(255, 255, 255, 1)'}}>
                <p style={{marginTop:'5rem', marginRight:'70vw',}}>Good Morning,</p>
                <div style={{display :'flex',marginTop:'-2rem',}}>
                    <h2 style={{paddingLeft:'1rem'}}>{tempObject.nameOfUser}</h2>
                    <NotificationsIcon style={{paddingLeft:'10rem', fontWeight: '600',}}></NotificationsIcon>
                </div>
            </div>
            <div style={{position:'absolute' , backgroundColor:'#2F7E79', border:'1px solid black',width:'90vw',height:'201px',marginTop:'155px',marginLeft:'1.7rem',borderRadius:'1.5rem', color:'white'}}>
                <div style={{display:'flex' , justifyContent:'space-around'}}>
                    <h3 style={{marginRight:'7rem'}}>Total Balance ^</h3>
                    <h1 style={{marginTop :'-.1rem'}}>...</h1>
                </div>
                <h1 style={{textAlign:'left' , paddingLeft:'2rem' , marginTop:'-1rem'}}>₹{tempObject.totalAmount}</h1>
                <div style={{display:'flex'}}>
                    <div style={{display:'flex', marginLeft:'1rem'}}>
                    <ArrowDownwardIcon style={{marginTop:'1.2rem'}}></ArrowDownwardIcon>
                    <h3>Income</h3>

                    </div>
                    <div style={{display:'flex', marginLeft:'10rem'}}>
                        <ArrowUpwardIcon style={{marginTop:'1.2rem'}}></ArrowUpwardIcon>
                        <h3>Expenses</h3>

                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'space-around',marginTop:'-2rem'}}>
                    <h2 style={{marginRight:'8rem'}}>{tempObject.income}</h2>
                    <h2 >₹{tempObject.Expenses}</h2>
                </div>
                <div style={{color:"black"}}>
                    <h2>Transaction History</h2>
                    <TransactionList></TransactionList>
                </div>
                <div style={{color :'white' ,fontSize:"1rem" , backgroundColor:'green', borderRadius:'50%', width:'20vw',height:'20vw',marginLeft:'35%'}}>
                    <AddIcon style={{textAlign:'center',marginTop:'1.7rem'}}  c></AddIcon>
                </div>
            </div>

        </>
    )
}
export  default Transaction