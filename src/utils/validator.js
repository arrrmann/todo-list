// const createError=(errMessage)=>{
//     return{
//         message: errMessage || 'Error...',
//         statusCode:401
//     }
// }

const validateInput=(text)=>{
    if(text.trim().length > 2){
        return true
    }else{
        return false
    }
}

export{
    validateInput
}