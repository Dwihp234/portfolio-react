const { render, screen } = require('@testing-library/react');
const Contact = require('./Contact');

test('renders Contact component', () => {
    render(<Contact />);
    const linkElement = screen.getByText(/contact/i);
    expect(linkElement).toBeInTheDocument();
});