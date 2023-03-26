import React, {Component} from 'react';
import '../styles.css'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = { 
            name:props.name,
            number: Math.floor(Math.random() * (99 -0 + 1)) +0,
            step: 0, 
            score:null
         };
         this.AddOne=this.AddOne.bind(this);
         this.MinusOne=this.MinusOne.bind(this);
         this.MultiplyTwo=this.MultiplyTwo.bind(this);
         this.DividTwo=this.DividTwo.bind(this);}
         AddOne(){
            this.setState({number: this.state.number+1})
            this.setState({step: this.state.step+1})
            // this.state.number++;
            // this.state.step++;
         }
         MinusOne(){
          //  this.state.number--;
           // this.state.step++;
           this.setState({number: this.state.number-1})
           this.setState({step: this.state.step+1})
         }
         MultiplyTwo(){
           // this.state.number=this.state.number*2;
           //this.state.step++;
           this.setState({number: this.state.number*2})
            this.setState({step: this.state.step+1})
         }
         DividTwo(){
           // this.state.number=this.state.number/2;
            //this.state.step++;
            this.setState({number: this.state.number/2})
            this.setState({step: this.state.step+1})
         }
    render() {
        
        return (
            <div>
                <p>Gamer: {this.state.name}</p>
                <span>{this.state.number}</span>
                <button onClick={this.AddOne}>+1</button>
                <button onClick={this.MinusOne}>-1</button>
                <button onClick={this.MultiplyTwo}>x2</button>
                <button onClick={this.DividTwo}>/2</button>
                <p>Step: {this.state.step}</p>
            </div>
        );
    }
}
 
export default Board;