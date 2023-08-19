import styled from 'styled-components'

export const Background = styled.div`
    background-color: #2D4231;
`

export const NavBarContainer = styled.div`
    width: 1200px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
`

export const Logo = styled.img`
    width: 8rem;
`

export const NavBar = styled.nav`

`

export const ListLink = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const LinkItem = styled.li`
    list-style: none;

    &:last-child{
        border: 1px solid ;
        border-radius: .3rem;
        padding:  0.25rem 0.5rem 0.3125rem 0.5rem;
    }
`

export const Link = styled.a`
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    color: #FC4308;
`