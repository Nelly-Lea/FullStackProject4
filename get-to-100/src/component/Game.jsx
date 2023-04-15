import React, {Component} from 'react';
import Board from './Board'
import Historic from './Historic';
class Game extends Component {
    constructor(props){
      super(props)
      this.state = {
        list_players:props.list_of_gamers,
        current_gamer:0,
        end_game:false,
        list_record:null,
        all_game_over:false,
      } ;
      this.ChangeCurrentPlayer=this.ChangeCurrentPlayer.bind(this)
      this.winGame=this.winGame.bind(this)
      this.DisplayScore=this.DisplayScore.bind(this)
      // this.EndGame=this.EndGame.bind(this)
      this.Quit=this.Quit.bind(this)
      this.Records=this.Records.bind(this)
      this. UpdateEnd=this.UpdateEnd.bind(this)
      this.NewGame=this.NewGame.bind(this)
    }

    updateGameStatus = () => {
      const updatedPlayers = this.state.list_players.map(player => {
        return {
          ...player,
          game_over: true
        }
      });
    
      this.setState({
        list_players: updatedPlayers
      });
    };
    
    
    ChangeCurrentPlayer()
    {
      if(this.state.current_gamer==this.state.list_players.length-1){
        this.setState({current_gamer:0})
    }else{
        this.setState({current_gamer: this.state.current_gamer+1})
    }
   // console.log("change tour appele")
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
    winGame(number, mail,step){ // quand on gagne
      if(number === 100){
       // const li=this.state.list_players;
       var win_player=null;
        const list_players = [...this.state.list_players]; // create a copy of the outer list
        for(let i = 0; i < list_players.length; i++){
          if(list_players[i].mail === mail){
            win_player=list_players[i];
            // const list_game = [...list_players[i].list_game]; // create a copy of the inner list
            // list_game.push(step + 1); // modify the inner list
            // list_players[i].list_game = list_game; // assign the modified inner list back to the outer list
            break; // exit the loop once the player is found and updated
          }
        }
        window.alert(win_player.firstname +" win");
        this.setState({end_game:true}); // Update the state variable end_game to true
       // this.setState({list_players});
      
      }
    }
    UpdateEnd(){
      const list_players = [...this.state.list_players];
      for(let i = 0; i < list_players.length; i++){
        list_players[i].game_over=true;
       }
       this.setState({list_players})
    }

    DisplayScore(mail, step){ // afficher les scores ds la liste
     // if(this.state.end_game){
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
   // }

    }
    // EndGame(){
    //   if(this.state.current_gamer==this.state.list_players.length-1)
    //   {  this.setState({
    //       current_gamer:0,
    //       end_game:false,

    //     })
    //   }

    // }
    Quit(mail){
      if(this.state.current_gamer==this.state.list_players.length-1)
      {
        this.setState({current_gamer:0})
      }
      var new_list= this.state.list_players.filter(function(player) { 
        return player.mail !== mail
      })
      //console.log(new_list)
      this.Records(new_list);
     // console.log(new_list)
      //const list_players = [...this.state.list_players]; // create a copy of the outer list
      this.setState({list_players:this.state.list_players.filter(function(player) { 
        return player.mail !== mail
      }) });
      //
     //  console.log("quit appele")
    }
    
    NewGame(mail){
      const list_players = [...this.state.list_players]; 
      for(let i = 0; i < list_players.length; i++){
        if(list_players[i].mail === mail)
        {
          list_players[i].game_over=false;
          break;
        }
      }
      this.setState({list_players})

     // this.forceUpdate();
    }
    Records(new_list){
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
    // let average= list_players[0].list_game.reduce((a, b) => a + b) / list_players[0].list_game.length;;
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
    //  let average= list_players[this.state.current_gamer].list_game.reduce((a, b) => a + b) / list_players[this.state.current_gamer].list_game.length;;
     for(let j=0; j<n;j++){
      for(let i = 0; i < list_players.length; i++){
        if(list_players[i].list_game.length > max_len){
          max_len=list_players[i].list_game.length;
          index=i;

          //list_players[i].list_game = list_game;
          //break
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
     //return list_record
    }
    
    
    render(){
      const list_players = this.state.list_players;
      if (!list_players) {
        return <div>No players found</div>;
      }
      
      const list_gamer = this.state.list_players.map((item, index) => (
        <Board key={item.mail} end={item.game_over} NewGame={this.NewGame}UpdateEnd={this.UpdateEnd} displayScore={this.DisplayScore} quit={this.Quit} endGame={this.EndGame}
         end_game={this.state.end_game} gamer={item} winGame={this.winGame} change_gamer={this.ChangeCurrentPlayer} current_gamer={this.state.current_gamer} index={index}
         updateGameStatus={this.updateGameStatus} />
         
      ));
     
    
      //console.log("list des records", this.state.list_record)
      if(list_gamer.length!=0){
      return (
        <div>
          <h1>Game page</h1>
          <div>{list_gamer}</div>
          {this.state.list_record != null ? (
      <div>
        {this.state.list_record.length>=1? <div>First: {this.state.list_record[0].firstname}</div>:null}
        {this.state.list_record.length>=2?<div>Second: {this.state.list_record[1].firstname}</div>:null}
        {this.state.list_record.length==3?<div>Third: {this.state.list_record[2].firstname}</div>  :null}
      </div>
    ) : null}
    {/* <div><Historic list_records={this.state.list_record}/></div> */}
  </div>
      );}
      else{
        return(<p>END GAME</p>)
      }
     
   

    }
   
}
 
export default Game;
