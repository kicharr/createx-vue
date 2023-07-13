<template>
  <footer class="footer">
    <div class="footer-wrapper container">
      <div class="footer-row__info">
        <div class="footer-row-info__left">
          <div class="footer-row-info__left__content">
            <div class="footer-logo__social__icons">
              <div class="footer-logo__wrapper">
                <img src="../assets/icons/footer-logo-white.svg" alt="Logo">
              </div>
              <ul class="footer-social-icons__wrapper">
                <li>
                  <a href="#">
                    <img src="../assets/icons/whatsapp.svg">
                  </a>
                </li>
                <li>
                  <a class="footer-social__link" href="#">
                    <img src="../assets/icons/messanger.svg">
                  </a>
                </li>
                <li>
                  <a class="footer-social__link" href="#">
                    <img src="../assets/icons/facebook.svg">
                  </a>
                </li>
                <li>
                  <a class="footer-social__link" href="#">
                    <img src="../assets/icons/twitter.svg">
                  </a>
                </li>
                <li>
                  <a class="footer-social__link" href="#">
                    <img src="../assets/icons/youtube.svg">
                  </a>
                </li>
              </ul>
            </div>
            <p class="footer-row-info__left__content__text">
              Createx Construction Bureau has been successfully operating in the USA <br> construction
              market since 2000. We are proud to offer you quality <br> construction and exemplary
              service. Our mission is to set the highest <br> standards for construction sphere.
            </p>
          </div>
        </div>
        <div class="footer-row-info__right">
          <div class="footer-title__wrapper">
            <h4>Let’s stay in touch</h4>
          </div>
          <div class="footer-input__wrapper">
            <input id="footerInput" class="footer-input" placeholder="Your email address " type="text">
            <input type="button" value="subscribe" class="footer-input__button">
          </div>
          <p class="footer-input-wrapper__description">
            *Subscribe to our newsletter to receive communications and early updates from Createx <br>
            Construction Bureau.
          </p>
        </div>
      </div>
      <div class="footer-row__links">
        <div class="footer-row__first-column">
          <p class="first-column__tilte footer-row-column__title">
            HEAD OFFICE
          </p>
          <ul class="footer-column__list">
            <li>
                            <span class="footer-clumn-list__info__tilte">
                                Address:
                            </span>
              <p class="footer-clumn-list__info">
                8502 Preston Rd. Inglewood, New York
              </p>
            </li>
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
          </ul>
        </div>
        <div class="footer-row__first-column">
          <p class="first-column__tilte footer-row-column__title">
            WHO WE ARE
          </p>
          <ul class="footer-column__list">
            <li>
              <a class="footer-column__link" href="../About.html">About Us</a>
            </li>
            <li>
              <a class="footer-column__link" href="#">Available Positions</a>
            </li>
            <li>
              <a class="footer-column__link" href="../Contacts.html">Contacts</a>
            </li>
          </ul>
        </div>
        <div class="footer-row__first-column">
          <p class="first-column__tilte footer-row-column__title">
            OUR EXPERIENCE
          </p>
          <ul class="footer-column__list">
            <li>
              <a class="footer-column__link" href="../Services.html">Services</a>
            </li>
            <li>
              <a class="footer-column__link" href="../Services.html">Work</a>
            </li>
            <li>
              <a class="footer-column__link" href="../News.html">News</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-row__copyright">
        <p class="copyright__text">
          © All rights reserved. Made with
          <span>
                        <img src="../assets/icons/copyright-icon.svg">
                    </span>
          by Createx Studio
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",

}
</script>

<style scoped>
.footer {
  background: var(--main-title-color);
  color: #787A80;
}

.footer-row__info {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 50px;
}

.footer-logo__wrapper {
  margin-right: 60px;
}

.footer-wrapper {
  padding: 80px 0;
}

.footer-logo__social__icons {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}

.footer-social-icons__wrapper {
  display: flex;
  gap: 18px;
}

.footer-social__link a:hover {
  opacity: 1;
}

.footer-social__link img {
  transition: all .5s linear;
}

.footer-social__link img:hover {
  transform: scale(1.2);
}

.footer-input__wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.footer-input {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px 0 0 4px;
  padding: 11px 120px 12px 16px;
  border-right: 0;
  color: #FFFFFF;
  min-height: 44px;
}

.footer-input__button {
  background: #FF5A30;
  padding: 0 25px;
  border-radius: 0px 4px 4px 0px;

  font-weight: 700;
  font-size: 14px;
  line-height: 44px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border: none;
  color: #FFFFFF;
  min-height: 44px;
  transition: all .3s linear;
}

.footer-input__button:hover {
  opacity: .6;
}

.footer-input:focus-visible {
  outline: none;
}

.footer-input__button:focus-visible {
  outline: none;
}

.footer-title__wrapper h4 {
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 24px;
}

.footer-input-wrapper__description {
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  display: flex;
  align-items: center;
}

.footer-row__links {
  display: flex;
  margin-bottom: 60px;
}

.footer-row__links a {
  color: #787A80;
}

.footer-row__first-column {
  margin-right: 125px;
}

.footer-row-column__title {
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 15px;
}

.footer-column__list li {
  display: flex;
  gap: 5px;
  margin-bottom: 5px;
}

.footer-clumn-list__info__tilte {
  color: #FFFFFF;
}

.footer-row__copyright {
  display: flex;
  justify-content: center;
  text-align: center;
}

@media (max-width: 1130px) {
  .section-title__wrapper h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 130%;

    text-align: center;

    color: var(--main-title-color);
    margin-bottom: 10px;
  }

  .footer-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .footer-row__info {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .footer-logo__social__icons {
    justify-content: center;
  }

  .footer-row__first-column {
    margin-right: 0;
  }

  .footer-row__links {
    display: flex;
    margin-bottom: 60px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-column__list li {
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
    justify-content: center;
  }
}

@media (max-width: 550px) {
  .footer-input__wrapper {
    justify-content: center;
  }

  .footer-input {
    padding: 11px 0 12px 16px;
  }

  .footer-row-info__left__content__text {
    font-size: 10px;
  }
}

@media (max-width: 380px) {
  .footer-input__wrapper {
    max-width: 300px;
  }

  .footer-input__wrapper {
    justify-content: center;
    margin: 0 auto 5px;
  }

  .footer-logo__social__icons {
    flex-direction: column;
    align-items: center;
    margin-bottom: 12px;
  }

  .footer-input__button {
    padding: 0 5px;
  }

  .footer-logo__wrapper {
    margin: 0 auto;
    margin-bottom: 5px;
  }
}
</style>