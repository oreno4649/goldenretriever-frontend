import styled from 'styled-components'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-left: 16px;
  padding-right: 16px;
  background: rgb(152,30,88);
background: linear-gradient(0deg, rgba(152,30,88,1) 0%, rgba(25,18,65,1) 28%, rgba(7,20,65,1) 63%, rgba(0,17,75,1) 100%);

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

export default Container
