import React, { useState } from 'react';

const AddPost = (props) => {
    const {userName, setUserName} = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            post: ''
        };
        props.addPostProperty(newPost)
    }
    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className="form-group">
                <label for="username">User Name</label>
                <input type="text" class="form-control" id="username" placeholder="User Name" value={userName} onChange={(event) => setUserName(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label for="post">What's on your mind?</label>
                <textarea class="form-control" id="post" rows="3" value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary' style={{"margin-top": '1em', "color": "teal"}}>Create Post</button>
        </form>
    )
}

export default AddPost;