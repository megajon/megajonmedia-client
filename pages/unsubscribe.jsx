import Head from 'next/head'

export default function Unsubscribe({ emails }) {
  const handleUnsubscribe = async (event) => {
    event.preventDefault()

    // const formData = {
    //   email: event.target.unsubscribe.value,
    // }

    // const JSONData = JSON.stringify(formData)

    const payload = new FormData(unsubscribeForm)
    console.log("payload: ", [...payload])

    // const endpoint = 'https://warm-sands-26103-c971404aa7f0.herokuapp.com/delete'
    const endpoint = 'http://localhost:4000/delete'

    const options = {
      method: "POST",
      body: payload,
    }

    const response = await fetch(endpoint, options)
    const result = await response.json()
    console.log("result: ", result.message)

    if (result.message === "email deleted") {
      document.getElementById("unsubscribe-container").innerHTML = "<h3 id='unsubscribe-message'>You've been unsubscribed</h3>"
    }

    if (result.message === "invalid email") {
      document.getElementById("errorText").innerHTML = "Invalid email provided"
      document.getElementById("errorText").style.color = "red";
    }

    if (result.message === "no email found") {
      document.getElementById("errorText").innerHTML = "No email found"
      document.getElementById("errorText").style.color = "red";
    }
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Megajon Media</title>
      </Head>
      <div id="unsubscribe-container">
        <div id="unsubscribe-error">
          <p id="errorText">error place holder</p>
        </div>
        <form id="unsubscribeForm" onSubmit={handleUnsubscribe}>
          <input type="text" id="unsubscribe-input" name="email" placeholder="Be a punk and leave the ranks of Megajon" email="true" />
          <br></br>
          <button type="submit" id="unsubscribe-button">unsubscribe</button>
        </form>
      </div>
    </>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:4000/emails');
//   const emails = await res.json();

//   return {
//     props: {
//       emails,
//     },
//   }
// }
