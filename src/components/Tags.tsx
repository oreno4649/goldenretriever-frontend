import React from 'react'
import { Tag, BinanceIcon, RefreshIcon, AutoRenewIcon, TagProps } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'

const GRTag = styled(Tag)`
  color: white;
  border-color: white;
`

const CoreTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <GRTag variant="primary" outline {...props}>
      {t('Core')}
    </GRTag>
  )
}

const CommunityTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="failure" outline {...props}>
      {t('Community')}
    </Tag>
  )
}

const BinanceTag: React.FC<TagProps> = (props) => {
  return (
    <Tag variant="binance" outline startIcon={<BinanceIcon width="18px" color="secondary" mr="4px" />} {...props}>
      Binance
    </Tag>
  )
}

const DualTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="textSubtle" outline {...props}>
      {t('Dual')}
    </Tag>
  )
}

const ManualPoolTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="secondary" outline startIcon={<RefreshIcon width="18px" color="secondary" mr="4px" />} {...props}>
      {t('Manual')}
    </Tag>
  )
}

const CompoundingPoolTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <GRTag variant="success" outline startIcon={<AutoRenewIcon width="18px" color="success" mr="4px" />} {...props}>
      {t('Auto')}
    </GRTag>
  )
}

export { CoreTag, CommunityTag, BinanceTag, DualTag, ManualPoolTag, CompoundingPoolTag }
