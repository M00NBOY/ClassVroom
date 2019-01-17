import React from 'react'

class Input extends React.Component {
  constructor (props) {
    super(props)
  }

  updateValue = (e) => {
    this.props.onUpdate(this.props.label, e.target.value)
  }

  render () {
    const { label, value, type } = this.props
    return (
      <input id={ label } type={ type } value={ value } onChange={ this.updateValue } />
    )
  }
}

export default Input