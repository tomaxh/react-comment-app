import React from 'react';

class Comments extends React.Component {

    state = {
        comment: this.props.comment
    }
    handleDeleteComment = () => {
        this.props.actionDelete.call(this, this.state.comment.id);

    }
    render() {
        return (

            <div id={this.props.num} className='comment-user'>
                <span className='user-name'>{this.state.comment.author}: </span>
                <p>{this.state.comment.content}</p>
                <span className='delete-button' onClick={this.handleDeleteComment}>
                    Delete
                </span>
            </div>

        );
    }

}

export default Comments;
