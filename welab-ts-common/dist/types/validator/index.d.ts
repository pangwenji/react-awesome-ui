interface Validator {
    validate(value: string): boolean,
    clean(value: string): string,
}
declare class RegExpValidator implements Validator {
    private validationRegExp;
    private cleanRegExp?;
    constructor(validationRegExp: RegExp, cleanRegExp?: RegExp);
    validate(value: string): boolean;
    clean(value: string): string;
}
declare class CustomValidator implements Validator {
    private validator;
    constructor(validator: (value: string) => boolean);
    validate(value: string): boolean;
    clean(value: string): string;
}
export declare const email: RegExpValidator
export declare const phoneNumber: RegExpValidator
export declare const phoneWithAreaCode: RegExpValidator
export declare const currency: RegExpValidator
export declare const password: RegExpValidator
export declare const passwordLength: RegExpValidator
export declare const passwordContent: RegExpValidator
export declare const name: RegExpValidator
export declare const nameAndSymbol: RegExpValidator
export declare const usernameContent: RegExpValidator
export declare const chineseAndEnglish: RegExpValidator
export declare const chineseName: RegExpValidator
export declare const numeral: RegExpValidator
export declare const numeralEmpty: RegExpValidator
export declare const numeralAndAlphabet: RegExpValidator
export declare const float: RegExpValidator
export declare const ascii: RegExpValidator
export declare const atLeastOneChar: RegExpValidator
export declare const alphabet: RegExpValidator
export declare const transferNote: RegExpValidator
export declare const date: RegExpValidator
/**
 * X Character Set – SWIFT Character Set
 * https://www.paiementor.com/swift-formatting-rules-and-character-sets-of-mt-messages/
 */
export declare const englishAddress: RegExpValidator
export declare const hkid: CustomValidator
export {}
