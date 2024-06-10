NetflixGPT
NetflixGPT is an intelligent recommendation system that leverages the power of GPT (Generative Pre-trained Transformer) to provide personalized movie and TV show suggestions. This project aims to enhance the user experience by offering recommendations based on viewing history, preferences, and trending content.

Features
Login/SignUp: Secure authentication system for users.
Redirect to Browse Page: Automatically redirects authenticated users to the browse page.
Browse (After Authentication): Explore movies and TV shows once logged in.
Header: Includes navigation and user profile options.
Main Movie: Displays a main featured movie with a trailer background, title, and description.
Movie Suggestions: Personalized suggestions based on user preferences.
Movie Lists: Organized lists of movies in various categories.
Project Setup
Development Setup
Create React App: Base setup for the application.
Configured TailwindCSS: Styling framework for rapid UI development.
Routing of the App: Navigation structure using React Router.
Login form & Sign Up Form: Includes toggle functionality using useState.
Form Validation: Ensures user inputs are valid.
useRef Hook: Used for managing focus and other references.
Firebase Setup: Backend setup for authentication and data storage.
Deploying App to Production: Steps to deploy the app for public use.
Create SignUp User Account: Functionality to register new users.
Implement SignIn User API: API integration for user authentication.
Created Redux Store with userSlice: State management using Redux.
Implemented Sign Out Feature: Allows users to securely log out.
Update Profile: Users can update their profile information.
Bug Fixes: Ensures users are redirected to the browse page upon login.
Unsubscribe to onAuthStateChanged Callback: Clean up authentication listeners.
Add Hard Coded Values to Constant File: Organized constants for easy access.
