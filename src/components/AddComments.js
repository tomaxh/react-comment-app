import React from 'react';
import uuidv1 from 'uuid';
class AddComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
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
            id: uuidv1(),
            author: this.state.author,
            content: e.target.value,

        })

    }

    onSubmitAdd = (e) => {
        e.preventDefault();
        if (document.getElementById('input-username').value === '' || document.getElementById('input-content').value === '') {
            return false;
        }
        this.props.action.call(this, this.state);
        this.setState({
            author: this.state.author,
            content: '',
            id: '',

        })
        document.getElementById('input-content').value = ''
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
                        <input
                            id='input-username'
                            value={this.state.author}
                            onChange={this.handleChangeAuthor}
                            onBlur={this.handleUsernameBlur} />
                    </div>
                </div>

                <div className='comment-field'>
                    <span className='comment-field-name'>Comment: </span>
                    <div className='comment-field-input'>
                        <textarea
                            id='input-content'
                            value={this.state.content}
                            onChange={this.handleChangeContent}
                            ref={(textarea) => this.textarea = textarea}
                        />
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