import React, { useState, useEffect } from 'react';
import './AppActualTime.css';

function AppActualTime () {

    const getFormattedDate = (type) => {
        let options;
        switch (type) {
            case 'hour':
                options = { hour: '2-digit', minute: '2-digit', hour12: false};
                break;
            case 'day':
                options = { day: 'numeric' };
                break;
            case 'dayWeek':
                options = { weekday: 'short'}
                break;
            case 'month_day':
                options = { month: 'short', day: '2-digit' };
                break;
            default:
                options = {};
                break;
        }
        return new Intl.DateTimeFormat('en-us', options).format(new Date());
    }

    const [time, setTime] = useState(getFormattedDate('hour'));
  
    
    useEffect(() => {
        const tick = () => {
            setTime(getFormattedDate('hour'));
        }
        const intervalId = setInterval(
            () => tick(),
            60000
        );
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const toOrdinal = (day) => {
        const suffix = { '1': 'st', '2': 'nd', '3': 'rd' }
        return `${suffix[day] || 'th'}`
    }
 
    return (
        <div className="text-center text-light-gray-3">
            <p className="my-0 text-uppercase">{getFormattedDate('dayWeek')}</p>
            <p className="my-0 text-capitalize">{`${getFormattedDate('month_day')}${toOrdinal(getFormattedDate('day'))}`}</p>
            <p className="font-weight-bolder text-white font-size-clock my-1">
                {time}
            </p>
            <p className="monserrat-font my-0">Actual time</p>
        </div>
    );
}
export default AppActualTime;