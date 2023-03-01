import { useState ,useRef} from 'react';
import './App.css';
import TranslationApp from './TranslationApp';

function App() {

  const [score, setScore] = useState(0)
  const [best, setBest] = useState(0)
  const [colors, setColors] = useState(['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'])
  const [status, setStatus] = useState(true)
  const inv =useRef(null);
  const start = ()=>{
    setScore(0)
    setStatus(false)
     inv.current = setInterval(()=>{
      var i = Math.ceil(Math.random()*9)-1
      var tcolors = [...colors]
      tcolors[i]='green'
      console.log(i, tcolors[i]);
      setColors(tcolors)
    }, 1000);


    setTimeout(()=>{
      clearInterval(inv.current)
      setColors(['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'])
    }, 10000)
  }

  const stop = ()=>{
    setStatus(true)
    clearInterval(inv.current)
    setColors(['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'])
  }

  const checkit = (val)=>{
    if(colors[val-1]==='green'){
      setScore(score+1)
    }
    if(score>best){
      setBest(score)
    }
  }

  return (
    <div className="App">
      <>
      <h2>Pick The GREEEEN</h2>
      <h4><pre style={{"fontFamily":"sans-serif"}}>SCORE : {score}       <span>Best : {best}</span></pre></h4>
      {status?<button onClick={start} style={{"padding":"5px 20px 5px 20px", "backgroundColor":"rgb(24, 216, 203)"}}>Start</button>:<button onClick={stop} style={{"padding":"5px 20px 5px 20px", "backgroundColor":"rgb(24, 216, 203)"}}>Stop</button>}
      <br /><br />
      <button onClick={()=>checkit(1)} style={{"padding":"30px", "margin":"1px", "backgroundColor":colors[0]}}></button>
      <button onClick={()=>checkit(2)} style={{"padding":"30px", "margin":"1px", "backgroundColor":colors[1]}}></button>
      <button onClick={()=>checkit(3)} style={{"padding":"30px", "margin":"1px", "backgroundColor":colors[2]}}></button><br />
      <button onClick={()=>checkit(4)} style={{"padding":"30px", "margin":"1px", "backgroundColor":colors[3]}}></button>
      <button onClick={()=>checkit(5)} style={{"padding":"30px", "margin":"1px", "backgroundColor":colors[4]}}></button>
      <button onClick={()=>checkit(6)} style={{"padding":"30px", "margin":"1px", "backgroundColor":colors[5]}}></button><br />
      <button onClick={()=>checkit(7)} style={{"padding":"30px", "margin":"1px", "backgroundColor":colors[6]}}></button>
      <button onClick={()=>checkit(8)} style={{"padding":"30px", "margin":"1px", "backgroundColor":colors[7]}}></button>
      <button onClick={()=>checkit(9)} style={{"padding":"30px", "margin":"1px", "backgroundColor":colors[8]}}></button><br />
      </>
    </div>
  );
}

export default App;