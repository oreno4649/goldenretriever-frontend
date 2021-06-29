import styled from 'styled-components'

export const ActionContainer = styled.div`
  padding: 16px;
  border-radius: 16px;
  background: rgba(0,0,0,0.19);
  height: 100px;
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 0;
    height: 100px;
    max-height: 100px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-left: 32px;
    margin-right: 0;
    margin-bottom: 0;
    height: 100px;
    max-height: 100px;
  }
`

export const ActionTitles = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: white;
`

export const ActionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`
