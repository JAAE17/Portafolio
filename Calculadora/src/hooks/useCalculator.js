import { useState } from 'react'

export const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)

  const inputNumber = (num) => {
    if (display === 'ERROR') {
      setDisplay(num)
      return
    }
    
    if (waitingForNewValue) {
      setDisplay(num)
      setWaitingForNewValue(false)
    } else {
      if (display.length >= 9) return
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const inputDecimal = () => {
    if (display === 'ERROR') {
      setDisplay('0.')
      return
    }
    
    if (waitingForNewValue) {
      setDisplay('0.')
      setWaitingForNewValue(false)
    } else {
      if (display.length >= 9) return
      if (display.indexOf('.') === -1) {
        setDisplay(display + '.')
      }
    }
  }

  const calculate = (firstValue, secondValue, operation) => {
    let result
    
    switch (operation) {
      case '+':
        result = firstValue + secondValue
        break
      case '-':
        result = firstValue - secondValue
        break
      case '*':
        result = firstValue * secondValue
        break
      case '/':
        if (secondValue === 0) return null
        result = firstValue / secondValue
        break
      case '%':
        if (secondValue === 0) return null
        result = firstValue % secondValue
        break
      default:
        return
    }
    
    if (result < 0 || result > 999999999) {
      return null
    }
    
    return result
  }

  const formatResult = (value) => {
    let result = value.toString()
    
    if (result.includes('.')) {
      const integerPart = result.split('.')[0]
      if (integerPart.length >= 9) {
        result = integerPart.substring(0, 9)
      } else {
        const availableDecimals = 8 - integerPart.length
        if (availableDecimals > 0) {
          result = parseFloat(value).toFixed(Math.min(availableDecimals, 6))
          result = parseFloat(result).toString()
        } else {
          result = integerPart
        }
      }
    }
    
    if (result.length > 9) {
      result = result.substring(0, 9)
    }
    
    return result
  }

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display)
    
    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)
      
      if (newValue === null) {
        setDisplay('ERROR')
        setPreviousValue(null)
        setOperation(null)
        setWaitingForNewValue(true)
        return
      }
      
      const result = formatResult(newValue)
      setDisplay(result)
      setPreviousValue(parseFloat(result))
    }
    
    setWaitingForNewValue(true)
    setOperation(nextOperation)
  }

  const toggleSign = () => {
    if (display === 'ERROR' || display === '0') return
    
    if (display.charAt(0) === '-') {
      setDisplay(display.substring(1))
    } else {
      if (display.length >= 9) return
      setDisplay('-' + display)
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForNewValue(false)
  }

  const equals = () => {
    const inputValue = parseFloat(display)
    
    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      
      if (newValue === null) {
        setDisplay('ERROR')
      } else {
        setDisplay(formatResult(newValue))
      }
      
      setPreviousValue(null)
      setOperation(null)
      setWaitingForNewValue(true)
    }
  }

  return {
    display,
    inputNumber,
    inputDecimal,
    performOperation,
    toggleSign,
    clear,
    equals
  }
}
