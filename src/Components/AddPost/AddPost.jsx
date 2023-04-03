import React, { useState } from 'react';

const AddPost = (props) => {

    const [userName, setUserName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            userName: userName,
            post: post
        };
        props.newPost(newPost)
    }
    
    return (
        <form onSubmit={handleSubmit} className='container-add'>
            <div className='container post-text'>
                <label for="username">User Name: </label>
                <input type="text" class="form-control input-border" id="username" placeholder="User Name" value={userName} onChange={(event) => setUserName(event.target.value)}/>
            </div>
            <div className='container post-text'>
                <label for="post">What's on your mind?</label>
                <textarea class="form-control input-border" style={{'width': '891px'}} id="post" rows="3" value={post} onChange={(event) => setPost(event.target.value)}/>
            <button type='submit' className='btn btn-primary' style={{"margin-top": '1em'}}>Create Post</button>
            </div>
        </form>
    )
}

export default AddPost;