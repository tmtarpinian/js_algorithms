import React, { useState } from "react"
import { NavLink } from 'react-router-dom';

const SortingArray = () => {

    const [array, setArray] = useState([2, 10, 54, 82, 9343, 23, 1, 34, 50, 941])

    const handleOnClick = () =>{
        setArray([...array, Math.floor(Math.random() * 125)])
    }

    const handleOnClick2 = () =>{
        let sortedArray =[]
        let lowNumber = parseInt(array[0])
        let lowIndex = 0
        while (array.length > 0){
            for (let i = 1; i<array.length; i++){
                if (array[i] < lowNumber){
                    lowNumber = array[i]
                    lowIndex = i
                }
            sortedArray.push(lowNumber)
            array.splice(lowIndex+1).concat(array.slice(lowIndex, 1))
            console.log(array)
            }
            console.log(sortedArray)
            
        }
       //take first number, set as lowest
       //take first index, set as lowIndex
       //iterate and compare each number
            //if find lower number, keep iterating
            //when done, push number to sorted array
            //splice out low number from old array
            //start iteration again
       
        let
       
        array
    }

    return(
        <div>
            <h1>Here's an array</h1>
            {array}
            <br/>
            <button onClick={handleOnClick}>
                    Click this to add a Random number to the array
            </button>
            <br/>
            <br/>
        
            <button onClick={handleOnClick2}>
                    Click this to sort the array from lowest to greatest
            </button>
            <br/>
            <NavLink to='/' exact >Home</NavLink>
        </div>
    )
}

export default SortingArray