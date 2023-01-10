import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { navigate } from 'react-router-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

beforeEach(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
});

test('there must be a title', () => {
  const title = screen.getByText(/greydive challenge/i);
  expect(title).toBeInTheDocument();
});

test('there must be a submit button', () => {
  const submitButton = screen.getByRole('button', { type: 'submit' });
  expect(submitButton).toBeInTheDocument();
});

describe('inputs', () => {
  test('there must be a full_name input', () => {
    const inputName = screen.getByTestId('full_name');
    expect(inputName).toBeInTheDocument();
  });
  test('there must be a email input', () => {
    const inputEmail = screen.getByTestId('email');
    expect(inputEmail).toBeInTheDocument();
  });
  test('there must be a birth_date input', () => {
    const inputBirth = screen.getByTestId('birth_date');
    expect(inputBirth).toBeInTheDocument();
  });
  test('there must be a country_of_origin input', () => {
    const inputCountry = screen.getByTestId('country_of_origin');
    expect(inputCountry).toBeInTheDocument();
  });
  test('there must be a terms_and_conditions input', () => {
    const inputTerms = screen.getByTestId('terms_and_conditions');
    expect(inputTerms).toBeInTheDocument();
  });
});

describe('when user clicks on submit', () => {
  test('When user clicks on submit, there must be a look button', () => {
    const submitButton = screen.getByRole('button', { type: 'submit' });
    fireEvent.click(submitButton);
    const lookButton = screen.findAllByRole('button', { name: 'look' });
    waitFor(() => expect(lookButton).toBeInTheDocument());
  });

  test('When user clicks on look button, there must be a table', () => {
    const lookButton = screen.findAllByRole('button', { name: 'look' });
    const table = screen.findAllByTestId('table');
    waitFor(() => fireEvent.click(lookButton));
    waitFor(() => expect(table).toBeInTheDocument());
  });

  test('When user clicks on look button, must navigate to /answers', () => {
    const lookButton = screen.findAllByRole('button', { name: 'look' });
    waitFor(() => fireEvent.click(lookButton));
    waitFor(() => expect(navigate).toHaveBeenCalledWith('/answers'));
    waitFor(() => expect(navigate).toHaveBeenCalledTimes(1));
  });
})
