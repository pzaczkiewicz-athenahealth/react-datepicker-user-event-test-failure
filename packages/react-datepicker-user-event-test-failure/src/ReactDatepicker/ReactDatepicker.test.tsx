import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { format } from 'date-fns';
import { ReactDatepicker } from '..';

const defaultDateFormat = 'MM/dd/yyyy';

type UserEvent = ReturnType<typeof userEvent.setup>;
let user: UserEvent;

describe('ReactDatepicker', () => {
  beforeEach(() => (user = userEvent.setup()));

  it('should not emit act warnings', async () => {
    const now = new Date();
    const endOfNextYear = new Date(now.getFullYear() + 1, 11, 31);
    const dateFormat = 'M/d/yyyy';
    const userFormattedDate = format(endOfNextYear, dateFormat);
    const defaultFormattedDate = format(endOfNextYear, defaultDateFormat);

    render(<ReactDatepicker />);
    const input = screen.getByRole('textbox');
    await user.type(input, `${userFormattedDate}{Enter}`);
    expect(await screen.findByDisplayValue(defaultFormattedDate)).toBeInTheDocument()
  });

  it('should pass with fireEvent', async () => {
    const now = new Date();
    const endOfNextYear = new Date(now.getFullYear() + 1, 11, 31);
    const dateFormat = 'M/d/yyyy';
    const userFormattedDate = format(endOfNextYear, dateFormat);
    const defaultFormattedDate = format(endOfNextYear, defaultDateFormat);

    render(<ReactDatepicker />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: userFormattedDate } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(await screen.findByDisplayValue(defaultFormattedDate)).toBeInTheDocument()
  });
});
