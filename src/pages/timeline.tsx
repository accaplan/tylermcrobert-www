import { NextPage, GetStaticProps } from 'next'

import { Layout } from 'components'
import styled from 'styled-components'

const TimelineWrapper = styled.section`
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const Timeline: NextPage<{ data: any }> = ({}) => {
  return (
    <Layout title="Info">
      <TimelineWrapper>timeline</TimelineWrapper>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { data: '' },
  }
}

export default Timeline
