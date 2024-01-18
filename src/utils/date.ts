import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");
dayjs.extend(relativeTime);

export const fromNow = (date: string) => {
  return dayjs(date).from(new Date());
};

export const toNow = (date: string) => {
  return dayjs().to(date);
};
