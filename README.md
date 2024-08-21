NetflixGPT

NetflixGPT is an intelligent recommendation system powered by GPT (Generative Pre-trained Transformer) that delivers personalized movie and TV show suggestions. This project aims to elevate the user experience by providing recommendations tailored to viewing history, preferences, and trending content.

Features- 

- Login/SignUp: Secure authentication system for users.
- Automatic Redirection: Redirects authenticated users to the browse page.
- Browse (After Authentication): Explore movies and TV shows once logged in.
- Header: Includes navigation and user profile options.
  Main Movie Feature: Displays a featured movie with a trailer background, title, and description.
- Personalized Suggestions: Recommendations based on user preferences.
- Movie Lists: Organized lists of movies across various categories.

Project Setup

 Development Setup- 

- Create React App: Initial setup for the application.
- Configured TailwindCSS: Rapid UI development with a styling framework.
- App Routing: Structured navigation using React Router.
- Login/Sign Up Forms: Toggle functionality using `useState`.
- Form Validation: Ensures valid user inputs.
- useRef Hook: Manages focus and other references.
- Firebase Setup: Backend setup for authentication and data storage.
- Deploying App: Steps to deploy the app for public use.

 Key Implementations- 

- User Registration: Create and manage user accounts.
- User Authentication API: Integration for signing in users.
- Redux Store with userSlice: State management using Redux.
- Sign Out Feature: Securely log out users.
- Profile Update: Allows users to update their profile information.
- Bug Fixes: Redirect users to the browse page upon login.
- Authentication Cleanup: Unsubscribe from `onAuthStateChanged` callback.
- Constants File:** Organized hard-coded values for easy access.
