import "./App.css";
import { useState, useEffect } from "react";

import Alarm from "./Alarm";
import Form from "./Form";

export default function App() {
  const [time, setTime] = useState(new Date());
  const [alarms, setAlarms] = useState([]);

  const audio = new Audio(
    "https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3"
  );

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  const deleteAlarm = (id) => {
    setAlarms(alarms.filter((alarm) => alarm.id !== id));
  };

  return (
    <main>
      <h1>Alarm Clock ⏰</h1>
      <h4>
        Current Time is{" "}
        {`
        ${time.getHours().toString().padStart(2, "0")}:
        ${time.getMinutes().toString().padStart(2, "0")}:
        ${time.getSeconds().toString().padStart(2, "0")}`}
      </h4>

      <Form _setAlarms={setAlarms} _alarms={alarms} />

      <h4>Alarms</h4>
      <div className="alarm_list">
        {alarms.length === 0 ? "No alarms" : null}
        {alarms.map((alarm) => {
          return (
            <Alarm
              id={alarm.id}
              key={alarm.id}
              hour={alarm.hour}
              minute={alarm.minute}
              time={time}
              deleteAlarm={deleteAlarm}
              audio={audio}
            />
          );
        })}
      </div>
    </main>
  );
}
