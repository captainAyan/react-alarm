import { useState } from "react";

export default function Form({ _setAlarms, _alarms }) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  const createAlarm = () => {
    console.log("Creating alarm");
    _setAlarms([
      ..._alarms,
      {
        hour: hour,
        minute: minute,
        id: parseInt(Math.random() * (10000 - 1) + 1), // random id
      },
    ]);
    setHour(0);
    setMinute(0);
  };

  return (
    <div>
      <input
        style={{ width: "36px" }}
        value={hour}
        onChange={(e) => {
          const val = parseInt(e.target.value) || 0;
          if (val >= 0 && val <= 23) setHour(val);
        }}
      />
      &nbsp;
      <input
        style={{ width: "36px" }}
        value={minute}
        onChange={(e) => {
          const val = parseInt(e.target.value) || 0;
          if (val >= 0 && val <= 59) setMinute(val);
        }}
      />
      &nbsp;
      <button onClick={createAlarm}>✔️</button>
    </div>
  );
}
