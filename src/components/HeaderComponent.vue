<template>
  <header id="header" class="main-header">
    <div id="header-bg__img" class="header-bg__img"></div>
    <div class="header-wrapper container">
      <div class="header-content__left">
        <div class="header-logo__wrapper">
          <a href="/">
            <img src="../assets/icons/header-logo.svg" alt="Company logotype">
          </a>
        </div>
        <nav class="header-nav__wrapper">
          <ul class="header-nav__list">
            <li>
              <a id="aboutPageId" class="header-nav__link" href="/about">About Us</a>
            </li>
            <li>
              <a class="header-nav__link" href="/services">Services</a>
            </li>
            <li>
              <a class="header-nav__link" href="/work">Work</a>
            </li>
            <li>
              <a class="header-nav__link" href="/news">News</a>
            </li>
            <li>
              <a class="header-nav__link" href="/contacts">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="header-content__right">
        <div class="header-contact__item">
          <img src="../assets/icons/header-phone.svg">
          <div class="header-contact__item-content">
            <p class="header-content-call">
              Call us
            </p>
            <a href="tel:+(405) 555-0128">(405) 555-0128</a>
          </div>
        </div>
        <div class="header-contact__item">
          <img src="../assets/icons/header-chat.svg">
          <div class="header-contact__item-content">
            <p class="header-content-call">
              Talk to us
            </p>
            <a href="mailto:hello@createx.com">hello@createx.com</a>
          </div>
        </div>
        <div class="header-menu__mobile">
          <div id="mobileLink" class="header-burger__btn" href="#">
            <span></span>
          </div>

          <nav id="mobileMenu" hidden class="header-nav__wrapper__mobile">
            <ul class="header-nav__list">
              <li>
                <a class="header-nav__link" href="/about">About Us</a>
              </li>
              <li>
                <a class="header-nav__link" href="/services">Services</a>
              </li>
              <li>
                <a class="header-nav__link" href="/work">Work</a>
              </li>
              <li>
                <a class="header-nav__link" href="/news">News</a>
              </li>
              <li>
                <a class="header-nav__link" href="/contacts">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  export default  {
   name: 'HeaderComponent'
  }
</script>

<style scoped>
.main-header {
  background-color: #FFF;
  color: var(--main-text-color);
  font-weight: 800;
  transition: all .4s linear;
}

.header-fixed {
  background-color: white;
  box-shadow: 4px 16px 8px 0px rgba(34, 60, 80, 0.2);
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
}

.header-nav__active {
  color: var(--main-orange-color);
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
}

.header-content__left {
  display: flex;
  /* margin-right: 172px; */
}

.header-content__right {
  display: flex;
  align-items: center;
}

.header-logo__wrapper {
  display: flex;
  align-items: center;
  margin-right: 60px;
}

.header-nav__list {
  display: flex;
  align-items: center;
  margin-bottom: 0;
}

.header-nav__list a {
  transition: .3s linear all;
  color: var(--main-text-color);
}

.header-nav__list a:hover {
  color: var(--main-orange-color);
}

.header-nav__list li {
  margin-right: 40px;
}

.header-nav__list li:last-child {
  margin-right: 0;
}

.header-contact__item {
  display: flex;
  gap: 20px;
  margin-right: 36px;
  font-family: 'Ubuntu Medium', sans-serif;
  font-weight: 700;
  font-size: 14px;
}

.header-contact__item:last-child {
  margin-right: 0;
}

.header-contact__item a {
  font-weight: 400;
  color: var(--main-title-color);
}

.header-content-call {
  margin-bottom: 5px;
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

  .header-menu__mobile {
    display: block;
  }


  .section-title__wrapper h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 130%;

    text-align: center;

    color: var(--main-title-color);
    margin-bottom: 10px;
  }

  .section-title__wrapper {
    font-size: 14px;
    margin-bottom: 30px;
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

@media (max-width: 768px) {
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
}

@media (max-width: 550px) {
  .header-content__left {
    margin-right: 0;
  }

  .header-logo__wrapper {
    margin-right: 0;
  }

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

@media (max-width: 425px) {
  .header-wrapper {
    flex-direction: column;
    gap: 10px;
    text-align: center;
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