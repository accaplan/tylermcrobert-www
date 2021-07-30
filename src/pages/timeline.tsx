import { NextPage, GetStaticProps } from 'next'

import { Layout } from 'components'
import styled from 'styled-components'
import { client } from 'lib/sanity'
import { useState } from 'react'
import { size } from 'style'

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

const MainGrid = styled.div`
  display: flex;
  font-size: ${size[2]};
`

const PowerTenStyle = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  border: 1px solid blue;
  transform: translate3d(-50%, -50%, 0);

  > div {
    > :nth-child(1) {
      padding-top: ${size[0]};
    }
    display: flex;
    padding-top: ${size[0]};
    transform: rotate(90deg);
  }
`
const MetersStyle = styled.div`
  transform-origin: top left;
  border: 1px solid blue;
  transform: translate3d(-50%, 50%, 0);
  position: absolute;
  padding-left: ${size[3]};

  > div {
    transform: rotate(-90deg);
    width: 100vh;
  }
`

const PowerTenIndicator: React.FC<{ number: number }> = () => {
  return (
    <PowerTenStyle>
      <div>
        <div>10</div>
        <span>1</span>
      </div>
    </PowerTenStyle>
  )
}

const SquareStyle = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid blue;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
        <MainGrid>
          <MetersStyle>
            <div>1,000 meters</div>
          </MetersStyle>
          <SquareStyle>lorem ipsum dolor sit</SquareStyle>
          <PowerTenIndicator number={0} />
        </MainGrid>
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
;``
export default Timeline
