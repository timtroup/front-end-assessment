import {calculateLongStayBillableDays, calculateShortStayBillableSeconds} from "./date-util";

const SHORT_STAY_FEE_PER_SECOND = 110/3600;

const LONG_STAY_FEE_PER_DAY = 750;

export const calculateLongStay = (start: Date, end: Date) => {
  return calculateLongStayBillableDays(start, end) * LONG_STAY_FEE_PER_DAY;
};

export const calculateShortStay = (start: Date, end: Date) => {
  return Math.floor(calculateShortStayBillableSeconds(start, end) * SHORT_STAY_FEE_PER_SECOND);
};
