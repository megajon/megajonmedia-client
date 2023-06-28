export default function Unsubscribe({ emails }) {
  const handleUnsubscribe = async (event) => {
    event.preventDefault()

    // const formData = {
    //   email: event.target.unsubscribe.value,
    // }

    // const JSONData = JSON.stringify(formData)

    const payload = new FormData(unsubscribeForm)
    console.log("payload: ", [...payload])

    const endpoint = 'http://localhost:4000/delete'

    const options = {
      method: "POST",
      body: payload,
    }

    const response = await fetch(endpoint, options)
    const result = await response.json()
    console.log("result: ", result.message)

    if (result.message === "email deleted") {
      document.getElementById("form-container").innerHTML = "You've been unsubscribed"
    }

    if (result.message === "invalid email") {
      document.getElementById("errorText").innerHTML = "Invalid email provided"
    }

    if (result.message === "no email found") {
      document.getElementById("errorText").innerHTML = "No email found"
    }
  }
  return (
    <>
      <div id="unsubscribe-container">
        <form id="unsubscribeForm" onSubmit={handleUnsubscribe}>
          <input type="text" id="email" name="email" className="email-input" email="true" />
          <br></br>
          <button type="submit" className="unsubscribe-button">unsubscribe</button>
          <br></br>
          <div id="error" className="unsubscribe-error">
            <p id="errorText"></p>
          </div>
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
