// Components
import Amara from "./Amara";
import Gabriela from "./Gabriela";
import Hero from "./HeroSection";
import OurWork from "./OurWork";
import Priya from "./Priya";

const Main: React.FC = () => {
    return (
        <>
            <Hero />
            <OurWork />
            <Gabriela/>
            <Amara/>
            <Priya/>
        </>
    )
}

export default Main;