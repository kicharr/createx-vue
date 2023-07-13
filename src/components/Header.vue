<template>
  <header id="header" class="main-header">
    <div id="header-bg__img" class="header-bg__img"></div>
    <div class="header-wrapper container">
      <div class="header-content__left">
        <div class="header-logo__wrapper">
          <a href="../Home.html">
            <img src="../assets/icons/header-logo.svg" alt="Company logotype">
          </a>
        </div>
        <nav class="header-nav__wrapper">
          <ul class="header-nav__list">
            <li>
              <a id="aboutPageId" class="header-nav__link" href="../About.html">About Us</a>
            </li>
            <li>
              <a class="header-nav__link" href="../services.html">Services</a>
            </li>
            <li>
              <a class="header-nav__link" href="../Work.html">Work</a>
            </li>
            <li>
              <a class="header-nav__link" href="../News.html">News</a>
            </li>
            <li>
              <a class="header-nav__link" href="../Contacts.html">Contacts</a>
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
                <a class="header-nav__link" href="#">About Us</a>
              </li>
              <li>
                <a class="header-nav__link" href="../services.html">Services</a>
              </li>
              <li>
                <a class="header-nav__link" href="#">Work</a>
              </li>
              <li>
                <a class="header-nav__link" href="#">News</a>
              </li>
              <li>
                <a class="header-nav__link" href="#">Contacts</a>
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

</style>