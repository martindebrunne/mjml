import _ from 'lodash'
import { fromJS } from 'immutable'
import MJMLElementsCollection from '../MJMLElementsCollection'

export const parseInstance = instance => {
  const parseNode = node => {

    const element = node.tagName === 'mjml' ?
      node.tagName : node.tagName.substr(3)
  
    return {

      // copy all existing props, applying defaults
      ..._.defaultsDeep(node, MJMLElementsCollection[element].defaultMJMLDefinition),

      // do same to children
      children: (node.children || []).map(parseNode)

    }
  }

  return fromJS(parseNode(instance))
}
