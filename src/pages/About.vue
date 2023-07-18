<template>
  <header-component></header-component>
  <main class="main">
    <section class="main__wrapper container">
      <ul class="breadcrumbs-wrapper">
        <li>
          <a class="breadcrumbs-link breadcrumbs-link__main" href="HomePage.vue">Homepage</a>
        </li>
        <li class="breadcrumbs-link__current">
          /
        </li>
        <li>
          <a class="breadcrumbs-link breadcrumbs-link__current" href="#">About us</a>
        </li>
      </ul>
      <section class="main-wrapper__content">
        <div class="main-title__wrapper">
          <h1>
            ABOUT US
          </h1>
        </div>
        <p class="main-title__description">
          Createx Construction Bureau has been successfully operating <br> in the USA construction market
          since 2000. We are proud to offer <br> you quality construction and exemplary service.
        </p>
      </section>
    </section>
    <section class="about-numbers__wrapper container">
      <div class="separate-number__card">
        <img src="../assets/icons/like.svg">
        <span class="accent about-accent">60%</span>
        <p class="separate-number__card-description">
          Clients on the recommendation <br> of friends
        </p>
      </div>
      <div class="separate-number__card">
        <img src="../assets/icons/painting.svg">
        <span class="accent about-accent">2400+</span>
        <p class="separate-number__card-description">
          Apartments renovated
        </p>
      </div>
      <div class="separate-number__card">
        <img src="../assets/icons/helmet.svg">
        <span class="accent about-accent">670</span>
        <p class="separate-number__card-description">
          Qualified specialists
        </p>
      </div>
      <div class="separate-number__card">
        <img src="../assets/icons/pantone.svg">
        <span class="accent about-accent">150000+m<sup>2</sup></span>
        <p class="separate-number__card-description">
          Finishing work was carried out
        </p>
      </div>
    </section>
    <section class="comment container">
      <div class="comment-img__wrapper">
        <img class="comment-person__img" src="../assets/images/about-page/comment.jpg"
             alt="Person comment photo">
      </div>
      <div class="comment-text__wrapper">
        <p class="comment-text">
          Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in. Sed aliquet in
          egestas hac at proin sed quam. Etiam aliquet sagittis non, massa cum pulvinar. Et in leo, tempus
          purus vestibulum ut blandit et mi. Odio massa purus vel praesent arcu enim elit felis viverra.
        </p>
        <p class="comment-text">
          Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra quis metus amet eleifend amet. Vet
          suspendisse faucibus tempor ipsum integer.
        </p>
        <div class="comment-description__wrapper">
          <div class="comment-text__description">
            <p class="comment-person__name">
              Courtney Alexander
            </p>
            <p class="comment-person__job">
              CEO - Createx Construction Bureau
            </p>

          </div>
          <div class="comment-text__img">
            <img src="../assets/images/about-page/signature.svg">
          </div>
        </div>

      </div>
    </section>
    <div class="values-history__wrapper">
      <section class="values container">
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

      <section class="history container">
        <div class="section-title__wrapper section-history-title__wrapper">
          <h2>Our history</h2>
        </div>
        <div class="history-content__wrapper">
          <ul class="history-way__list">
            <li>
              <span class="way-line way-line__last"></span>
              <a class="history-way__link history-link__active" href="#">Present</a>
            </li>
            <li>
              <span class="way-line"></span>
              <a class="history-way__link" href="#">March 2019</a>
            </li>
            <li>
              <span class="way-line"></span>
              <a class="history-way__link" href="#">November 2018</a>
            </li>
            <li>
              <span class="way-line"></span>
              <a class="history-way__link" href="#">July 2015</a>
            </li>
            <li>
              <span class="way-line"></span>
              <a class="history-way__link" href="#">August 2010</a>
            </li>
            <li>
              <span class="way-line"></span>
              <a class="history-way__link" href="#">February 2007</a>
            </li>
            <li>
              <span class="way-line"></span>
              <a class="history-way__link" href="#">May 2004</a>
            </li>
            <li>
              <span class="way-line"></span>
              <a class="history-way__link" href="#">October 2001</a>
            </li>
            <li>
              <span class="way-line"></span>
              <a class="history-way__link" href="#">June 2000</a>
              <span class="way-line way-line__last"></span>
            </li>
          </ul>
          <div class="history-way__description">
            <div id="slideContent1" class="history-content__slide">
              <figure>
                <img class="slide-img" src="../assets/images/about-page/history-slider-content.jpg"
                     alt="Content image">
                <figcaption class="slide-img__description">
                  Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec
                  vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere
                  malesuada magnis. Bcelerisque dapibus. Eu nec vitae,
                </figcaption>
              </figure>
            </div>

          </div>
        </div>
      </section>

    </div>
    <section class="partners">
      <div class="section-title__wrapper">
        <h2>Our partners</h2>
        <p class="section-tilte__subtitle">
          We are supported by 12+ industry bodies and media partners
        </p>
      </div>
      <div class="partners-images__wrapper container">
        <div class="partner-card">
          <a href="#">
            <img src="../assets/images/partners/For.svg">
          </a>
        </div>
        <div class="partner-card">
          <a href="#">
            <img src="../assets/images/partners/Happy.svg">
          </a>
        </div>
        <div class="partner-card">
          <a href="#">
            <img src="../assets/images/partners/Higher.svg">
          </a>
        </div>
        <div class="partner-card">
          <a href="#">
            <img src="../assets/images/partners/inDepth.svg">
          </a>
        </div>
        <div class="partner-card">
          <a href="#">
            <img src="../assets/images/partners/Sentinal.svg">
          </a>
        </div>
        <div class="partner-card sunset-card">
          <a href="#">
            <img src="../assets/images/partners/Sunset.svg">
          </a>
        </div>
        <div class="partner-card">
          <a href="#">
            <img src="../assets/images/partners/AtlantisHealthLogo.jpg">
          </a>
        </div>
        <div class="partner-card">
          <a href="#">
            <img src="../assets/images/partners/delMar.png">
          </a>
        </div>
        <div class="partner-card">
          <a href="#">
            <img src="../assets/images/partners/CompleteHealthLogo.png">
          </a>
        </div>
        <div class="partner-card">
          <a href="#">
            <img src="../assets/images/partners/NationalHealthLogo.png">
          </a>
        </div>
        <div class="partner-card">
          <a href="#">
            <img src="../assets/images/partners/ultimate.png">
          </a>
        </div>
        <div class="partner-card">
          <a href="#">
            <img src="../assets/images/partners/UnitedStrategyLogo.png">
          </a>
        </div>
      </div>
    </section>
    <section class="team container">
      <div class="section-title__wrapper">
        <h2>Our team</h2>
        <p class="section-tilte__subtitle">
          People are at the heart of Createx Construction Bureau
        </p>
      </div>
      <div class="search-name-input__wrapper">
        <input type="text" placeholder="Start writing the name" class="search-name-input " v-model="searchName">
      </div>

      <div id="teamWrapper" class="team-cards__wrapper">
        <EmployerCardComponent
            v-for="(item,index) in paginationEmployersList.filter((employer)=> searchName ? (employer.name.toLowerCase().includes(searchName.toLowerCase())) : true)"
            :employer="item" :key="index">
        </EmployerCardComponent>
      </div>

      <div class="load-more-button__wrapper">
        <button @click="page++" id="loaderWrapper" class="loader__wrapper">
          <img id="loaderCircle" class="loader-img" src="../assets/icons/portfolio-add__loader.svg">
          Show more employees
        </button>

        <button @click="removePaginationEmployer" id="hideAllEmployersBtn"
                class="footer-form-btn hide-all-employers__btn">
          Hide the list of all employees
        </button>

      </div>

      <div class="team-position__link">
        <p class="position__link-text">Become a part of the best team in the construction market of the USA.
        </p>
        <router-link :to='{name: "vacancies"}' class="available-positions">Available Positions</router-link>

        <a href="/vacancies">123213</a>
      </div>
    </section>
    <section class="map-worldwide container">
      <div class="section-title__wrapper">
        <h2>We work worldwide</h2>
      </div>
      <figure class="map-img__wrapper">
        <img src="../assets/images/about-page/map.svg" alt="World map">
        <!-- Country -->
        <a title="Learn more about the Canada office" href="#">
          <img src="../assets/images/about-page/Canada.svg" class="map-country map-country__canada">
        </a>
        <a title="Learn more about the USA office" href="#">
          <img src="../assets/images/about-page/usa.svg" class="map-country map-country__usa">
        </a>
        <a title="Learn more about the Germany office" href="#">
          <img src="../assets/images/about-page/germany.svg" class="map-country map-country__germany">
        </a>
        <a title="Learn more about the Ukraine office" href="#">
          <img src="../assets/images/about-page/ukraine.svg" class="map-country map-country__ukraine">
        </a>
        <a title="Learn more about the China office" href="#">
          <img src="../assets/images/about-page/china.svg" class="map-country map-country__china">
        </a>
        <a title="Learn more about the Australia office" href="#">
          <img src="../assets/images/about-page/australia.svg" class="map-country map-country__australia">
        </a>

      </figure>
    </section>


  </main>
  <quick-form-footer></quick-form-footer>
  <footer-component></footer-component>
</template>

<script>


import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import QuickFormFooter from "@/components/QuickFormFooter.vue";
import EmployerCardComponent from "@/components/EmployerCardComponent.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  components: {EmployerCardComponent, QuickFormFooter, FooterComponent, HeaderComponent},
  watch: {
    page: function (val) {
      this.getPaginationEmployer(val);
    }
  },
  data() {
    return {
      employeesUrl: 'https://res.cloudinary.com/dui2dgzj2/raw/upload/v1689335448/employees.json',
      teamWrapper: null,
      employeesArray: [],
      paginationEmployersList: [],
      page: 1,
      limit: 8,
      paginationEnding: false,
      searchName: null
    }
  },
  beforeMount() {
    this.setResponce();
  },
  methods: {
    getPaginationEmployer(page) {

      if (this.paginationEnding) return;

      this.paginationEmployersList = [...this.paginationEmployersList, ...this.employeesArray?.slice(this.paginationEmployersList.length, page * this.limit)]

      if (this.paginationEmployersList.length === this.employeesArray.length) {
        document.getElementById('loaderWrapper').style.cssText = 'display: none;';
        document.getElementById('hideAllEmployersBtn').style.cssText = 'display: block';
        this.paginationEnding = true;
      }

    },
    removePaginationEmployer() {
      this.paginationEmployersList.length > this.limit ? this.paginationEmployersList.splice(this.page * this.limit, this.limit) : console.log('stop');
    },
    setResponce() {
      fetch(this.employeesUrl)
          .then(data => data.json())
          .then(res => this.getEmployees(res.employees))
    },
    getEmployees(res) {
      this.employeesArray = JSON.parse(JSON.stringify(res));
      this.getPaginationEmployer(this.page)
    }
  },
  mounted() {
    this.teamWrapper = document.getElementById('teamWrapper');
  }
}

</script>

<style scoped>
.main-header {
  position: relative;
  background: transparent;
  z-index: 5;
  margin-bottom: 80px;
}

.header-bg__img {
  background-image: url(../assets/images/about-page/header-background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
}

.main {
  position: relative;
  z-index: 5;
}

/* breadcrumbs */
.breadcrumbs-wrapper {
  display: flex;
  gap: 5px;
  margin-bottom: 40px;
}

.breadcrumbs-link__main {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #424551;
}

.breadcrumbs-link__current {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: #9A9CA5;
}

.breadcrumbs-link__current:hover {
  cursor: default;
}

.about-numbers__wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;
}

.separate-number__card {
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 240px;
}

.separate-number__card img {
  max-width: 48px;
  width: 100%;
  margin: 0 auto 20px;
}

.accent {
  margin-bottom: 8px;
}

.about-accent {
  font-size: 46px;
}

.separate-number__card-description {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: var(--main-title-color);
}

/* COMMENT */

.comment {
  display: flex;
  margin-bottom: 200px;
}

.comment-img__wrapper {
  padding: 120px 0 0;

}

.comment-person__img {
  max-width: 525px;
}

.comment-text__wrapper {
  margin-left: -30px;
  background-color: #FFFFFF;
  box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
  border-radius: 4px;
  padding: 80px 105px 70px 135px;
  height: fit-content;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: var(--main-title-color);
  position: relative;
}

.comment-text__wrapper::before {
  content: url(../assets/images/about-page/braces.svg);
  position: absolute;
  top: 80px;
  left: 77px;
  max-width: 28px;
  width: 100%;
  height: 20px;
}

.comment-text {
  margin-bottom: 30px;
}

.comment-text:nth-child(2) {
  margin-bottom: 60px;
}

.comment-description__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.comment-text__description {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.comment-person__name {
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;

  color: var(--main-title-color);
}

.comment-person__job {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #787A80;
}

/* VALUES */
.values-history__wrapper {
  background-color: #F4F5F7;
  padding: 80px 0;
  margin: 0 0 140px;
}

.section-history-title__wrapper h2 {
  text-align: left;
}

.history-way__list {
  list-style-type: circle;
  list-style-position: inside;
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  color: #9A9CA5;
}

.history-link__active {
  color: #FF5A30;
}

/* color: var(--main-orange-color); */

.history-way__list li {
  list-style-type: disc;
  list-style-image: url(../assets/images/about-page/history-slide-dot.svg);
  cursor: pointer;
  position: relative;

  margin-bottom: 20px;
}

.history-way__list li:last-child {
  margin-bottom: 0;
}

.way-line {
  position: absolute;
  top: -10px;
  left: -12.5px;
  display: inline-block;
  width: 40px;
  height: 2px;
  background-color: #787A80;

  opacity: 0.5;
  border-radius: 5px;
  border: 1px solid #9A9CA5;
  transform: rotate(90deg);
}

.way-line__last {
  position: absolute;
  top: 0;
  left: -2.5px;
  display: inline-block;
  width: 20px;
  height: 2px;
  background-color: #787A80;

  opacity: 0.5;
  border-radius: 5px;
  border: 1px solid #9A9CA5;
  transform: rotate(90deg);
}

.way-line__last:last-child {
  top: 40px;
}

.history-way__list li::marker {
  /* list-style-type: disc;
  font-size: 32px;
  color: #9A9CA5; */
  list-style-image: url(../assets/images/about-page/history-slide-dot.svg);
}

.history-content__wrapper {
  display: flex;
  justify-content: space-between;
}

.history-content__slide {
  max-width: 810px;
  width: 100%;
}

.slide-img {
  margin-bottom: 36px;
}

.slide-img__description {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;

  color: #424551;
}


/* slider */

/* partners */
.sunset-card {
  filter: grayscale(1);
}

.partners {
  margin-bottom: 180px;
}

.partners-images__wrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* grid-template-rows: repeat(5, 1fr); */
  grid-column-gap: 0px;
  grid-row-gap: 40px;
}

.partner-card {
  display: flex;
  justify-content: center;
  transition: all 2s linear;
}

.partner-card:hover {
  display: flex;
  justify-content: center;
  filter: grayscale(0);
}

.partner-card {
  display: flex;
  justify-content: center;
  transition: all .3s linear;
}

.partner-card a {
  transition: all .3s linear;
}

.partner-card a:hover {
  transform: scale(1.2);

}


/* TEAM */

.search-name-input__wrapper {
  display: flex;
  justify-content: right;
  margin-bottom: 30px;
}

.team-cards__wrapper {
  display: flex;
//justify-content: space-between; column-gap: 30px; row-gap: 30px;

  flex-wrap: wrap;
  margin-bottom: 80px;
}

.search-name-input {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid #9A9CA5;
  border-radius: 4px;
  padding: 11px 120px 12px 16px;
  color: var(--main-title-color);
  min-height: 44px;
}

.search-name-input:focus-visible {
  border: 1px solid var(--main-orange-color);
  outline: none;
  box-shadow: 0 0 10px var(--main-orange-color);
}

.team-position__link {
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
}


.position__link-text {
  text-align: center;
  font-size: 18px;
  line-height: 150%;
  color: var(--main-title-color);
}

.available-positions {
  color: var(--main-orange-color);
  text-align: center;
  font-size: 18px;
  line-height: 150%;
  text-decoration-line: underline;
}


/* map */

.map-worldwide {
  margin-bottom: 220px;
}

.map-img__wrapper {
  position: relative;
}

.map-country {
  position: absolute;
  top: 0;
  left: 0;

  transition: all .3s linear;

}

.map-country:hover {
  transform: scale(1.1);
  /* animation: countriesActive infinite 1s alternate-reverse; */
}

/* @keyframes countriesActive {
    form {
        transform: translateY(0);
    }

    to {
        transform: translateY(-5px);
    }
} */

.map-country__canada {
  top: 23%;
  left: 13%;

}

.map-country__usa {
  top: 36%;
  left: 16%;
}

.map-country__germany {
  top: 24%;
  left: 48%;
}

.map-country__ukraine {
  top: 30%;
  left: 52%;
}

.map-country__china {
  top: 41%;
  left: 72%;
}

.map-country__australia {
  top: 74%;
  left: 80%;
}

.header-fixed {
  background-color: white;
  background-image: none;
  box-shadow: 4px 16px 8px 0px rgba(34, 60, 80, 0.2);
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
}

.load-more-button__wrapper {
  justify-content: center;
  margin: 0 auto 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.loader__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 16px;
  margin: 0 auto;
  transition: all .5s linear;

  background-color: transparent;
  border: none;
}

.hide-all-employers__btn {
  color: #FFFFFF;
  border-radius: 4px;
  margin: 0 auto;
  padding: 10px 30px;

  display: none;
  transition: all .3s linear;
}

.hide-all-employers__btn:hover {
  border: 1px solid var(--main-orange-color);
  background-color: transparent;
  color: var(--main-orange-color);
}

.loader-text {
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;

  color: #424551;
}

.loader_active {
  animation: loaderActive 2s 1;
}

@keyframes loaderActive {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(-360deg);
  }
}
</style>