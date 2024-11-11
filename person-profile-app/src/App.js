import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Software engineer with a passion for developing innovative programs.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Engineer"
      },
      shows: false,
      mountedTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows, mountedTime: 0 });
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div style={{ marginTop: '20px' }}>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} style={{ width: '150px', borderRadius: '8px' }} />
            <p><strong>Profession:</strong> {person.profession}</p>
            <p><strong>Time since mounted:</strong> {mountedTime} seconds</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;

