import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import styled from "styled-components";


function Calendar() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }

  return <Wrapper>
  <FullCalendar
  plugins={[ dayGridPlugin ]}
  initialView="dayGridMonth"
  // weekends={false}
  events={[
    { title: 'event 1', date: '2024-02-26' },
    { title: 'event 2', date: '2024-03-08' },
    {
      title  : 'event4',
      start  : '2024-03-05',
      end    : '2024-03-07'
    },
    {
      title  : 'event3',
      start  : '2024-03-09T12:30:00',
      allDay : false // will make the time show
    },
    {
      title  : 'event3',
      start  : '2024-03-09T15:30:00',
      allDay : false // will make the time show
    }
  ]}
  dateClick={handleDateClick}
/>
  
  </Wrapper>;
}
const Wrapper = styled.section`
padding: 2rem 2rem;
`;
export default Calendar;
