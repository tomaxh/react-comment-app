import React from 'react';
import CommentList from './containers/CommentList';
import AddComments from './components/AddComments';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          author: 'Tom Q',
          content: 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.'
        },
        {
          author: 'Mel C',
          content: ' It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.'
        }
      ]
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
      </div>
    );
  }
}
export default App;
