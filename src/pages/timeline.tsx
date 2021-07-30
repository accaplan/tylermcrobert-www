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
  z-index: 1000;

  img {
    width: 500px;
    height: 500px;
  }
`

const Grid = styled.div<{ bottom?: boolean }>`
  position: absolute;
  width: 100vw;
  ${p => (p.bottom ? 'bottom' : 'top')}: 0;
  left: 0;
  bottom: 0;
  padding: ${size[0]};
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
  position: absolute;

  height: 100%;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  align-items: center;

  > div {
    transform: rotate(-90deg);
    transform-origin: top left;

    > div {
      transform: translate3d(-50%, 0, 0);
      padding-top: 1rem;
    }
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
          <div>{event.date}</div>
          <div>{event.title}</div>
          <div>
            <div>03:02 PM</div>
          </div>
        </Grid>
        <MainGrid>
          <MetersStyle>
            <div>
              <div>1,000,000 meters</div>
            </div>
          </MetersStyle>
          <SquareStyle>
            <img src="https://kadist.org/wp-content/uploads/2016/04/futurefarmers_powersof10.jpg" />
          </SquareStyle>
          <PowerTenIndicator number={2} />
        </MainGrid>
        <Grid bottom>
          <div>Butterworth Hospital</div>
          <div>•</div>
          <div>Grand Rapids, MI</div>
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
;``
export default Timeline
