import React from 'react';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: this.props.comment
        }
    }
    render() {
        return (
            <div id={this.props.num} >
                <p className='comment'>{this.state.comment.author}: </p>
                <p className='comment-user'>{this.state.comment.content}</p>
            </div >
        );
    }

}

export default Comments;