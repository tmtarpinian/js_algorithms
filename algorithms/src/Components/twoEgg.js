import React, { Component } from "react"

class TwoEgg extends Component{
    state = {
        floor: ''
    }

    handleOnType = (event)=>{
        let newFloor = event.target.value
        this.setState({
            floor: newFloor
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        let building = [] //this will assign 100 numbers into 
        for (let i = 1; i <= 100; i++){
            building.push(i)
        }
  
        return(
            <div>
                
                <form>
                <label>
                    Pick a number (1-100), see how many tries it takes the computer to guess:
                    <br/>
                    <input type="number" name="floor" onChange={this.handleOnType}/>
                </label>
                    <input type="submit" value="Submit" />
                </form>


                {building.length/2}
                <br/>
                {this.state.floor}
                
            </div>
        )
    }
}

export default TwoEgg