import { formatInTimeZone } from 'date-fns-tz';

export const formatDate = (date: Date) => {
  return formatInTimeZone(date, 'America/New_York', 'dd MMM yyyy');
};
