import { getDefaultNormalizer } from "@testing-library/react";
import "./Contact.scss";
// personal contact info displayed
function Contact() {
  const email = `wkromar12@gmail.com`;
  return (
    <div id="Contact" className="info">
      {/* <h2 className="portfolioHeader">Contact</h2> */}
      <div className="infoCard">
        <p>Email</p>
        <a href={`mailto:${email}`} className="infoDetails">
          {email}
        </a>
      </div>
      <div className="infoCard">
        <p>Phone</p>
        <p className="infoDetails">612-636-9960</p>
      </div>
      <div className="infoCard">
        <p>Location</p>
        <p className="infoDetails">Minneapolis, Minnesota</p>
      </div>
    </div>
  );
}

export default Contact;
