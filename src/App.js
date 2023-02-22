
import './App.css';
import styled from 'styled-components';
import PostsList from './features/posts/PostsList';
import { useState } from 'react';
import AddNewPost from './features/posts/components/AddNewPost';
import { Outlet } from 'react-router-dom';


function App() {
  const [isAddPostOpen, setIsAddPostOpen] = useState(false);

  return (
    <Container>
      <Title>Welcome to my blog!</Title>
      <AddPostButton onClick={() => setIsAddPostOpen(!isAddPostOpen)}>+ Add post</AddPostButton>
      {isAddPostOpen && (
        <AddNewPost />
      )}
      <PostsList />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  
`

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`

const AddPostButton = styled.button`
  background-color: aqua;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: 700;
  box-shadow: 2px 2px 2px 2px gray;
  position: absolute;
  top: 2%;
  right: 50px;
  cursor: pointer;
`

export default App;
