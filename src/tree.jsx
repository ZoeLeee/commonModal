import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TreeNode from './treeNode'

const svg=require('../resources/icons/folder-close.svg');

const TestData = [
  {
    id: 0,
    icon: svg,
    isExpanded: false,
    isSelected: false,
    label: "标签1",
    nodeData:{},
    childNodes: [
      {
        id: 1,
        icon: svg,
        isExpanded: false,
        isSelected: false,
        label: "子标签1",
        childNodes: []
      },
      {
        id: 2,
        icon: svg,
        isExpanded: false,
        isSelected: false,
        label: "子标签2",
      },
    ]
  },
  {
    id: 3,
    icon: svg,
    isExpanded: false,
    isSelected: false,
    label: "标签2",
    childNodes: [
      {
        id: 4,
        icon: svg,
        isExpanded: false,
        isSelected: false,
        label: "子标签1",
        childNodes: []
      },
      {
        id: 5,
        icon: svg,
        isExpanded: false,
        isSelected: false,
        label: "子标签2",
      },
    ]
  }
]

export default class Tree extends Component {
  static defaultProps ={
    contents:TestData
  }
  static propTypes = {
    contents:PropTypes.array
  }
  constructor(props){
    super(props);
  }
  renderNodeList=(data,pathNumber)=>{
    return (
      <ul style={{
        marginLeft:pathNumber.length*10+"px"
      }}>
        {
          data.map(d=>{
            let path=pathNumber.slice();
            path.push(d.id);
            return (
              <TreeNode 
                key={d.id}
                icon={d.icon}
                label={d.label}
                path={path}
                children={d.childNodes&&this.renderNodeList(d.childNodes,path.slice())}
              />
            )
          })
        }
      </ul>
    )
  }
  render() {
    return this.renderNodeList(this.props.contents,[])
  }
}
