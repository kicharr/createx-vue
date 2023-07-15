<template>
  <header-component></header-component>
  <main class="main">

    <section class="main__wrapper container">
      <ul class="breadcrumbs-wrapper">
        <li>
          <a class="breadcrumbs-link breadcrumbs-link__main" href="../Home.html">Homepage</a>
        </li>
        <li class="breadcrumbs-link__current">
          /
        </li>
        <li>
          <a class="breadcrumbs-link breadcrumbs-link__main" href="../about.html">About Us</a>
        </li>
        <li class="breadcrumbs-link__current">
          /
        </li>
        <li>
          <a class="breadcrumbs-link breadcrumbs-link__current" href="#">Available Positions</a>
        </li>
      </ul>
      <section class="main-wrapper__content">
        <div class="main-title__wrapper">
          <h1>
            AVAILABLE <br>
            POSITIONS
          </h1>
        </div>
        <p class="main-title__description">
          Build your career with Createx Construction Bureau.
        </p>
      </section>
    </section>


    <section class="available-content container">
      <div id="vacanciesWrapper" class="positions-items__wrapper">

        <div id="vacancyCard" class="positions-item">
          <div class="item-data">
            <div class="item-data__info">
              <img class="item-data__img" src="../assets/images/available/geo.svg">

              <p class="item-data item-data__city">
                New York
              </p>
              <span></span>
              <img class="item-data__img" src="../assets/images/available/clock.svg">
              <p class="item-data item-data__time">

                Full Time
              </p>
            </div>
            <p class="item-data-title">Heavy Equipment Operator</p>
          </div>


          <div class="item-apply__buttons">
            <button class="item-apply-btn">Apply now</button>
          </div>

        </div>

      </div>


      <aside class="positions-form__content">
        <div class="section-title__wrapper">
          <h3>Didn’t find what you were <br> looking for?</h3>
        </div>
        <p class="positions-form__description">
          Send your CV or subscribe to our newsletter to <br> receive information about new vacancies.
        </p>
        <div class="positions-form-buttons__wrapper">
          <button id="subscribeModalBtn" class="item-apply-btn item-apply-btn__subscribe">subscribe</button>
          <button id="subscribeModalCV" class="item-apply-btn item-apply-btn__send">send cv</button>
        </div>
      </aside>
    </section>


    <div class="modals__wrapper">

      <div id="subscribeModal" class="subscribe-form__modal">
        <button id="closeSubscribeModal" class="close-icon__button">
          <img src="../assets/images/available/close-modal.svg">
        </button>
        <div class="modal-title__wrapper">
          <h3>Subscribe to our newsletter</h3>


        </div>
        <div class="inputs__wrapper">
          <div class="separate-data__wrapper">
            <label class="footer-form__label" for="footerFormName">Name*</label>
            <input id="footerFormName" class="footer-input__name modal-input" placeholder="Your name"
                   type="text">
          </div>
          <div class="separate-data__wrapper">
            <label class="footer-form__label" for="footerFormPhone">Email*</label>
            <input id="footerFormPhone" class="footer-input__email modal-input"
                   placeholder="Your working email" type="text">
          </div>
        </div>

        <button class="footer-form-btn modal-btn">SEND</button>
      </div>


      <div id="sendCVModal" class="subscribe-form__modal send-form__modal">
        <button id="closeSubscribeModalCV" class="close-icon__button">
          <img src="../assets/images/available/close-modal.svg">
        </button>
        <div class="modal-title__wrapper">
          <h3>Send your CV</h3>
        </div>
        <div class="inputs__wrapper">
          <div class="separate-data__wrapper">
            <label class="footer-form__label" for="footerFormName">Name*</label>
            <input id="footerFormName" class="footer-input__name modal-input" placeholder="Your name"
                   type="text">
          </div>

          <label class="separate-data__wrapper interested-wrpaper">
            <p class="input-title">Location*</p>
            <input id="selectLocation" class="contacts-form-input contacts-form-input__location"
                   type="text" placeholder="Your Country">
            <img id="selectArrowLocation" class="select-arrow"
                 src="../assets/images/contacts-page/custom-select__arrow.svg">
            <ul id="chooseLocationItem" class="interested-select">
              <li>
                <a class="interested-select__item" href="#">
                  Russia
                </a>

              </li>
              <li>
                <a class="interested-select__item" href="#">
                  Germany
                </a>

              </li>
              <li>
                <a class="interested-select__item" href="#">
                  England
                </a>

              </li>
            </ul>
          </label>
          <div class="separate-data__wrapper">
            <label class="footer-form__label" for="footerFormPhone">Phone*</label>
            <input id="footerFormPhone" class="footer-input__email modal-input"
                   placeholder="Your phone number" type="text">
          </div>
          <div class="separate-data__wrapper">
            <label class="footer-form__label" for="footerFormPhone">Email*</label>
            <input id="footerFormPhone" class="footer-input__email modal-input"
                   placeholder="Your working email" type="text">
          </div>

          <div class="separate-data__wrapper">
            <label class="footer-form__label" for="footerFormMessage">Сovering letter</label>
            <textarea rows="2" id="footerFormMessage" class="footer-input__Message"
                      placeholder="Your covering letter" type="text"></textarea>
          </div>

          <div class="separate-data__wrapper">
            <div class="input__wrapper">
              <input name="file" type="file" id="input__file" class="input input__file" multiple>
              <label for="input__file" class="input__file-button">
                <span class="input__file-icon-wrapper"><img class="input__file-icon"
                                                            src="../assets/images/available/Attach.svg"
                                                            alt="Выбрать файл"></span>
                <span class="input__file-button-text">Attach your CV*</span>
              </label>
            </div>
          </div>
        </div>
        <button class="footer-form-btn modal-btn">SEND</button>
      </div>

    </div>


    <section class="values container">
      <div class="section-title__wrapper section-title-wrapper__section">
        <h2>Employee benefits</h2>
        <p class="section-tilte__subtitle">
          There’s always room for talent.
        </p>
      </div>
      <div class="values-card__wrapper">
        <div class="values-card">
          <img class="values-card-icon" src="../assets/images/available/ic-brain.svg" alt="Quality icon">
          <div class="card-title__wrapper">
            <h4>Training</h4>
            <div class="card-description">
              Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.
            </div>
          </div>
        </div>

        <span class="card-separator"></span>
        <div class="values-card">
          <img class="values-card-icon" src="../assets/images/available/ic-success.svg" alt="Quality icon">
          <div class="card-title__wrapper">
            <h4>Professional Growth</h4>
            <div class="card-description">
              Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor
              est ea.
            </div>
          </div>
        </div>
        <span class="card-separator"></span>
        <div class="values-card">
          <img class="values-card-icon" src="../assets/images/available/ic-budget.svg" alt="Quality icon">
          <div class="card-title__wrapper">
            <h4>Growing Salary</h4>
            <div class="card-description">
              Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident
              ea ad.
            </div>
          </div>
        </div>
      </div>
    </section>


  </main>
  <quick-form-footer></quick-form-footer>
  <footer-component></footer-component>
</template>

<script>


import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import QuickFormFooter from "@/components/QuickFormFooter.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  components: {QuickFormFooter, FooterComponent, HeaderComponent},
}

</script>

<style scoped>
bbody {
  position: relative;
}

.modal-form__wrapper {
  position: absolute;

  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;

}

.subscribe-form__modal {
  border-radius: 4px;
  border: 1px solid #E5E8ED;
  background: #FFF;
  box-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.05), 0px 12px 10px -6px rgba(30, 33, 44, 0.08), 0px 26px 24px -10px rgba(30, 33, 44, 0.10), 0px 60px 80px -20px rgba(30, 33, 44, 0.16);

  max-width: 486px;
  width: 100%;

  padding: 48px;
  position: fixed;
  top: calc(50vh - 208px);
  left: calc(50% - 243px);
  z-index: 6;
  opacity: 1;
}


.main-header {
  position: relative;
  background: transparent;
  z-index: 5;
  margin-bottom: 80px;
}

.header-bg__img {
  background-image: url(../assets/images/background-available.jpg);
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


/* .modal-form__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    z-index: 6;
    opacity: 0.75;
    background-color: #1E212C;
} */

.subscribe-form__modal {
  display: none;
}

.close-icon__button {
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  display: flex;
  margin-left: auto;
}

.modal-title__wrapper {
  margin-bottom: 24px;
}

.modal-title__wrapper h3 {
  font-size: 28px;
  font-weight: 700;
  line-height: 150%;
  color: var(--main-title-color);
  text-align: center;
}

.modal-input {
  border-radius: 4px;
  border: 1px solid #D7DADD;
  background-color: #F4F5F6;
  padding: 11px 0 12px 16px;
}

.modal-btn {
  width: 100%;
}

.modal-input:focus-visible {
  outline: none;
}

.inputs__wrapper {
  margin-bottom: 40px;

}

.modal-btn {
  padding: 14px 0;
  color: #FFFFFF;
}

.available-content {
  display: flex;
}

.available-content {
  margin-bottom: 180px;
}

.item-data__info {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.positions-items__wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.positions-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 32px 40px;
  border-radius: 4px;
  border: 1px solid #E5E8ED;
  background: #FFF;
  min-width: 705px;
  width: 100%;
}

.item-data {
  color: #787A80;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
}

.item-data__city {
  display: flex;
}

.item-data__img {
  margin-right: 8px;
}

.item-data__time {
  display: flex;
  gap: 8px;
}

.item-data-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  color: var(--main-title-color);
}


.item-apply-btn {
  padding: 0 32px;
  color: var(--main-orange-color);
  text-align: center;
  font-size: 14px;

  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  background-color: transparent;
  border: 1px solid var(--main-orange-color);
  border-radius: 4px;

  transition: all .3s linear;
}

.item-apply-btn:hover {
  background-color: var(--main-orange-color);
  color: #FFFFFF;
}

.positions-form__content {
  margin-left: auto;
}


.positions-item span {
  border: 1px solid #787A80;
  transform: rotate(90deg);
  width: 12px;
  height: 1px;
  margin: 0 12px;
}


.section-title__wrapper {
  margin-bottom: 24px;
}

.section-title-wrapper__section {
  margin-bottom: 60px;
}

.section-title__wrapper h3 {
  font-size: 28px;
  font-weight: 700;
  line-height: 150%;
  text-align: start;
}

.positions-form__description {
  color: #424551;

  font-size: 18px;
  text-align: start;
  margin-bottom: 18px;
  font-weight: 400;
  line-height: 150%;
}

.positions-form-buttons__wrapper {
  display: flex;
}

.item-apply-btn__subscribe {
  max-width: 180px;
  width: 100%;
  margin-right: 30px;
}

.item-apply-btn__send {
  max-width: 180px;
  width: 100%;
}

.values {
  margin-bottom: 220px;
}


.send-form__modal {
  display: none;
  top: calc(50vh - 400px);
  left: calc(50% - 243px);

}

.contacts-form-input__interested {
  position: relative;
  z-index: 5;
}

.interested-wrpaper {
  position: relative;
  /* overflow: hidden; */
}

.select-arrow {
  position: absolute;
  top: 65%;
  right: 7%;
  z-index: 5;
  display: inline-block;
  width: 10px;
  height: 10px;

  transition: all .3s linear;

}

.interested-select {
  position: absolute;
  top: 95px;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #FFFFFF;

  display: none;
}

.interested-select li {
  background: #F4F5F7;
  border: 1px solid #D7DADD;
  padding: 13px 0 13px 16px;
  border-radius: 4px;

  margin-bottom: 10px;
  transition: all .3s linear;
}

.interested-select li:hover {
  color: var(--main-orange-color);
}

.input-title {
  margin-bottom: 8px;
}

.contacts-form-input {
  background: #F4F5F7;
  resize: none;
  border: 1px solid #D7DADD;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  color: var(--main-title-color);
  line-height: 150%;
  padding: 13px 0 13px 16px;

  min-width: 285px;
  width: 100%;
}

.contacts-form-input:focus-visible {
  outline: none;
}

.input__wrapper {
  width: 100%;
  position: relative;
  margin: 15px 0;
  text-align: center;
}

.input__file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}

.input__file-icon-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
}

.input__file-button-text {
  cursor: pointer;
  color: #424551;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
}

.input__file-button {
  cursor: pointer;
  gap: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
}
</style>