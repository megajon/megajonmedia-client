import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { videoContent } from '../src/comedy-sets'
// import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // console.log(videoContent);

  // const toContent = () => {
  //   document.getElementById("profile-section")?.classList.add("profile-slideDown");
  //   document.getElementById("profile-section")?.classList.remove("profile-slideUp");
  // }

  // const toProfile = () => {
  //   document.getElementById("profile-section")?.classList.add("profile-slideUp");
  //   document.getElementById("profile-section")?.classList.remove("profile-slideDown");
  // }

  return (
    <>
      <Head>
        <title>Megajon Media</title>
      </Head>
      <main>
        <div id="main-nav">
          {/* <p id="megajon-logo">Megajon Media</p> */}
          <ul id="main-nav__icons">
            <li className="main-nav__icon">
              <a href="https://www.youtube.com/channel/UC95mpMl1TLK_0YnllQZphtA" target="_blank" rel="noopener noreferrer">
                <img src="https://megajon-web.s3.amazonaws.com/icons/yt_icon_rgb.png" />
              </a>
            </li>
            <li className="main-nav__icon">
              <a href="https://www.instagram.com/megajonrules/" target="_blank" rel="noopener noreferrer">
                <img src="https://megajon-web.s3.amazonaws.com/icons/Instagram_Glyph_Gradient.png" />
              </a>
            </li>
            <li className="main-nav__icon">
              <a href="https://www.facebook.com/megajonrules/" target="_blank" rel="noopener noreferrer">
                <img src="https://megajon-web.s3.amazonaws.com/icons/f_logo_RGB-Blue_1024.png" />
              </a>
            </li>
            <li className="main-nav__icon">
              <a href="https://twitter.com/megajonrules" target="_blank" rel="noopener noreferrer">
                <img src="https://megajon-web.s3.amazonaws.com/icons/2021+Twitter+logo+-+blue.png" />
              </a>
            </li>
            <li className="main-nav__icon">
              <a href="https://www.linkedin.com/in/jonathan-seubert/" target="_blank" rel="noopener noreferrer">
                <img src="https://megajon-web.s3.amazonaws.com/icons/linkedin.png" />
              </a>
            </li>
            <li id="github-icon" className="main-nav__icon">
              <a href="https://github.com/megajon" target="_blank" rel="noopener noreferrer">
                <picture>
                  <source srcSet="https://megajon-web.s3.amazonaws.com/icons/GitHub-Mark-120px-plus.png" media='(min-width: 768px)' />
                  <img srcSet="https://megajon-web.s3.amazonaws.com/icons/GitHub-Mark-Light-64px.png" />
                </picture>
              </a>
            </li>
             {/* <li className="main-nav__icon">
              <img src="https://megajon-web.s3.amazonaws.com/icons/email-blue.png" />
             </li>
            <li className="main-nav__icon">
              <img src="https://megajon-web.s3.amazonaws.com/icons/cv-icon-11.png" />
            </li> */}
          </ul>
          {/* <img id="megajon-icon"src="https://megajon-web.s3.amazonaws.com/images/js.jpeg" onClick={toProfile} /> */}
        </div>
        <div id="main-nav-backing"></div>
        <div id="main-content">
          <div className="comedy-set">
            <video className="video"  poster="https://megajon-web.s3.amazonaws.com/images/trails_end_img.png" controls>
              <source src="https://megajon-web.s3.amazonaws.com/videos/Trails+End+Golf+Center+-+8-6-2022.m4v" type="video/mp4" />
            </video>
            <h3>Facial Recognition, Black Bradley Cooper, Tiger Woods</h3>
          </div>
          <div className="comedy-set">
            <video className="video" poster="https://megajon-web.s3.amazonaws.com/images/east_side_1_img.png" controls>
              <source src="https://megajon-web.s3.amazonaws.com/videos/Eastside+Bar+And+Grill+-+8-23-2022.m4v" type="video/mp4" />
            </video>
            <h3>Mommy Hoarder, Weird Uber Deliveries</h3>
          </div>
        </div>
        {/* <div id="profile-section">
          <button onClick={toContent}>Content</button>
        </div> */}
      </main>
    </>
  )
}
