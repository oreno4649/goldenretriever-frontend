import { Language } from '@pancakeswap/uikit'

export const EN: Language = { locale: 'en-US', language: 'English', code: 'en' }
export const JA: Language = { locale: 'ja-JP', language: '日本語', code: 'ja' }
export const KO: Language = { locale: 'ko-KR', language: '한국어', code: 'ko' }
export const ZHCN: Language = { locale: 'zh-CN', language: '简体中文', code: 'zh-cn' }

export const languages = {
  'en-US': EN,
  'ja-JP': JA,
  'ko-KR': KO,
  'zh-CN': ZHCN,
}

export const languageList = Object.values(languages)
