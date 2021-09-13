import React from 'react'
import { DotHead, LargeHead } from 'components'

import useNowPlaying from 'hooks/useNowPlaying'
// import { IParsedPlaylist } from 'types/SpotifyPlaylist'
import Link from 'next/link'
import S from './Info.Styled'
import { ISpotifyPlaylist, IParsedPlaylist } from 'types'
import { NUMBERS, UNICODE } from '../../constants'
import { parseSpotifyPlaylist } from '../../util'

const Info: React.FC<{
  // data: IInfoRes
  playlists: ISpotifyPlaylist[]
}> = ({ playlists }) => {
  // const { clients, introduction } = res.results[0].data

  return (
    <>
      <S.LgSection>
        <S.Section>
          <div>
            <DotHead>Bio</DotHead>
            <LargeHead>
              I&apos;m Asher Caplan, an American living in Zurich, Swtizerland &amp; and working within architecture, as a transdiciplinary designer.
            </LargeHead>
          </div>
        </S.Section>
        <S.Section>
          <Contact />
          <S.TwoCol>
            <DotHead>Clients</DotHead>
            <ul>
              {[
                'Nike',
                'Adidas',
                'Visibility Office',
                'High Tide NYC',
                'Zero Motorcycles',
                'Specialized Bicycles',
                'Marriott Hotels',
                'Provenance Hotels',
                'Meijer',
                'Chaco',
                'Merrell',
              ].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </S.TwoCol>
        </S.Section>
      </S.LgSection>
      <S.Hr />
      <S.LgSection>
        <Music />
        <FeaturedPlaylists
          data={playlists.map(playlist => parseSpotifyPlaylist(playlist))}
        />
      </S.LgSection>
    </>
  )
}

const Contact = () => (
  <S.TwoCol>
    <div>
      &#9679; E-M→{' '}
      <a href="mailto:ash@romanceoffice.com">ash@romanceoffice.com</a>
    </div>
    <div>
      &#9679; IG→{' '}
      <a href="http://instagram.com/thatsweetash">@thatsweetash</a>{' '}
    </div>
  </S.TwoCol>
)

const Music = () => {
  const { loading, artist, trackName, nowPlaying } = useNowPlaying()

  return (
    <S.Section>
      <div>
        {!loading && !!artist && (
          <>
            <DotHead>{nowPlaying ? 'Now Playing' : 'Recently Played'}</DotHead>
            <LargeHead>
              {nowPlaying ? (
                <>
                  Right now I&apos;m listening to:&nbsp;“{trackName}” by{' '}
                  {artist} on Spotify.
                </>
              ) : (
                <>
                  The last song I listened to on Spotify was &nbsp;“{trackName}”
                  by {artist}.
                </>
              )}
            </LargeHead>
          </>
        )}
      </div>
    </S.Section>
  )
}

const FeaturedPlaylists: React.FC<{
  data: IParsedPlaylist[]
}> = ({ data }) => {
  return (
    <S.Section>
      <div>
        <div>
          <DotHead>Featured Playlists</DotHead>
        </div>

        {data.map((item, i) => (
          <S.PlaylistWrapper
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              {NUMBERS[i + 1]} {item.name}
            </p>
            <p>{item.dateCreated}</p>
            <p>{item.totalDuration}</p>
            <p> {UNICODE.RIGHT}</p>
          </S.PlaylistWrapper>
        ))}
      </div>
      <Link href="/playlists">
        <a>See all playlists {UNICODE.RIGHT}</a>
      </Link>
    </S.Section>
  )
}

export default Info
