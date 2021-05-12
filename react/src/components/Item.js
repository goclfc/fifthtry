import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <div className="service">
      <img src={props.src} alt="Web Design" />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <Link to={props.url}> გაიგე მეტი</Link>
    </div>
  );
}
