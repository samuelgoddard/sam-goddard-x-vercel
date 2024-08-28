import { useState, useEffect } from 'react'

export default function Time() {
  const [date, setDate] = useState(null);
  
  // DateTime formatted for Sam
  var samDateFormat = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/London",
    timeZoneName: "short",
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  });

  useEffect(() => {
    // Set the date to match server/client
    setDate(new Date());

    // Every 60 seconds check for a time update, more lightweight version of a "live" clock
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 60000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <span className="overflow-hidden relative block text-right">
      <span className="block" aria-hidden="true">{samDateFormat.format(date)}</span>
    </span>
  )
}