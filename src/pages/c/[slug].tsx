import { Layout, CaseStudyPicker } from 'components'
import { GetStaticPaths, GetStaticProps } from 'next'
import { CtxRequest, getContexts } from 'lib/api'
import { CsContext } from 'types'
import Error from 'next/error'
import { useSanityPreview } from 'hooks'

type PageProps = {
  ctxData: CsContext
  query: string
  isPreview: boolean
}

const Page: React.FC<PageProps> = ({
  ctxData: stalecCsContextData,
  query,
  isPreview,
}) => {
  const csContextData = useSanityPreview(query, stalecCsContextData, isPreview)

  if (!csContextData) {
    return <Error statusCode={404} />
  }

  return (
    <Layout title={`Asher Caplan ✕ ${csContextData.title}`}>
      <CaseStudyPicker context={csContextData} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  preview: isPreview = false,
  params,
}) => {
  const ctxReq = new CtxRequest({
    handle: params?.slug?.toString() || '',
    isPreview,
  })

  const ctxData = await ctxReq.fetch()
  const query = ctxReq.query

  const props: PageProps = { ctxData, query, isPreview }

  return { props }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const csContexts = await getContexts(false)

  return {
    paths: csContexts.map(ctx => ({
      params: { slug: ctx.slug.current },
    })),

    fallback: true,
  }
}

export default Page
