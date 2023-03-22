import React, {Component} from 'react';
import '../styles.css'
class Sign_up extends Component {
    // constructor(props){
    //     super(props)
        state = { 
            name:'', 
            firtsname:'',
            mail:''
         };
    // this.SubmitPlayer=this.SubmitPlayer(this);
    // }
   
     handleNameChange=event=>{
        console.log(event)
        this.setState({name: event.target.value});
     }; 
     handleFirstNameChange=event=>{
        this.setState({firstname: event.target.value});
     }; 
     handleMailChange=event=>{
        this.setState({mail: event.target.value});
     }; 

    //  SubmitPlayer(){
    //     var player={
    //         name:this.state.name,
    //         firstname:this.state.firstname,
    //         mail:this.state.mail
    //     }
    //     localStorage.setItem("player1", JSON.stringify(player));
    //  }  onSubmit={this.SubmitPlayer}
    render() { 
        const {name, firstname, mail}=this.state;
        return (
            <div>
                <p  className='title_game'>Welcome to Get to 100 Game</p>
                <form className='form_registration'> 
                    <label className='title_label'>
                        Name:
                    </label><br />
                    <input className='input_field' type="text" value={name} onChange={this.handleNameChange} required></input>
                    <br />
                    <label  className='title_label'>
                        First Name:
                    </label><br />
                    <input className='input_field' type="text" value={firstname} onChange={this.handleFirstNameChange} required></input>
                    <br />
                    <label  className='title_label'>
                        Mail:
                    </label><br />
                    <input className='input_field' type="email" value={mail} onChange={this.handleMailChange} required></input><br />
                    <input className='submit_button' type="submit" value="Add Player"></input>
                </form>
            </div>
        );
    }
}
 
export default Sign_up;