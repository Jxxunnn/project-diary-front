import React, { useState, useRef } from "react";
import * as S from "./style";
import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const ref = useRef(0);

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const renderWeekdays = () => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return weekdays.map((weekday, i) => (
      <S.Cell current={false} week key={i}>
        {weekday}
      </S.Cell>
    ));
  };

  const renderDays = () => {
    const days: JSX.Element[] = [];
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDate();
    const endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    const startWeekdayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    const endOfLastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();

    if (startWeekdayOfMonth > 0) {
      const prevDays = Array(startWeekdayOfMonth)
        .fill(0)
        .map((it, i) => endOfLastMonth - i);

      days.push(
        ...prevDays.reverse().map((it, i) => {
          ref.current += 1;
          return (
            <S.Cell current={false} week={false} key={ref.current}>
              {it}
            </S.Cell>
          );
        })
      );
    }
    ref.current += 1;

    for (let i = startOfMonth; i <= endOfMonth; i++) {
      days.push(<S.CurrentCell key={ref.current}>{i}</S.CurrentCell>);
      ref.current += 1;
    }
    const leftLength = 42 - days.length;

    for (let i = 1; i <= leftLength; i++) {
      days.push(
        <S.Cell current={false} week={false} key={ref.current}>
          {i}
        </S.Cell>
      );
      ref.current += 1;
    }

    return days;
  };

  return (
    <S.CalendarContainer className="calendar">
      <S.HeaderContainer className="header">
        <S.HeaderCell>{`${currentDate.toLocaleString("default", {
          month: "long",
        })} ${currentDate.getFullYear()}`}</S.HeaderCell>
        <S.ButtonContainer>
          <S.HeaderButton aria-label="이전 달로 이동" onClick={handlePrevMonth}>
            <HiArrowNarrowUp />
          </S.HeaderButton>
          <S.HeaderButton aria-label="다음 달로 이동" onClick={handleNextMonth}>
            <HiArrowNarrowDown />
          </S.HeaderButton>
        </S.ButtonContainer>
      </S.HeaderContainer>
      <S.Weekdays>{renderWeekdays()}</S.Weekdays>
      <S.Days>{renderDays()}</S.Days>
    </S.CalendarContainer>
  );
};

export default Calendar;
