<template>
  <header-component></header-component>

  <main class="main">
    <section class="main__wrapper container">
      <ul class="breadcrumbs-wrapper">
        <li>
          <a class="breadcrumbs-link breadcrumbs-link__main" href="/">Homepage</a>
        </li>
        <li class="breadcrumbs-link__current">
          /
        </li>
        <li>
          <a class="breadcrumbs-link breadcrumbs-link__current" href="#">News</a>
        </li>
      </ul>
      <section class="main-wrapper__content">
        <div class="main-title__wrapper">
          <h1>
            NEWS
          </h1>
        </div>
        <p class="main-title__description">
          Stay tuned with our news, expert tips and articles.
        </p>
      </section>
    </section>


    <section class="news-list container">
      <div class="section-title__wrapper">
        <h2>Categories</h2>
      </div>

      <div id="news-filter__nav" class="news-filter__nav">
        <button id="allNews" class="news-filter-nav__button filter-btn__active" type="button">All News</button>
        <button id="companyNews" class="news-filter-nav__button" type="button">Company News</button>
        <button id="innovationNews" class="news-filter-nav__button" type="button">Innovation</button>
        <button id="industryNews" class="news-filter-nav__button" type="button">Industry News</button>
        <button id="expertNews" class="news-filter-nav__button" type="button">Expert Tips</button>
        <button id="MarketingNews" class="news-filter-nav__button" type="button">Marketing</button>
      </div>


      <div id="newsCardWrapper" class="news-wrapper">
        <big-news-card-component></big-news-card-component>
      </div>

      <ul class="news-pages__list">
        <li>
          <a class="news-pages-list__link news-pages-list-link__active" href="#">1</a>
        </li>
        <li>
          <a class="news-pages-list__link" href="#">2</a>
        </li>
        <li>
          <a class="news-pages-list__link" href="#">3</a>
        </li>
        <li>
          <a class="news-pages-list__link" href="#">4</a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/icons/news-pages.svg">
          </a>
        </li>
      </ul>
    </section>
  </main>

  <quick-form-footer></quick-form-footer>
  <footer-component></footer-component>
</template>

<script>


import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import QuickFormFooter from "@/components/QuickFormFooter.vue";
import BigNewsCardComponent from "@/components/BigNewsCardComponent.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  components: {BigNewsCardComponent, QuickFormFooter, FooterComponent, HeaderComponent},
}

</script>

<style>
.main-header {
  position: relative;
  background: transparent;
  z-index: 5;
  margin-bottom: 80px;
}

.header-bg__img {
  background-image: url(../assets/images/background-news.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
}

.main {
  position: relative;
  z-index: 5;
}

.news-list {
  margin-bottom: 200px;
}

.news-filter__nav {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}

.news-filter-nav__button {
  color: #9A9CA5;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 50px;
  border: none;
  background-color: transparent;
  line-height: 160%;

  transition: all .3s linear;
}

.news-filter-nav__button:hover {
  color: var(--main-orange-color);
}

.filter-btn__active {
  border-radius: 4px;
  border: 1px solid var(--main-orange-color);
  color: var(--main-orange-color);
}

.news-wrapper {
  display: grid;

  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: repeat(2, 2fr);

  gap: 60px 30px;
  height: 100%;

}

.news-pages__list {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  gap: 20px;
}


.news-pages-list__link {
  color: #424551;

  font-size: 16px;
  font-weight: 700;
  line-height: 160%;
}

.news-pages-list-link__active {
  color: var(--main-orange-color);
}

</style>