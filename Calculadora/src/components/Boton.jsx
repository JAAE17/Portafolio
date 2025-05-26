import "../stylesheets/Boton.css"

const Boton = ({ text, onClick, type = 'normal' }) => {
  const getBotonClass = () => {
    switch (type) {
      case 'operation':
        return 'boton-operacion'
      case 'clear':
        return 'boton-clear'
      case 'equals':
        return 'boton-equals'
      case 'function':
        return 'boton-function'
      default:
        return 'boton-normal'
    }
  }

  return (
    <boton className={getBotonClass()} onClick={onClick}>
      {text}
    </boton>
  )
}

export default Boton

