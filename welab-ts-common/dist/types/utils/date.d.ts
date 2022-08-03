import { Moment, MomentInput } from 'moment'
export declare const parseDate: (input?: MomentInput) => Moment
export declare const isToday: (input?: MomentInput) => boolean
export declare const calcDiffDays: (start: MomentInput, end: MomentInput) => number
