import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductGrid from '../../../components/organisms/ProductGrid';

const mockProducts = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description 1',
    price: 19.99,
    rating: 4.5,
    brand: 'Brand A',
    thumbnail: 'thumbnail1.jpg'
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description 2',
    price: 29.99,
    rating: 3.8,
    brand: 'Brand B',
    thumbnail: 'thumbnail2.jpg'
  }
];

describe('ProductGrid Component', () => {
  test('renders products correctly', () => {
    const { getByText } = render(<ProductGrid products={mockProducts} />);
    
    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('Product 2')).toBeInTheDocument();
  });

  test('sorts products by rating', () => {
    const { getByText, getAllByText } = render(<ProductGrid products={mockProducts} />);
    
    const sortButton = getByText(/Sort by Rating/i);
    fireEvent.click(sortButton);

    const ratings = getAllByText(/Rating:/i);
    expect(ratings[1]).toHaveTextContent('Rating: 3.8');
    expect(ratings[0]).toHaveTextContent('Rating: 4.5');
  });

  test('filters products by brand', () => {
    const { getByLabelText, getByText } = render(<ProductGrid products={mockProducts} />);
    
    const brandSelect = getByLabelText(/Filter by Brand/i);
    fireEvent.change(brandSelect, { target: { value: 'Brand A' } });

    expect(getByText('Product 1')).toBeInTheDocument();
    expect(() => getByText('Product 2')).toThrow();
  });

  test('displays no products message', () => {
    const { getByText } = render(<ProductGrid products={[]} />);
    
    expect(getByText('No products found.')).toBeInTheDocument();
  });
});