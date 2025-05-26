import App from '../App'

export default {
  title: 'Calculator/App',
  component: App,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
}

export const DefaultCalculator = {
  args: {}
}

export const CalculatorShowcase = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  }}>
    <App />
  </div>
)

export const CalculatorInstructions = () => (
  <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h2>Calculadora - Instrucciones de Uso</h2>
    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <h3>Características:</h3>
        <ul>
          <li>✅ Operaciones básicas: +, -, *, /</li>
          <li>✅ Operación módulo: %</li>
          <li>✅ Función +/- para cambiar signo</li>
          <li>✅ Soporte para decimales</li>
          <li>✅ Límite de 9 caracteres</li>
          <li>✅ Manejo de errores</li>
        </ul>
        <h3>Reglas:</h3>
        <ul>
          <li>🚫 Números negativos muestran ERROR</li>
          <li>🚫 Números > 999,999,999 muestran ERROR</li>
          <li>🚫 División por cero muestra ERROR</li>
          <li>📏 Máximo 9 caracteres en pantalla</li>
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <App />
      </div>
    </div>
  </div>
)
