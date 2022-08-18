let Trans = [
    {
        name: "recharge 7071",
        type: "expense",
        from : "null",
        time : "8:00 AM",
        date : "15/08/2022",
        amount : 500,
        fontColor: "red"
    },
    {
        name: "recharge 7071",
        type: "expense",
        from : "null",
        time : "8:00 AM",
        date : "15/08/2022",
        amount : 200,
        fontColor: "green"
    },
    {
        name: "recharge 7071",
        type: "expense",
        from : "null",
        time : "8:00 AM",
        date : "15/08/2022",
        amount : 1300,
        fontColor: "green"
    },
    {
        name: "recharge 7071",
        type: "expense",
        from : "null",
        time : "8:00 AM",
        date : "15/08/2022",
        amount : 3100,
        fontColor: "red"
    },
    {
        name: "recharge 7071",
        type: "expense",
        from : "null",
        time : "8:00 AM",
        date : "15/08/2022",
        amount : 30,
        fontColor: "red"
    },
    {
        name: "recharge 7071",
        type: "expense",
        from : "null",
        time : "8:00 AM",
        date : "15/08/2022",
        amount : 3,
        fontColor: "red"
    },
    {
        name: "recharge 7071",
        type: "expense",
        from : "null",
        time : "8:00 AM",
        date : "15/08/2022",
        amount : 33,
        fontColor: "red"
    },

]
function TransactionList(){
    const nameAndAmount = Trans.map((tra)=>{
        return(
            <div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <h4>{tra.name}</h4>
                    <h4 style={{color:tra.fontColor}}>{tra.amount}</h4>
                </div>
                <p style={{textAlign:'left',marginTop:'-1rem', fontSize:'smaller'}}>{tra.date}</p>
            </div>
        )
    })
    return (
        <>
            {nameAndAmount}
        </>
    )
}
export default TransactionList