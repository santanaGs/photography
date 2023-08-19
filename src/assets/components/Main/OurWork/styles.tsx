import styled from 'styled-components'

export const Background = styled.section`
    background-color: #1A1A1A;
    padding-block: 5rem;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Title = styled.h2`
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 110.9%; /* 2.07938rem */
    letter-spacing: -0.12188rem;
`

export const Gallery = styled.div`
    display: flex;
    justify-content: space-between;
`

export const PhotosContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`

export const Photos = styled.img`
    width: 23.75rem;
    height: 31.25rem;
`

export const PhotosName = styled.p`

`

export const Button = styled.a`
    text-decoration: none;
    color: #FC4308;
    align-self: flex-end;
    border: 1px solid;
    border-radius: 0.3rem;
    padding: 0.3125rem 0.5rem 0.3125rem 0.5rem;
`