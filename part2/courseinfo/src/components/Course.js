import React from 'react'

const Header = (props) => (<h1>{props.course}</h1>)

const Part = (props) => (<p>{props.name} {props.exercises}</p>)

const Content = ({ parts }) => {
  return (
    <div>
        {
          parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises}/>)
        }
    </div>
  ) 
}

const Total = ({parts}) => (<p>Number of exercises {parts.reduce((acc, part) => acc + part.exercises, 0)}</p>)

const Course = (props) => {
  const { course } = props
  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course