import {addDays, format, getDate, isSameDay, startOfWeek} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ProgressBar from './ProgressBar';

type Props = {
  date: Date;
  onChange: (value: Date) => void;
};

const WeekCalendar: React.FC<Props> = ({date, onChange}) => {
  const [week, setWeek] = useState<WeekDay[]>([]);

  useEffect(() => {
    const weekDays = getWeekDays(date);
    setWeek(weekDays);
  }, [date]);

  return (
    <View style={styles.container}>
      {week.map((weekDay, index) => {
        const sameDay = isSameDay(weekDay.date, date);

        return (
        <TouchableOpacity
            key={weekDay.formatted}
            onPress={() => onChange(weekDay.date)}
            className={`w-10 flex items-center p-1.5 rounded-xl ${sameDay ? 'bg-habidazz-light-primary' : 'opacity-30'}`}
            >
                <Text className='font-bold text-habidazz-basic-grayD text-xs'>{weekDay.formatted}</Text>
                <Text className='font-extrabold'>
                {weekDay.day}
                </Text>
                <ProgressBar percentage={index * 15} />
            </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 2
  },
});

type WeekDay = {
  formatted: string;
  date: Date;
  day: number;
};

// get week days
export const getWeekDays = (date: Date): WeekDay[] => {
  const start = startOfWeek(date, {weekStartsOn: 1});

  const final = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);
    final.push({
      formatted: format(date, 'EEE'),
      date,
      day: getDate(date),
    });
  }

  return final;
};

export default WeekCalendar;