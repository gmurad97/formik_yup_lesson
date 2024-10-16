import Section from "../components/common/Section/Section.jsx";
import HeroSection from "../components/common/HeroSection/HeroSection.jsx";
import FormBox from "../components/common/FormBox/FormBox.jsx";
import Register from "../components/Register/Register.jsx";

const App = () => {
    return (
        <div className="app">
            <Section>
                <HeroSection>
                    <FormBox title="Register">
                        <Register />
                    </FormBox>
                </HeroSection>
            </Section>
        </div>
    );
}

export default App;