import React, {Component} from 'react';
import Board from './Board'
class Game extends Component {
    constructor(props){
      super(props)
      this.state = {
        list_players:props.list_of_gamers,
        current_gamer:0,
        end_game:false,
      } ;
      this.ChangeCurrentPlayer=this.ChangeCurrentPlayer.bind(this)
      this.winGame=this.winGame.bind(this)
      this.DisplayScore=this.DisplayScore.bind(this)
      // this.EndGame=this.EndGame.bind(this)
      this.Quit=this.Quit.bind(this)
    }
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
    
      //const list_players = [...this.state.list_players]; // create a copy of the outer list
      this.setState({list_players: this.state.list_players.filter(function(player) { 
        return player.mail !== mail
      })});
     //  console.log("quit appele")
    }
    
    NewGame(){
      this.forceUpdate();
    }

    
    
    render(){
      const list_players = this.state.list_players;
      if (!list_players) {
        return <div>No players found</div>;
      }
      
      const list_gamer = this.state.list_players.map((item, index) => (
        <Board key={item.mail} displayScore={this.DisplayScore} quit={this.Quit} endGame={this.EndGame}
         end_game={this.state.end_game} gamer={item} winGame={this.winGame} change_gamer={this.ChangeCurrentPlayer} current_gamer={this.state.current_gamer} index={index} />
      ));
      // if(this.state.end_game){
      //   this.setState({end_game:false})
         
      // }
      if(this.state.end_game){
        return(
          <div>
              <button onClick={this.NewGame} >New Game</button>
              <h1>Game page</h1>
          <div>{list_gamer}</div>
          </div>
        )
        
      }
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

// Au cas ou il faut arreter le jeux pour tout le monde
// import React, {Component} from 'react';
// class Game extends Component {
//   constructor(props){
//           super(props)
//           this.state = {
//             list_players:props.list_of_gamers,
//             current_gamer:0,
//             end_game:false,
//           } ;
//           this.Enabled=this.Enabled.bind(this);
//           this.AddOne=this.AddOne.bind(this);
//           this.ChangeCurrentPlayer=this.ChangeCurrentPlayer.bind(this)
//           this.MinusOne=this.MinusOne.bind(this);
//           this.MultiplyTwo=this.MultiplyTwo.bind(this);
//           this.DividTwo=this.DividTwo.bind(this);
//           this.WinGame=this.WinGame.bind(this);
//           this.Quit=this.Quit.bind(this);
//           this.NewGame=this.NewGame.bind(this);
//         }
//         ChangeCurrentPlayer()
//     {
//       if(this.state.current_gamer==this.state.list_players.length-1){
//         this.setState({current_gamer:0})
//     }else{
//         this.setState({current_gamer: this.state.current_gamer+1})
//     }
//       // if(this.state.current_gamer==(JSON.parse(localStorage.getItem("list_of_player"))).length-1){
//       //     this.setState({current_gamer:0})
//       // }else{
//       //     this.setState({current_gamer: this.state.current_gamer+1})
//       // }
     
//     }
//         AddOne(){
//           const list_players = [...this.state.list_players];
//           list_players[this.state.current_gamer].number+=1;
//           list_players[this.state.current_gamer].step+=1;
//           this.setState({list_players})
//           var number= list_players[this.state.current_gamer].number;
//           if(number==100){
//             this.WinGame()
//           }else{

//             this.ChangeCurrentPlayer()
//           }
         
          
//         //   if(this.state.number+1==100){
//         //       this.WinGame(this.state.number+1, this.props.gamer.mail, this.state.step)
//         //   }else{
//         //       this.handleChange();
//         //   }
//         //  // this.DisplayScore(this.props.gamer.mail, this.state.step)
//        }
//        MinusOne(){
//         const list_players = [...this.state.list_players];
//         list_players[this.state.current_gamer].number-=1;
//         list_players[this.state.current_gamer].step+=1;
//         this.setState({list_players})
//         var number= list_players[this.state.current_gamer].number;
//         if(number==100){
//           this.WinGame()
//         }else{

//           this.ChangeCurrentPlayer()
//         }
        

//        }
//        MultiplyTwo(){
//         const list_players = [...this.state.list_players];
//         list_players[this.state.current_gamer].number*=2;
//         list_players[this.state.current_gamer].step+=1;
//         this.setState({list_players})
//         var number= list_players[this.state.current_gamer].number;
//         if(number==100){
//           this.WinGame()
//         }else{

//           this.ChangeCurrentPlayer()
//         }
        
//        }
//        DividTwo(){
//         const list_players = [...this.state.list_players];
//         list_players[this.state.current_gamer].number/=2;
//         list_players[this.state.current_gamer].step+=1;
//         this.setState({list_players})
//         var number= list_players[this.state.current_gamer].number;
//         if(number==100){
//           this.WinGame()
//         }else{

//           this.ChangeCurrentPlayer()
//         }
//        }

//        WinGame(){
//         var win_player=this.state.list_players[this.state.current_gamer]
//         window.alert(win_player.firstname +" win");
//         //this.setState({end_game: true})
//         const list_players = [...this.state.list_players];
//         const list_game = [...list_players[this.state.current_gamer].list_game]; // create a copy of the inner list
//         var step=list_players[this.state.current_gamer].step;
//         list_game.push(step); // modify the inner list
//         list_players[this.state.current_gamer].list_game = list_game;
//         for(var i=0; i<list_players.length;i++){
//           list_players[i].end_game=true;
//         }
//         this.setState({list_players})

//        }
//        Quit(){
//         console.log(this.state)
//         var mail=this.state.list_players[this.state.current_gamer].mail;
//               const list_players = [...this.state.list_players]; // create a copy of the outer list
//               this.setState({list_players: this.state.list_players.filter(function(player) { 
//                 return player.mail !== mail
//               })});
//               this.ChangeCurrentPlayer()
//               if(this.state.list_players.length==2){
//                // this.ChangeCurrentPlayer()
//                 alert("you can't play alone")
//                 this.setState({end_game:true})
                
//               }
              
//                 }
//         NewGame(){
//           const list_players = [...this.state.list_players];
          
//           list_players[this.state.current_gamer].number=Math.floor(Math.random() * (99 -0 + 1)) +0
//           list_players[this.state.current_gamer].step=0
//           list_players[this.state.current_gamer].end_game=false
//           this.setState({list_players})
//         }

//         Enabled(index){
//           if(this.state.current_gamer==index){
//               return true
//           }else{
//               return false
//           }
         
//        }
//   render() { 
//     //var list_score=this.state.score.map((item, index) =>(<span key={index}>{item} </span>));
    
//     const list_gamer = this.state.list_players.map((item, index) => (
//       <div  key={index}>
//         {item.end_game ?<div>  <p>Gamer: {item.firstname}</p>
//                                <span >{item.number}</span>
//                                <button onClick={this.Quit} disabled={!this.Enabled(index)}>Quit</button> 
//                                <button onClick={this.NewGame} disabled={!this.Enabled(index)}>New Game</button>
//                                <p>Step: {item.step}</p>
//                                <p>Your Score: {item.list_game.map((item, index)=>(<span key={index}>{item} </span>))}</p>
//                                </div>
//                                :<div>
//                                    <p>Gamer: {item.firstname}</p>
//                                   <span >{item.number}</span>
//                                   <button onClick={this.AddOne} disabled={!this.Enabled(index)} >+1</button>
//                                   <button onClick={this.MinusOne}  disabled={!this.Enabled(index)}>-1</button>
//                                   <button onClick={this.MultiplyTwo} disabled={!this.Enabled(index)}>x2</button>
//                                   <button onClick={this.DividTwo}  disabled={!this.Enabled(index)}>/2</button>
//                                   <p>Step: {item.step}</p>
//                                   <p>Your Score: {item.list_game.map((item, index)=>(<span key={index}>{item} </span>))}</p>
                                
//                                  </div> }
       
   
      
//   </div>
//     ))
     
//     if(this.state.end_game){
//       return(<p>END GAME</p>)
//     }else{
   
//     return (
//       <div>
//                   <h1>Game page</h1>
//                  <div>{list_gamer}</div>
//             </div>
//     );}
//   }
// }
 
// export default Game;