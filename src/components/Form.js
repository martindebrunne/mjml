
import React, { Component } from 'react'
import MJMLElement from './decorators/MJMLElement'

/*

## MJ-FORM & MJ-INPUT

Render a form with input inside the email
(warning experimental)

    <mj-column>
      <mj-form>
        <mj-input placeholder="Guillaume" label="Name" />
        <mj-input placeholder="22" label="Age" />
        <mj-input placeholder="Paris" label="City" />
      </mj-form>
    </mj-column>


### MJ-FORM

attribute  | unit  | description
-----------|-------|-----------------
header     | string | Form header text
font-size  | px  | header font size
font-family | string | header font family
font-weight | number | header font weight
color       | color format | header text color

### MJ-INPUT

attribute  | unit  | description
-----------|-------|-----------------
label     | string | label
label-size     | px | label font size
label-weight     | px | label font weight
label-color     | color format | label color
input-color    | color format | input color
input-size    | size format | input size
placeholder   | string      | input placeholder
width         | px          | input width

*/

@MJMLElement({
  tagName: 'mj-form',
  content : ' ',
  attributes: {
    'header': 'Please fill in the form',
    'font-size': '15px',
    'font-family': 'Helvetica Neue',
    'font-weight': '400',
    'color': 'grey'
  }
})
class Form extends Component {

  getProperties () {

    const { mjAttribute } = this.props

    return {
      header: mjAttribute('header'),
      fontSize: mjAttribute('font-size'),
      fontFamily: mjAttribute('font-family'),
      fontWeight: mjAttribute('font-weight'),
      color: mjAttribute('color')
    } 
  }

  render () {

    const { color, header, fontSize, fontWeight, fontFamily } = this.getProperties()

    return (
      <div style={{ margin: '0', maxWidth: '500px' }}>
        <h1 style={{ margin: '0', fontSize, fontWeight, fontFamily, color, border: 'none', background: 'none', whiteSpace: 'normal'}}>
          {header}
        </h1>

        <form action="http://www.mailjet.com" method="post" style={{ marginBottom: '40px', marginTop: '40px' }}>
          
        {this.props.children}

        </form>
      </div>
    )
  }
}

export default Form
