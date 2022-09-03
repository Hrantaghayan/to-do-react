import React from "react";
class Todoup extends React.Component{
    constructor(...args){
        super(...args)
        this.state={
            inputvalue:'',
            todoitems:[
                {action:'Buy milk',done:false, id:Math.random()},
                {action:'Buy egg',done:false, id:Math.random()},
                {action:'Do my homeworks',done:false, id:Math.random()}
            ],
            cheked:0
        }
    }
    onInputChange = (e)=>{
        this.setState({
            inputvalue:e.target.value
        })
    }
     onBtnclick = (e)=>{
        // debugger
        this.setState({
            todoitems:[
                ...this.state.todoitems,
                {action:this.state.inputvalue,done:false,id:Math.random()}
            ],
            inputvalue:''
        })

     }
     onDelete=(deleted)=>{
        this.setState({
            todoitems:this.state.todoitems.filter(function (el,ind){
                if(el.id !==deleted){
                    return true
                }
                else{
                    return false
                }
            })
        })
     }
   onCheck=(e)=>{
    // debugger
    if(e.target.checked)
     this.setState({
        cheked:this.state.cheked+1
     })
     else{
        this.setState({
            cheked:this.state.cheked-1
        })
     }
   }
     DrawItems=()=>{
        let savethis = this
        return(
          this.state.todoitems.map(function(el,ind){
            return (
                <div className="for-items" key={el.id} id={el.id}>
                    <input type='checkbox' onChange={savethis.onCheck}/>
                    {el.action}
                    <button className="delete" onClick={
                        ()=>{
                        savethis.onDelete(el.id)
                        }
                    }>X</button>
                </div>
            )
          })
        )
     }
    render(){
        return (
            <div className="container">
                <div className="header">
                    <h3>To do List</h3>
                    <div className="for-typing">
                        <input type='text' className="inp"
                         onChange={this.onInputChange}
                         value={this.state.inputvalue}/>
                        <button className="submit" onClick={this.onBtnclick}>Add</button>
                    </div>
                </div>
                {this.DrawItems()} 
                <footer>{` You have ${this.state.todoitems.length} tasks and you have done ${this.state.cheked}`}</footer>
            </div>
        )
    }
}
export default Todoup