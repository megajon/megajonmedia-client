export default function Banner() {
  return (
    <>
      <video className="banner" controls autoPlay muted loop preload="none">
        <source src="https://megajon-web.s3.amazonaws.com/videos/Portlandfunniestpersonmegajon.mkv" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  )
}