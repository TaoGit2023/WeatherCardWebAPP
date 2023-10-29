const Dates = ({ date }) => {
  const date_slice = date.slice(0, 10);
  const time = date.slice(11);
  const parts = date_slice.split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  const newDate = new Date();
  newDate.setFullYear(year);
  newDate.setMonth(month - 1);
  newDate.setDate(day);
  const options = { day: "numeric", month: "long", weekday: "long" };
  const dateResult = newDate.toLocaleDateString("en-AU", options);
  return (
    <div>
      {dateResult} {time}
    </div>
  );
};

export default Dates;
