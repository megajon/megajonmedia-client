const EmailForm = () => {

  const handleSubscribe = async (event) => {

    event.preventDefault()

    const payload = new FormData(subscribeForm)
    console.log("payload: ", [...payload])

    // const endpoint = 'https://warm-sands-26103-c971404aa7f0.herokuapp.com/register'
    const endpoint = process.env.NEXT_PUBLIC_SUBSCRIBE_URL

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
      document.getElementById("subscribeError").innerHTML = "Invalid email provided"
      document.getElementById("error").classList.remove("hidden")
    }

    if (result.message === "database error") {
      document.getElementById("subscribeError").innerHTML = "This email is already registered"
      document.getElementById("error").classList.remove("hidden")
    }
  }

  const hideError = async (event) => {
    document.getElementById("error").classList.add("hidden");
  }

  return (
    <>
      <div id="main-nav">
        <form id="subscribeForm" onSubmit={handleSubscribe}>
          <input type="text" id="email" name="email" placeholder='Enter your email to join the ranks of Megajon'></input>
          <button id="s-button">join</button>
        </form>
      </div>
      <div id="main-nav-backing"></div>
      <div id="error" className="subscribe-error hidden">
        <p id="subscribeError"></p>
        <button id="close-button" onClick={hideError}>X</button>
      </div>
    </>
  )
}

export default EmailForm;