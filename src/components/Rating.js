
import MJMLElement from './decorators/MJMLElement'
import React, { Component } from 'react'

@MJMLElement({
	tagName: 'mj-rating',
	attributes: {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Star-icon.png',
    'href-1': '#',
    'href-2': '#',
    'href-3': '#',
    'href-4': '#',
    'href-5': '#',
    'font-family': 'helvetica',
    'font-weight': '400',
    'font-size': '13px',
    'padding': '20px',
    'border-width': '1px',
    'border-color': 'silver',
    'content': 'How would you rate your order?',
    'align': 'center',
    'width': '31px',
    'color': 'grey',
	}
})
class Rating extends Component {

  getProperties () {
    const { mjAttribute } = this.props

    return {
      borderColor: mjAttribute('border-color'),
      borderWidth: mjAttribute('border-width'),
      icon: mjAttribute('icon'),
      padding: mjAttribute('padding'),
      content: mjAttribute('content'),
      align: mjAttribute('center'),
      width: mjAttribute('width'),
      fontFamily: mjAttribute('font-family'),
      fontSize: mjAttribute('font-size'),
      fontWeight: mjAttribute('font-weight'),
      color: mjAttribute('color'),
      href: ['href-1', 'href-2', 'href-3', 'href-4', 'href-5'].map(mjAttribute)
    }
  }

  render () {

    const p = this.getProperties()

    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ border:  p.borderWidth + ' solid ' + p.borderColor, display: 'inline-block', padding: p.padding, margin: '0 auto' }} >
          <p style={{ fontWeight: p.fontWeight, fontSize: p.fontSize, fontFamily: p.fontFamily, color: p.color, textAlign: p.align }}>{p.content}</p>
          <table cellPadding='0' cellSpacing='0' border='0' style={{ margin: '0 auto' }}>
            <tr>
              <td><a href={p.href[0]}><img src={p.icon} width={p.width} /></a></td>
              <td><a href={p.href[1]}><img src={p.icon} width={p.width} /></a></td>
              <td><a href={p.href[2]}><img src={p.icon} width={p.width} /></a></td>
              <td><a href={p.href[3]}><img src={p.icon} width={p.width} /></a></td>
              <td><a href={p.href[4]}><img src={p.icon} width={p.width} /></a></td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default Rating
