import React, { useState } from "react"
import { NavLink } from 'react-router-dom';



const SortingArray = () => {
    
    
    const array = [2, 10, 54, 82, 9343, 23, 1, 34, 50, 941]
  
    const findAndRemoveMin = (array) => {
        let min = array[0]
        let lowIndex = 0
        for (let i = 1; i < array.length; i++){
            if (array[i] < min){
                min = array[i];
                lowIndex = i
            }
        }
        array.splice(lowIndex, 1)
        return min
    }
    
    const sortedArray = (array) =>{
        let newMin
        let newArray = []
            while (array.length > 0){
        console.log(array)
            newMin = findAndRemoveMin(array)
                newArray.push(newMin)
            console.log(newArray)
        }
        console.log(newArray)
        return newArray
    }

    const handleOnClick2 = (array) =>{
        findAndRemoveMin(array)
    }

    return(
        <div>
            <h1>Here's an array</h1>
            {array}
            <br/>
            <button>
                    Click this to add a Random number to the array
            </button>
            <br/>
            <br/>
        
            <button onClick={sortedArray}>
                    Click this to sort the array from lowest to greatest
            </button>
            <br/>
            <NavLink to='/' exact >Home</NavLink>
        </div>
    )
}

export default SortingArray