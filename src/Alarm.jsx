import { useState, useEffect } from "react";

export default function Alarm({
  hour: h,
  minute: m,
  time,
  deleteAlarm,
  id,
  audio,
}) {
  const [hour, setHour] = useState(h);
  const [minute, setMinute] = useState(m);
  const [ringing, setRinging] = useState(false);

  const SNOOZE_TIME = 5; // in minutes

  useEffect(() => {
    const timeNow = time.getHours() * 60 + time.getMinutes();
    const alarmTime = hour * 60 + minute;

    if (timeNow >= alarmTime) {
      setRinging(true);
      audio.play();
    } else setRinging(false);
  }, [time]);

  const snooze = () => {
    const d = new Date();
    d.setHours(hour);
    d.setMinutes(minute);

    const nd = new Date(d.getTime() + SNOOZE_TIME * 60000);
    setHour(nd.getHours());
    setMinute(nd.getMinutes());
    setRinging(false);
  };

  return (
    <div style={{ marginBottom: "8px" }}>
      <span style={{ color: "#aaa", marginRight: "8px" }}>
        {hour.toString().padStart(2, "0")}:{minute.toString().padStart(2, "0")}
      </span>
      <button onClick={() => deleteAlarm(id)}>❌</button>
      &nbsp;
      {ringing ? <button onClick={snooze}>💤</button> : null}
      &nbsp;
      {ringing ? <span>Ringing... 🔔</span> : null}
    </div>
  );
}
