import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { languageList } from 'config/localization/languages'
import { usePriceCakeBusd } from 'state/hooks'

const StyledFooter = styled.div`
  position: fixed;
  width: 100%;
  height: 48px;
  padding:0 22px 0;
  background-color: rgb(8 26 86 / 86%);
  bottom: 0;
  border-top: 1px solid #000000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  }
`

const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 20px;
    margin-right: 8px;
  }
  p {
    font-weight: bold;
    font-size: 14px;
  }
`
const LanguageListModal = styled.div`
  width: 210px;
  height: 8em;
  overflow: scroll;
  background-color: #fff;
  position: absolute;
  bottom: 30px;
  display: none;
  &:hover {
    display: block;
  }
`

const LanguageSetting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 32px;
  &:hover {
    ${LanguageListModal} {
      display: block;
    }
  }
  p {
    color: #7a6eaa;
    cursor: pointer;
  }
`
const StyledButton = styled.button`
  width: 100%;
  border: 0;
  background-color: #fff;
  cursor: pointer;
  color: #7a6eaa;
  cursor: pointer;
  list-style: none;
  text-align: center;
  color: #7a6eaa;
  font-weight: bold;
`

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const TelegramButton = styled.div`
  width: 26px;
  height: 26px;
  background: linear-gradient(211.74deg, #34b0df -4.14%, #1e88d3 90.25%);
  border-radius: 50%;
  padding: 5px 0 0 4px;
  margin-right: 17px;
  img {
    width: 14.93px;
    height: 12.26px;
  }
`
const TwitterLink = styled.a`
  width: 26px;
  height: 26px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 16px;
    height: 13px;
  }
`

const Footer = () => {
  const cakePriceUsd = usePriceCakeBusd()
  const openTelegram = (): void => {
    // eslint-disable-next-line no-console
    console.log('国を選択するポップアップ作成→telegramに遷移処理追加')
  }
  const { currentLanguage, setLanguage } = useTranslation()

  return (
    <StyledFooter>
      <PriceWrapper>
        <img src="/images/footer_dog_icon.png" alt="Goldenretriever" />
        <p>${cakePriceUsd.toNumber().toFixed(3)}</p>
      </PriceWrapper>
      <LanguageSetting>
        {/* FIXME 言語アイコン切り出せるようになったら追加 */}
        <p>{currentLanguage.code.toUpperCase()}</p>
        <LanguageListModal>
          {languageList.map((language) => (
            <StyledButton onClick={() => setLanguage(language)}>{language.language}</StyledButton>
          ))}
        </LanguageListModal>
      </LanguageSetting>
      <SocialWrapper>
        <TelegramButton onClick={() => openTelegram()}>
          <img src="/images/footer_telegram.png" alt="telegram" />
        </TelegramButton>
        <TwitterLink href="https://twitter.com/" target="_blank" rel="noreferrer">
          <img src="/images/footer_twitter.png" alt="telegram" />
        </TwitterLink>
      </SocialWrapper>
    </StyledFooter>
  )
}

export default Footer
