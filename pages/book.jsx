import styles from '../styles/book.module.css'

export default function BookMegajon() {
  return (
    <>
      <div id="book-nav">
        <a>Home</a>
        <h3 className={styles.test}>Book Megajon</h3>
        <a>Cancel</a>
      </div>
      <div id="book-details">
        <input placeholder="Your name" />
        <input placeholder="Venue" />
        <input placeholder="Address" />
      </div>
      <div id="date-time">
      <label>Date</label>
        <button>Jan 22, 2024</button>
        <label>Start</label>
        <button>7:00 PM</button>
        <label>End</label>
        <button>8:00 PM</button>
      </div>
      <select name="Stage time">
      <option value="ten">10 minutes</option>
      <option value="fifteen">15 minutes</option>
      <option value="thirty">30 minutes</option>
      <option value="forty_five">45 minutes</option>
      <option value="hour">1 hour</option>
      </select>
      <select name="Request quote">
        <option value="request_quote">Request a quote</option>
        <option value="propose_fee">Propose a fee</option>
      </select>
      <input placeholder="Propose a fee" />
      <select name="Contact method">
        <option value="contact_method">Contact method</option>
        <option value="phone">Phone</option>
        <option value="email">Email</option>
        <option value="social_media">Social Media</option>
      </select>
      <input placeholder="Phone number" />
      <input placeholder="Email" />
      <input placeholder="Social media link" />
      <textarea placeholder="Notes" />
      <button>Submit Request</button>
    </>
  )
}