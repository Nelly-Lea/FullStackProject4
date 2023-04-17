 import React, {Component} from 'react';
 import '../styles.css'


class ListPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_of_player: props.list_gamers,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.list_gamers !== prevProps.list_gamers) {
      this.setState({ list_of_player: this.props.list_gamers });
    }
  }



  render() {
    if (this.state.list_of_player != null) {
      return (
        <div>
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
