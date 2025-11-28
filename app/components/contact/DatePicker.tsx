"use client";

import { FC, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs, { Dayjs } from "dayjs";

import "dayjs/locale/en-gb";      // 🔥 Monday ile başlayan İngilizce
dayjs.locale("en-gb");            // 🔥 Locale’i aktif et

const DatePickerComponent: FC<{ value?: Dayjs | null; onChange?: (date: Dayjs | null) => void }> = ({
  value,
  onChange,
}) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(value || dayjs());

  const handleChange = (newDate: Dayjs | null) => {
    if (newDate) {
      setSelectedDate(newDate);
      onChange?.(newDate);
    }
  };

  return (
    <div className="border border-gray-300 rounded-xl p-2">
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <StaticDatePicker
          value={selectedDate}
          onChange={handleChange}
          slotProps={{
            actionBar: { actions: [] },
          }}
          sx={{
            "& .MuiPickersDay-today": {
              border: "none !important",
            },
            "& .Mui-selected": {
              backgroundColor: "#8B4513 !important",
              color: "#fff !important",
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DatePickerComponent;
