import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dateFormatForDisplay } from "../config/commonFunction";

function DatepickerComponent(props: any) {
  const years = props?.range;

  const DateChange = (value: any) => {
    const date = value ? dateFormatForDisplay(value, "MM/dd/yyyy") : "";
    props.onchange(date);
  };

  return (
    <DatePicker
      showIcon
      dateFormatCalendar="MM/dd/yyyy"
      showYearDropdown
      showMonthDropdown
      scrollableYearDropdown
      popperPlacement="bottom-end"
      yearDropdownItemNumber={years.length}
      onChange={(d) => {DateChange(d)}}
      selected={props.value}
      className={props.className}
    //   format="MM/dd/yyyy"
      {...(!props.showClearIcon && { clearIcon: null })}
      minDate={props.minDate}
      maxDate={props.maxDate}
      onKeyDown={(e) => {
        e.preventDefault();
      }}
      placeholderText="--/--/----"
    />
  );
}

export default DatepickerComponent;
