export default function Heading(props) {
  return (
    <div className="split-section__text">
      <h2>{props.heading}</h2>
      <p className="lead">
        ჩვენი მომხარებლები არიან ბიძაშვილები, მამიდაშვილები, მეზობლები. გახდი
        შენც!
      </p>
      <a href="#">გაიგე მეტი</a>
    </div>
  );
}
