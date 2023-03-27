import React, {Component} from 'react';
import '../styles.css'
import { Link } from 'react-router-dom';
import ListPlayers from './ListPlayers'
class Sign_up extends Component {
    constructor(props){
        super(props)
        this.state = { 
            lastname:'', 
            firstname:'',
            mail:'',
           // enabled:false
         };
    this.handleLastNameChange=this.handleLastNameChange.bind(this);
    this.handleFirstNameChange=this.handleFirstNameChange.bind(this);
    this.handleMailChange=this.handleMailChange.bind(this);
    this.SubmitPlayer=this.SubmitPlayer.bind(this);
    this.NewGame=this.NewGame.bind(this);
   }
   
     handleLastNameChange(event){
        this.setState({lastname: event.target.value});
     } 
     handleFirstNameChange(event){
        this.setState({firstname: event.target.value});
     } 
     handleMailChange(event){
        this.setState({mail: event.target.value});
     }

     SubmitPlayer(){
        var player={
            lastname:this.state.lastname,
            firstname:this.state.firstname,
            mail:this.state.mail,
            list_game:[],
           // enabled: this.state.enabled
        }
        let list_of_player;
        list_of_player=JSON.parse(localStorage.getItem("list_of_player"));
        if(list_of_player!=null)
        { 
            localStorage.removeItem("list_of_player")
            list_of_player.push(player);
            localStorage.setItem("list_of_player", JSON.stringify(list_of_player));
        }else{
            var new_list_player=[]
            player.enabled=true
            new_list_player.push(player)
            localStorage.setItem("list_of_player", JSON.stringify(new_list_player))
        }
        localStorage.setItem(this.state.mail, JSON.stringify(player));

     } 
     NewGame(){
        localStorage.clear();
     } 
    render() { 
        const {name, firstname, mail}=this.state;
        return (
            <div>
                <p  className='title_game'>Welcome to Get to 100 Game</p>
                <form className='form_registration' onSubmit={this.SubmitPlayer}> 
                    <label className='title_label'>
                        Last Name:
                    </label><br />
                    <input className='input_field' type="text" value={this.state.lastname} onChange={this.handleLastNameChange} required></input>
                    <br />
                    <label  className='title_label'>
                        First Name:
                    </label><br />
                    <input className='input_field' type="text" value={this.state.firstname} onChange={this.handleFirstNameChange} required></input>
                    <br />
                    <label  className='title_label'>
                        Mail:
                    </label><br />
                    <input className='input_field' type="email" value={this.state.mail} onChange={this.handleMailChange} required></input><br />
                    <input className='submit_button' type="submit" value="Add Player"></input>
                </form>
        
                <Link to="/game">
                    <button variant="outlined" >
                     Play Game
                    </button>
                </Link>
                <button onClick={this.NewGame}>New Game</button>
                <ListPlayers />
            </div>
        );
    }
}
 
export default Sign_up;