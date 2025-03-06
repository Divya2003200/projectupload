import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ErrorBoundary from './ErrorBoundry';
import Users from './pages/users';
import UserDetails from './pages/userDetails';
import EditUsers from './pages/UserEdit';
import QuotesRecipes from './pages/QuotesRecipes';
import PostList from './pages/PostList';
import PostDetails from './pages/postDetails';

function App() {
  return (
    <ErrorBoundary> 
    <ChakraProvider>
      <Router> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/editusers/:id" element={<EditUsers/>} />
          <Route path="/quotes-recipes" element={<QuotesRecipes />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </Router>
    </ChakraProvider>
    </ErrorBoundary>
  );
}

export default App;
