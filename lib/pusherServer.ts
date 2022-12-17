import Pusher from 'pusher';

const pusherServer = new Pusher({
  appId: "1526236",
  key: "fbc75136973291e9f2cc",
  secret: "bd02f2396cfe065597cc",
  cluster: "eu",
  useTLS: true
})

export default pusherServer;