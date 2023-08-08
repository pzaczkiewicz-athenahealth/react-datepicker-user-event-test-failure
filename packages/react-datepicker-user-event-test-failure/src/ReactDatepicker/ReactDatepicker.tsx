import { ReactElement, useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function ReactDatepicker(): ReactElement {
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
}
