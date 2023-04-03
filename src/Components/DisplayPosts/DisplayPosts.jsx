import './DisplayPosts.css'
const DisplayPosts = (props) => {
    return (
        <div className='list-group'>
            {props.parentEntries.map((entry,index,liked) => {
                    return (
                        <section key={index} className="container">
                            <div><p className="post-text"><h3>@{entry.userName}</h3></p> </div>
                            <div><p className="post-text"><h3>Post: {entry.post}</h3></p> </div>
                            <div className='liked'><h3>{entry.liked}</h3></div>
                        </section>
                    );
                })}
        </div>
    );
}


// Like button click
// if button click is inactive be grey
// This may be able to change the button colors on a "like"
// if(buttonClass === 'inactive'){
//     setButtonClass('active');
// }
//     else {
//         setButtonClass('inactive');
//     }
export default DisplayPosts;