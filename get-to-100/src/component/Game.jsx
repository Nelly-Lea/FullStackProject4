import React, {Component} from 'react';
import Board from './Board'
import Historic from './Historic';
import Sign_up from './sign_up';
class Game extends Component {
    constructor(props){
      super(props)
      this.state = {
        list_players:props.list_of_gamers, // updated list => que les joueurs supprimes n'y sont pas
        list_players_historic:props.list_player_historic, // all players (meme avec ceux qui quittent)
        current_gamer:0,
       // end_game:false,
        list_record:null, // list of the 3 top players
        //all_game_over:false,
        new_game:false, // a la fin c'est pour m'aider a afficher un jeux si on appuis sur le bouton
      } ;
      this.ChangeCurrentPlayer=this.ChangeCurrentPlayer.bind(this)
      this.DisplayScore=this.DisplayScore.bind(this)
      this.Quit=this.Quit.bind(this)
      this.Records=this.Records.bind(this)
      this.NewGame=this.NewGame.bind(this)
      this.StartNewGame=this.StartNewGame.bind(this)
   //   this.updateGameStatus=this.updateGameStatus.bind(this)
    }

    // updateGameStatus () { // we update all gamer that the game is over
    //   const list_players = [...this.state.list_players]; 
    //   for(let i=0; i<list_players.length;i++ ){{
    //     list_players[i].game_over=true;
    //   }}
    //   this.setState({
    //     list_players
    //   });
      
    // };
    
    
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
      
      this.setState({list_players: list_players})
      console.log(this.state.list_players)

      const list_players_historic = [...this.state.list_players_historic];//create deep copy pour ne pas pointer sur le meme object list
  
      var player=list_players_historic.filter(function(player) { 
        return player.mail == mail
      })
      if(player!=null)
      {
        for(let i = 0; i < list_players_historic.length; i++){
          if(list_players_historic[i].mail === mail){
            var list_game2 =  list_players_historic[i].list_game // create a copy of the inner list
            list_game2.push(step); // modify the inner list
            list_players_historic[i].list_game = list_game2;
            break
          }
        }
        this.setState({list_players_historic: list_players_historic})
      }
      this.Records();

    }
    Quit(mail){
      if(this.state.current_gamer==this.state.list_players.length-1)
      {
        this.setState({current_gamer:0})
      }
      
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
    //new_list
    Records(){ // put the 3 top players in array list_record
     
      const list_all_players=[...this.state.list_players_historic]
    //  console.log(list_all_players)
     var list_records=[]
     let max_len=0;
     let index=0; // g remplace tous les list_player par list_all_player
     let n=0;
     
     if(list_all_players.length==0){
      n=0
     }else{
      if(list_all_players.length==1){
        n=1
      }else{
        if(list_all_players.length==2){
          n=2
        }else{
          n=3
        }
      }
     }
     let average=0;
 
    
     for(let j=0; j<n;j++){
      average=Infinity;
      for(let i = 0; i < list_all_players.length; i++){
        if(list_all_players[i].list_game.length > max_len){
          max_len=list_all_players[i].list_game.length;
          index=i;

        }
          if(list_all_players[i].list_game.length == max_len&& list_all_players[i].list_game.length!=0)
          {
            if(list_all_players[i].list_game.reduce((a, b) => a + b) / list_all_players[i].list_game.length<average){
              max_len=list_all_players[i].list_game.length;
              index=i;
              average=list_all_players[i].list_game.reduce((a, b) => a + b) / list_all_players[i].list_game.length;

            }
           
          }
        

      }
      max_len=0
      list_records.push(list_all_players[index])
      list_all_players.splice(index,1)
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
      //end={item.game_over}  updateGameStatus={this.updateGameStatus}
      var list_gamer = this.state.list_players.map((item, index) => (
        <Board key={item.mail} NewGame={this.NewGame} displayScore={this.DisplayScore} quit={this.Quit}
         gamer={item} winGame={this.winGame} change_gamer={this.ChangeCurrentPlayer} current_gamer={this.state.current_gamer} index={index}
         />
         
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
