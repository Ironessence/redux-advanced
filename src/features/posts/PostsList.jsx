import React from 'react'
import styled from 'styled-components';
import { useGetPostsQuery } from '../api/apiSlice'
import PostComponent from './components/PostComponent';

const PostsList = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery();

  let content;

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = posts.map((post) => <PostComponent key={post.id} post={post}/>)
  } else if (isError) {
    content = <p>{error.toString()}</p>
  }


  return (
    <PostsContainer>
      <Title>Latest Posts:</Title>
      {content}
    </PostsContainer>
  )
}

const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`

const Title = styled.h2`
  margin-left: 50px;
`

export default PostsList