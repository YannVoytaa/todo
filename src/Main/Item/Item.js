import React from 'react'
import DataArray from '../DataArray'
import axios from 'axios'
/*function Item(props){
  console.log(props)
  return (
  <div className='item'>
    <span>{props.name}</span>
    <button className='delete'><i className='material-icons'>delete</i></button>
    <button className='check'><i className='material-icons'>check</i></button>
  </div>
)}*/
function removeFromDataArray(nr){
  console.log(nr-1)
  DataArray.splice(nr-1,1)
}

class Item extends React.Component{
  constructor(){
    super()
    this.handleDelete=this.handleDelete.bind(this)
    this.crossOut=this.crossOut.bind(this)
    this.state={visible:1,crossOut:0}
  }
  handleDelete(event){
    event.preventDefault()
    axios.delete('https://jsonbox.io/box_88b4c49258cb119ab444/'+this.props.item._id)
    this.setState({visible:0})
    this.props.fun()
  }
  crossOut(event){
    event.preventDefault()
    console.log("elo")
    this.setState({crossOut:1})
  }
  render(){
    return (
      this.state.visible===-1?null:
      (<div className={`item ${this.state.visible==0?"fadeOut":""}`}>
        <span className={`abc ${this.state.crossOut===1?"crossOut":""}`}>{this.props.item.el.name}</span>
        <button onClick={this.handleDelete} className='delete'><i className='material-icons'>delete</i></button>
        <button onClick={this.crossOut} className='check'><i className='material-icons'>check</i></button>
        </div>)
      )}
}


export default Item
