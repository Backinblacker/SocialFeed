// import './App.css';
import { useState } from 'react';
import './Components/AddPost/AddPost.jsx';
import NavBar from './Components/NavigationBar/NavigationBar';
import './Components/DisplayPosts/DisplayPosts.jsx'
function App() {

  const {posts, setPosts} = useState([]);

  function newPost(post){
    let tempPost =[post, ...posts]
    setPosts(tempPost)
  }
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>
        <AddPost newPost={newPost}/>
      </div>
    </div>
  );
}

export default App;
