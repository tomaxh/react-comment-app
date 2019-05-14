import React from 'react';
import CommentList from './containers/CommentList';
import AddComments from './components/AddComments';
import Timer from './components/Timer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          author: 'Abraham Lincoln',
          content: 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.'
        },

      ],
    };
  }


  newComments = (comment) => {
    this.setState({
      comments: [...this.state.comments, comment]
    });
  }
  render() {
    return (
      <div className='wrapper'>
        <h1>Comment App</h1>

        <AddComments action={this.newComments} />
        <br />
        <CommentList comments={this.state.comments} />
        <div className='timer'>
          <Timer />
        </div>
      </div>
    );
  }
}
export default App;
