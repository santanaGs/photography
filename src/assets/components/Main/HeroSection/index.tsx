// Import
import React from 'react'

// Global Components
import { Container } from "../../../../global";

// Styled Components
import {
    Background,
    Button,
    Content,
    Image,
    Left,
    Text,
    Title
} from './styles';

// Images
import button from './atoms/button.svg'
import photo from './atoms/hero-img.png'

const Hero: React.FC = () => {
    return (
        <Background>
            <Container>
                <Content>
                    <Left>
                        <Title>We Capture the World</Title>
                        <Text>At our studio, we don't just take pictures - we capture the world. Our passion goes beyond just snapping a photo - we strive to create images that tell a story, evoke emotions, and capture the essence of the world around us.</Text>
                        <Button
                            src={button}
                        />
                    </Left>
                    <Image
                        src={photo}
                    />
                </Content>
            </Container>
        </Background>
    )
}

export default Hero;