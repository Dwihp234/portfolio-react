const { render, screen } = require('@testing-library/react');
const Gallery = require('./Gallery');

test('renders Gallery component', () => {
    render(<Gallery />);
    const galleryElement = screen.getByTestId('gallery');
    expect(galleryElement).toBeInTheDocument();
});

test('renders Gallery with props', () => {
    const images = ['image1.jpg', 'image2.jpg'];
    render(<Gallery images={images} />);
    images.forEach(image => {
        const imgElement = screen.getByAltText(image);
        expect(imgElement).toBeInTheDocument();
    });
});