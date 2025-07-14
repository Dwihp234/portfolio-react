const { render, screen } = require('@testing-library/react');
const About = require('./About');

test('renders About component', () => {
    render(<About />);
    const headingElement = screen.getByText(/about/i);
    expect(headingElement).toBeInTheDocument();
});

test('displays correct information', () => {
    render(<About />);
    const infoElement = screen.getByText(/some information about us/i);
    expect(infoElement).toBeInTheDocument();
});