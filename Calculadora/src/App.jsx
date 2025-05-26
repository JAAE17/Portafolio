import { useCalculator } from './hooks/useCalculator'
import Boton from './components/Boton'
import Display from './components/Display'
import './App.css'

const App = () => {
  const { 
    display, 
    inputNumber, 
    inputDecimal, 
    performOperation, 
    toggleSign, 
    clear, 
    equals 
  } = useCalculator()

  return (
    <div className="contenedor">
      <div className="pad">
        <Display value={display} />
        <Boton text="Clear" onClick={clear} type="clear" />
        <Boton text="+/-" onClick={toggleSign} type="function" />
        <Boton text="%" onClick={() => performOperation('%')} type="operation" />
        <Boton text="7" onClick={() => inputNumber('7')} />
        <Boton text="8" onClick={() => inputNumber('8')} />
        <Boton text="9" onClick={() => inputNumber('9')} />
        <Boton text="/" onClick={() => performOperation('/')} type="operation" />
        <Boton text="4" onClick={() => inputNumber('4')} />
        <Boton text="5" onClick={() => inputNumber('5')} />
        <Boton text="6" onClick={() => inputNumber('6')} />
        <Boton text="*" onClick={() => performOperation('*')} type="operation" />
        <Boton text="1" onClick={() => inputNumber('1')} />
        <Boton text="2" onClick={() => inputNumber('2')} />
        <Boton text="3" onClick={() => inputNumber('3')} />
        <Boton text="-" onClick={() => performOperation('-')} type="operation" />
        <Boton text="0" onClick={() => inputNumber('0')} />
        <Boton text="." onClick={inputDecimal} />
        <Boton text="=" onClick={equals} type="equals" />
        <Boton text="+" onClick={() => performOperation('+')} type="operation" />
      </div>
    </div>
  )
}

export default App

