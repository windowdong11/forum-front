import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './pages/CreatePostPage';
import PostWrapper from './pages/PostPage';
import PostList from './pages/PostListPage';
import App from './App';
import { GlobalStyles } from '@mui/material';

const inputGlobalStyles = <GlobalStyles styles={{
  a: {
    textDecoration: 'none'
  }
}}/>

ReactDOM.render(
  <React.StrictMode>
    {inputGlobalStyles}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PostList />} />
          <Route path="createpost" element={<CreatePost />} />
          <Route path="post/">
            <Route path=":post_id" element={<PostWrapper />} />
          </Route>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
