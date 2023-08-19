// Import
import React from 'react'

// Styled Components
import {
    Background,
    Link,
    LinkItem,
    ListLink,
    Logo,
    NavBar,
    NavBarContainer,
} from "./styles";

// Images
import logo from '../Nav/atoms/logo.svg'

const Nav: React.FC = () => {
    return (
        <Background>
            <NavBarContainer>
                <Logo
                    src={logo}
                    alt='Logo page'
                />
                <NavBar>
                    <ListLink>
                        <LinkItem><Link href='#'>Projects</Link></LinkItem>
                        <LinkItem><Link href='#'>Portraits</Link></LinkItem>
                        <LinkItem><Link href='#'>Fashion</Link></LinkItem>
                        <LinkItem><Link href='#'>Fine Art</Link></LinkItem>
                        <LinkItem><Link href='#'>Contact</Link></LinkItem>
                    </ListLink>
                </NavBar>
            </NavBarContainer>
        </Background>
    )
}

export default Nav;