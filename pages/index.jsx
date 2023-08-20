import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handleSubscribe = async (event) => {
    event.preventDefault()

    // const formData = {
    //   email: event.target.unsubscribe.value,
    // }

    // const JSONData = JSON.stringify(formData)

    const payload = new FormData(subscribeForm)
    console.log("payload: ", [...payload])

    const endpoint = 'https://warm-sands-26103-c971404aa7f0.herokuapp.com/register'

    const options = {
      method: "POST",
      body: payload,
    }

    const response = await fetch(endpoint, options)
    const result = await response.json()

    if (result.message === "success") {
      document.getElementById("main-nav").innerHTML = "<h3 id='welcome-banner'>Thank you for joining!!!</h3>"
      document.getElementById("error").classList.add("hidden")
    }

    if (result.message === "invalid email") {
      document.getElementById("errorText").innerHTML = "Invalid email provided"
      document.getElementById("error").classList.remove("hidden")
    }

    if (result.message === "database error") {
      document.getElementById("errorText").innerHTML = "This email is already registered"
      document.getElementById("error").classList.remove("hidden")
    }
  }

  const hideError = async (event) => {
    document.getElementById("error").classList.add("hidden");
  }

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
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Megajon Media</title>
      </Head>
      <main>
        <div id="main-nav">
          {/* <p id="megajon-logo">Megajon Media</p> */}
          
          
          <form id="subscribeForm" onSubmit={handleSubscribe}>
            <input type="text" id="email" name="email" placeholder='Enter your email to join the ranks of Megajon'></input>
            <button id="s-button">join</button>
          </form>
  
          {/* <div id="subscribe-container" >
            <form id="subscribe-form" onSubmit={handleSubscribe}>
              <input type="text" id="email" name="email" className="email-input" />
              <button type="submit" className="subscribe-button"><img id="subscribe-image" src="/paper_airplane.png"></img></button>
              <br></br>
              <div id="error" className="subscribe-error">
                <p id="errorText"></p>
              </div>
            </form>
          </div> */}
          {/* <img id="megajon-icon"src="https://megajon-web.s3.amazonaws.com/images/js.jpeg" onClick={toProfile} /> */}
        </div>
        <nav id="bottom-nav">
          {/* <p id="megajon-logo">Megajon Media</p> */}
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
        </nav>
        <div id="main-nav-backing"></div>
        <div id="error" className="subscribe-error hidden">
          <p id="errorText"></p>
          <button id="close-button" onClick={hideError}>X</button>
        </div>
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
