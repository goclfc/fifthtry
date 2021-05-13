import { useEffect, useState } from "react";
import { getItems } from "../services/get-item";
import { getSection1 } from "../services/get-section1";
import Item from "./Item";
import Section1 from "./Section1";

function Main() {
  const [itemData, setItemData] = useState(null);
  const [section1Data, setSection1Data] = useState(null);
  useEffect(() => {
    getItems().then((data) => setItemData(data));
    getSection1().then((data) => setSection1Data(data));
  }, []);

  if (itemData === null || section1Data === null) return <div>Loading...</div>;
  return (
    <main>
      {/* <!-- Hero Section --> */}
      <section className="hero">
        <Section1 heading={section1Data.heading} />
      </section>

      {/* <!-- Services Section --> */}
      <section className="section-padding">
        <div className="container">
          <div className="services">
            {itemData.map((item) => {
              return (
                <div className="service-col" key={item.id}>
                  <Item
                    src={item.src}
                    description={item.description}
                    title={item.title}
                    url={item.url}
                  />
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
