import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton } from '@pancakeswap/uikit'
import max from 'lodash/max'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'
import { getFarmApr } from 'utils/apr'
import { useFarms, usePriceCakeBusd, useGetApiPrices } from 'state/hooks'
import { getAddress } from 'utils/addressHelpers'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }

  transition: opacity 200ms;
  &:hover {
    opacity: 0.65;
  }
`
const CardMidContent = styled(Heading).attrs({ scale: 'xl' })`
  line-height: 44px;
`
const EarnAPRCard = () => {
  const { t } = useTranslation()
  const { data: farmsLP } = useFarms()
  const prices = useGetApiPrices()
  const cakePrice = usePriceCakeBusd()

  const highestApr = useMemo(() => {
    const aprs = farmsLP
      // Filter inactive farms, because their theoretical APR is super high. In practice, it's 0.
      .filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X')
      .map((farm) => {
        if (farm.lpTotalInQuoteToken && prices) {
          const quoteTokenPriceUsd = prices[getAddress(farm.quoteToken.address).toLowerCase()]
          const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(quoteTokenPriceUsd)
          return getFarmApr(farm.poolWeight, cakePrice, totalLiquidity)
        }
        return null
      })

    const maxApr = max(aprs)
    return maxApr?.toLocaleString('en-US', { maximumFractionDigits: 2 })
  }, [cakePrice, farmsLP, prices])

  const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`

  return (
    <StyledFarmStakingCard>
      <NavLink exact activeClassName="active" to="/farms" id="farm-apr-cta">
        <CardBody>
          <Heading color="contrast" scale="lg">
            Exchange
          </Heading>
          <Flex justifyContent="space-between">
            <Heading color="contrast" scale="lg">
            Exchange tokens
            </Heading>
            <Divbutton>Swap</Divbutton>
          </Flex>
        </CardBody>
      </NavLink>
    </StyledFarmStakingCard>
  )
}

export default EarnAPRCard
