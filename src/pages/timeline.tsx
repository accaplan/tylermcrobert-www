import { NextPage, GetStaticProps } from 'next'

import { Layout } from 'components'
import styled from 'styled-components'
import { client } from 'lib/sanity'
import { useState } from 'react'

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  > :nth-child(2) {
    text-align: center;
  }

  > :nth-child(3) {
    text-align: right;
  }
`

const Timeline: NextPage<{
  data: {
    title?: string
    date?: string
  }[]
}> = ({ data }) => {
  const [index, setIndex] = useState(0)
  const event = data[index]
  return (
    <Layout title="Info">
      <TimelineWrapper onClick={() => setIndex(index + 1)}>
        <Grid>
          <div>{event.title}</div>
          <div>•</div>
          <div>{event.date}</div>
        </Grid>
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
