
import React, { Component } from 'react'
import MJMLElement from './decorators/MJMLElement'

@MJMLElement({
  tagName: 'mj-form',
  attributes: {
    'label-size': '14px',
    'input-size': '16px',
    'font-family': 'Helvetica Neue',
    'label-weight': '700',
    'input-color': 'grey',
    'placeholder': 'Type here',
    'label': 'Input',
    'label-color': '#9dd3f6',
    'width': '500px'
  }
})
class Input extends Component {

  getProperties () {

    const { mjAttribute } = this.props

    return {
      label: mjAttribute('label'),
      fontFamily: mjAttribute('font-family'),
      labelSize: mjAttribute('label-size'),
      labelWeight: mjAttribute('label-weight'),
      labelColor: mjAttribute('label-color'),
      placeholder: mjAttribute('placeholder'),
      inputColor: mjAttribute('input-color'),
      inputSize: mjAttribute('input-size'),
      width: mjAttribute('width')
    }
  }

  render () {

    const p = this.getProperties()
    
    return (
      <div style={{ width: p.width }}>
        <p style={{ margin: '0' }}>
          <label htmlFor="tb_first_name" style={{ marginBottom: '10px', display: 'block', fontSize: p.labelSize, fontWeight: p.labelWeight, color: p.labelColor, fontFamily: p.fontFamily }}>
            {p.label}
          </label>
        </p>
        <p style={{ margin: '0' }}>
          <input type="text" name="tb_first_name" id="tb_first_name" style={{ marginBottom: '30px', display: 'block', width: '100%', padding: '5px 0', border: 'none', borderBottom: '1px solid #ecedee', background: '#fff', color: p.inputColor, fontSize: p.inputSize, outline: 'none' }} placeholder={p.placeholder} />
        </p>
      </div>
    )
  }
}

export default Input
