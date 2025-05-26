import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('Calculator Tests', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('should display initial value of 0', () => {
    const display = screen.getByDisplayValue('0')
    expect(display).toBeInTheDocument()
  })

  test('should input numbers correctly', () => {
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('3'))
    expect(screen.getByDisplayValue('123')).toBeInTheDocument()
  })

  test('should perform addition correctly', () => {
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByDisplayValue('8')).toBeInTheDocument()
  })

  test('should perform subtraction and show ERROR for negative results', () => {
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('-'))
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByDisplayValue('ERROR')).toBeInTheDocument()
  })

  test('should perform multiplication correctly', () => {
    fireEvent.click(screen.getByText('6'))
    fireEvent.click(screen.getByText('*'))
    fireEvent.click(screen.getByText('7'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByDisplayValue('42')).toBeInTheDocument()
  })

  test('should perform division correctly', () => {
    fireEvent.click(screen.getByText('8'))
    fireEvent.click(screen.getByText('/'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByDisplayValue('4')).toBeInTheDocument()
  })

  test('should handle division by zero', () => {
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('/'))
    fireEvent.click(screen.getByText('0'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByDisplayValue('ERROR')).toBeInTheDocument()
  })

  test('should perform modulo operation correctly', () => {
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('0'))
    fireEvent.click(screen.getByText('%'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByDisplayValue('1')).toBeInTheDocument()
  })

  test('should handle decimal point correctly', () => {
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('.'))
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('4'))
    expect(screen.getByDisplayValue('3.14')).toBeInTheDocument()
  })

  test('should limit display to 9 characters', () => {
    // Intentar ingresar 10 dígitos
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('4'))
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('6'))
    fireEvent.click(screen.getByText('7'))
    fireEvent.click(screen.getByText('8'))
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('0')) // Este décimo dígito no debería aparecer
    
    const displayValue = screen.getByRole('textbox').value
    expect(displayValue.length).toBeLessThanOrEqual(9)
    expect(displayValue).toBe('123456789')
  })

  test('should show ERROR for results over 999999999', () => {
    // Crear un número grande y multiplicarlo
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('*'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByDisplayValue('ERROR')).toBeInTheDocument()
  })

  test('should clear display when Clear button is pressed', () => {
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('Clear'))
    expect(screen.getByDisplayValue('0')).toBeInTheDocument()
  })

  test('should toggle sign with +/- button', () => {
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('+/-'))
    expect(screen.getByDisplayValue('-5')).toBeInTheDocument()
    fireEvent.click(screen.getByText('+/-'))
    expect(screen.getByDisplayValue('5')).toBeInTheDocument()
  })

  test('should handle consecutive operations', () => {
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('*'))
    expect(screen.getByDisplayValue('8')).toBeInTheDocument()
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByDisplayValue('16')).toBeInTheDocument()
  })

  test('should handle decimal operations', () => {
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('.'))
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('.'))
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByDisplayValue('6')).toBeInTheDocument()
  })
})
