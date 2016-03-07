
import MJMLElement from './decorators/MJMLElement'
import React, { Component } from 'react'

/*

      <mj-rating
          icon="https://upload.wikimedia.org/wikipedia/commons/2/2c/Star-icon.png"
          base-url="http://www.domain.com/email/"
          href-1="1"
          href-2="2"
          href-3="3"
          href-4="4"
          href-5="5"
          content="How would you rate our app?" />

      Displays a voting system that triggers GET requests on the provided URLs

      attribute                   | unit        | description                    | default value
      ----------------------------|-------------|--------------------------------|------------------------------
      icon          | url| icon url | simple star
      base-url          | url | url to be prepend to all hrefs | ''
      href-1          | url | url 1 | '#'
      href-2          | url | url 2| '#'
      href-3          | url | url 3| '#'
      href-4          | url | url 4| '#'
      href-5          | url | url 5| '#'
      font-family         | string | font | Helvetica
      font-weight         | number | font weight | 400
      font-size         | px | font size | 13px
      border-width          | px | border weight | 1px
      border-color          | color format | border color | silver
      content         | string | component content | 'How would you rate your order?'
      align         | string | center/left/right | center

      borderColor: mjAttribute('border-color'),
      borderWidth: mjAttribute('border-width'),
      icon: mjAttribute('icon'),
      padding: mjAttribute('padding'),
      content: mjAttribute('content'),
      align: mjAttribute('align'),
      width: mjAttribute('width'),
      baseUrl: mjAttribute('base-url'),
      fontFamily: mjAttribute('font-family'),
      fontSize: mjAttribute('font-size'),
      fontWeight: mjAttribute('font-weight'),
      color: mjAttribute('color'),
      href: ['href-1', 'href-2', 'href-3', 'href-4', 'href-5'].map(mjAttribute)
*/

@MJMLElement({
  tagName: 'mj-rating',
	attributes: {
    'icon': 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Star-icon.png',
    'base-url': '',
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
    'color': 'grey'
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
      baseUrl: mjAttribute('base-url'),
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
              <td><a href={p.baseUrl + p.href[0]}><img src={p.icon} width={p.width} /></a></td>
              <td><a href={p.baseUrl + p.href[1]}><img src={p.icon} width={p.width} /></a></td>
              <td><a href={p.baseUrl + p.href[2]}><img src={p.icon} width={p.width} /></a></td>
              <td><a href={p.baseUrl + p.href[3]}><img src={p.icon} width={p.width} /></a></td>
              <td><a href={p.baseUrl + p.href[4]}><img src={p.icon} width={p.width} /></a></td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default Rating
