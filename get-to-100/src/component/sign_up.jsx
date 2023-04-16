import React, {Component} from 'react';
//import '../styles.css'
//import '../styles.css'
import { Link } from 'react-router-dom';
import ListPlayers from './ListPlayers'
import Game from './Game';

class Sign_up extends Component {
    constructor(props){
        super(props)
        this.state = { 
            lastname:'', 
            firstname:'',
            mail:'',
            list_joueur:[],
            play_game:false,
           // enabled:false
         };
    this.handleLastNameChange=this.handleLastNameChange.bind(this);
    this.handleFirstNameChange=this.handleFirstNameChange.bind(this);
    this.handleMailChange=this.handleMailChange.bind(this);
    this.SubmitPlayer=this.SubmitPlayer.bind(this);
    this.PlayGame=this.PlayGame.bind(this);

  //  this.NewGame=this.NewGame.bind(this);
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

     SubmitPlayer(event){
        event.preventDefault();
        var player={
            lastname:this.state.lastname,
            firstname:this.state.firstname,
            mail:this.state.mail,
            list_game:[],
            list_joueur:[],
            list_score:[],//
            game_over:false,
        }
        this.setState({
            list_joueur: [...this.state.list_joueur, player],
            lastname: '',
            firstname: '',
            mail: '',
            
        });
      

     } 
    PlayGame(){
      this.setState({play_game:true})
    }
    render() { 
        const {name, firstname, mail}=this.state;
        if(!this.state.play_game){
        return (
            <div className='sign_in_page'>
                <p  className='title_game'>Welcome to Get to 100 Game 🎮</p>
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
                    <input className='submit_button' type="submit" value="Add Player"></input><br/><br/>
                    <button className='play_button' onClick={this.PlayGame}>Play A Game</button>
                </form>
                
        
                {/* <Link to="/game">
                    <button variant="outlined" >
                     Play Game
                    </button>
                </Link> */}
             
                <ListPlayers list_gamers={this.state.list_joueur} />
            </div>
        );}else{
           return (<div className="game_page"><Game  list_of_gamers={this.state.list_joueur}/></div>);
        }
    }
}
 
export default Sign_up;