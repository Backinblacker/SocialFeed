Social Feed
Project
Tech Stack
React.js, HTML/CSS/JavaScript
User Stories
Total Unweighted Project Points: /45
Total Weighted Project Points: /50





Main Stories

(5 points): As a developer, I want to make at least 7 good, consistent commits.
(5 points): As a developer, I want to use the Create-React-App to create my React project.
(5 points): As a developer, I want to display all posts (name, body, & liked status) within a feed on the main page.
(10 points): As a developer, I want to create “like” and “dislike” buttons so that I can visually show & toggle between “liking” and “disliking” a post.
(10 points): As a developer, I want to create a form on a separate component so that I can add a new post to the main feed.
(5 points): As a developer, I want to create a minimum of three React components and use them within my application (EX: CreatePostForm, Post, PostList, NavBar)
(5 points): As a developer, I want to have an aesthetically pleasing user interface to ensure a great user experience

Bonus Stories

(5 points): As a developer, I want to add a date to all posts and post creations.

Checklist

Run through the Setup Steps and get your project ready to begin work.
Review the Resources outlined below - be sure to have relevant documentation and references open while you develop!
Review all videos and documentation for this project. Make sure you have a clear understanding of the end result of the project and all supporting documentation that is available to you.
Download and review the included Social Feed wireframe & image, available on your Course Portal. This is a great layout reference as you begin to design your own React application. Remember – this is simply a reference, and you are free to structure your Social Feed however you wish!
Build & test your React application utilizing React best practices (all components organized into their own folders with external CSS stylesheets, passing data from parent to child using props, lifting state as high as possible in component hierarchy, etc.)

Setup Steps
Begin setting up your project using the CREATE REACT APP command. Verify that you can run your development server and load your application in your browser before proceeding!
Create the necessary folders and files for your React components. You can add additional components if desired, but at a minimum, you will need:
App.js (parent)
PostList.jsx
Post.jsx
CreatePostForm.jsx
NavBar.jsx
Within the Post component create a template of how you would like each individual post to be displayed. This will include the user’s name, the body of the post, and the “like” and “dislike” buttons.
For now, do not worry about the functionality of the “like” and “dislike” buttons – just decide where and how you would like them to be displayed on each post!
Within the PostList component, create the feed where all your posts will be displayed in your app. All posts should be passed into this component using props. Then, utilize the “map” higher order array method to map each post to its own Post component.
Within the CreatePostForm component create a form with 2 input fields. There should be an input field for the user’s name, as well as the body of their post, and each should be bound to its own state variable.
Implement a handleSubmit method for your form, which should pass the entered values to a function on the App.jsx component. That function should create a new post object, add it to the existing array of posts, and update the App.js state variable with the new array.
Lastly, you will need to build out the “like” and “dislike” functionality. Within the Post component, create 2 separate functions – one for when the “like” button is clicked, and one for when the “dislike” button is clicked. Bind these functions to their respective buttons onClick event. Within these functions, start to lay out the steps that need to occur when each button is clicked.

💡 Note: this user story may be a bit more complex than it seems on the surface! This will require some creative thinking and problem-solving. Be sure to review the Changing Styles on Button Click demo video for more information about how to approach this user story!

Resources

Lectures
Regular Functions vs. Arrow Functions
Intro to React.js
Importing in React
React Forms

Student Hub
TUTORIALS > Create New Projects > Create a React Project
DEFINITIONS, EXAMPLES, AND FREQUENTLY ASKED QUESTIONS > Frontend > HTML
DEFINITIONS, EXAMPLES, AND FREQUENTLY ASKED QUESTIONS > Frontend > CSS
DEFINITIONS, EXAMPLES, AND FREQUENTLY ASKED QUESTIONS > Beginner React.js > <all articles in this subsection>
This portion of the Student Hub contains a series of articles that build off of each other to illustrate React core concepts, and will be a useful reference as you attempt the features of this project!

Other Resources 	
Code Demo - Dynamic Styling Using Event Handlers


End Result
The end result should be a single page React app based on the design of the wireframe. You will be able to add new posts as well as like or dislike posts.
