import { NextPage, GetStaticProps } from 'next'

import { Layout } from 'components'
import styled from 'styled-components'
import { client } from 'lib/sanity'
import { useState } from 'react'
import { size } from 'style'

const TimelineWrapper = styled.section`
  background: black;
  position: fixed;

  top: 10vh;
  height: 90vh;

  left: 10vw;
  width: 90vw;

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
  width: 90vw;

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
  width: 90vw;
  height: 90vh;

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ScrollShim = styled.div`
  height: 500vh;
  background: url('https://www.nikecirculardesign.com/static/31b56b0a884a67e2deac082ae0b79ee1/6bd56/7562979f7d2740b49d8bcf7b325a0d72d0a2d6be_bda786095ae2a83c559a846255d87b86d85c4a04_as11-44-6552_orig-copy.jpg');
  background-size: cover;
`
const Timeline: NextPage<{
  data: {
    title?: string
    dateTime?: string
  }[]
}> = ({ data }) => {
  const [index, setIndex] = useState(0)
  const { dateTime, title: eventTitle } = data[index]
  const dateStr = new Date(dateTime || '').toDateString()
  const timeStr = dateTime?.split('T')[1].split('.')[0]

  return (
    <Layout title="Info">
      <ScrollShim />
      <TimelineWrapper onClick={() => setIndex(index + 1)}>
        <Grid>
          <div>
            {dateStr} {timeStr}
          </div>
          <div>{eventTitle}</div>
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
