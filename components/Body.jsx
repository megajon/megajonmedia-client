export default function Body() {
  return (
    <>
      <video controls autoPlay muted playsInline>
        <source src="https://megajon-web.s3.amazonaws.com/videos/Portlandsfunniest.mp4" type="video/mp4" />
      </video>
      <div class="content">
        <img id="empty-mic" src="https://megajon-web.s3.amazonaws.com/images/StockCake-Spotlight+on+Microphone_1726722531.jpg" />
        <a  id="book_button" href="mailto:megajon@megajon.com?subject=Test%20email&body=This is my body text%0AThis is another line"><button>Book Megajon</button></a>
        <nav id="bottom-nav">
          <ul>
            <li>
              <a href="https://www.tiktok.com/@megajonrules" target="_blank" rel="noopener noreferrer">
                <img src="https://megajon-web.s3.amazonaws.com/icons/TikTok_Icon_Black_Circle.png" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/megajonrules/" target="_blank" rel="noopener noreferrer">
                <img src="https://megajon-web.s3.amazonaws.com/icons/Instagram_Glyph_Gradient.png" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC95mpMl1TLK_0YnllQZphtA" target="_blank" rel="noopener noreferrer">
                <img src="https://megajon-web.s3.amazonaws.com/icons/yt_icon_rgb.png" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/megajonrules/" target="_blank" rel="noopener noreferrer">
                <img src="https://megajon-web.s3.amazonaws.com/icons/f_logo_RGB-Blue_1024.png" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}