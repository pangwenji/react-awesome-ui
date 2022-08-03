import type {LocaleAware} from '@welab/welab-ts-common'

export const FONT_FAMILY = 'NotoSansTCBarlow'
export const FontFamilyVariant = (fontWeight: FontWeight): string => {
  switch (fontWeight) {
    case FontWeight.regular:
      return 'Regular'
    case FontWeight.medium:
      return 'Medium'
    case FontWeight.bold:
      return 'Bold'
    default:
      return 'Regular'
  }
}

export enum FontWeight {
  regular = '400',
  medium = '500',
  bold = '700',
}

export type TextTypeKey =
  | 'Header1'
  | 'Header2'
  | 'Header3'
  | 'Header4'
  | 'Subheader1'
  | 'Subheader2'
  | 'Subheader3'
  | 'Body1'
  | 'Body2'
  | 'Caption'

export type TextType = {
  fontSize: LocaleAware<number>
  fontWeight: FontWeight
  lineHeight: number
}

export const TextTypes: {[key in TextTypeKey]: TextType} = {
  Header1: {
    fontSize: {en: 40, zh: 40},
    lineHeight: 52,
    fontWeight: FontWeight.medium,
  },
  Header2: {
    fontSize: {en: 28, zh: 28},
    lineHeight: 36,
    fontWeight: FontWeight.bold,
  },
  Header3: {
    fontSize: {en: 20, zh: 20},
    lineHeight: 28,
    fontWeight: FontWeight.bold,
  },
  Header4: {
    fontSize: {en: 17, zh: 17},
    lineHeight: 24,
    fontWeight: FontWeight.medium,
  },
  Subheader1: {
    fontSize: {en: 15, zh: 15},
    lineHeight: 22,
    fontWeight: FontWeight.bold,
  },
  Subheader2: {
    fontSize: {en: 15, zh: 15},
    lineHeight: 22,
    fontWeight: FontWeight.medium,
  },
  Subheader3: {
    fontSize: {en: 13, zh: 13},
    lineHeight: 18,
    fontWeight: FontWeight.bold,
  },
  Body1: {
    fontSize: {en: 15, zh: 15},
    lineHeight: 22,
    fontWeight: FontWeight.regular,
  },
  Body2: {
    fontSize: {en: 13, zh: 13},
    lineHeight: 19,
    fontWeight: FontWeight.regular,
  },
  Caption: {
    fontSize: {en: 11, zh: 11},
    lineHeight: 14,
    fontWeight: FontWeight.regular,
  },
}
