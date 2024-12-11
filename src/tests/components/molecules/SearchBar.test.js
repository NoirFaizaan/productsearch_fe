import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../../../components/molecules/SearchBar';

describe('SearchBar Component', () => {
  const mockSetQuery = jest.fn();
  const mockOnSearch = jest.fn();

  const defaultProps = {
    query: '',
    setQuery: mockSetQuery,
    onSearch: mockOnSearch
  };

  beforeEach(() => {
    mockSetQuery.mockClear();
    mockOnSearch.mockClear();
  });

  test('renders search input', () => {
    const { getByPlaceholderText } = render(<SearchBar {...defaultProps} />);
    expect(getByPlaceholderText('Search for products...')).toBeInTheDocument();
  });

  test('updates query on input change', () => {
    const { getByPlaceholderText } = render(<SearchBar {...defaultProps} />);
    const input = getByPlaceholderText('Search for products...');
    
    fireEvent.change(input, { target: { value: 'test' } });
    expect(mockSetQuery).toHaveBeenCalledWith('test');
  });



  test('shows clear button when query is not empty', () => {
    const { getByLabelText } = render(<SearchBar {...defaultProps} query="test" />);
    expect(getByLabelText('Clear search')).toBeInTheDocument();
  });
});