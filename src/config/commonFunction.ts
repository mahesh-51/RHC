import { format } from "date-fns";

export function dateFormatForDisplay(date: any, dateFormat: string) {
  try {
    if (!date) {
      return date
    }
    let tmpDate = format(new Date(date), dateFormat);
    return tmpDate;
  } catch (error) {
    console.log("error", error)
  }
}