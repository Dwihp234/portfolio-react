const { render, screen } = require('@testing-library/react');
const Footer = require('./Footer');

test('renders footer content', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/footer content/i);
    expect(linkElement).toBeInTheDocument();
});