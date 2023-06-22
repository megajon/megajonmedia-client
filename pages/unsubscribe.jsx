export default function Unsubscribe({ emails }) {
  return (
    <ul>
      {emails.map((e) => (
        <li>{e.email}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/emails');
  const emails = await res.json();

  return {
    props: {
      emails,
    },
  }
}
