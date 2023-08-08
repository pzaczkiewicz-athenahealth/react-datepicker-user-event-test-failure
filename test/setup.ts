import '@testing-library/jest-dom';

/** Tests should not have console errors, so fail any test that emits one.
 */
// eslint-disable-next-line no-console
const originalConsoleError = console.error;
const consoleError = jest.spyOn(console, 'error').mockImplementation((errorString, ...errorArgs) => {
  originalConsoleError(errorString, ...errorArgs);
  return;
});

beforeEach(() => {
  consoleError.mockClear();
});

afterEach(() => {
  expect(consoleError).not.toBeCalled();
});
