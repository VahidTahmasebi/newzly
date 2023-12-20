const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

export default function toLocalDateShort(date: string): string {
  return new Date(date).toLocaleDateString("en-US", options);
}
