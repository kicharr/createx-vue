<template>
  <header-component></header-component>

  <main class="main">
    <div class="main-wrapper container">
      <div class="bg-slider">
        <div class="slider-item">
          <SliderSwiperHomePage></SliderSwiperHomePage>
        </div>
      </div>
      <section class="main-wrapper__content">
        <div class="main-title__wrapper">
          <h1>CREATE <span class="accent">X</span><br>
            CONSTRUCTION
          </h1>
        </div>
        <p class="main-title__description">
          Cras ultrices leo vitae non viverra. Fringilla nisi quisque <br> consequat, dignissim vitae proin
          ipsum sed. Pellentesque nec <br> turpis purus eget pellentesque integer ipsum elementum felis.
        </p>
        <div class="main-buttons__wrapper">
          <button class="main-btn main-window__btn">
            <a class="main-btn__link" href="../about.html">
              Learn more about us
            </a>
          </button>
          <button class="main-btn main-window__btn">SUBMIT REQUEST</button>
        </div>
      </section>
      <section class="about">
        <div class="section-title__wrapper">
          <h2>We are Createx Construction Bureau </h2>
          <p class="section-tilte__subtitle">
            We are rightfully considered to be the best construction company in the USA.
          </p>
        </div>
        <div class="video__wrapper">
          <img class="video-img" src="../assets/images/video-img.jpg" alt="Video">
          <img class="video-img__play" src="../assets/icons/play-video-orange.svg" alt="Play">
          <img class="video-img__controls" src="../assets/icons/controls-video.svg" alt="Controls">
        </div>
      </section>
      <section class="values">
        <div class="section-title__wrapper">
          <h2>Our core values</h2>
          <p class="section-tilte__subtitle">
            Our mission is to set the highest standards for construction sphere.
          </p>
        </div>
        <div class="values-card__wrapper">
          <div class="values-card">
            <img class="values-card-icon" src="../assets/icons/quality.svg" alt="Quality icon">
            <div class="card-title__wrapper">
              <h4>Quality</h4>
              <div class="card-description">
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip
                sunt.
              </div>
            </div>
          </div>
          <span class="card-separator"></span>
          <div class="values-card">
            <img class="values-card-icon" src="../assets/icons/safety.svg" alt="Quality icon">
            <div class="card-title__wrapper">
              <h4>Safety</h4>
              <div class="card-description">
                Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim
                empor est ea.
              </div>
            </div>
          </div>
          <span class="card-separator"></span>
          <div class="values-card">
            <img class="values-card-icon" src="../assets/icons/comfort.svg" alt="Quality icon">
            <div class="card-title__wrapper">
              <h4>Quality</h4>
              <div class="card-description">
                Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco
                proident ea ad.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="services__wrapper">
      <section class="form-question__wrapper container">
        <div class="forn-question-title__wrapper main-title__wrapper">
          <h3>
            Want to know more? Ask us a question:
          </h3>
        </div>
        <div class="form-question">
          <div class="form-input__wrapper">
            <label for="formQuestionName">
              Name
            </label>
            <input id="formQuestionName" class="form-question__input" placeholder="Your name" type="text">
          </div>
          <div class="form-input__wrapper">
            <label for="formQuestionPhone">
              Phone
            </label>
            <input id="formQuestionPhone" class="form-question__input" placeholder="Your phone" type="text">
          </div>
          <div class="form-input__wrapper">
            <label for="formQuestionMessage">
              Message
            </label>
            <input id="formQuestionMessage" class="form-question__input form-question__input-message"
                   placeholder="Your message" type="text">
          </div>
          <div class="form-btn__wrapper">
            <button class="form-question__button main-btn">SEND</button>
          </div>

        </div>
      </section>

      <div class="services-bg__img"></div>

      <section class="services container">
        <div class="section-title__wrapper">
          <h2>Our services</h2>
          <p class="section-tilte__subtitle">
            Createx Construction Bureau is a construction giant with a full range of construction
            services.
          </p>
        </div>
        <div class="services-cards">

          <div class="services-card__item ">
            <a class="services-card__link" href="../services.html#construction">
              <div class="services-card__icon"></div>
              <img class="bg-sevrices-card__img"
                   src="../assets/images/servieces-bg-card-image-constaction.jpg" alt="Card Background">
              <p class="services-card__description">
                Construction
              </p>
            </a>
          </div>

          <div class="services-card__item">
            <a class="services-card__link" href="../services.html#project">
              <div class="services-card__icon second-services-card__icon"></div>
              <img class="bg-sevrices-card__img"
                   src="../assets/images/servieces-bg-card-image-project-dev.jpg" alt="Card Background">
              <p class="services-card__description">
                Project Development
              </p>
            </a>
          </div>

          <div class="services-card__item">
            <a class="services-card__link" href="../services.html#interior">
              <div class="services-card__icon third-services-card__icon"></div>
              <img class="bg-sevrices-card__img" src="../assets/images/servieces-bg-card-image.jpg"
                   alt="Card Background">
              <p class="services-card__description">
                Interior Design
              </p>
            </a>

          </div>

          <div class="services-card__item">
            <a class="services-card__link" href="../services.html#repairs">
              <div class="services-card__icon fouth-services-card__icon"></div>
              <img class="bg-sevrices-card__img" src="../assets/images/servieces-bg-card-image-repairs.jpg"
                   alt="Card Background">
              <p class="services-card__description">
                Repairs
              </p>
            </a>
          </div>


        </div>
        <div class="call-wrapper container">
          <p class="call-text">
            Learn more about our services
          </p>
          <button class="main-btn call-wrapper__btn">
            <a href="../services.html">
              View services
            </a>
          </button>
        </div>
      </section>
    </div>

    <section class="portfolio__wrapper container">
      <div class="section-title__wrapper section-left-title__wrapper">
        <h2>Browse our selected projects <br>
          and learn more about our work
        </h2>
      </div>
      <div class="portfolio-slider">
        <div class="portfolio-slide__item">

          <div class="portfolio-card">
            <img class="portfolio-card__image" src="../assets/images/portfolio-slide-1.jpg" alt="Portfolio">
            <div class="portfolio-card__text">
              <p class="portfolio-card__title">
                Red Finger Building
              </p>
              <p class="portfolio-card__description">
                Business Centers
              </p>
              <button class="main-btn portfolio-card__button">
                <a href="#">
                  View Project
                </a>
              </button>
            </div>
          </div>

        </div>
        <div class="portfolio-slide__item">
          <div class="portfolio-card">
            <img class="portfolio-card__image" src="../assets/images/portfolio-slide-2.jpg" alt="Portfolio">
            <div class="portfolio-card__text">
              <p class="portfolio-card__title">
                Cubes Building
              </p>
              <p class="portfolio-card__description">
                Business Centers
              </p>
              <button class="main-btn portfolio-card__button">
                <a href="#">
                  View Project
                </a>
              </button>
            </div>
          </div>
        </div>
        <div class="portfolio-slide__item">
          <div class="portfolio-card">
            <img class="portfolio-card__image" src="../assets/images/portfolio-slide-3.jpg" alt="Portfolio">
            <div class="portfolio-card__text">
              <p class="portfolio-card__title">
                The Pencil Building
              </p>
              <p class="portfolio-card__description">
                Stores & Malls
              </p>
              <button class="main-btn portfolio-card__button">
                <a href="#">
                  View Project
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="call-wrapper call-wrapper-portfolio container">
        <p class="call-text">
          Explore all our works
        </p>
        <button class="main-btn call-wrapper__btn ">
          <a href="../work.html">
            View portfolio
          </a>

        </button>
      </div>
    </section>

    <section class="reports">
      <div class="reports-bg__img"></div>
      <section class="partners container">
        <div class="section-title__wrapper">
          <h2>Supported by 12+ partners</h2>
        </div>
        <div class="partners__wrapper">
          <div class="partner">
            <a class="partner-link" href="#">
              <img src="../assets/images/partners/inDepth.svg" alt="inDepth">
            </a>
          </div>
          <div class="partner">
            <a class="partner-link" href="#">
              <img src="../assets/images/partners/Higher.svg" alt="Higher fit">
            </a>
          </div>
          <div class="partner">
            <a class="partner-link" href="#">
              <img src="../assets/images/partners/Sentinal.svg" alt="Sentinal">
            </a>
          </div>
          <div class="partner">
            <a class="partner-link" href="#">
              <img src="../assets/images/partners/Happy.svg" alt="Happy home">
            </a>
          </div>
          <div class="partner">
            <a class="partner-link" href="#">
              <img src="../assets/images/partners/For.svg" alt="For Sale">
            </a>
          </div>
          <div class="partner">
            <a class="partner-link" href="#">
              <img src="../assets/images/partners/Sunset.svg" alt="Sunset Realy">
            </a>
          </div>
        </div>
      </section>
      <div class="reports-content container">

        <div class="main-reports__wrapper">
          <div class="section-title__wrapper reports-title">
            <h2>What our clients are saying</h2>
          </div>
          <div class="reports-slider__wrapper">
            <div class="report-slide">
              <img class="user-photo" src="../assets/images/reports-user-image.jpg" alt="User photo">
              <p class="user-report__text">
                Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. <br>
                Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim <br>
                proident exercitation ullamco.
              </p>
              <div class="user-data">
                <div class="user-data__text">
                                    <span class="user-name">
                                        Shawn Edwards
                                    </span>
                  <p class="user-job">Position, Company name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="report-main-photo">
          <img src="../assets/images/report-main-photo.jpg" alt="Main photo">
        </div>
      </div>


    </section>

    <section class="facts">
      <div class="facts-bg__img"></div>
      <div class="section-title__wrapper ">
        <h2>Some facts and figures</h2>
      </div>
      <div class="circles__wrapper container">
        <div class="separate-circle">
          <div class="pie" style="--p:98;">
            98%
          </div>
          <p class="circle-discription">
            Totally satisfied clients
          </p>
        </div>
        <div class="separate-circle">
          <div class="pie" style="--p:60;--c:#F52F6E;--b:6px">
            60%
          </div>
          <p class="circle-discription">
            Years of experience
          </p>
        </div>
        <div class="separate-circle">
          <div class="pie" style="--p:80;--c:#5A87FC;">
            9452
          </div>
          <p class="circle-discription">
            Working hours spent
          </p>
        </div>
        <div class="separate-circle">
          <div class="pie" style="--p:100;--c:#03CEA4;">
            100%
          </div>
          <p class="circle-discription">
            Succeeded projects
          </p>
        </div>
      </div>
    </section>

    <section class="news">
      <div class="section-title__wrapper">
        <h2>Recent news</h2>
      </div>

      <div class="news-wrapper container">
        <div class="big-news news-card">
          <!-- <a href="#" class="news-card__link big-news-card__link "> -->
          <img class="big-news__preview" src="../assets/images/big-news-homePage.jpg" alt="News image">
          <div class="big-news-description__wrapper">
            <div class="news-title__wrapper">
              <a href="#" class="news-card__link big-news-card__link">
                How to Build Climate Change-Resilient Infrastructure
              </a>
            </div>
            <div class="news-data__wrapper">
              <p class="news-type__text">Industry News</p>
              <span></span>
              <p class="news-date__text">June 24, 2020</p>
              <span></span>

              <div class="news-comments__wrapper">
                <img src="../assets/icons/comments.svg">
                <p class="news-type__text">4 comments</p>
              </div>

            </div>
            <p class="big-news-card__description">
              Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet
              sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...
            </p>
          </div>
          <!-- </a> -->

        </div>
        <div class="small-news__wrapper">
          <div class="small-news news-card">
            <img src="../assets/images/small-news01.jpg" alt="News image">
            <div class="big-news-description__wrapper">
              <div class="news-title__wrapper">
                <a href="#" class="news-card__link big-news-card__link ">
                  How Construction Can Help Itself
                </a>
              </div>
              <div class="news-data__wrapper">
                <p class="news-type__text">Innovation</p>
                <span></span>
                <p class="news-date__text">June 12, 2020</p>
                <span></span>

                <div class="news-comments__wrapper">
                  <img src="../assets/icons/comments.svg">
                  <p class="news-type__text">No comments</p>
                </div>

              </div>

            </div>

          </div>
          <div class="small-news news-card">
            <img src="../assets/images/small-news02.jpg" alt="News image">
            <div class="big-news-description__wrapper">
              <div class="news-title__wrapper">
                <a href="#" class="news-card__link big-news-card__link ">
                  Types of Flooring Materials
                </a>
              </div>
              <div class="news-data__wrapper">
                <p class="news-type__text">Company News</p>
                <span></span>
                <p class="news-date__text">December 1, 2019</p>
                <span></span>

                <div class="news-comments__wrapper">
                  <img src="../assets/icons/comments.svg">
                  <p class="news-type__text">No comments</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="call-wrapper container">
        <p class="call-text">
          Explore all our news posts
        </p>
        <button class="main-btn call-wrapper__btn">
          <a href="../news.html">
            View all news
          </a>

        </button>
      </div>
    </section>
    <quick-form-footer></quick-form-footer>
  </main>


  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import QuickFormFooter from "@/components/QuickFormFooter.vue";
import SliderSwiperHomePage from "@/components/AssetsComponents/SliderSwiperHomePage.vue";

export default {
  name: "HomePage",
  components: {SliderSwiperHomePage, QuickFormFooter, FooterComponent, HeaderComponent},
}
</script>




<style scoped>
/* SLIDER */
.slick-prev {
  left: 25px;
  z-index: 1;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.slick-next {
  right: 55px;
  z-index: 1;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.slick-prev:before {
  content: '';
  display: block;
  width: 48px;
  height: 48px;
  background-image: url(../assets/icons/slider-arrow-left-white.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.slick-next:before {
  content: '';
  display: block;
  width: 48px;
  height: 48px;

  background-image: url(../assets/icons/slider-arrow-right-white.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* .slick-dots {
    left: 15.5vw;
    bottom: 170px;
    text-align: unset;
    display: flex;
}

.slick-dots li {
    margin-left: 0;
    margin-right: 150px;
}

.slick-dots li button:first-child::before {
    font-size: 28px;
    font-family: 'Ubuntu Regular', sans-serif;
}

#slick-slide-control00::before {
    content: '01';
    color: #FFFFFF;
}

#slick-slide-control01::before {
    content: '02';
    color: #FFFFFF;
}

#slick-slide-control02::before {
    content: '03';
    color: #FFFFFF;
}

#slick-slide-control03::before {
    content: '04';
    color: #FFFFFF;
}


.slick-dots li.slick-active button:before {
    color: #FFFFFF;
}

.slick-dots li button {

} */


.slider-item__image {
  max-width: 100%;
  flex: 0;
  width: 100%;
  height: 988px;
}


/* CONTENT */


main {
  position: relative;
}

.bg-slider {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

.slider-slide {
  min-width: 100vw;
}

.main-wrapper__content {
  position: relative;
  z-index: 3;
  padding-top: 220px;
}

.main-title__wrapper h1 {
  font-weight: 700;
  font-size: 72px;
  line-height: 130%;
  color: #FFFFFF;
  margin-bottom: 24px;
}


.main-title__description {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;

  margin-bottom: 61px;
}

.main-buttons__wrapper {
  display: flex;
  gap: 24px;
}

/* ABOUT */
.about {
  margin: 390px 0 100px;
}

.video__wrapper {
  position: relative;
  border-radius: 4px
}

.video-img {
  max-width: 1230px;
  width: 100%;
  height: 500px;
  position: relative;
}

.video-img__play {
  position: absolute;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
  transition: all 1s linear;
  cursor: pointer;
}

.video-img__play:hover {
  opacity: .5;
}

.video-img__controls {
  position: absolute;
  bottom: calc(10% - 20px);
  left: calc(5% - 20px);
  transition: all 1s linear;
  cursor: pointer;
}

.video-img__controls:hover {
  opacity: .5;
}

/* VALUES */


/* FORM-QUESTION */

.form-question__wrapper {
  background: #FFFFFF;

  box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
  border-radius: 4px;
  padding: 48px 60px;

  margin: 0 auto 120px;
  max-width: 1230px;

  width: 100%;
}


.form-question {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}


.form-input__wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-right: 24px;

}

.form-question__button {
  background-color: var(--main-orange-color);
  border: 1px solid var(--main-orange-color);
  padding: 15px 32px;
  height: 44px;

  font-weight: 700;
  font-size: 14px;
  line-height: 44px;
  letter-spacing: 0.5px;

  transition: all .3s linear;
}

.form-question__button:hover {
  background-color: transparent;
  border: 1px solid var(--main-orange-color);
  color: var(--main-orange-color);
}

.forn-question-title__wrapper h3 {
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;

  text-align: center;
  color: var(--main-title-color);
  margin-bottom: 32px;
}

.form-question__input {
  background: #F4F5F7;

  border: 1px solid #D7DADD;
  border-radius: 4px;


  font-weight: 400;
  font-size: 14px;
  color: var(--main-title-color);
  line-height: 150%;

  padding: 11px 0 12px 16px;
  min-width: 260px;
  width: 100%;
  height: 44px;
}

.form-question__input-message {
  min-width: 414px;
  width: 100%;
}

.form-question__input:focus-visible {
  outline: none;
}

/* SERVICES */


.services__wrapper {
  position: relative;
  z-index: 3;
  margin-bottom: 205px;
}

.services-bg__img {
  position: absolute;
  top: calc(44% - 226px);
  left: 0;
  z-index: -1;
  background-image: url(../assets/images/background-services.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 880px;
}

.services-cards {
  display: flex;
  margin-bottom: 80px;
}

.services-card__item {
  margin-right: 30px;
  transition: all .3s linear;
}

.services-card__item:last-child {
  margin-right: 0;
}

.services-card__link:hover {
  opacity: 1;
}

.services-card__item:hover {
  transform: scale(1.1);
}

.services-card__link:last-child {
  margin-right: 0;
}

.services-card__item {
  padding: 80px 0 90px;
  text-align: center;
  background-color: #FFFFFF;

  border: 1px solid #E5E8ED;
  box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
  border-radius: 4px;
  min-width: 285px;
  width: 100%;

  position: relative;
  z-index: 2;
  opacity: 1;
  overflow: hidden;
}

.services-card__icon {
  display: flex;
  margin: 0 auto 24px;
}

.services-card__description {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;

  color: var(--main-title-color);
  flex: none;
  order: 1;
  flex-grow: 0;

  transition: all .3s linear;
}

.bg-sevrices-card__img {
  position: absolute;
  z-index: -1;
  top: 0;
  opacity: 0;
  left: 0;

  width: 100%;
  height: 100%;
  transition: all .5s linear;
}

.services-card__item:hover .bg-sevrices-card__img {
  top: 0;
  opacity: 1;
}

.services-card__item:hover .services-card__description {
  color: #FFFFFF;
}

.services-card__icon {
  background-image: url('../assets/icons/construction.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 52px;
  /* transition: all .5s linear; */
}

.services-card__item:hover .services-card__icon {
  background-image: url('../assets/icons/construction-white.svg');
}

.second-services-card__icon {
  background-image: url('../assets/icons/project-dev.svg');
}

.services-card__item:nth-child(2):hover .second-services-card__icon {
  background-image: url('../assets/icons/project-dev-white.svg');
}

.third-services-card__icon {
  background-image: url('../assets/icons/interior-design.svg');
}

.services-card__item:nth-child(3):hover .third-services-card__icon {
  background-image: url('../assets/icons/interior-design-white.svg') !important;
}

.fouth-services-card__icon {
  background-image: url('../assets/icons/repairs.svg');
}

.services-card__item:nth-child(4):hover .fouth-services-card__icon {
  background-image: url('../assets/icons/repairs-white.svg') !important;
}

.call-wrapper {
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
}

.call-text {
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;

  color: var(--main-title-color);
}

.call-wrapper__btn {
  background-color: var(--main-orange-color);
}

.call-wrapper__btn a {
  color: #FFFFFF;
}

.call-wrapper__btn a:hover {
  color: var(--main-orange-color);
  opacity: 1;
}

.call-wrapper__btn:hover {
  background-color: transparent;
  color: var(--main-orange-color);
  border: 1px solid var(--main-orange-color);
}

/* PORTFOLIO */

.portfolio-card {
  background: #FFFFFF;
  box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
  border-radius: 4px;

  position: relative;
  min-height: 440px;
  width: 100%;
  transition: all 1s linear;
}

.portfolio-card__text {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;

  position: absolute;
  bottom: 0;
  left: 0;
  padding: 16px 24px;
  background-color: #FFFFFF;
  width: 100%;
}

.portfolio-card:hover .portfolio-card__button {
  opacity: 1;
  visibility: visible;
  display: block;
}

/* slider */
.portfolio-slider {
  display: flex;
  gap: 30px;
}

.portfolio-card__image {
  margin-bottom: 16px;
  margin-left: 0;
  max-width: 390px;
  width: 100%;
  height: 345px;
}

.portfolio-card__title {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;

  color: var(--main-title-color);
}

.portfolio-card__description {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 24px;

  color: #787A80;
}

.portfolio-card__button {
  padding: 0 28px;
  width: 172px;
  height: 44px;
  text-align: center;
  background-color: transparent;
  color: var(--main-orange-color);
  border: 1px solid var(--main-orange-color);
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  margin: 0 auto;
  display: none;

  /* opacity: 0;
  visibility: hidden; */
  transition: all .5s linear;
}

.portfolio-card__button a {
  font-size: 14px;
  color: var(--main-orange-color);
}

.portfolio-card__button a:hover {
  color: #FFFFFF;
  opacity: 1;
}

.call-wrapper-portfolio {
  margin: 80px 0 120px;
}

/* PARTNERS */

.partners {
  margin-bottom: 180px;
}

.partners__wrapper {
  display: flex;
  justify-content: space-between;
}

.partner {
  transition: all .3s linear;
}


.partner:hover {
  transform: scale(1.2);
}

/* REPORTS */

.reports {
  position: relative;
}

.reports-bg__img {
  position: absolute;
  top: -8vh;
  left: 0;
  z-index: -1;
  background-image: url(../assets/images/reports-background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 934px;
}

.reports-title h2 {
  text-align: start;
  margin-bottom: 60px;
}

.reports-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;
}

.user-photo {
  max-width: 72px;
  width: 100%;
  height: 72px;
}

.report-slide {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.user-report__text {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #424551;
}

.user-name {
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  color: var(--main-title-color);
  margin-bottom: 8px;
}

.user-job {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: #787A80
}


/* facts */
.facts {
  position: relative;
  margin-bottom: 180px;
}

.circles__wrapper {
  display: flex;
  justify-content: space-evenly;
}

.facts-bg__img {
  position: absolute;
  top: -8vw;
  left: 0;
  z-index: -1;
  background-image: url(../assets/images/bg-image-cirles.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 300px;
  height: 858px;
}

@property --p {
  syntax: '<number>';
  inherits: true;
  initial-value: 0;
}

.pie {
  --p: 20;
  --b: 6px;
  --c: #F89828;
  --w: 148px;

  width: var(--w);
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  place-content: center;

  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;

  text-align: center;
  margin-bottom: 20px;

  color: var(--main-title-color);
}

.pie:before,
.pie:after {
  content: "";
  position: absolute;
  border-radius: 50%;
}

.pie:before {
  inset: 0;
  background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b) var(--b) no-repeat,
  conic-gradient(var(--c) calc(var(--p) * 1%), #0000 0);

  -webkit-mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));

  mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));
}

.pie:after {
  inset: calc(50% - var(--b) / 2);
  background: var(--c);
  transform: rotate(calc(var(--p) * 3.6deg)) translateY(calc(50% - var(--w) / 2));
}

.circle-discription {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: var(--main-title-color);
}

/* NEWS */
.news {
  margin-bottom: 200px;
}

.news-wrapper {
  display: flex;
  gap: 30px;
  margin-bottom: 80px;
}

.news-card {
  background: #FFFFFF;
  box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
  border-radius: 4px;
  transition: all .4s linear;
  display: inline-block;
  overflow: hidden;
}

.news-card img {
  transition: all .4s linear;
}

.news-card img:hover {
  transform: scale(1.05);
}


.news-title__wrapper a {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: var(--main-title-color);
  margin-bottom: 12px;
  transition: all .1s linear;
  text-decoration: underline;
}

.news-title__wrapper a:hover {
  opacity: 1;
  color: var(--main-orange-color);
}

.news-data__wrapper {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;

  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: #787A80;
}

.news-data__wrapper span {
  border: 1px solid #787A80;
  transform: rotate(90deg);
  width: 12px;
  height: 1px;
}

.news-comments__wrapper {
  display: flex;
  gap: 8px;
}


.news-card__link:hover .news-title__wrapper h4 {
  color: var(--main-orange-color);
}

.small-news__wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
}


/* MEDIA */

@media (max-width: 1670px) {
  .slick-dots {
    display: none !important;
  }

  .slick-arrow {
    display: none !important;
  }
}

@media (max-width: 1230px) {
  .header-contact__item {
    gap: 10px;
    margin-right: 15px;
  }

  .header-content__left {
    margin-right: 120px;
  }
}

@media (max-width: 1130px) {
  .header-nav__list {
    display: none;
  }

  .about {
    margin: 140px 0 60px;
  }

  .main-title__wrapper h1 {
    font-size: 40px;
  }

  .accent {
    color: var(--main-orange-color);
    font-size: 50px;
  }

  .main-title__description {
    font-size: 14px;
    margin-bottom: 40px;
  }

  .main-btn {
    max-width: 150px;
    width: 100%;
    font-size: 10px;
    padding: 10px;
    display: block;
  }

  .main-btn__link {
    color: #FFFFFF;
  }

  .slider-item__image {
    height: 700px;
  }

  .section-title__wrapper {
    margin-bottom: 40px;
  }

  .video-img {
    height: 400px;
  }

  .form-question__wrapper {
    max-width: 485px;
    width: 100%;
    margin: 0 auto 80px;
  }

  .form-input__wrapper {
    margin-right: 0;
  }

  .form-btn__wrapper {
    margin: 0 auto;
  }

  .services-bg__img {
    top: -5vw;
    height: 1826px;
  }

  .form-question {
    flex-direction: column;
    gap: 20px;
    align-items: stretch;
  }

  .form-question__input-message {
    min-width: 260px;
    width: 100%;
  }

  .services-cards {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

  }

  .services-card__item {
    max-width: 250px;
    min-width: auto;
    width: 100%;
    height: 200px;
    margin-right: 0;
    padding: 40px 0 45px;
  }

  .bg-sevrices-card__img {
    display: none;
  }

  .services-card__item:hover {
    transform: scale(1);
  }


  .services-card__item:hover .services-card__icon {
    background-image: url('../assets/icons/project-dev.svg');
  }

  .services-card__item:nth-child(2):hover .second-services-card__icon {
    background-image: url('../assets/icons/project-dev.svg');
  }

  .services-card__item:nth-child(3):hover .third-services-card__icon {
    background-image: url('../assets/icons/interior-design.svg');
  }

  .services-card__item:nth-child(4):hover .fouth-services-card__icon {
    background-image: url('../assets/icons/repairs.svg');
  }

  .services-card__item:hover .services-card__description {
    color: var(--main-title-color);
  }

  .services__wrapper {
    margin-bottom: 100px;
  }

  .portfolio-slider {
    flex-direction: column;
    align-items: center;
  }

  .portfolio-card {
    max-width: 350px;
    min-height: unset;
    width: 100%;
    min-width: auto;
  }

  .portfolio-card__button {
    padding: 0;
  }

  .call-text {
    font-size: 20px;
  }

  .report-main-photo {
    display: none;
  }

  .reports-content {
    justify-content: center;
  }

  .reports-bg__img {
    height: 790px;
  }

  .circles__wrapper {
    display: flex;
    gap: 20px;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
  }

  .pie {
    --w: 100px;
  }

  .separate-circle {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .facts {
    margin-bottom: 80px;
  }

  .news-wrapper {
    flex-direction: column;
  }

  .small-news__wrapper {
    flex-direction: row;
    justify-content: space-between;
    justify-content: center;
  }

  .big-news {
    max-width: 100vw;
    width: 100%;
  }

  .small-news {
    max-width: 40vw;
    width: 100%;
  }

  .slick-list {
    height: 600px;
  }

  .news {
    margin-bottom: 80px;
  }

  .big-news-card__description {
    font-size: 14px;
  }

  .news-data__wrapper {
    font-size: 10px;
  }
}

@media (max-width: 768px) {
  .partners__wrapper {
    align-items: center;
    flex-direction: column;
  }

  .news-title__wrapper a {
    font-size: 12px;
    line-height: 120%;
  }

  .small-news .news-data__wrapper {
    display: none;
  }

  .big-news-description__wrapper {
    padding: 16px 5px 25px;
  }

  .values-card__wrapper {
    gap: 10px;
    flex-direction: column;
  }

  .card-separator {
    transform: rotate(180deg);
  }

  .form-question__button {
    line-height: 0;
  }

  .header-contact__item a {
    font-size: 10px;
  }

  .header-content-call {
    font-size: 12px;
  }

  .header-content__right {
    font-size: 10px;
  }

  .header-contact__item img {
    max-width: 30px;
  }

  .call-text {
    font-size: 16px;
  }
}

@media (max-width: 550px) {
  .header-content__left {
    margin-right: 0;
  }

  .header-logo__wrapper {
    margin-right: 0;
  }

  .main-btn {
    max-width: 100%;
  }

  .video-img {
    height: 200px;
  }

  .video-img__play {
    width: 40px;
    height: 40px;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
  }

  .video-img__controls {
    width: 20px;
    height: 20px;
    bottom: calc(10% - 10px);
    left: calc(5% - 10px);
  }

  .form-question__wrapper {
    padding: 24px 30px;
    margin: 0 auto 120px;
    max-width: 1230px;
    width: 100%;
  }

  .call-wrapper {
    flex-direction: column;
  }

  .main-buttons__wrapper {
    gap: 10px;
    flex-direction: column;
    align-items: center;
  }

  .main-wrapper__content {
    padding-top: 100px;
  }

}


@media (max-width: 425px) {
  .header-wrapper {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .about {
    margin: 190px 0 60px;
  }
}
</style>