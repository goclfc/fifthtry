function AboutUs() {
  return (
    <main>
      {/* <!-- Hero Section --> */}
      <section class="hero hero-sm">
        <div class="container">
          <h1 class="mb-0">ჩვენს შესახებ</h1>
        </div>
      </section>

      {/* <!-- Split Section --> */}
      <section class="section-padding">
        <div class="container">
          <div class="split-section">
            <div class="split-section__text">
              <h2>ჩვენ ვქმნით ვებ გვერდებს ყველასთვის</h2>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                doloremque ducimus error excepturi, fugit ipsa iure laudantium
                magni modi nobis officia placeat possimus quod reprehenderit,
                similique, sit ullam voluptate voluptates.
              </p>
            </div>
            <div class="split-section__image">
              <img
                src="images/about/about-1.jpeg"
                alt="Laptop"
                class="img-shadow img-rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Split Section --> */}
      <section class="section-padding">
        <div class="container">
          <div class="split-section">
            <div class="split-section__image">
              <img
                src="images/about/about-2.jpeg"
                alt="Laptop"
                class="img-shadow img-rounded"
              />
            </div>
            <div class="split-section__text">
              <h2>We create websites of any scale</h2>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                doloremque ducimus error excepturi, fugit ipsa iure laudantium
                magni modi nobis officia placeat possimus quod reprehenderit,
                similique, sit ullam voluptate voluptates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default AboutUs;
