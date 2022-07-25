import { usePokemonsQuery } from '../graphql/generated/graphql'
import { Box, Flex, Grid, Img, Text } from '@chakra-ui/react'
import Link from 'next/link'

const Index = () => {
  const { data, loading } = usePokemonsQuery({
    variables: {
      first: 151,
    },
  })

  if (loading) {
    return <>読み込み中</>
  }

  return (
    <>
      <Flex flexWrap="wrap" gap="16px" justifyContent="space-evenly">
        {data.pokemons.map((pokemon) => {
          return (
            <Link href={`/pokemons/${pokemon.id}`} key={pokemon.id}>
              <Box width={'20%'}>
                <Img src={pokemon.image} />
                <Text as={'h4'}>{pokemon.name}</Text>
              </Box>
            </Link>
          )
        })}
      </Flex>
    </>
  )
}

export default Index
