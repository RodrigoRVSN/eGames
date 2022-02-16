import { Text } from 'react-native'
import styled from 'styled-components'

export const Title = styled(Text)`
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 14px;
  line-height: 24px;
  margin: 24px 0;
  text-align: center;
`
