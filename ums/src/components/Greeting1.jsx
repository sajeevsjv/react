import {React, Component} from 'react'

function Greeting1(props){
    return(
        <>
        <h1>this ia a functional component</h1>
        <h2>Greeting1</h2>
        <p>hi {props.name}, your age is {props.age}</p>
        </>
    )
}

export default Greeting1;