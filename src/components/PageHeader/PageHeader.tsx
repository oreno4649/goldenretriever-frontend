import React from 'react'
import styled from 'styled-components'
import { Box } from '@pancakeswap/uikit'
import Container from '../layout/Container'

const Outer = styled(Box)``

const Inner = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
`

const PageHeader: React.FC = ({ children, ...props }) => (
  <Outer {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader
