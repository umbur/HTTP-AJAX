import React from 'react';

const Friend = props => {
    // console.log(props)
    return (
        <div className="App">
                <div className='listBox'>
                    <h4>{props.name}</h4>
                    <h4>Age: {props.age}</h4>
                    <h4>Email: {props.email}</h4>
                </div>
        </div>
    )

}

export default Friend 