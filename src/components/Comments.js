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
            <div id={this.props.num}>
                <p>{this.state.comment.author}: </p>
                <p>{this.state.comment.content}</p>
                 < hr /> 
            </div >
        );
    }

}

export default Comments;