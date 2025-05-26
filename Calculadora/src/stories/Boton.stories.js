import Boton from '../components/Boton'

export default {
  title: 'Calculator/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select'
      },
      options: ['normal', 'operation', 'clear', 'equals', 'function']
    }
  }
}

export const NumberButton = {
  args: {
    text: '7',
    type: 'normal',
    onClick: () => console.log('Number clicked')
  }
}

export const OperationButton = {
  args: {
    text: '+',
    type: 'operation',
    onClick: () => console.log('Operation clicked')
  }
}

export const ClearButton = {
  args: {
    text: 'Clear',
    type: 'clear',
    onClick: () => console.log('Clear clicked')
  }
}

export const EqualsButton = {
  args: {
    text: '=',
    type: 'equals',
    onClick: () => console.log('Equals clicked')
  }
}

export const FunctionButton = {
  args: {
    text: '+/-',
    type: 'function',
    onClick: () => console.log('Function clicked')
  }
}

export const AllButtonTypes = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', padding: '20px' }}>
    <Button text="1" type="normal" onClick={() => alert('Number 1')} />
    <Button text="+" type="operation" onClick={() => alert('Plus')} />
    <Button text="=" type="equals" onClick={() => alert('Equals')} />
    <Button text="+/-" type="function" onClick={() => alert('Toggle Sign')} />
    <Button text="Clear" type="clear" onClick={() => alert('Clear')} />
  </div>
)
