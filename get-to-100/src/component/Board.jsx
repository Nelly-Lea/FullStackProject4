import React, {Component} from 'react';
import '../styles.css'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = { 
            name:props.gamer.firstname,
            number: Math.floor(Math.random() * (99 -0 + 1)) +0,
            step: 0, 
            score:[],
           // enabled: props.gamer.enabled
         };
         this.handleChange=this.handleChange.bind(this);
         this.AddOne=this.AddOne.bind(this);
         this.MinusOne=this.MinusOne.bind(this);
         this.MultiplyTwo=this.MultiplyTwo.bind(this);
         this.DividTwo=this.DividTwo.bind(this);
         this.WinGame=this.WinGame.bind(this);
         
        }
         AddOne(){
            this.setState({number: this.state.number+1})
            this.setState({step: this.state.step+1})
            this.handleChange();
            this.WinGame(this.state.number+1)
            // this.state.number++;
            // this.state.step++;
         }
         MinusOne(){
          //  this.state.number--;
           // this.state.step++;
           this.setState({number: this.state.number-1})
           this.setState({step: this.state.step+1})
           this.handleChange();
           this.WinGame(this.state.number-1)
         }
         MultiplyTwo(){
           // this.state.number=this.state.number*2;
           //this.state.step++;
           this.setState({number: this.state.number*2})
            this.setState({step: this.state.step+1})
            this.handleChange();
            this.WinGame(this.state.number*2)
         }
         DividTwo(){
           // this.state.number=this.state.number/2;
            //this.state.step++;
            this.setState({number: this.state.number/2})
            this.setState({step: this.state.step+1})
            this.handleChange();
            this.WinGame(this.state.number/2)
         }
         handleChange(){
            this.props.change_gamer()
         }
         Enabled(){
            if(this.props.current_gamer==this.props.index){
                return true
            }else{
                return false
            }
           
         }
         WinGame(number){
            if(number==100){
                var win_player=JSON.parse(localStorage.getItem(this.props.gamer.mail))
                win_player.list_game.push(this.state.step+1);
                localStorage.removeItem(this.props.gamer.mail)
                localStorage.setItem(this.props.gamer.mail, JSON.stringify(win_player))
                this.setState({score: this.state.score.push(this.state.step+1)})
            }
         }
    render() {
        
        return (
            <div>
                <p>Gamer: {this.state.name}</p>
                <span >{this.state.number}</span>
                <button onClick={this.AddOne} disabled={!this.Enabled()}>+1</button>
                <button onClick={this.MinusOne}disabled={!this.Enabled()}>-1</button>
                <button onClick={this.MultiplyTwo}disabled={!this.Enabled()}>x2</button>
                <button onClick={this.DividTwo}disabled={!this.Enabled()}>/2</button>
                <p>Step: {this.state.step}</p>
            </div>
        );
    }
}
 
export default Board;