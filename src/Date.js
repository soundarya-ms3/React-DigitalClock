import React from 'react';

function D() {
    let dateObj =new Date()
    const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    const months=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
    const day=days[dateObj.getDay()]
    const month=months[dateObj.getMonth()]
    const date=dateObj.getDate()
    const year=dateObj.getFullYear()
  return <h3 className='date'>{day} , {month} {date} , {year}</h3>
}

export default D;
