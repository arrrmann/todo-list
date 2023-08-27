const User=({name, age, status})=>{
    if(status){
        var style={
            color:"green"
        }
    }else{
        var style={
            color:"red"
        }
    }
    
    return(
        <ul style={style}>
            <li>{name}</li>
            <li>{age}</li>
        </ul>
    )
}

export default User