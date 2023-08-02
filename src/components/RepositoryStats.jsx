import { View } from 'react-native'
import StyledText from './StyledText'

const parseThousands = value => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText fontWeight='bold'>{parseThousands(props.stargazersCount)}</StyledText>
        <StyledText alignText='center'>Starts</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold' alignText='center'>{parseThousands(props.forksCount)}</StyledText>
        <StyledText alignText='center'>Forks</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold' alignText='center'>{parseThousands(props.reviewCount)}</StyledText>
        <StyledText alignText='center'>Review</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold' alignText='center'>{parseThousands(props.ratingAverage)}</StyledText>
        <StyledText alignText='center'>Rating</StyledText>
      </View>
    </View>
  )
}

export default RepositoryStats
