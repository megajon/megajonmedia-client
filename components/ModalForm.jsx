'use client'
import { useEffect } from 'react';
import Script from 'next/script';
import SelectDate from '../components/SelectDate';


export default function ModalForm() {
  
  useEffect(() => {
    let autocompleteName;
    let autocompleteAddress;

    function initAutocomplete() {
      // Initialize the Google Places Autocomplete for the venue name input
      autocompleteName = new google.maps.places.Autocomplete(
        document.getElementById('venue_name'),
        { types: ['establishment'] } // Limit to places like venues, businesses, etc.
      );

      // Add listener for place selection
      autocompleteName.addListener('place_changed', fillInAddress);
    }

    function fillInAddress() {
      // Get the place details from the autocomplete object for the venue name
      const place = autocompleteName.getPlace();

      // Get the address from the place details
      const address = place.formatted_address;

      // Fill the address field with the address
      document.getElementById('venue_address').value = address || 'No address available';
    }

    // Initialize the autocomplete when the window loads
    window.onload = initAutocomplete;

    const paymentDropdown = document.getElementById('paymentDropdown');
    const feeInput = document.getElementById('feeInput');

    paymentDropdown.addEventListener('change', function() {
      const currentOption = this.value;
      if (currentOption === 'Proposing a fee') {
        feeInput.style.display = 'block';
      } else {
        feeInput.style.display = 'none';
      }
    })

    const contactDropdown = document.getElementById('contactDropdown');
    const contactInput = document.getElementById('contactinfo');

    contactDropdown.addEventListener('change', function() {
      const selectedOption = this.value;
      if (selectedOption === 'phone') {
        contactInput.placeholder = 'Enter your phone number';
        contactInput.style.display = 'block';
      } else if (selectedOption === 'email') {
        contactInput.placeholder = 'Enter your email address';
        contactInput.style.display = 'block';
      } else if (selectedOption === 'social') {
        contactInput.placeholder = 'Enter your social media handle (e.g., @username)';
        contactInput.style.display = 'block';
      } else {
        contactInput.style.display = 'none'; // Default placeholder
      }
    });
  }, []);

  //handleFormSubmit
  const handleFormSubmission = async (event) => {
    event.preventDefault()

    const payload = new FormData(bookingForm)

    const endpoint = process.env.NEXT_PUBLIC_LOCAL_URL;

    const options = {
      method: "POST",
      body: payload,
    }

    const response = await fetch(endpoint, options)
    const result = await response.json()
    let errorMessage = document.getElementById('error-message')

    if (result.error === "Key: 'Booking.Name' Error:Field validation for 'Name' failed on the 'required' tag") {
      errorMessage.innerHTML = 'Please enter a name'
      document.getElementById("requestorsName").classList.add('formError')
    }
    if (result.error === "Key: 'Booking.Venue' Error:Field validation for 'Venue' failed on the 'required' tag") {
      errorMessage.innerHTML = 'Please enter a venue name'
      document.getElementById("venue_name").classList.add('formError')
    }

    if (result.error === "Key: 'Booking.Address' Error:Field validation for 'Address' failed on the 'required' tag") {
      errorMessage.innerHTML = 'Please enter a venue address'
      document.getElementById("venue_address").classList.add('formError')
    }

    if (result.error === "stagetime is default") {
      errorMessage.innerHTML = 'Please select a stage time'
      document.getElementById("stagetime").classList.add('formError')
    }

    if (result.error === "quotefee is default") {
      errorMessage.innerHTML = 'Please select a quote or fee'
      document.getElementById("paymentDropdown").classList.add('formError')
    }

    if (result.error === "contact is default") {
      errorMessage.innerHTML = 'Please enter a contact method'
      document.getElementById("contactDropdown").classList.add('formError')
    }

    if (result.error === "Key: 'Booking.ContactInfo' Error:Field validation for 'ContactInfo' failed on the 'required' tag") {
      errorMessage.innerHTML = 'Please enter contact info'
      document.getElementById("contactinfo").classList.add('formError')
    }

    if (result.message === 'success') {
      let successBanner = document.getElementById('successBanner')
      let modalContainer = document.getElementById('modal-container')
      const bookingForm = document.getElementById('bookingForm')
      bookingForm.reset()
      modalContainer.style.display = 'none'
      successBanner.classList.add('successBanner')
      successBanner.style.display = 'block'
    }
  }

  function closeModal() {
    const modal = document.getElementById('fullScreenModal')
    modal.style.display = 'none'
  }

  function closeBanner() {
    const modal = document.getElementById('fullScreenModal')
    let successBanner = document.getElementById('successBanner')
    let modalContainer = document.getElementById('modal-container')
    modal.style.display = 'none'
    successBanner.style.display = 'none'
    modalContainer.style.display = 'block'
  }

  return(
    <>
      <div id="fullScreenModal" className="modal">
        <div id="successBanner" className="">
          <h1>Message Sent</h1>
          <button id="closeBanner" className="" onClick={closeBanner}>close x</button>
        </div>
        <div id="modal-container">
          <div id="booking_header">
            <h2>Book Megajon</h2>
          </div>
          <button id="closeModalBtn" className="" onClick={closeModal}>Cancel</button>
          <div id="error-banner"><p id="error-message"></p></div>
          <form id="bookingForm" onSubmit={handleFormSubmission}>
            <div className="venue_details">
              <input id="requestorsName" className="venue-inputs" name="name" placeholder="Your Name" required />
              <input id="venue_name" className="venue-inputs" name="venue" placeholder="Name of Venue" />
              <input id="venue_address" className="venue-inputs" name="address" placeholder="City and State" />
              <div className="date-container">
                <label>Date:</label>
                <SelectDate name="date" />
              </div>
              <div className='time-container'>
                  <div className="time-drops">
                    <label>Time:</label>
                    <select default="7" name="hours">
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
                    <select id="minutes" name="minutes">
                      <option>00</option>
                      <option>15</option>
                      <option>30</option>
                      <option>45</option>
                    </select>
                    <select id="am_pm" name="ampm">
                      <option>PM</option>
                      <option>AM</option>
                    </select>
                  </div>
              </div>
              
            </div>
            <div>
              <div id="dropDowns">
                <select id="stagetime" name="stagetime">
                  <option value="default">Stage time</option>
                  <option value="10 Minutes">10 minutes</option>
                  <option value="15 Minutes">15 minutes</option>
                  <option value="30 Minutes">30 minutes</option>
                  <option value="45 Minutes">45 minutes</option>
                  <option value="1 Hour">1 hour</option>
                </select>
                <select id="paymentDropdown" name="quotefee">
                  <option value="default">Request a quote or Propose a fee</option>
                  <option value="Requesting a quote">Requesting a quote</option>
                  <option value="Proposing a fee">Proposing a fee</option>
                </select>
                <input id="feeInput" className="show-details" name="fee" placeholder="Propose a fee" />
                <select id='contactDropdown' name="contactmethod">
                  <option value="default">Preferred Contact Method</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                  <option value="social">Social Media</option> 
                </select>
                <input id="contactinfo" className="show-details" name="contactinfo" placeholder="Phone number" />
              </div>
              
            </div>
            <div>
              <textarea id="additional-details" placeholder="Additional details" name="details" />
            </div>
            <div>
              <button id="submit-form" onSubmit={handleFormSubmission}>Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}