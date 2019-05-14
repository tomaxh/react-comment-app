import React from 'react';

class AddComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            content: '',
        }
    }
    onChangeAuthor = (e) => {
        this.setState({
            author: e.target.value,
            content: this.state.content,
        })
    }

    onChangeContent = (e) => {
        this.setState({
            author: this.state.author,
            content: e.target.value,
        })
        console.log(this.state);

    }

    onSubmitAdd = (e) => {
        e.preventDefault();
        this.props.action.call(this, this.state);
        this.setState({

        })
        document.getElementById('adding').reset();
    }

    render() {
        return (
            <form id='adding' onSubmit={this.onSubmitAdd}>
                <span>Username: </span>
                <input type='text' className='author' onChange={this.onChangeAuthor} required style={{ width: '350px' }} />
                <br />
                <span>Comment: </span>
                <textarea type='text' className='content' onChange={this.onChangeContent} required style={{ width: '350px', verticalAlign: 'top' }} />
                <br />

                <button type='submit' className='submit' >Post</button>
            </form>
        );
    }
}

export default AddComments;