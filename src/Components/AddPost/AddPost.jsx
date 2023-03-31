import React, { useState } from 'react';

const AddPost = (props) => {
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
            <div className='form-group'>
                <label>New Post</label>
                <input type= 'text'/>
            </div>
            <button type='submit' className='btn btn-primary' style={{"margin-top": '1em', "color": "teal"}}>Add</button>
        </form>
    )
}

export default AddPost;