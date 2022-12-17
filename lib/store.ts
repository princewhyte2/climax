
import create from "zustand"

const useClimaxStores = create((set) => ({
  pusher: null,
    setPusher: (pusher: any) => set((state: any) => ({ ...state, pusher })),
    channel: null,
    setChannel: (chan: any) => set((state: any) => ({ ...state, channel: chan })),
  test:'great'
}))

export default useClimaxStores
