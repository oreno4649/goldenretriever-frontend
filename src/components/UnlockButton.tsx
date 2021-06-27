import React from 'react'
import { Button, useWalletModal } from '@pancakeswap/uikit'
import styled from 'styled-components'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const GRButton = styled(Button)`
  width: 139px;
  height: 36px;
  color: white;
  font-size: 13px;
  background: #000000;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 6px;
  border: 2px;
  border-image-slice: 1;
  border-image: linear-gradient(94.17deg, #0947e7 0%, #cf00f0 73.96%);
`

const UnlockButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <GRButton onClick={onPresentConnectModal} {...props}>
      {t('Unlock Wallet')}
    </GRButton>
  )
}

export default UnlockButton
