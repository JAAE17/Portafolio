import Display from '../components/Display'

export default {
  title: 'Calculator/Display',
  component: Display,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export const DefaultState = {
  args: {
    value: '0'
  }
}

export const WithNumber = {
  args: {
    value: '12345'
  }
}

export const WithDecimal = {
  args: {
    value: '3.14159'
  }
}

export const ErrorState = {
  args: {
    value: 'ERROR'
  }
}

export const MaxLength = {
  args: {
    value: '123456789'
  }
}

export const NegativeNumber = {
  args: {
    value: '-42'
  }
}

export const AllStates = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px' }}>
    <div>
      <h3>Estado inicial:</h3>
      <Display value="0" />
    </div>
    <div>
      <h3>Con número:</h3>
      <Display value="12345" />
    </div>
    <div>
      <h3>Con decimal:</h3>
      <Display value="3.14159" />
    </div>
    <div>
      <h3>Estado de error:</h3>
      <Display value="ERROR" />
    </div>
    <div>
      <h3>Longitud máxima:</h3>
      <Display value="123456789" />
    </div>
  </div>
)
