import React from 'react';
import {CardActions} from '@components/molecules';
import {fireEvent, render} from '@testing-library/react-native';

describe('CardActions Component test', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(
      <CardActions savedPost={false} setSavedPost={jest.fn()} />,
    );
    expect(getByTestId('cardActionId')).toBeTruthy();
  });
  it('onPress function works correctly', () => {
    const {getByTestId} = render(
      <CardActions savedPost={false} setSavedPost={jest.fn()} />,
    );
    const onPress = getByTestId('cardActionOnPress');
    fireEvent.press(onPress);
  });
  it('should render correctly  if post is saved', () => {
    const {getByTestId} = render(
      <CardActions savedPost={true} setSavedPost={jest.fn()} />,
    );
    expect(getByTestId('cardActionId')).toBeTruthy();
  });
});
