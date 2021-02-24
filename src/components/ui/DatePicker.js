import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date().toISOString()
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="dense"
          id="date-picker-dialog"
          // label='Date picker dialog'
          format="MMM D, YYYY"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          InputProps={{
            disableUnderline: true,
          }}
          InputAdornmentProps={{ position: "start" }}
          keyboardIcon={<img src="calendar.png" style={{ width: "23px" }} />}
          //   style={{ width: "80" }}
        />
        {/* <KeyboardTimePicker
                    margin='normal'
                    id='time-picker'
                    label='Time picker'
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                /> */}
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
