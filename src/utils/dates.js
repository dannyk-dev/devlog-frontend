import dayjs from "dayjs";

export function formatPostDate(date) {
  if (!date) return null;
  return dayjs(date).format("MMM D, YYYY");
}
