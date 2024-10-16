import "./HeroSection.css";

const HeroSection = ({ children }) => {
    return (
        <section className="section__hero">
            {children}
        </section>
    );
}

export default HeroSection;