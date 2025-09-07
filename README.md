# Netflix With GPT - A Netflix clone with GPT powered Search engine


### Summary of Netflix With GPT Project

**Netflix With GPT** is a Netflix clone application with a GPT-powered search engine, built using modern web technologies to deliver a responsive, user-friendly streaming platform. The project emphasizes modular development, robust authentication, and dynamic movie browsing with AI-driven search and recommendation features.

#### Functional Features
1. **Authentication Module**:
   - **Sign In**: Allows users to log in using Firebase Authentication.
   - **Sign Up**: Enables new user registration with email, password, display name, and profile picture.
2. **Browse Module**:
   - **Movie Component**: Displays movie trailers (YouTube embeds with autoplay and mute) and detailed movie information.
   - **Secondary Component**: Showcases curated movie lists, including:
     - Now Playing Movies
     - Popular Movies
     - Trending Movies
     - Top-rated Movies
     - Upcoming Movies
3. **GPT-powered Search Module**:
   - **Search**: Users can search for movies using natural language queries powered by an Open AI API.
   - **Recommendation**: Provides movie suggestions based on GPT-driven search results, fetched from the TMDB API.

#### Non-functional Features
- **Desktop-first Design**: Optimized for desktop with a responsive layout for smaller screens.
- **Authentication**: Secure user management via Firebase.
- **Versioning**: Code maintained on GitHub for version control.
- **Performance**: Optimized with memoization and custom hooks for efficient data fetching and rendering.
- **Responsive**: Adapts seamlessly to various screen sizes using TailwindCSS.

#### Tech Stack
- **ReactJS**: Front-end framework, scaffolded with Create React App (CRA).
- **TailwindCSS**: Utility-first CSS framework for styling.
- **React-Redux**: State management for user and movie data.
- **Firebase**: Backend for authentication (sign-in, sign-up, profile updates).
- **React-router-dom**: Client-side routing for navigation.
- **TMDB API**: Source for movie data (now playing, popular, trending, etc.).
- **Open AI API**: Powers the GPT search and recommendation engine.
- **Custom Hooks**: Ensures single responsibility and reusable logic (e.g., `useMovies`, `usePopularMovies`).
- **Environment Variables**: Managed via `.env` file (added to `.gitignore` for security).

#### Development Sequence
1. **Setup**:
   - Initialized project with Create React App and configured TailwindCSS.
   - Set up Firebase for authentication and TMDB API for movie data.
   - Created `.env` file for API keys and added it to `.gitignore`.
2. **Authentication**:
   - Built login and sign-up forms with form validation using `useRef` hook.
   - Implemented Firebase authentication APIs for sign-in, sign-up, sign-out, and profile updates.
   - Added redirect logic: unauthenticated users are redirected from `/browse` to `/login`, and vice versa.
   - Unsubscribed from Firebase’s `onAuthStateChanged` callback to prevent memory leaks.
3. **Browse Page**:
   - Developed a header component for navigation.
   - Created a main container for movie trailers and a secondary container for movie lists.
   - Fetched movie data from TMDB API (now playing, popular, trending, top-rated, upcoming).
   - Built custom hooks (`useMovies`, `usePopularMovies`) for data fetching.
   - Embedded YouTube trailers with autoplay and mute functionality.
   - Styled components with TailwindCSS for a polished, Netflix-like UI.
   - Implemented movie cards and lists using reusable components.
4. **GPT Search**:
   - Built a GPT search page and search bar with a multi-language feature (bonus).
   - Integrated Open AI API for natural language search and recommendations.
   - Fetched GPT-suggested movies from TMDB and stored them in a Redux `gptSlice`.
   - Reused movie list components for displaying GPT suggestions.
5. **Optimizations**:
   - Used Redux for state management (`userSlice`, `movieSlice`, `gptSlice`).
   - Applied memoization to optimize performance.
   - Ensured responsive design with TailwindCSS.
   - Deployed the app to production.
6. **Bug Fixes**:
   - Fixed user profile updates (display name and picture).
   - Resolved routing issues for authenticated/unauthenticated users.
7. **Additional Features**:
   - Added hardcoded values to a constants file for consistency.
   - Used TMDB’s image CDN for high-quality movie posters.

#### Outcome
The project delivers a fully functional Netflix clone with a modern UI, secure authentication, and an innovative GPT-powered search feature. It leverages React’s component-based architecture, Redux for state management, and TailwindCSS for responsive styling. The integration of TMDB and Open AI APIs enhances the user experience with dynamic movie data and intelligent search capabilities. The codebase is versioned on GitHub, optimized for performance, and deployed to production, making it a robust, scalable application.


## 📽️ Project Setup
- Before starting the project please add .env file and add the following ENVs
    - REACT_APP_OPENAI_KEY
 
  ## Just ScreenShort 
    <img width="1920" height="1080" alt="Screenshot (20)" src="https://github.com/user-attachments/assets/536e9f59-ed3a-45e1-8122-a89533d57b87" />
