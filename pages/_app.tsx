import Head from "next/head"
import "../styles/globals.css"
import { AppProps } from "next/app"
import { useEffect } from "react"
import Pusher from "pusher-js"
import { useSWRConfig } from "swr"
import runOneSignal from "../services/onesignal"
import { SessionProvider } from "next-auth/react"
import useClimaxStores from "../lib/store"

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { mutate } = useSWRConfig()
  const setPusher = useClimaxStores((state: any) => state.setPusher)
  const pusher = useClimaxStores((state: any) => state.pusher)
  const setChannel = useClimaxStores((state: any) => state.setChannel)
  const channel = useClimaxStores((state: any) => state.channel)

  useEffect(() => {
    runOneSignal()
  }, [])

  useEffect(() => {
    setPusher(
      new Pusher("fbc75136973291e9f2cc", {
        cluster: "eu",
      }),
    )
  }, [])
  useEffect(() => {
    setChannel(pusher?.subscribe("my-channel"))
  }, [pusher])

  // useEffect(() => {
  //   channel?.bind("my-event", function (data: any) {
  //     mutate("/posts")
  //   })
  // }, [channel])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Climax | Be aware and make the change</title>

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
