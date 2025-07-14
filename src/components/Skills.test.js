const { render, screen } = require('@testing-library/react');
const Skills = require('./Skills');

test('renders Skills component', () => {
    render(<Skills />);
    const linkElement = screen.getByText(/skills/i);
    expect(linkElement).toBeInTheDocument();
});