import React from 'react';
import Comments from '../components/Comments';

class CommentList extends React.Component {

    render() {
        return (
            this.props.comments.map((comment, i) => (
                <div key={i} className='commentlist'>
                    <Comments num={i} comment={comment} actionDelete={this.props.actionDelete} />
                </div>
            )))

    }

}
export default CommentList;