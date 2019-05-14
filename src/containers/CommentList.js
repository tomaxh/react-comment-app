import React from 'react';
import Comments from '../components/Comments';

class CommentList extends React.Component {

    render() {
        return (
            this.props.comments.map((comment, i) => (
                <div className='commentlist'>
                    <Comments key={i} num={i} comment={comment} />
                </div>
            )))

    }

}
export default CommentList;