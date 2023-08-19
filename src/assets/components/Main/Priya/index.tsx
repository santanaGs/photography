// Imports
import React from 'react'

// Global Components
import { Container } from "../../../../global";
import { Background } from '../HeroSection/styles';

// Styled Components
import { Bio, Data, Left, Name, Button, Image, Content } from './styles';

// Images
import priya from './atoms/priya.png'

const Priya: React.FC = () => {
    return (
        <Background>
            <Container>
                <Content>
                    <Left>
                        <Data>
                            september 2021
                        </Data>
                        <Name>
                            Priya Patel
                        </Name>
                        <Bio>
                            Et malesuada fames ac turpis egestas maecenas pharetra convallis. Aenean vel elit scelerisque mauris. Gravida neque convallis a cras semper auctor neque vitae. Habitasse platea dictumst quisque sagittis. Gravida neque convallis a cras semper.
                        </Bio>
                        <Button>View case study</Button>
                    </Left>
                    <Image
                        src={priya}
                        alt='priya model'
                    />
                </Content>
            </Container>
        </Background>
    )
}

export default Priya;