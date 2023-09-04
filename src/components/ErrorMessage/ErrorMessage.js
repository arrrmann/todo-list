import { Component } from "react";
import './error-message.css'


export default class ErrorMessage extends Component{
    state={
        isError:this.props.error,
        isInfo:this.props.info
    }

    // IfError()=>{
    //     se
    // }

    render(){
        const {text}=this.props
        const {isError, isInfo}=this.state
        const styles={
            color: isError ? 'red' : "black"

        }

        return (
            <div className="error-div">
                <span className="error-span">
                    {text}
                </span>
            </div>
        )
    }
    
}