import {useState} from 'react'
import Button from './Button'
import Input from './Input'
import Select from './Select'
import Bill from './Bill'

function App() {

  const[inputvalue,setInputvalue]=useState('');
  const[percentage1,setPercentage1]=useState(0);
  const[percentage2,setPercentage2]=useState(0);


  function handleClick(){
    setInputvalue('');
    setPercentage1(0);
    setPercentage2(0);
  }
  const tip=inputvalue*(percentage1+percentage2)/2/100

  return (
    <div className="App">
      <Input inputvalue={inputvalue} setInputvalue={setInputvalue}/>
      <Select percentage={percentage1} setPercentage={setPercentage1}>How did you like the service?</Select>
      <Select percentage={percentage2} setPercentage={setPercentage2}>How did your friend like the service?</Select>
      <Bill tip={tip} inputvalue={inputvalue} percentage1={percentage1} percentage2={percentage2}/>
      <Button onClick={handleClick}/>
    </div>
  );
}

export default App;
