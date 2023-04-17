import React, {Component} from 'react';
import Board from './Board'
import Historic from './Historic';
import Sign_up from './sign_up';
class Game extends Component {
    constructor(props){
      super(props)
      this.state = {
        list_players:props.list_of_gamers,
        current_gamer:0,
        end_game:false,
        list_record:null, // list of the 3 top players
        all_game_over:false,
        new_game:false, // a la fin c'est pour m'aider a afficher un jeux si on appuis sur le bouton
      } ;
      this.ChangeCurrentPlayer=this.ChangeCurrentPlayer.bind(this)
      this.DisplayScore=this.DisplayScore.bind(this)
      this.Quit=this.Quit.bind(this)
      this.Records=this.Records.bind(this)
      this.NewGame=this.NewGame.bind(this)
      this.StartNewGame=this.StartNewGame.bind(this)
      this.updateGameStatus=this.updateGameStatus.bind(this)
    }

    updateGameStatus () { // we update all gamer that the game is over
      const list_players = [...this.state.list_players]; 
      for(let i=0; i<list_players.length;i++ ){{
        list_players[i].game_over=true;
      }}
      this.setState({
        list_players
      });
      
    };
    
    
    ChangeCurrentPlayer()
    {
      if(this.state.current_gamer==this.state.list_players.length-1){
        this.setState({current_gamer:0})
    }else{
        this.setState({current_gamer: this.state.current_gamer+1})
    }
     
    }
 

    DisplayScore(mail, step){ // afficher les scores ds la liste
      const list_players = [...this.state.list_players]; // create a copy of the outer list
      for(let i = 0; i < list_players.length; i++){
        if(list_players[i].mail === mail){
          const list_game = [...list_players[i].list_game]; // create a copy of the inner list
          list_game.push(step); // modify the inner list
          list_players[i].list_game = list_game;
          break
        }
      }
      this.setState({list_players})
      console.log(this.state.list_players)
      this.Records();

    }
    Quit(mail){
      if(this.state.current_gamer==this.state.list_players.length-1)
      {
        this.setState({current_gamer:0})
      }
      var new_list= this.state.list_players.filter(function(player) { 
        return player.mail !== mail
      })
      this.Records(new_list);
      this.setState({list_players:this.state.list_players.filter(function(player) { 
        return player.mail !== mail
      }) });

    }
    
    NewGame(mail){ // play new game for the players that clicked on new game button
      const list_players = [...this.state.list_players]; 
      for(let i = 0; i < list_players.length; i++){
        if(list_players[i].mail === mail)
        {
          list_players[i].game_over=false;
          break;
        }
      }
      this.setState({list_players})
    }
    Records(new_list){ // put the 3 top players in array list_record
     var list_records=[]
     var list_players=[]
     if(new_list!=null){
       list_players = new_list;
     }else{
      list_players = [...this.state.list_players]; // create a copy of the outer list
     }
    
     let max_len=0;
     let index=0;
     let n=0;
     
     if(list_players.length==0){
      n=0
     }else{
      if(list_players.length==1){
        n=1
      }else{
        if(list_players.length==2){
          n=2
        }else{
          n=3
        }
      }
     }
     let average;
     for(let k=0; k<n;k++){
      if(list_players[k].list_game.length!=0 )
      {
        var sum=list_players[k].list_game.reduce((a, b) => a + b);
        var l=list_players[k].list_game.length
        console.log(sum +" "+ l)
        average=list_players[k].list_game.reduce((a, b) => a + b) / list_players[k].list_game.length;
        break;
      }
        
     }
     for(let j=0; j<n;j++){
      for(let i = 0; i < list_players.length; i++){
        if(list_players[i].list_game.length > max_len){
          max_len=list_players[i].list_game.length;
          index=i;

        }
          if(list_players[i].list_game.length == max_len&& list_players[i].list_game.length!=0)
          {
            if(list_players[i].list_game.reduce((a, b) => a + b) / list_players[i].list_game.length<average){
              max_len=list_players[i].list_game.length;
              index=i;
              average=list_players[i].list_game.reduce((a, b) => a + b) / list_players[i].list_game.length;

            }
           
          }
        

      }
      max_len=0
      list_records.push(list_players[index])
      list_players.splice(index,1)
      index=0;

     }
      this.setState({list_record:list_records})
    }
    StartNewGame(){ // start new game with new players
      this.setState({new_game:true})
    }
    
    render(){
      const list_players = this.state.list_players;
      if (!list_players) {
        return <div>No players found</div>;
      }
      const list_gamer = this.state.list_players.map((item, index) => (
        <Board key={item.mail} end={item.game_over} NewGame={this.NewGame} displayScore={this.DisplayScore} quit={this.Quit}
         gamer={item} winGame={this.winGame} change_gamer={this.ChangeCurrentPlayer} current_gamer={this.state.current_gamer} index={index}
         updateGameStatus={this.updateGameStatus} />
         
      ));
     
      if(list_gamer.length!=0){
      return (
        <div>
          <h1 className='title_game'>Get to 100</h1>
          <div><Historic list_records={this.state.list_record}/></div> 
          <div className='all_boards' >{list_gamer}</div>
          
     
  </div>
      );}
      else{
        return(<div>
          {!this.state.new_game ?<div>
          <p className='end_game'>END GAME</p>
          <button className='play_button new_game_button' onClick={this.StartNewGame}>Play New Game</button>
          </div>:
           <Sign_up />}
           </div>
        )
      }
     
   

    }
   
}
 
export default Game;
