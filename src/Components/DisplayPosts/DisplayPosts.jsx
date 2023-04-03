import './DisplayPosts.css'
const DisplayPosts = (props) => {
    return (
        <div className='list-group'>
            {props.parentEntries.map((entry,index) => {
                    return (
                        <section key={index} className="container">
                            <div><p className="post-text"><h3>{entry.userName}</h3></p> </div>
                            <div><p className="post-text"><h3>{entry.post}</h3></p> </div>
                        </section>
                    );
                })}
        </div>
    );
}

export default DisplayPosts;