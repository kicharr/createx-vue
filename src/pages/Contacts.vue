<template>
  <header-component></header-component>
  <main class="main">
    <section class="main__wrapper container">
      <ul class="breadcrumbs-wrapper">
        <li>
          <a class="breadcrumbs-link breadcrumbs-link__main" href="/home">Homepage</a>
        </li>
        <li class="breadcrumbs-link__current">
          /
        </li>
        <li>
          <a class="breadcrumbs-link breadcrumbs-link__current" href="#">Contacts</a>
        </li>
      </ul>
      <section class="main-wrapper__content">
        <div class="main-title__wrapper">
          <h1>
            CONTACTS
          </h1>
        </div>
        <p class="main-title__description">
          Contact us for all your construction needs. We always welcome <br> any questions and comments.
        </p>
      </section>
    </section>
    <section class="contacts-form__wrapper">
      <div class="section-title__wrapper">
        <h2>Contact us</h2>
        <p class="section-tilte__subtitle">
          Please complete the form. Detailed information will help us to make a tuned offer.
        </p>
      </div>

      <div class="form-wrapper container">
        <div class="form-image__wrapper">
          <img src="../assets/images/contacts-page/contacts-form__image.jpg" alt="Form Preview">
        </div>
        <form class="contacts-form">
          <div class="contacts-from__row">
            <label class="name-wrapper">
              <p class="input-title">Name*</p>
              <input class=" contacts-form-input contacts-form-input__name" type="text"
                     placeholder="Your name">
            </label>
            <label class="interested-wrpaper">
              <p class="input-title">I am interested in</p>
              <input id="selectInteres" class="contacts-form-input contacts-form-input__interested"
                     type="text" placeholder="Your name">
              <img id="selectArrowInteres" class="select-arrow"
                   src="../assets/images/contacts-page/custom-select__arrow.svg">
              <ul id="chooseInteresItem" class="interested-select">
                <li>
                  <a class="interested-select__item" href="#">
                    Interior Design
                  </a>

                </li>
                <li>
                  <a class="interested-select__item" href="#">
                    Interior Design
                  </a>

                </li>
                <li>
                  <a class="interested-select__item" href="#">
                    Interior Design
                  </a>

                </li>
              </ul>
            </label>
          </div>

          <div class="contacts-from__row">
            <label class="name-wrapper">
              <p class="input-title">Phone*</p>
              <input class="contacts-form-input contacts-form-input__phone" type="text"
                     placeholder="Your phone number">
            </label>
            <label class="interested-wrpaper">
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
          </div>

          <div class="contacts-from__row">
            <label class="name-wrapper">
              <p class="input-title">Email</p>
              <input class="contacts-form-input contacts-form-input__email" type="text"
                     placeholder="Your working email">
            </label>
            <label class="interested-wrpaper">
              <p class="input-title input-title-contact-method">Preferred contact method</p>
              <div class="radio-buttons__wrapper">
                <div class="radio-btn__wrapper">

                  <input checked class="radio" name="contact" type="radio">
                  <label class="input-title input-title__radio">Phone</label>
                </div>

                <div class="radio-btn__wrapper">

                  <input class="radio" name="contact" type="radio">
                  <label class="input-title input-title__radio">Email</label>
                </div>

                <div class="radio-btn__wrapper">

                  <input class="radio" name="contact" type="radio">
                  <label class="input-title input-title__radio">Viber</label>
                </div>

              </div>
            </label>
          </div>

          <div class="separate-data__wrapper">
            <label class="footer-form__label" for="footerFormMessage">Message*</label>
            <textarea rows="5" id="footerFormMessage" class="footer-input__Message"
                      placeholder="Your message" type="text"></textarea>
          </div>

          <div class="consent-wrapper">
            <div class="separate-data__wrapper separate-data-checkbox__wrapper">
              <input id="footerFormCheckbox" class="footer-input__Message" placeholder="Your message"
                     type="checkbox" checked>
              <label for="footerFormCheckbox">I agree to receive communications from <br> Createx
                Construction
                Bureau.</label>
            </div>
            <div class="footer-form-button__wrapper">
              <button class="main-btn contacts-form__btn" type="submit">send request</button>
            </div>
          </div>


        </form>
      </div>
    </section>

    <section class="offices container">
      <div class="section-title__wrapper">
        <h2>Our offices</h2>
        <p class="section-tilte__subtitle">
          Give us a call, send us a note or visit our office. We can’t wait to hear from you!
        </p>
      </div>
      <div class="offices-info__wrapper">
        <div class="office">
          <div class="office-title__wrapper">
            <h3>New York, USA</h3>
          </div>
          <div class="address">
            <div class="address-text">
              8502 Preston Rd. Inglewood, New <br> York 98380
            </div>
            <a class="address-map" href="#">See on the map</a>
          </div>
          <div class="footer-row__first-column">
            <ul class="footer-column__list">
              <li>
                                <span class="footer-clumn-list__info__tilte">
                                    Call:
                                </span>
                <p class="footer-clumn-list__info">
                  (405) 555-0128
                </p>
              </li>

              <li>
                                <span class="footer-clumn-list__info__tilte">
                                    Email:
                                </span>
                <p class="footer-clumn-list__info">
                  hello@createx.com
                </p>
              </li>

              <li>
                                <span class="footer-clumn-list__info__tilte">
                                    Schedule:
                                </span>
                <p class="footer-clumn-list__info">
                  Mon - Fri 9:00 - 18:00
                </p>
              </li>


            </ul>
          </div>
        </div>


        <div class="office">
          <div class="office-title__wrapper">
            <h3>New Jersey, USA</h3>
          </div>
          <div class="address">
            <div class="address-text">
              2464 Royal Ln. Mesa, New Jersey <br> 45463
            </div>
            <a class="address-map" href="#">See on the map</a>
          </div>
          <div class="footer-row__first-column">
            <ul class="footer-column__list">
              <li>
                                <span class="footer-clumn-list__info__tilte">
                                    Call:
                                </span>
                <p class="footer-clumn-list__info">
                  (808) 555-0111
                </p>
              </li>

              <li>
                                <span class="footer-clumn-list__info__tilte">
                                    Email:
                                </span>
                <p class="footer-clumn-list__info">
                  hello@createx.com
                </p>
              </li>

              <li>
                                <span class="footer-clumn-list__info__tilte">
                                    Schedule:
                                </span>
                <p class="footer-clumn-list__info">
                  Mon - Fri 9:00 - 18:00
                </p>
              </li>


            </ul>
          </div>
        </div>


        <div class="office">
          <div class="office-title__wrapper">
            <h3>San Francisco, USA</h3>
          </div>
          <div class="address">
            <div class="address-text">
              8502 Preston Rd. Inglewood, San <br> Francisco 98380
            </div>
            <a class="address-map" href="#">See on the map</a>
          </div>
          <div class="footer-row__first-column">
            <ul class="footer-column__list">
              <li>
                                <span class="footer-clumn-list__info__tilte">
                                    Call:
                                </span>
                <p class="footer-clumn-list__info">
                  (505) 555-0125
                </p>
              </li>

              <li>
                                <span class="footer-clumn-list__info__tilte">
                                    Email:
                                </span>
                <p class="footer-clumn-list__info">
                  hello@createx.com
                </p>
              </li>

              <li>
                                <span class="footer-clumn-list__info__tilte">
                                    Schedule:
                                </span>
                <p class="footer-clumn-list__info">
                  Mon - Fri 10:00 - 19:00
                </p>
              </li>


            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="social-link__wrapper container">
      <div class="section-title__wrapper">
        <h2>Find us at</h2>
      </div>
      <ul class="icons-link">
        <li>
          <a href="#">
            <svg class="icons-link__image" width="32" height="32" viewBox="0 0 32 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M29.3327 15.6559C29.3327 22.8302 23.4722 28.6459 16.2417 28.6459C13.9463 28.6459 11.7899 28.0592 9.91372 27.0296L2.66602 29.3327L5.02898 22.3632C3.83698 20.4059 3.15046 18.1102 3.15046 15.6559C3.15046 8.48172 9.0115 2.66602 16.2417 2.66602C23.4728 2.66602 29.3327 8.48172 29.3327 15.6559ZM16.2417 4.73476C10.1724 4.73476 5.2355 9.63402 5.2355 15.6559C5.2355 18.0456 6.01446 20.2586 7.33209 22.0589L5.95698 26.1149L10.1866 24.7706C11.9244 25.9116 14.0062 26.5771 16.242 26.5771C22.3105 26.5771 27.2482 21.6785 27.2482 15.6565C27.2482 9.63461 22.3108 4.73476 16.2417 4.73476ZM22.8524 18.6476C22.7715 18.5152 22.5579 18.4352 22.2373 18.2761C21.9161 18.117 20.338 17.3463 20.0447 17.2405C19.7505 17.1345 19.5359 17.0811 19.3223 17.3996C19.1087 17.7185 18.4936 18.4352 18.306 18.6476C18.1188 18.8607 17.9318 18.8873 17.6106 18.7279C17.29 18.5688 16.2562 18.2322 15.0305 17.1478C14.0767 16.3039 13.4325 15.2622 13.2453 14.9431C13.0583 14.6245 13.2257 14.4524 13.386 14.2939C13.5306 14.1511 13.7072 13.922 13.8675 13.7362C14.0284 13.5502 14.0817 13.4177 14.1881 13.205C14.2956 12.9925 14.242 12.8068 14.1614 12.6471C14.0814 12.4879 13.4391 10.9211 13.1718 10.2835C12.9045 9.64646 12.6376 9.75253 12.45 9.75253C12.2631 9.75253 12.0488 9.72587 11.8349 9.72587C11.621 9.72587 11.2731 9.80557 10.9789 10.1241C10.685 10.4429 9.85624 11.2133 9.85624 12.7798C9.85624 14.3466 11.0056 15.8604 11.1665 16.0725C11.3268 16.2847 13.3857 19.6044 16.6479 20.8793C19.9105 22.1537 19.9105 21.7285 20.4989 21.6752C21.0868 21.6222 22.397 20.9051 22.6654 20.162C22.9321 19.4177 22.9321 18.7804 22.8524 18.6476Z"
                  fill="#787A80"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg class="icons-link__image" width="32" height="32" viewBox="0 0 32 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M15.9993 2.66602C8.63602 2.66602 2.66602 8.19268 2.66602 15.011C2.66602 18.896 4.60435 22.361 7.63435 24.6243V29.3327L12.1743 26.841C13.386 27.176 14.6693 27.3577 15.9993 27.3577C23.3627 27.3577 29.3327 21.831 29.3327 15.0127C29.3327 8.19435 23.3627 2.66602 15.9993 2.66602ZM17.3243 19.291L13.9293 15.6693L7.30435 19.291L14.5927 11.5543L18.071 15.176L24.6127 11.5543L17.3243 19.291Z"
                  fill="#787A80"/>
            </svg>

          </a>
        </li>
        <li>
          <a href="#">


            <svg class="icons-link__image" width="32" height="32" viewBox="0 0 32 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M23.4178 1.34009L19.7148 1.33398C15.5545 1.33398 12.866 4.16744 12.866 8.55296V11.8814H9.14281C8.82108 11.8814 8.56055 12.1493 8.56055 12.4798V17.3023C8.56055 17.6328 8.82138 17.9004 9.14281 17.9004H12.866V30.0692C12.866 30.3997 13.1266 30.6673 13.4483 30.6673H18.306C18.6278 30.6673 18.8883 30.3994 18.8883 30.0692V17.9004H23.2416C23.5633 17.9004 23.8239 17.6328 23.8239 17.3023L23.8257 12.4798C23.8257 12.3211 23.7642 12.1692 23.6551 12.0569C23.5461 11.9446 23.3976 11.8814 23.2431 11.8814H18.8883V9.05983C18.8883 7.70368 19.2029 7.01523 20.9227 7.01523L23.4172 7.01432C23.7386 7.01432 23.9991 6.74638 23.9991 6.41619V1.93821C23.9991 1.60833 23.7389 1.3407 23.4178 1.34009Z"
                  fill="#787A80"/>
            </svg>

          </a>
        </li>
        <li>
          <a href="#">


            <svg class="icons-link__image" width="32" height="32" viewBox="0 0 32 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M30 7.69579C28.9694 8.13304 27.8637 8.42958 26.7019 8.56197C27.8881 7.88176 28.7962 6.80286 29.2266 5.52121C28.1138 6.15113 26.8855 6.60852 25.5768 6.85648C24.5287 5.78594 23.038 5.11914 21.3845 5.11914C18.2124 5.11914 15.6404 7.58189 15.6404 10.6176C15.6404 11.0482 15.6911 11.4687 15.7891 11.8708C11.016 11.6412 6.78357 9.45157 3.95085 6.12431C3.45568 6.9352 3.17399 7.88005 3.17399 8.88864C3.17399 10.7969 4.18881 12.4806 5.72854 13.4657C4.78719 13.4355 3.90185 13.1876 3.12677 12.7754V12.8441C3.12677 15.5079 5.10741 17.7311 7.73365 18.237C7.25248 18.361 6.74509 18.4297 6.22018 18.4297C5.84927 18.4297 5.49058 18.3945 5.13889 18.3275C5.87023 20.5138 7.99087 22.1037 10.5034 22.1473C8.53851 23.6216 6.06097 24.4978 3.36999 24.4978C2.90634 24.4978 2.44965 24.471 2 24.4224C4.54229 25.9855 7.56048 26.8969 10.8044 26.8969C21.3706 26.8969 27.1463 18.5168 27.1463 11.2492L27.1271 10.5372C28.2556 9.76651 29.2319 8.79818 30 7.69579Z"
                  fill="#787A80"/>
            </svg>

          </a>
        </li>
        <li>
          <a href="#">


            <svg class="icons-link__image" width="32" height="23" viewBox="0 0 32 23" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M28.5204 0.685299C29.891 1.05444 30.9718 2.135 31.3407 3.50584C32.0262 6.00974 31.9999 11.2289 31.9999 11.2289C31.9999 11.2289 31.9999 16.4215 31.3409 18.9257C30.9718 20.2963 29.8912 21.3771 28.5204 21.746C26.0162 22.4052 15.9999 22.4052 15.9999 22.4052C15.9999 22.4052 6.00974 22.4052 3.47948 21.7199C2.10863 21.3507 1.02807 20.2699 0.658933 18.8993C0 16.4215 0 11.2026 0 11.2026C0 11.2026 0 6.00974 0.658933 3.50584C1.02783 2.13524 2.135 1.02807 3.47923 0.659176C5.98337 0 15.9997 0 15.9997 0C15.9997 0 26.0162 0 28.5204 0.685299ZM21.1399 11.2026L12.8105 16V6.40525L21.1399 11.2026Z"
                    fill="#787A80"/>
            </svg>

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

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  components: {QuickFormFooter, FooterComponent, HeaderComponent},
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
  background-image: url(../assets/images/background-contacts.jpg);
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

/* main */
.form-wrapper {
  display: flex;
  margin-bottom: 200px;
}

.form-image__wrapper {
  margin-right: 135px;
}

.contacts-from__row {
  display: flex;
  gap: 30px;
  margin-bottom: 24px;
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
  top: 60%;
  right: 7%;
  z-index: 5;
  display: inline-block;
  width: 10px;
  height: 10px;

  transition: all .3s linear;

}

.interested-select {
  position: absolute;
  top: 80px;
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


.radio-buttons__wrapper {
  display: flex;
  gap: 24px;
}

.input-title__radio {
  margin: 0;
}

.radio-btn__wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}


.radio-btn__wrapper input[type=radio] {
  display: none;
  /* position: absolute; */
  z-index: 100;
}

.radio-btn__wrapper label {
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  margin-right: 0;
  line-height: 18px;
  z-index: -100;
  user-select: none;
}

.radio-btn__wrapper label:before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 0;
  bottom: 1px;
  background: url(../assets/images/contacts-page/radio-default.svg) 0 0 no-repeat;
}

/* Checked */
.radio-btn__wrapper input[type=radio]:checked + label:before {
  background: url(../assets/images/contacts-page/radio.svg) 0 0 no-repeat;
}

.radio-btn__wrapper label:hover:before {
  filter: brightness(120%);
}

/* Disabled */
.radio-btn__wrapper input[type=radio]:disabled + label:before {
  filter: grayscale(100%);
}

.input-title-contact-method {
  margin-bottom: 20px;
}

.consent-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contacts-form__btn {
  background-color: var(--main-orange-color);
  border: 1px solid var(--main-orange-color);
}

.footer-clumn-list__info__tilte {
  color: #787A80;
}

/* .office > *{
   display: inline-block;
} */

.offices-info__wrapper {
  display: flex;
  justify-content: space-between;
  color: #1E212C;

  font-size: 16px;

  font-weight: 400;
  line-height: 160%;
  margin-bottom: 120px;
}

.office-title__wrapper h3 {
  color: var(--main-title-color);
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 700;
  line-height: 150%;
}


.address-text {
  margin-bottom: 4px;
}

.address-map {
  color: var(--main-orange-color);

}


.footer-row__first-column {
  margin-right: 0;
}

.address-map:hover {

  text-decoration: underline;
}

.icons-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}


.icons-link__image path {
  fill: #787A80;
  transition: all .3s linear;
}

.icons-link__image path:hover {
  fill: var(--main-orange-color);
}

.social-link__wrapper {
  margin-bottom: 195px;
}
</style>