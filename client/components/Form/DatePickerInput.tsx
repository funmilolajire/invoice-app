import { FC } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from './styles/DatePickerInput.module.css';
import { useIssueState } from '../../state/form.state';
import dayjs from 'dayjs';
import { IoIosCalendar } from 'react-icons/io';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const DatePickerInput: FC = () => {
    const issueDate = useIssueState()
    const getIssueDate = new Date(issueDate.get())

    return (
        <div className={styles.container}>
            <label htmlFor="datePicker">Issue Date</label>
            <div className={styles.customDatePickerDiv}>
                <DatePicker id="datePicker"
                    dateFormat="dd MMM yyyy"
                    selected={getIssueDate}
                    onChange={(date: Date) => issueDate.change(dayjs(date).format('YYYY-MM-DD'))}
                    renderCustomHeader={
                        ({ date, increaseMonth, decreaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
                            <div className="react-datepicker__custom-header">
                                <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                    <HiChevronLeft />
                                </button>
                                <span>
                                    {dayjs(date).format('MMM YYYY')}
                                </span>
                                <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                    <HiChevronRight />
                                </button>
                            </div>
                        )}
                />
                <span className={styles.iconSpan}><IoIosCalendar /></span>
            </div>
        </div>
    )
}

export default DatePickerInput
