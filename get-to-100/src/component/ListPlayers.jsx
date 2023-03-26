import React, {Component} from 'react';
import '../styles.css'

class ListPlayers extends Component {
    constructor(props){
        super(props)
        this.state = { 
            list_of_player: JSON.parse(localStorage.getItem("list_of_player"))
         };}
    render() { 
        if(this.state.list_of_player!=null){
                
       
        return (
            
            <div>
                 <ul className='list_players'>
          {this.state.list_of_player.map((item, index) => (
            <li key={index}>Gamer {index+1} :{item.lastname} {item.firstname}</li>
          ))}
        </ul>
            </div>
        );
          }
    }
}
 
export default ListPlayers;