import type { MomentInput } from 'moment'

import type { LocaleAware } from '../locale'
export declare type DateFormatKey = 'YearMonthDayTime' | 'YearMonthDay' | 'YearMonth' | 'Month';
export declare type DateFormat = LocaleAware<string>;
export declare const DateFormats: {
    [key in DateFormatKey]: DateFormat;
}
export declare const formatDate: (input: MomentInput, format?: string, suffix?: string) => string
export declare const formatNumericDate: (input: string, suffix?: string) => string
export declare const formatDaysLeft: (start: MomentInput, end: MomentInput, label: string) => string
