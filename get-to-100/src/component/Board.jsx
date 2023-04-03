import React, {Component} from 'react';
import '../styles.css'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = { 
            name:props.gamer.firstname,
            number: Math.floor(Math.random() * (99 -0 + 1)) +0,
            step: 0, 
            score:props.gamer.list_game,
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
            this.WinGame(this.state.number+1, this.props.gamer.mail, this.state.step)
            // this.state.number++;
            // this.state.step++;
         }
         MinusOne(){
          //  this.state.number--;
           // this.state.step++;
           this.setState({number: this.state.number-1})
           this.setState({step: this.state.step+1})
           this.handleChange();
           this.WinGame(this.state.number-1, this.props.gamer.mail, this.state.step)
         }
         MultiplyTwo(){
           // this.state.number=this.state.number*2;
           //this.state.step++;
           this.setState({number: this.state.number*2})
            this.setState({step: this.state.step+1})
            this.handleChange();
            this.WinGame(this.state.number*2, this.props.gamer.mail, this.state.step)
         }
         DividTwo(){
           // this.state.number=this.state.number/2;
            //this.state.step++;
            this.setState({number: this.state.number/2})
            this.setState({step: this.state.step+1})
            this.handleChange();
            this.WinGame(this.state.number/2, this.props.gamer.mail, this.state.step)
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
         WinGame(number, mail, step){
          this.props.winGame(number, mail, step)
          if(number==100){
            this.setState({ score: [...this.state.score, this.state.step + 1] })
          }
          
         
            // if(number==100){
            //     var win_player=JSON.parse(localStorage.getItem(this.props.gamer.mail))
            //     win_player.list_game.push(this.state.step+1);
            //     localStorage.removeItem(this.props.gamer.mail)
            //     localStorage.setItem(this.props.gamer.mail, JSON.stringify(win_player))
            //    // this.setState({score: this.state.score.push(this.state.step+1)})
            //    this.setState({ score: [...this.state.score, this.state.step + 1] })
            //     var list_gamers=JSON.parse(localStorage.getItem("list_of_player"))
            //     for(var i=0; i<list_gamers.length; i++){
            //           if(list_gamers[i].mail==win_player.mail){
            //               list_gamers[i].list_game.push(this.state.step+1)
            //           }
            //     }
            //     localStorage.removeItem("list_of_player")
            //     localStorage.setItem("list_of_player", JSON.stringify(list_gamers))
            //     window.alert(win_player.firstname +"won")
            // }
         }
    render() {
        var list_score=this.state.score.map((item, index) =>(<span key={index}>{item} </span>));
    //     const listItems = numbers.map((number) =>
    // <li>{number}</li>
  //);
        return (
            <div>
                <p>Gamer: {this.state.name}</p>
                <span >{this.state.number}</span>
                <button onClick={this.AddOne} disabled={!this.Enabled()}>+1</button>
                <button onClick={this.MinusOne}disabled={!this.Enabled()}>-1</button>
                <button onClick={this.MultiplyTwo}disabled={!this.Enabled()}>x2</button>
                <button onClick={this.DividTwo}disabled={!this.Enabled()}>/2</button>
                <p>Step: {this.state.step}</p>
                <p>Your Score: {list_score}</p>
            </div>
        );
    }
}
 
export default Board;