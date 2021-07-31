import React from 'react'
import { PreviewIndicator, LockScreen } from 'components'
import App, { AppProps, AppContext } from 'next/app'
import { getContexts } from 'lib/api'
import { AppProvider } from 'providers'
import { CsContext } from 'types'

type MyAppProps = AppProps & { isPreview: boolean; contexts: CsContext[] }

function MyApp({ Component, pageProps, isPreview, contexts }: MyAppProps) {
  return (
    <AppProvider contexts={contexts}>
      <LockScreen />
      <style global jsx>{`
        @font-face {
          font-family: 'Suisse';
          src: url('/fonts/SuisseIntl-Regular.otf');
        }
      `}</style>
      {isPreview && <PreviewIndicator />}
      <Component {...pageProps} />
    </AppProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  const isPreview =
    appContext.ctx.req?.headers.cookie?.includes('__next_preview_data') || false

  const contexts = await getContexts(true)

  return {
    ...appProps,
    contexts,
    isPreview,
  }
}

export default MyApp
