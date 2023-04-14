import React, {Component} from 'react';
class Historic extends Component {
    constructor(props){
        super(props)
        this.state = {
          list_records:props.list_records,
        //   first:props.list_records[0].firstname,
        //   second:props.list_records[1].firstname,
        //   third:props.list_records[2].firstname,
        }
    }

    render() { 
        // console.log("list des records", this.state.list_records)
        if(this.state.list_records!=null){
        return (<div>
            {this.state.list_records.length>=1?
              <div>First: {this.state.list_records[0].firstname}</div>:null}
              {this.state.list_records.length>=2?
            <div>Second: {this.state.list_records[1].firstname}</div>:null}
            {this.state.list_records.length==3?
            <div>Third: {this.state.list_records[2].firstname}</div>: null  }
        </div>);}
        else{
            return(<div></div>)
        }
    }
}
 
export default Historic;