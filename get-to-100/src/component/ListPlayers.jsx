 import React, {Component} from 'react';
 import '../styles.css'

// class ListPlayers extends Component {
//     constructor(props){
//         super(props)
//         this.state = { 
//             // list_of_player: JSON.parse(localStorage.getItem("list_of_player"))
//             list_of_player:props.list_gamers
//          };
//         this.NewGame=this.NewGame.bind(this)
//         }
        
//          NewGame(){
//             localStorage.clear();
//           // localStorage.removeItem("list_of_player")
//            //localStorage.setItem("list_of_player", null)
//            this.setState({list_of_player:null})
//          } 
//     render() { 
//         if(this.state.list_of_player!=null){
                
       
//         return (
          
//             <div>
//               <button  onClick={this.NewGame}>New Game</button>
//                  <ul className='list_players'>
//           {this.state.list_of_player.map((item, index) => (
//             <li key={index}>Gamer {index+1} :{item.lastname} {item.firstname}</li>
//           ))}
//         </ul>
//             </div>
//         );
//           }
//           else{
//            return( <div></div>);
//           }
//     }
// }
 
// export default ListPlayers;
class ListPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_of_player: props.list_gamers,
    };
    this.NewGame = this.NewGame.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.list_gamers !== prevProps.list_gamers) {
      this.setState({ list_of_player: this.props.list_gamers });
    }
  }

  NewGame() {
    localStorage.clear();
    this.setState({ list_of_player: null });
  }

  render() {
    if (this.state.list_of_player != null) {
      return (
        <div>
          <button onClick={this.NewGame}>New Game</button>
          <ul className="list_players">
            {this.state.list_of_player.map((item, index) => (
              <li key={index}>
                Gamer {index + 1}: {item.lastname} {item.firstname}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default ListPlayers;
