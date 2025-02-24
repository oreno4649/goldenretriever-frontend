import React, { useState } from 'react'
import { Button, Skeleton, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import Balance from 'components/Balance'
import { BIG_ZERO } from 'utils/bigNumber'
import { getBalanceAmount } from 'utils/formatBalance'
import { useAppDispatch } from 'state'
import { fetchFarmUserDataAsync } from 'state/farms'
import { usePriceCakeBusd } from 'state/hooks'
import { useHarvest } from 'hooks/useHarvest'
import { useTranslation } from 'contexts/Localization'

import { ActionContainer, ActionTitles, ActionContent, Earned } from './styles'

interface HarvestActionProps extends FarmWithStakedValue {
  userDataReady: boolean
}

const GRActionContent = styled(ActionContent)`
  margin-top: 12px;
`

const ButtonWrapper = styled.div`
  width: 139px;
  height: 36px;
  text-align: center;
  background: linear-gradient(94.17deg, #0947e7 0%, #cf00f0 73.96%);
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GRButton = styled(Button)`
  color: white;
  display: block;
  width: 135px;
  height: 32px;
  background: #000000;
  font-size: 14px;
  border-radius: 6px;
  margin: auto;

  :disabled,
  .pancake-button--disabled {
    color: white;
    background: #000000;
    border-radius: 6px;
  }
`

const HarvestAction: React.FunctionComponent<HarvestActionProps> = ({ pid, userData, userDataReady }) => {
  const earningsBigNumber = new BigNumber(userData.earnings)
  const cakePrice = usePriceCakeBusd()
  let earnings = BIG_ZERO
  let earningsBusd = 0
  let displayBalance = userDataReady ? earnings.toLocaleString() : <Skeleton width={60} />

  // If user didn't connect wallet default balance will be 0
  if (!earningsBigNumber.isZero()) {
    earnings = getBalanceAmount(earningsBigNumber)
    earningsBusd = earnings.multipliedBy(cakePrice).toNumber()
    displayBalance = earnings.toFixed(3, BigNumber.ROUND_DOWN)
  }

  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()

  return (
    <ActionContainer>
      <ActionTitles>
        <Text bold textTransform="uppercase" color="white" fontSize="12px" pr="4px">
          CAKE
        </Text>
        <Text bold textTransform="uppercase" color="white" fontSize="12px">
          {t('Earned')}
        </Text>
      </ActionTitles>
      <GRActionContent>
        <div>
          <Earned>{displayBalance}</Earned>
          {earningsBusd > 0 && (
            <Balance fontSize="12px" color="textSubtle" decimals={2} value={earningsBusd} unit=" USD" prefix="~" />
          )}
        </div>
        <ButtonWrapper>
          <GRButton
            disabled={earnings.eq(0) || pendingTx || !userDataReady}
            onClick={async () => {
              setPendingTx(true)
              await onReward()
              dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))

              setPendingTx(false)
            }}
            ml="4px"
          >
            {t('Harvest')}
          </GRButton>
        </ButtonWrapper>
      </GRActionContent>
    </ActionContainer>
  )
}

export default HarvestAction
