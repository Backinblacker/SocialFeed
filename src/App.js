import './App.css'
import { useState } from 'react';
import AddPost from './Components/AddPost/AddPost';
import NavBar from './Components/NavigationBar/NavigationBar';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts.jsx';
function App() {

  const [entries, setEntries] = useState([{userName: 'Bender', post: 'Kill All Humans!'}, {userName: 'El Barto', post: 'Have a cow man!'}]);

  function newPost(post){
    let tempPost =[...entries, post];
    setEntries(tempPost);
  }
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className='container-fluid'>
        <div className='border'>
          <AddPost newPost={newPost}/>
        </div>
        <div className='border'>
          <DisplayPosts parentEntries={entries}/>
        </div>  
      </div>
    </div>
  );
}

export default App;
