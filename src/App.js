import React from 'react';
import CommentList from './containers/CommentList';
import AddComments from './components/AddComments';
import Timer from './components/Timer';
import './App.css';
import uuidv1 from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          id: uuidv1(),
          author: 'Abraham Lincoln',
          content: 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.'
        },

      ],
    };
  }
  shouldComponentUpdate(prevState) {
    if (prevState !== this.state) {
      return true
    }

  }

  newComments = (comment) => {
    this.setState({
      comments: [...this.state.comments, comment]
    });
  }

  deleteComments = (target_id) => {
    this.setState({
      comments: [...this.state.comments].filter((comment) => (comment.id !== target_id))
    })
  }
  render() {

    return (
      <div className='wrapper'>
        <h1>Comment App</h1>

        <AddComments action={this.newComments} />
        <br />
        <CommentList comments={this.state.comments} actionDelete={this.deleteComments} />
        <div className='timer'>
          <Timer />
        </div>
      </div>
    );
  }
}
export default App;
