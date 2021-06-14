import projectData from "../ProjectData/ProjectData";

export default function Accordion() {
  return (
    <div>
      <div>
        {projectData.map((item, i) => {
          <div>
            <p>{item.title}</p>
            <img className="portfolioImage" src={item.image}></img>
            <p className="portfolioText">{item.description}</p>
            <p className="portfolioText">{item.techUsed}</p>
            <p className="portfolioText">{item.sprint}</p>
            <a className="modal-btn" target="_blank" href={item.github}>
              {item.title} Repository
            </a>
          </div>;
        })}
      </div>
    </div>
  );
}
