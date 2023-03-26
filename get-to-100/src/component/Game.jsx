import React, {Component} from 'react';
import Board from './Board'
class Game extends Component {
    state = {  } 
    render(){
        const list_players= JSON.parse(localStorage.getItem("list_of_player"));
        const list_gamer=list_players.map((item, index) =>(<Board key={index} name={item.firstname} />))
        return (
            <div>
                 <h1>Game page</h1>
                <div>{list_gamer}</div>
            </div>
        );

    }
   
}
 
export default Game;
