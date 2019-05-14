import React from 'react';

class Comments extends React.Component {
    
    state = {
            comment: this.props.comment
    }
    
    render() {
        return(

        <div id={this.props.num} className='comment-user'>
        <span>{this.state.comment.author}: </span>
        <p>{this.state.comment.content}</p>
        </div>     
        
        );
    }
                
}
        
export default Comments;
