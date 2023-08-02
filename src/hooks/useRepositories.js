// import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries.js'

const useRepositories = () => {
  const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES)

  const { repositories = null } = data

  // const [repositories, setRepositories] = useState(null)

  // const fetchRepositories = async () => {
  //   try {
  //     // Use the IP of your local machine instead of localhost, for android emulator y/o physical device
  //     const response = await global.fetch('http://192.168.100.44:5000/api/repositories')
  //     // console.log(response)
  //     const json = await response.json()
  //     setRepositories(json)
  //   } catch (error) {
  //     // console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   fetchRepositories()
  // }, [])

  const repositoriesNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return {
    // loading,
    repositories: repositoriesNodes,
    // refetch
  }
}

export default useRepositories
