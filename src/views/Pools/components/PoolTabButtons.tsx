import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import {
  ButtonMenu,
  ButtonMenuItem,
  Toggle,
  Text,
  Flex,
  NotificationDot,
  useMatchBreakpoints,
} from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-left: 12px;
    padding-right: 12px;
    height: 20px;
    font-size: 12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }

  div {
    background: linear-gradient(94.17deg, #0947e7 0%, #cf00f0 73.96%);
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.45);
    border-radius: 13px;
    border: none;

    a[variant='subtle'] {
      color: #15137c;
      background: white;
    }

    a[variant='tertiary'] {
      color: white;
    }
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    margin-left: 8px;
    color: white;
  }

  div:first-child {
    background: linear-gradient(94.17deg, #0947e7 0%, #cf00f0 73.96%);
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.45);
    border-radius: 13px;
  }
`

const PoolTabButtons = ({ stakedOnly, setStakedOnly, hasStakeInFinishedPools, viewMode, setViewMode }) => {
  const { url, isExact } = useRouteMatch()
  const { isXs, isSm } = useMatchBreakpoints()
  const { t } = useTranslation()

  const liveOrFinishedSwitch = (
    <Wrapper>
      <ButtonMenu activeIndex={isExact ? 0 : 1} scale="sm" variant="subtle">
        <ButtonMenuItem as={Link} to={`${url}`}>
          {t('Live')}
        </ButtonMenuItem>
        <NotificationDot show={hasStakeInFinishedPools}>
          <ButtonMenuItem as={Link} to={`${url}/history`}>
            {t('Finished')}
          </ButtonMenuItem>
        </NotificationDot>
      </ButtonMenu>
    </Wrapper>
  )

  const stakedOnlySwitch = (
    <Flex mt={['4px', null, 0, null]} ml={[0, null, '24px', null]} justifyContent="center" alignItems="center">
      <ToggleWrapper>
        <Toggle scale="sm" checked={stakedOnly} onChange={() => setStakedOnly((prev) => !prev)} />
      </ToggleWrapper>
      <Text color="white" ml={['4px', '4px', '8px']}>
        {t('Staked only')}
      </Text>
    </Flex>
  )

  if (isXs || isSm) {
    return (
      <Flex flexDirection="column" alignItems="flex-start" mb="24px">
        {stakedOnlySwitch}
        <Flex width="100%" justifyContent="space-between">
          {liveOrFinishedSwitch}
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex
      alignItems="center"
      justifyContent={['space-around', 'space-around', 'flex-start']}
      mb={['24px', '24px', '24px', '0px']}
    >
      {stakedOnlySwitch}
      {liveOrFinishedSwitch}
    </Flex>
  )
}

export default PoolTabButtons
