import React from 'react'
import classNames from 'classnames'

class Input extends React.Component {
  constructor (props) {
    super(props)
  }

  updateValue = (e) => {
    this.props.onUpdate(this.props.label, e.target.value)
  }

  render () {
    const { label, value, type, placeholder, error, errormessage } = this.props
    return (
      <div className="input-wrapper">
        <input id={ label }
               type={ type }
               value={ value }
               placeholder={ placeholder }
               onChange={ this.updateValue }
               className={classNames('input', { 'input--alert': error })} />
        { error && (
          <span className="input-message">{ errormessage }</span>
        )}
      </div>
    )
  }
}

export default Input