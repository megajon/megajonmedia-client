const SocialMedia = () => {
  return (
    <>
      <nav id="bottom-nav">
        <ul>
          <li>
            <a href="https://www.youtube.com/channel/UC95mpMl1TLK_0YnllQZphtA" target="_blank" rel="noopener noreferrer">
              <img src="https://megajon-web.s3.amazonaws.com/icons/yt_icon_rgb.png" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/megajonrules/" target="_blank" rel="noopener noreferrer">
              <img src="https://megajon-web.s3.amazonaws.com/icons/Instagram_Glyph_Gradient.png" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/megajonrules/" target="_blank" rel="noopener noreferrer">
              <img src="https://megajon-web.s3.amazonaws.com/icons/f_logo_RGB-Blue_1024.png" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/megajonrules" target="_blank" rel="noopener noreferrer">
              <img src="https://megajon-web.s3.amazonaws.com/icons/2021+Twitter+logo+-+blue.png" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jonathan-seubert/" target="_blank" rel="noopener noreferrer">
              <img src="https://megajon-web.s3.amazonaws.com/icons/linkedin.png" />
            </a>
          </li>
          <li>
            <a href="https://github.com/megajon" target="_blank" rel="noopener noreferrer">
              <picture>
                <source srcSet="https://megajon-web.s3.amazonaws.com/icons/GitHub-Mark-120px-plus.png" media='(min-width: 1200px)' />
                <source srcSet="https://megajon-web.s3.amazonaws.com/icons/GitHub-Mark-120px-plus.png" media='(min-width: 768px)' />
                <img srcSet="https://megajon-web.s3.amazonaws.com/icons/GitHub-Mark-Light-64px.png" />
              </picture>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default SocialMedia;