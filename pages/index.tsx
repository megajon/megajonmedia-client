import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { videoContent } from '../src/comedy-sets'
// import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  console.log(videoContent);

  const toContent = () => {
    document.getElementById("profile-section")?.classList.add("profile-slideDown");
    document.getElementById("profile-section")?.classList.remove("profile-slideUp");
  }

  const toProfile = () => {
    document.getElementById("profile-section")?.classList.add("profile-slideUp");
    document.getElementById("profile-section")?.classList.remove("profile-slideDown");
  }

  return (
    <>
      <Head>
        <title>Megajon Media</title>
      </Head>
      <main>
        <div id="main-nav">
          <ul id="main-nav__icons">
            <li className="main-nav__icon">
              <img src="https://megajon-web.s3.amazonaws.com/icons/linkedin.png" />
            </li>
            <li className="main-nav__icon">
              <img src="https://megajon-web.s3.amazonaws.com/icons/GitHub-Mark-Light-64px.png" />
            </li>
             <li className="main-nav__icon">
              <img src="https://megajon-web.s3.amazonaws.com/icons/email-blue.png" />
             </li>
            <li className="main-nav__icon">
              <img src="https://megajon-web.s3.amazonaws.com/icons/cv-icon-11.png" />
            </li>
          </ul>
          <img id="megajon-icon"src="https://megajon-web.s3.amazonaws.com/images/js.jpeg" onClick={toProfile} />
        </div>
        <div id="main-nav-backing"></div>
        <div id="main-content">
          <div className="comedy-set">
            <video className="video" controls>
              <source src="https://megajon-web.s3.amazonaws.com/videos/Eastside+Bar+And+Grill+-+8-23-2022.m4v" type="video/mp4" />
            </video>
            <h3>Mommy Hoarder, Weird Uber Deliveries</h3>
          </div>
          <div className="comedy-set">
            <video className="video" controls>
              <source src="https://megajon-web.s3.amazonaws.com/videos/Trails+End+Golf+Center+-+8-6-2022.m4v" type="video/mp4" />
            </video>
            <h3>Facial Recognition, Black Bradley Cooper, Tiger Woods</h3>
          </div>
        </div>
        <div id="profile-section">
          <button onClick={toContent}>Content</button>
        </div>
      </main>
    </>
  )
}
