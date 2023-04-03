import React, {Component} from 'react';
import Board from './Board'
class Game extends Component {
    constructor(props){
      super(props)
      this.state = {
        list_players:props.list_of_gamers,
        current_gamer:0,
      } ;
      this.ChangeCurrentPlayer=this.ChangeCurrentPlayer.bind(this)
      this.winGame=this.winGame.bind(this)
     
    }
    ChangeCurrentPlayer()
    {
      if(this.state.current_gamer==this.state.list_players.length-1){
        this.setState({current_gamer:0})
    }else{
        this.setState({current_gamer: this.state.current_gamer+1})
    }
      // if(this.state.current_gamer==(JSON.parse(localStorage.getItem("list_of_player"))).length-1){
      //     this.setState({current_gamer:0})
      // }else{
      //     this.setState({current_gamer: this.state.current_gamer+1})
      // }
     
    }
    // winGame(number, mail){
    //   if(number==100){
    //     list_players=this.state.list_players;
    //     for(var i=0; i<list_players.length; i++){
    //       if(list_players[i].mail==mail){
    //           //list_gamers[i].list_game.push(this.state.step+1)
    //            this
    //       } }

    //   }
      
    // }
    winGame(number, mail,step){
      if(number === 100){
        const li=this.state.list_players;
        const list_players = [...this.state.list_players]; // create a copy of the outer list
        for(let i = 0; i < list_players.length; i++){
          if(list_players[i].mail === mail){
            const list_game = [...list_players[i].list_game]; // create a copy of the inner list
            list_game.push(step + 1); // modify the inner list
            list_players[i].list_game = list_game; // assign the modified inner list back to the outer list
            break; // exit the loop once the player is found and updated
          }
        }
        this.setState({list_players}); // update the state with the new copy of the outer list
      }
    }
    
    
    render(){
      const list_players = this.state.list_players;
      if (!list_players) {
        return <div>No players found</div>;
      }
      
      const list_gamer = list_players.map((item, index) => (
        <Board key={index} gamer={item} winGame={this.winGame} change_gamer={this.ChangeCurrentPlayer} current_gamer={this.state.current_gamer} index={index} />
      ));
      
      return (
        <div>
          <h1>Game page</h1>
          <div>{list_gamer}</div>
        </div>
      );
    //  // const list_players=this.state.list_players
    //     //const list_players= JSON.parse(localStorage.getItem("list_of_player"));
    //     const list_gamer=this.state.list_players.map((item, index) =>(<Board key={index} gamer={item} change_gamer={this.ChangeCurrentPlayer} current_gamer={this.state.current_gamer}
    //                                                            index={index}/>))
    //     return (
    //         <div>
    //              <h1>Game page</h1>
    //             <div>{list_gamer}</div>
    //         </div>
    //     );

    }
   
}
 
export default Game;
