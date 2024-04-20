import { Component } from "react";

class Click extends Component{
    render(){
        return(
            <>
            <button>Click me</button>
            <input  type="text" placeholder="enter email" required />
            <input  type="text" placeholder="password" required />
            </>
        )
    }
}
export default Click