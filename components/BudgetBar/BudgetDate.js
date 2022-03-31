export default function BudgetDate(pros) {
  const month = new Date("2022-02-05T00:00:00Z").toLocaleString("de-de", {
    month: "long",
  });
  const year = new Date("2022-02-05T00:00:00Z").getFullYear();
  const day = new Date("2022-02-05T00:00:00Z").toLocaleString("de-de", {
    day: "2-digit",
  });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
