import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native'; 

export default class TextRadius extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    //分离文本和其他的样式
    let style = {}
    let textStyle={}
    for(let key in this.props.style || {}){
      if(typeof this.props.style[key] == 'object'){
        for(let key1 in this.props.style[key]){
          if('fontSize,color,lineHeight,fontWeight'.indexOf(key1) == -1){
            style[key1] = this.props.style[key][key1]
          }else{
            textStyle[key1] = this.props.style[key][key1]
          }
        }
      }else{
        if('fontSize,color,lineHeight,fontWeight'.indexOf(key) == -1){
          style[key] = this.props.style[key]
        }else{
          textStyle[key] = this.props.style[key]
        }
      }
    }
    return (
      <TouchableOpacity activeOpacity={1} style={style} onPress={()=>{this.props.onPress && this.props.onPress()}}>
        <Text style={textStyle}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}