import React from 'react';
import Comments from '../components/Comments';

class CommentList extends React.Component {
    componentWillUnmount() {
        console.log('commentlist unmount');
    }
    render() {
        return (
            this.props.comments.map((comment, i) => (
                <div key={i} className='commentlist'>
                    <Comments num={i} comment={comment} />
                </div>
            )))

    }

}
export default CommentList;