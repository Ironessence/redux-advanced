import React from 'react'
import styled from 'styled-components';
import { useGetPostQuery } from '../../api/apiSlice'

const SinglePostPage = ({postId}) => {
    
    console.log(postId);

    const {data: post, isFetching, isSuccess} = useGetPostQuery(postId);

    let content

    if (isFetching) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        content = (
            <Article>
                <Title>{post.title}</Title>
                <Content>{post.body}</Content>
            </Article>
        )
    } else {
        return null;
    }

  return (
    <Container>
        {content}
    </Container>
  )
}

const Container = styled.div`
`

const Article = styled.article`

`

const Title = styled.h2`

`

const Content = styled.p`

`

export default SinglePostPage