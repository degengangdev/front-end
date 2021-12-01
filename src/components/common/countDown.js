import React from 'react'
import { useState } from 'react';

const CountDownTimer = (props) => {
  const [[hrs, mins, secs], setTime] = React.useState([0, 0, 0]);
  const [activationDate, setActivationDate] = useState(props.alarmDate);

  const tick = () => {
    var now = new Date();
    var timeRemaining = (props.alarmDate - now) / 1000;
    if (timeRemaining <= 1) {
      //Timer ended
      props.onTimerExpired(true);
      setTime([0, 0, 0]);
      return;
    }
    var hrs = Math.floor(timeRemaining / 3600);
    timeRemaining = timeRemaining - (hrs * 3600);
    var mins = Math.floor(timeRemaining / 60);
    timeRemaining = timeRemaining - (mins * 60);
    var secs = Math.floor(timeRemaining);
    setTime([hrs, mins, secs]);
  };


  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });


  return (
    <div>
      <p className="text-white text-sm">{`${hrs.toString().padStart(2, '0')}:${mins
        .toString()
        .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
    </div>
  );
}

export default CountDownTimer;