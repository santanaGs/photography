import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Left  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const Data = styled.p`
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 1.3125rem */
letter-spacing: 0.0625rem;
text-transform: uppercase;
margin-bottom: -5%;
`

export const Name = styled.h3`
font-size: 3rem;
font-style: normal;
font-weight: 500;
line-height: 105%; /* 3.15rem */
letter-spacing: -0.195rem;
margin: 0;
`

export const Bio = styled.p`
margin: 0px;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 1.5rem */
width: 28.125rem;
`

export const Button = styled.a`
    text-decoration: none;
    color: #FC4308;
    border: 1px solid;
    border-radius: 0.3rem;
    padding: 0.3125rem 0.5rem 0.3125rem 0.5rem;
    width: 10rem;
    text-align: center;
`

export const Image = styled.img`
    width: 35rem;
    height: auto;
`
