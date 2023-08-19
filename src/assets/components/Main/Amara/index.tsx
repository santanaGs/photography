// Imports
import React from 'react'

// Global Components
import { Container } from "../../../../global";
import { Background } from '../HeroSection/styles';

// Styled Components
import { Bio, Data, Left, Name, Button, Image, Content } from './styles';

// Images
import amara from './atoms/amara.png'

const Amara: React.FC = () => {
    return (
        <Background>
            <Container>
                <Content>
                    <Image
                        src={amara}
                        alt='gabriela model'
                    />
                    <Left>
                        <Data>
                            janurary 2010
                        </Data>
                        <Name>
                            Amara Lopez
                        </Name>
                        <Bio>
                            Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Quam elementum pulvinar etiam non quam lacus suspendisse. Nunc sed velit dignissim sodales ut eu sem. Pretium quam vulputate dignissim suspendisse in est ante in nibh.
                        </Bio>
                        <Button>View case study</Button>
                    </Left>
                </Content>
            </Container>
        </Background>
    )
}

export default Amara;