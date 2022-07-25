import {
  usePokemonLazyQuery,
  usePokemonQuery,
} from '../../graphql/generated/graphql'
import { Img } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Pokemon = () => {
  const router = useRouter()

  const [fetch, { data, loading }] = usePokemonLazyQuery({
    variables: {
      id: router.query.id as string,
    },
  })

  useEffect(() => {
    if (router.query.id) {
      fetch()
    }
  }, [router.query])

  if (loading || !data) {
    return <>読み込み中</>
  }

  return (
    <>
      <Img src={data.pokemon.image} />
      {data.pokemon.name}
    </>
  )
}

export default Pokemon
