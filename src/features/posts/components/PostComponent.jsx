import React from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const PostComponent = ({post}) => {
    const navigate = useNavigate();

    
const handleNavigateToPostPage = (postId) => {

   //go to the posts page
}
    
  return (
    <Article>
        <Title>{post.title}</Title>
        <DetailsContainer>
        </DetailsContainer>
        <Content>
            {post.body}
        </Content>
        <BottomContainer>
        <Button onClick={() => handleNavigateToPostPage(post.id)}>Read more</Button>
        <Reactions></Reactions>
        </BottomContainer>
        
    </Article>
  )
}

const Article = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 70%;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
   
`

const Title = styled.h1`
    font-size: 20px;
    width: 70%;
    
`

const DetailsContainer = styled.div`
`

const Content = styled.p`
    font-size: 12px;
`

const Button = styled.button`
    width: 120px;
    border-radius: 10px;
    margin-left: 10%;
    border: none;
    cursor: pointer;
    font-weight: 700;
    padding: 10px;
    transition: 0.5s ease all;
    &:hover {
        background-color: gray;
        color: white;
    }
`

const BottomContainer = styled.div`

`

const Reactions = styled.div`
`

export default PostComponent