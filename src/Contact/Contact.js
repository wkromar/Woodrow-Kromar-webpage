import "./Contact.scss";

function Contact() {
  return (
    <div className="info">
      <div className="infoCard">
        <p>Email</p>
        <p className="infoDetails">wkromar12@gmail.com</p>
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
