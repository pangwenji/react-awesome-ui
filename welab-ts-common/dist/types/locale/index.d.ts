export declare type Locale = 'en' | 'zh';
export declare type LocaleAware<T> = {
    [key in Locale]: T;
};
export declare const DEFAULT_LOCALE: Locale
