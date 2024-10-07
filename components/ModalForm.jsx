export default function ModalForm() {
  function closeModal() {
    console.log('clicked!')
    const modal = document.getElementById('fullScreenModal');
    modal.style.display = 'none';
  }
  return(
    <>
      <div id="fullScreenModal" className="modal">
        <div id="booking_header">
          <button id="homeModalBtn" className="" onClick={closeModal}>Home</button>
          <h2>Book Megajon</h2>
          <button id="closeModalBtn" className="" onClick={closeModal}>Cancel</button>
        </div>
        <div className="venue_details">
          <input placeholder="Your Name" />
          <input placeholder="Name of Venue" />
          <input placeholder="City and State" />
        </div>
        <div>
          <div>
            <label>Date</label>
            {/* <SelectDate /> */}
            {/* <button>Jan 22, 2024</button> */}
          </div>
          {/* <hr></hr> */}
          <div>
            <label>Time</label>
            <select default="7">
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
            <symbol>:</symbol>
            <select id="minutes">
              <option>00</option>
              <option>15</option>
              <option>30</option>
              <option>45</option>
            </select>
            <select id="am_pm">
              <option>PM</option>
              <option>AM</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <select name="stage_time">
              <option value="default">Stage time</option>
              <option value="ten">10 minutes</option>
              <option value="fifteen">15 minutes</option>
              <option value="thirty">30 minutes</option>
              <option value="forty_five">45 minutes</option>
              <option value="hour">1 hour</option>
            </select>
          </div>
          <div>
            <select id="request_quote">
              <option value="request_quote">Request a quote</option>
              <option value="propose_fee">Propose a fee</option>
            </select>
          </div>
          <div id='fee_input' className='hidden'>
            <input placeholder="Propose a fee" />
          </div>
    
          <div>
            <select id='contact'>
              <option value="preferred">Preferred Contact Method</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="social">Social Media</option>
            </select>
          </div>
          <div id='phone' className='hidden'>
            <input placeholder="Phone number" />
          </div>
          <div id='email_contact' className='hidden'>
            <input placeholder="Email" />
          </div>
          <div id='social' className='hidden'>
            <input placeholder="Social media link" />
          </div>
        </div>
        <div>
          <textarea placeholder="Notes" />
        </div>
        <div>
          <button>Submit Request</button>
        </div>
      </div>
    </>
  )
}