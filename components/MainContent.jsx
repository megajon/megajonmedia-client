const MainContent = () => {
  return (
    <>
      <div id="main-content">
      <div className="comedy-set">
          <video className="video"  height="327px" poster="big_willy_bulger_poster.png" controls>
            <source src="https://megajon-web.s3.amazonaws.com/videos/big_willy_bulger_instagram.mp4" type="video/mp4" />
          </video>
          <h3>Big Willy Bulger</h3>
        </div>
        <div className="comedy-set">
          <video className="video" poster="https://megajon-web.s3.amazonaws.com/images/east_side_1_img.png" controls>
            <source src="https://megajon-web.s3.amazonaws.com/videos/Eastside+Bar+And+Grill+-+8-23-2022.m4v" type="video/mp4" />
          </video>
          <h3>Mommy Hoarder, Weird Uber Deliveries</h3>
        </div>
        <div className="comedy-set">
          <video className="video"  poster="https://megajon-web.s3.amazonaws.com/images/trails_end_img.png" controls>
            <source src="https://megajon-web.s3.amazonaws.com/videos/Trails+End+Golf+Center+-+8-6-2022.m4v" type="video/mp4" />
          </video>
          <h3>Facial Recognition, Black Bradley Cooper, Tiger Woods</h3>
        </div>
      </div>
    </>
  )
}

export default MainContent;