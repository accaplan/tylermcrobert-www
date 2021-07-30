import { NextPage, GetStaticProps } from 'next'

import { Layout } from 'components'
import styled from 'styled-components'
import { client } from 'lib/sanity'

const TimelineWrapper = styled.section`
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  color: white;
  padding: 1.2rem;
  padding-top: 4rem;
`

const Timeline: NextPage<{
  data: {
    title?: string
  }[]
}> = ({ data }) => {
  return (
    <Layout title="Info">
      <TimelineWrapper>
        {data.map(timeline => (
          <div key={timeline.title}>{timeline.title}</div>
        ))}
      </TimelineWrapper>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.fetch(`*[_type == 'timeline']`)

  return {
    props: { data },
  }
}

export default Timeline
