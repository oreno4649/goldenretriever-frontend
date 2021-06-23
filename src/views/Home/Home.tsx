import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import SwapCard from 'views/Home/components/SwapCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import PredictionPromotionCard from './components/PredictionPromotionCard'

const Page = styled.div`
  align-items: center;
  background-image: url('/images/city.png');
  background-repeat: no-repeat;
  background-position: bottom center;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 0;
  }
`
const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <Hero>
        <Heading as="h1" scale="xl" mb="24px" color="secondary">
        <div>
        <img src={`/images/well.png`} alt="Logo" />;
        <Text>{t('The Golden retriever platform is a community-supported platform.People all over the world will love Golden Retriever!')}</Text>
        </div>
        </Heading>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <PredictionPromotionCard />
        </Cards>
        <CTACards>
          <SwapCard />
          <EarnAPRCard />
          <EarnAssetCard />
          <TotalValueLockedCard />
        </CTACards>
      </div>
    </Page>
  )
}

export default Home
