import './DisplayPosts.css'
import React, { useState } from 'react';
const DisplayPosts = (props) => {
    const[like, setLike] = useState('inactive')
    const[dislike, setDislike] = useState('inactive')

    function handleLikeClick(){
        if(like === 'inactive'){
            setLike('active')
        }
        if(dislike === 'active'){
            setDislike('inactive')
        }
    };
    function handleDislikeClick(){
        if(dislike === 'inactive'){
            setDislike('active')
        }
        if(like === 'active'){
            setLike('inactive')
        }
    }

    return (
        <section key={props.key} className="container">
            <div><p className="post-text"><h3>@{props.entry.userName}</h3></p> </div>
            <div><p className="post-text"><h3>Post: {props.entry.post}</h3></p> </div>
            <div className='liked'>
                <button className={like} onClick={handleLikeClick}>Like</button>
                <button className={dislike} onClick={handleDislikeClick}>Dislike</button>
            </div>
        </section>
    );
}
 
export default DisplayPosts;
