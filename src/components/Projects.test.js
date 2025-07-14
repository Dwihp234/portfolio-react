const { render, screen } = require('@testing-library/react');
const Projects = require('./Projects');

test('renders Projects component', () => {
    render(<Projects />);
    const linkElement = screen.getByText(/projects/i);
    expect(linkElement).toBeInTheDocument();
});