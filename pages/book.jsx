import { useEffect } from 'react';
import styles from '../styles/book.module.css'
import SelectDate from '../components/SelectDate';


export default function BookMegajon() {
  // const feeSelector = document.getElementsByName('request_quote');

  function proposeFee() {
    const selectValue = document.getElementById('request_quote').value;
    if (selectValue === 'propose_fee') {
      document.getElementById('fee_input').classList.toggle('hidden');
    } else {
      document.getElementById('fee_input').classList.toggle('hidden');
    }
  }

  function contactMethod() {
    // const phone = document.getElementById('method');
    const selectValue = document.getElementById('contact').value;
    if (selectValue === 'phone') {
      document.getElementById('email_contact').classList.add('hidden');
      document.getElementById('social').classList.add('hidden');
      document.getElementById('phone').classList.remove('hidden');
    } else if (selectValue === 'email') {
      document.getElementById('phone').classList.add('hidden');
      document.getElementById('social').classList.add('hidden');
      document.getElementById('email_contact').classList.remove('hidden');
    } else if (selectValue === 'social') {
      document.getElementById('phone').classList.add('hidden');
      document.getElementById('email_contact').classList.add('hidden');
      document.getElementById('social').classList.remove('hidden');
    } else {
      document.getElementById('phone').classList.add('hidden');
      document.getElementById('email_contact').classList.add('hidden');
      document.getElementById('social').classList.add('hidden');
    }
  }

  return (
    <>
      <div className={styles.booknav}>
        <a>Home</a>
        <h3>Book Megajon</h3>
        <a className={styles.cancel}>Cancel</a>
      </div>
      <div className={styles.details}>
        <input placeholder="Your Name" />
        <input placeholder="Name of Venue" />
        <input placeholder="City and State" />
      </div>
      <div className={styles.date}>
        <div>
          <label>Date</label>
          <SelectDate />
          {/* <button>Jan 22, 2024</button> */}
        </div>
        {/* <hr></hr> */}
        <div>
          <label>Time</label>
          <select default="7" className={styles.timeInputs}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          <symbol className={styles.symbol}>:</symbol>
          <select id="minutes" className={styles.timeInputs}>
            <option>00</option>
            <option>15</option>
            <option>30</option>
            <option>45</option>
          </select>
          <select id="am_pm" className={styles.timeInputs}>
            <option>PM</option>
            <option>AM</option>
          </select>
        </div>
      </div>
      <div className={styles.dropdowns}>
        <div>
          <select name="stage_time" className={styles.select}>
            <option value="default">Stage time</option>
            <option value="ten">10 minutes</option>
            <option value="fifteen">15 minutes</option>
            <option value="thirty">30 minutes</option>
            <option value="forty_five">45 minutes</option>
            <option value="hour">1 hour</option>
          </select>
        </div>
        <div>
          <select id="request_quote" className={styles.select} onChange={proposeFee}>
            <option value="request_quote">Request a quote</option>
            <option value="propose_fee">Propose a fee</option>
          </select>
        </div>
        <div id='fee_input' className='hidden'>
          <input placeholder="Propose a fee" className={styles.select} />
        </div>
  
        <div>
          <select id='contact' className={styles.select} onChange={contactMethod}>
            <option value="preferred">Preferred Contact Method</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="social">Social Media</option>
          </select>
        </div>
        <div id='phone' className='hidden'>
          <input placeholder="Phone number" className={styles.select} />
        </div>
        <div id='email_contact' className='hidden'>
          <input placeholder="Email" className={styles.select} />
        </div>
        <div id='social' className='hidden'>
          <input placeholder="Social media link" className={styles.select} />
        </div>
      </div>
      <div>
        <textarea placeholder="Notes" className={styles.notes} />
      </div>
      <div className={styles.submit}>
        <button>Submit Request</button>
      </div>
    </>
  )
}