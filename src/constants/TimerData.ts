export const RegularLiveStreamsEventsData = [
  {
    eventName: 'sunday_morning_stream_title',
    timeHours: 10,
    durationTime: {
      hour: 2,
      minutes: 0,
    },
    dayOfWeek: 0,
  },
  {
    eventName: 'sunday_evening_stream_title',
    timeHours: 18,
    durationTime: {
      hour: 2,
      minutes: 0,
    },
    dayOfWeek: 0,
  },
];

export const UtcTimezoneShiftValue = 7;

export const TimersIntervals = {
  waitingTime: 10 * 60,
  latencyTime: 45 * 60,
}

export const MillisecondsCount = {
  inMinute: 60 * 1000,
  inHour: 60 * 60 * 1000,
  inDay: 24 * 60 * 60 * 1000,
  inWeek: 7 * 24 * 60 * 60 * 1000,
}
