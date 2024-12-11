import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputField from '../../../components/atoms/InputField';

describe('InputField Component', () => {
  test('renders input with correct props', () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <InputField 
        value=""
        onChange={mockOnChange}
        placeholder="Enter text"
      />
    );
    
    const input = getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });

  test('calls onChange when input changes', () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <InputField 
        value=""
        onChange={mockOnChange}
        placeholder="Enter text"
      />
    );
    
    const input = getByPlaceholderText('Enter text');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('displays error message when error prop is provided', () => {
    const { getByText } = render(
      <InputField 
        value=""
        onChange={() => {}}
        placeholder="Enter text"
        error="Invalid input"
      />
    );
    
    expect(getByText('Invalid input')).toBeInTheDocument();
  });

  test('respects maxLength prop', () => {
    const { getByPlaceholderText } = render(
      <InputField 
        value=""
        onChange={() => {}}
        placeholder="Enter text"
        maxLength={5}
      />
    );
    
    const input = getByPlaceholderText('Enter text');
    expect(input).toHaveAttribute('maxLength', '5');
  });
});