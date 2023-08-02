import { FlatList, View } from 'react-native'

// import { repositories } from '../../data/repositories'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'

const RepositoryList = () => {
  const { repositories } = useRepositories()

  return (
    <FlatList
      style={{ backgroundColor: '#ccc' }}
      data={repositories}
      ItemSeparatorComponent={() => (
        <View style={{ paddingVertical: 5 }}></View>
      )}
      renderItem={({ item: repo }) => (
        <RepositoryItem {...repo} />
      )}
    />
  )
}

export default RepositoryList
