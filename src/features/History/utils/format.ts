const formatDate = (date: string) => new Intl.DateTimeFormat(
  'default',
  {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  },
).format(new Date(date));

export default formatDate;
