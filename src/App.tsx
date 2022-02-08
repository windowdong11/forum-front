import React from 'react';
import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Board from './pages/PostListPage';
import Header from './componentes/Header'
import CreatePost from './pages/CreatePostPage';
import PostWrapper from './pages/PostPage';
import ErrorBoundary from './componentes/ErrorBoundary';
import { Box, Container, GlobalStyles } from '@mui/material';
import PostList from './pages/PostListPage';

function App() {
  return (
    <div>
      <Header />
      <ErrorBoundary>
      <Container sx={{paddingTop: '12px'}}>
        <Outlet/>
      </Container>
      </ErrorBoundary>
    </div>
  );
}

export default App;
