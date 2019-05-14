import React from 'react';

class AddComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            content: '',
        }
    }
    componentWillMount() {
        this._loadUsername()
    }
    // use react ref for textarea
    componentDidMount() {
        this.textarea.focus();
    }


    _loadUsername() {
        const author = localStorage.getItem('username')
        if (author) {
            this.setState({ author })
        }
    }
    _saveUsername(username) {
        localStorage.setItem('username', username)
    }
    handleChangeAuthor = (e) => {
        this.setState({
            author: e.target.value,
            content: this.state.content,
        })
    }

    handleChangeContent = (e) => {
        this.setState({
            author: this.state.author,
            content: e.target.value,
        })

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

    handleUsernameBlur = (e) => {
        this._saveUsername(e.target.value)

    }


    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>Username: </span>
                    <div className='comment-field-input'>
                        <input id='i1' value={this.state.author} onChange={this.handleChangeAuthor} onBlur={this.handleUsernameBlur} />
                    </div>
                </div>

                <div className='comment-field'>
                    <span className='comment-field-name'>Comment: </span>
                    <div className='comment-field-input'>
                        <textarea id='i2' value={this.state.content} onChange={this.handleChangeContent} ref={(textarea) => this.textarea = textarea} />
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