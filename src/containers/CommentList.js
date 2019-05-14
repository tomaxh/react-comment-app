import React from 'react';
import Comments from '../components/Comments';

class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.comments.map((comment, i) => (
                <Comments key={i} num={i} comment={comment} />
            )))

    }

}
export default CommentList;