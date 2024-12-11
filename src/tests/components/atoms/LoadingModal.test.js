import React from 'react';
import { render } from '@testing-library/react';
import LoadingModal from '../../../components/atoms/Loader';

describe('LoadingModal Component', () => {
  test('renders nothing when show is false', () => {
    const { container } = render(<LoadingModal show={false} />);
    expect(container.firstChild).toBeNull();
  });


  test('renders custom message', () => {
    const { getByText } = render(
      <LoadingModal show={true} message="Custom loading message" />
    );
    expect(getByText('Custom loading message')).toBeInTheDocument();
  });

});