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
            author: this.state.author,
            content: '',

        })
        document.getElementById('i1').value = ''
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>Username: </span>
                    <div className='comment-field-input'>
                        <input id='i1' value={this.state.author} onChange={this.onChangeAuthor} />
                    </div>
                </div>

                <div className='comment-field'>
                    <span className='comment-field-name'>Comment: </span>
                    <div className='comment-field-input'>
                        <textarea id='i2' value={this.state.content} onChange={this.onChangeContent} />
                    </div>
                </div>

                <div className='comment-field-button'>
                    <button onClick={this.onSubmitAdd}>Post</button>
                </div>
            </div>

        );
    }
}

export default AddComments;