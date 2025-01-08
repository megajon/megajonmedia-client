export default function Page() {
  const myFunction = async () => {
    const formData = new FormData(formInput);
    const response = await fetch(process.env.TEST_URL, {
      method: "POST",
      body: formData,
    })
  }
  return (
    <form id="formInput" onSubmit={myFunction}>
      <input type="text" name="name" />
      <input type="submit" value="Submit" />
      <p id="content"></p>
    </form>
  )
}