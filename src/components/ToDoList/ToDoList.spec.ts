import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToDoList from '.';

describe('<ToDoList />', () => {
  it('should render the ToDoList component with the correct props and handle actions', () => {
    // Define test props
    const props = {
      description: 'Test description',
      priority: 'High',
      updateToDo: jest.fn(), // Mock function for updating a to-do
      deleteToDo: jest.fn(), // Mock function for deleting a to-do
    };

    // Render the component with the test props
    const { getByText, getByTestId } = render(<ToDoList {...props} />);

    // Check if the component renders with the correct description and priority
    expect(getByText('Test description')).toBeInTheDocument();
    expect(getByText('High')).toBeInTheDocument();

    // Simulate a click on the "Edit" icon
    const editButton = getByTestId('edit-button');
    fireEvent.click(editButton);
    expect(props.updateToDo).toHaveBeenCalledTimes(1);

    // Simulate a click on the "Delete" icon
    const deleteButton = getByTestId('delete-button');
    fireEvent.click(deleteButton);
    expect(props.deleteToDo).toHaveBeenCalledTimes(1);
  });
});
