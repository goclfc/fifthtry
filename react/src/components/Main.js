import { useEffect, useState } from "react";
import { getItems } from "../services/get-item";
import Item from "./Item";
function Main() {
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    getItems().then((data) => setItemData(data));
  });
  return (
    <main>
      {/* <!-- Hero Section --> */}
      <section className="hero">
        <div className="container">
          <h1>ჩვენ ვაწყობთ ყველაზე სწრაფად და იაფად</h1>
          <p className="lead">
            ჩვენი საიტები ყველას ჯობია, ყველაფრით. მარტო ფეისბუქი გვჯობია ოდნავ
          </p>
          <a href="#" className="btn btn-primary">
            ითანამშრომლეთ ჩვენთან
          </a>
        </div>
      </section>

      {/* <!-- Services Section --> */}
      <section className="section-padding">
        <div className="container">
          <div className="services">
            {itemData.map((item) => {
              return (
                <div className="service-col">
                  <Item
                    src={item.src}
                    description={item.description}
                    title={item.title}
                    url={item.url}
                  />
                  ;
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <!-- Split Section --> */}
      <section className="section-padding section-grey">
        <div className="container">
          <div className="split-section">
            <div className="split-section__text">
              <h2>ჩვენ ვქმნით ვებ გვერდებს ყველასთვის</h2>
              <p className="lead">
                ჩვენი მომხარებლები არიან ბიძაშვილები, მამიდაშვილები, მეზობლები.
                გახდი შენც!
              </p>
              <a href="#">გაიგე მეტი</a>
            </div>
            <div className="split-section__image">
              <img
                src="images/home/split.jpeg"
                alt="Laptop"
                className="img-shadow img-rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Main;
