import React from 'react';

class Comments extends React.Component {
    
    state = {
            comment: this.props.comment
    }
    
    render() {
        return(

        <div id={this.props.num} >
        <div className='comment-user'>
            <span>{this.state.comment.author}: </span>
        </div> 
        <p>{this.state.comment.content}</p>
        </div>         
        );
    }
                
}
        
export default Comments;
