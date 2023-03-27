import React, {Component} from 'react';
import Board from './Board'
class Game extends Component {
    constructor(props){
      super(props)
      this.state = {
        current_gamer:0
      } ;
      this.ChangeCurrentPlayer=this.ChangeCurrentPlayer.bind(this)
     
    }
    ChangeCurrentPlayer()
    {
      if(this.state.current_gamer==(JSON.parse(localStorage.getItem("list_of_player"))).length-1){
          this.setState({current_gamer:0})
      }else{
          this.setState({current_gamer: this.state.current_gamer+1})
      }
     
    }
    render(){
        const list_players= JSON.parse(localStorage.getItem("list_of_player"));
        const list_gamer=list_players.map((item, index) =>(<Board key={index} gamer={item} change_gamer={this.ChangeCurrentPlayer} current_gamer={this.state.current_gamer}
                                                               index={index}/>))
        return (
            <div>
                 <h1>Game page</h1>
                <div>{list_gamer}</div>
            </div>
        );

    }
   
}
 
export default Game;
