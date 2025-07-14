const { render, screen } = require('@testing-library/react');
const HeroSection = require('./HeroSection');

test('renders HeroSection component', () => {
    render(<HeroSection />);
    const headingElement = screen.getByText(/hero section/i);
    expect(headingElement).toBeInTheDocument();
});