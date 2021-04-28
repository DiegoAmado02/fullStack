import React from 'react';

const Content = (props) => {

    const Part = (props) => (<p>{props.part} {props.exercises}</p>)

    return (
        <div>
            <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
            <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
            <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
        </div>
    ) 
}

export default Content;