import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import styled from "styled-components";

function Calendar() {
  return (
    <Wrapper>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        height="80vh" // Set the overall height
        contentHeight="80vh" // Set the height of the view area
        aspectRatio={2}
        // weekends={false}
        events={[
          { title: "event 1", start: "2024-02-26" },
          { title: "event 2", start: "2024-03-08" },
          {
            title: "event4",
            start: "2024-03-05",
            end: "2024-03-07",
          },
          {
            title: "event3",
            start: "2024-03-09T12:30:00",
            allDay: false, // will make the time show
          },
          {
            title: "event3",
            start: "2024-03-09T15:30:00",
            allDay: false, // will make the time show
          },
        ]}
      />
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 1rem 2rem;
`;
export default Calendar;
