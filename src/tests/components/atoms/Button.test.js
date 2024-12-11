import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../../components/atoms/Button';

describe('Button Component', () => {
  test('renders button with children', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick when not disabled', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button onClick={mockOnClick}>Click me</Button>
    );
    
    fireEvent.click(getByText('Click me'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button onClick={mockOnClick} disabled>Click me</Button>
    );
    
    fireEvent.click(getByText('Click me'));
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test('applies disabled styles when disabled', () => {
    const { getByText } = render(
      <Button disabled>Click me</Button>
    );
    
    const button = getByText('Click me');
    expect(button).toHaveClass('opacity-50');
    expect(button).toHaveClass('cursor-not-allowed');
  });
});