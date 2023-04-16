import React, {Component} from 'react';
import '../styles.css'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = { 
            //name:props.gamer.firstname,
            gamer:props.gamer,
            number: Math.floor(Math.random() * (99 -0 + 1)) +0,
            step: 0, 
            score:props.gamer.list_game,
            game_over_gamer:props.end
           // end_game:false,
            // end_all_game: props.end_game,
            // end_current_game:false,
            // quit_game: false,
           // enabled: props.gamer.enabled
         };
         this.handleChange=this.handleChange.bind(this);
         this.AddOne=this.AddOne.bind(this);
         this.MinusOne=this.MinusOne.bind(this);
         this.MultiplyTwo=this.MultiplyTwo.bind(this);
         this.DividTwo=this.DividTwo.bind(this);
          this.WinGame=this.WinGame.bind(this);
         this.DisplayScore=this.DisplayScore.bind(this);
          this.NewGame=this.NewGame.bind(this);
          this.Quit=this.Quit.bind(this);
         this.Enabled=this.Enabled.bind(this);
         
        }
        // componentDidMount(){
        //     this.DisplayScore(this.props.gamer.mail, this.state.step)
        // }
         AddOne(){
            this.setState({number: this.state.number+1})
            this.setState({step: this.state.step+1})
           
            if(this.state.number+1==100){
                this.WinGame(this.state.number+1, this.props.gamer.mail, this.state.step)
            }else{
                this.handleChange();
            }
           // this.DisplayScore(this.props.gamer.mail, this.state.step)
         }
         MinusOne(){
          //  this.state.number--;
           // this.state.step++;
           this.setState({number: this.state.number-1})
           this.setState({step: this.state.step+1})
           if(this.state.number-1==100){
            this.WinGame(this.state.number-1, this.props.gamer.mail, this.state.step)
        }else{
            this.handleChange();
        }
         
           
         }
         MultiplyTwo(){
           // this.state.number=this.state.number*2;
           //this.state.step++;
           this.setState({number: this.state.number*2})
            this.setState({step: this.state.step+1})
           if(this.state.number*2==100){
            this.WinGame(this.state.number*2, this.props.gamer.mail, this.state.step)
        }else{
            this.handleChange();
        }
         
         }
         DividTwo(){
           // this.state.number=this.state.number/2;
            //this.state.step++;
            this.setState({number: this.state.number/2})
            this.setState({step: this.state.step+1})
               if(this.state.number/2==100){
                this.WinGame(this.state.number/2, this.props.gamer.mail, this.state.step)
            }else{
                this.handleChange();
            }
             
         }
         handleChange(){
            this.props.change_gamer()
         }
         Enabled(){
            if(this.props.current_gamer==this.props.index){
                return true
            }else{
                return false
            }
           
         }
         WinGame(){
         // this.props.winGame(number, mail, step)

            this.setState({ score: [...this.state.score, this.state.step + 1] })
            //this.setState({end_all_game: true})
           // this.setState({end_game:true})
           this.setState({game_over_gamer:true})
            this.DisplayScore(this.props.gamer.mail, this.state.step)
          //  this.props.UpdateEnd();
          const { updateGameStatus } = this.props;
          updateGameStatus();
          
      
         }
          DisplayScore(mail, step){
            //if(this.props.end_game){
                //console.log(this.state.end_all_game)
              this.props.displayScore(mail,step+1)
             // this.setState({score: this.state.score.push(this.state.step)}) // enlever +1
              //this.setState({ score: [...this.state.score, this.state.step+1] })
           }

        //   }
         NewGame(){
            this.setState({
                number: Math.floor(Math.random() * (99 -0 + 1)) +0,
                step: 0,
            })
            this.setState({game_over_gamer:false})
            this.props.NewGame(this.state.gamer.mail)
            //this.setState({end_game:false})
           // this.setState({end_current_game:false})
            //this.setState({quit_game:false});
            //this.setState({end_all_game:false})
            //this.props.endGame(this.props.gamer.mail, this.state.score)

         }
         Quit(){
          //  this.setState({quit_game:true})
            this.props.quit(this.state.gamer.mail)
          
            
            //this.handleChange();
        }
    render() {
        var list_score=this.state.score.map((item, index) =>(<span key={index}>{item} </span>));
    //     const listItems = numbers.map((number) =>
    // <li>{number}</li>
   
        // this.DisplayScore(this.props.gamer.mail, this.state.step);
        //this.EndGame(this.props.gamer.mail, this.state.score);
        // if(this.state.end_game){
        if(this.props.gamer.game_over){
            return(<div className='board'>
                <p>Gamer: {this.state.gamer.firstname}</p>
                                <span className='number' >{this.state.number}</span><br/><br/>
                                <button className='button' onClick={this.Quit} disabled={!this.Enabled()}>Quit</button> 
                                <button className='button' onClick={this.NewGame} disabled={!this.Enabled()}>New Game</button>
                                <p>Step: {this.state.step}</p>
                                <p>Your Score: {list_score}</p>
                                </div>);
        }else{
        return (
            <div className='board'>
            {this.Enabled()?<p className='your_turn'>Your turn</p>:null}
            <p>Gamer: {this.state.gamer.firstname}</p>
            <span  className='number'>{this.state.number}</span><br/><br/>
            <button className='operation_button' onClick={this.AddOne} disabled={!this.Enabled()}>+1</button>
            <button className='operation_button' onClick={this.MinusOne}disabled={!this.Enabled()}>-1</button>
            <button className='operation_button' onClick={this.MultiplyTwo}disabled={!this.Enabled()}>x2</button>
            <button className='operation_button' onClick={this.DividTwo}disabled={!this.Enabled()}>/2</button>
            <p>Step: {this.state.step}</p>
            <p>Your Score: {list_score}</p>
           
        </div>
     
            
        );}
    }
}
 
export default Board;