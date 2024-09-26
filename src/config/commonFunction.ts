import { format } from "date-fns";
import toast from 'react-hot-toast';

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

export const success = (message: string) => {
  toast.success(message);
};

export const customError = (message: string) => {
  toast.error(message);
};

export const info = (message: string) => {
  toast(message, { icon: 'ℹ️' });
};
