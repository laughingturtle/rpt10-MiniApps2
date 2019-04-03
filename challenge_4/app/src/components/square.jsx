// this is a functional component, as opposed to a class component
import React from 'react'

// you can pass props here
var Square = (props) => (
    <div className='square' id={'_' + props.id}></div>
)

export default Square;