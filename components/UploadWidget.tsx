import { useEffect, useRef } from "react"

declare const window: any
interface IProps {
  setImageUrl: (imgUrl: string) => void
}
const UploadWidget = ({ setImageUrl }: IProps) => {
  const cloudinaryRef = useRef<any>()
  const widgetRef = useRef<any>()

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    if (cloudinaryRef.current) {
      widgetRef.current = cloudinaryRef.current.createUploadWidget(
        {
          cloudName: "felistus",
          uploadPreset: "climax_app",
          folder: "Climax",
        },
        (error: any, result: { event: string; info: { secure_url: string } }) => {
          if (!error && result && result.event === "success") {
            const imgURL = result.info.secure_url
            setImageUrl(imgURL)
            console.log(imgURL)
          }
          console.error("error: ", error)
        },
      )
    }
  }, [])
  return (
    <button type="button" className="cloudinary-button bg-[#17B657]" onClick={() => widgetRef.current.open()}>
      cover image
    </button>
  )
}
export default UploadWidget
