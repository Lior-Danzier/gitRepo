import { useState, useEffect } from "react";

export default function Props3() {
    const [isOrange, setIsOrange] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div>
            <button
                onClick={() => setIsOrange(!isOrange)}
                style={{ backgroundColor: isOrange ? "orange" : "" }}
            >
                Press Me
            </button>

            <div>
                <p>{seconds} Seconds</p>
                <button onClick={() => setIsRunning(!isRunning)}>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button onClick={() => { setIsRunning(false); setSeconds(0); }}>
                    Reset
                </button>
            </div>
        </div>
    )

}
