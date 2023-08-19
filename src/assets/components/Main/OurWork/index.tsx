// Import
import React from 'react'

// Global Components
import { Container } from "../../../../global";

// Styled Components
import { Background, Button, Content, Gallery, Photos, PhotosContainer, PhotosName, Title } from './styles';


// Images
import img1 from './atoms/img-1.png'
import img2 from './atoms/img-2.png'
import img3 from './atoms/img-3.png'


const OurWork: React.FC = () => {
    return (
        <Background>
            <Container>
                <Content>
                    <Title>our work</Title>
                    <Gallery>
                        <PhotosContainer>
                            <Photos
                                src={img1}
                            />
                            <PhotosName>
                                Aisha Patel
                            </PhotosName>
                        </PhotosContainer>
                        <PhotosContainer>
                            <Photos
                                src={img2}
                            />
                            <PhotosName>
                                Isabella Costa
                            </PhotosName>
                        </PhotosContainer>
                        <PhotosContainer>
                            <Photos
                                src={img3}
                            />
                            <PhotosName>
                                Fatima Hassan
                            </PhotosName>
                        </PhotosContainer>
                    </Gallery>
                    <Button href='#'>View all work</Button>
                </Content>
            </Container>
        </Background>
    )
}

export default OurWork;