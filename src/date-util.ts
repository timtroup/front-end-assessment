import {
    addBusinessDays, differenceInCalendarDays,
    isBefore,
    isSameDay,
    isWeekend,
    previousFriday,
    subBusinessDays
} from "date-fns";
import differenceInSeconds from "date-fns/differenceInSeconds";

const BILLING_START_HOUR = 8;
const BILLING_END_HOUR = 18;

export const calculateLongStayBillableDays = (start: Date, end: Date): number => {
    return differenceInCalendarDays(end, start) + 1;
}

export const calculateShortStayBillableSeconds = (start: Date, end: Date): number => {

    let billableSeconds = 0;

    let nextBillableDate = calculateStartBillableDate(start);
    let endBillableDate = calculateEndBillableDate(end);

    while(isBefore(nextBillableDate, endBillableDate)) {
        if(isSameDay(nextBillableDate, endBillableDate)) {
            billableSeconds += differenceInSeconds(endBillableDate, nextBillableDate);
        } else {
            billableSeconds += differenceInSeconds(calculateEndOfBillingDay(nextBillableDate), nextBillableDate);
        }
        nextBillableDate = calculateNextBillableStartDate(nextBillableDate);
    }

    return billableSeconds;
}

const calculateNextBillableStartDate = (date: Date): Date => {
    let nextBusinessDay = addBusinessDays(date, 1);
    return calculateStartOfBillingDay(nextBusinessDay);
}

const calculateStartBillableDate = (start: Date): Date => {
    if(isShortStayBillable(start)){
        return start;
    } else if(isWeekdayBeforeBillingHour(start)) {
        return calculateStartOfBillingDay(start);
    } else {
        let date = addBusinessDays(start, 1);
        return calculateStartOfBillingDay(date);
    }
}

const calculateEndBillableDate = (end: Date): Date => {
    if(isShortStayBillable(end)) {
        return end;
    } else if(isWeekend(end)) {
        return calculateEndOfBillingDay(previousFriday(end));
    } else if((end.getHours() >= BILLING_END_HOUR)) {
        return calculateEndOfBillingDay(end);
    } else {
        return calculateEndOfBillingDay(subBusinessDays(end, 1));
    }
}

const calculateEndOfBillingDay = (date: Date): Date => {
    return new Date (date.getFullYear(), date.getMonth(), date.getDate(), BILLING_END_HOUR, 0, 0, 0);
}

const calculateStartOfBillingDay = (date: Date): Date => {
    return new Date (date.getFullYear(), date.getMonth(), date.getDate(), BILLING_START_HOUR, 0, 0, 0);
}

const isWeekdayBeforeBillingHour = (start: Date) => {
    return !isWeekend(start) && start.getHours() < BILLING_START_HOUR;
}

const isShortStayBillable = (date: Date): boolean => {
    return isShortStayBillableDay(date) && isShortStayBillableHour(date);
}

const isShortStayBillableHour = (date: Date): boolean => {
    return date.getHours() >= BILLING_START_HOUR && date.getHours() <= BILLING_END_HOUR;
}

const isShortStayBillableDay = (date: Date): boolean => {
    return !isWeekend(date);
}