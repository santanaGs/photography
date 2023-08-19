// Imports
import React from 'react'

// Global Components
import { Container } from "../../../../global";
import { Background } from '../HeroSection/styles';

// Styled Components
import { Bio, Data, Left, Name, Button, Image, Content } from './styles';

// Images
import gabriela from './atoms/gabriela.png'

const Gabriela: React.FC = () => {
    return (
        <Background>
            <Container>
                <Content>
                    <Left>
                        <Data>
                            march 2022
                        </Data>
                        <Name>
                            Gabriela Silva
                        </Name>
                        <Bio>
                            Cras semper auctor neque vitae tempus. Neque volutpat ac tincidunt vitae. Eros donec ac odio tempor orci dapibus ultrices. Eget mauris pharetra et ultrices neque ornare. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Nunc id cursus metus aliquam eleifend mi.
                        </Bio>
                        <Button>View case study</Button>
                    </Left>
                    <Image
                        src={gabriela}
                        alt='gabriela model'
                    />
                </Content>
            </Container>
        </Background>
    )
}

export default Gabriela;