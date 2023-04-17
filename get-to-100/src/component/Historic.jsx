import React, {Component} from 'react';
class Historic extends Component {


    render() { 
       return(
        <div>
        {this.props.list_records != null ? (
            <div className='best_players_div'> 
              <p className='title_best_player'>The top 3 players</p>
              {this.props.list_records.length>=1? <div className='best_player'>🥇 First: {this.props.list_records[0].firstname}</div>:null}
              {this.props.list_records.length>=2?<div className='best_player'>🥈 Second: {this.props.list_records[1].firstname}</div>:null}
              {this.props.list_records.length==3?<div className='best_player'>🥉 Third: {this.props.list_records[2].firstname}</div>  :null}
            </div>
          ) : null}
          </div>
       )
    }
}
 
export default Historic;