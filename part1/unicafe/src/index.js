import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Stadistic = (props) =>{
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
} 

const Stadistics = (props) => {

  const all = props.good + props.neutral + props.bad
  const average = all/3
  const porcentage = Number ((props.good*100)/all) ? (props.good*100)/all: 0
  const positive = `${porcentage.toFixed(2)} %`
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return(
    <div>
      <table>
        <tbody>
          <Stadistic text='good' value={props.good}/>
          <Stadistic text='neutral' value={props.neutral}/>
          <Stadistic text='bad' value={props.bad}/>
          <Stadistic text='all' value={all}/>
          <Stadistic text='average' value={average.toFixed(2)}/>
          <Stadistic text='positive' value={positive}/>
        </tbody>
      </table>      
    </div>
  )
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return(
    <div>
      <h1>give feedback</h1>
      <Button onClick={()=> setGood(good + 1)} text='good'/>
      <Button onClick={()=> setNeutral(neutral + 1)} text='neutral'/>
      <Button onClick={()=> setBad(bad + 1)} text='bad'/>

      <h1>stadistics</h1>
        <Stadistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
