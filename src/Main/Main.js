import React from 'react'
import './Main.css'
import Item from './Item/Item'
import DataArray from './DataArray'
import axios from 'axios'


class Main extends React.Component{
    constructor(){
      super()
      this.state={
        array:[],
        activity:"",
      }
      this.handleChange=this.handleChange.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)
      this.update=this.update.bind(this)
    }
    addToDataArray(el){
      axios.post('https://jsonbox.io/box_88b4c49258cb119ab444', {el})
    }
    update(){
      axios.get('https://jsonbox.io/box_88b4c49258cb119ab444')
        .then(res=>{
        const activities=res.data
        if(JSON.stringify(this.state.array)==JSON.stringify(activities))this.update()
        else this.setState({array:activities,activity:""})
      })
    }
    componentDidMount(){
      axios.get('https://jsonbox.io/box_88b4c49258cb119ab444')
        .then(res=>{
          const activities=res.data
          this.setState({array:activities})
        })
    }
    handleChange(event){
      this.setState({activity:event.target.value})
    }
    handleSubmit(event){
      event.preventDefault()
      this.addToDataArray(
        {
            name:this.state.activity,
            done:false,
            key:this.state.array.length+1,
        }
      )
      //while(this.state.readyToRender===0){console.log(this.state.readyToRender)}
      //this.setState({readyToRender:0})

      this.update()
      this.render()
    }
    mapping(x){
      return <Item key={x._id} item={x} fun={this.update} />;
    }
    render(){
      let cmps=this.state.array.map(x=>this.mapping(x));
      return(
        <div>
          <div className='search_div'>
            <form onSubmit={this.handleSubmit}>
              <input value={this.state.activity} className='search' type='text' onChange={this.handleChange} placeholder='What do you have to do?' autoFocus></input>
                <input type='submit' value='submit' className='submit'></input>
            </form>
          </div>
        {cmps}
      </div>
        )
    }
}

export default Main
