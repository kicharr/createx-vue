<template>
  <section class="footer-form__wrapper">
    <div class="footer-bg__img"></div>
    <div class="footer-form__content container">
      <form class="footer-form">
        <div class="footer-form__title">
          <h3>A quick way to discuss details</h3>
        </div>
        <div class="separate-data__wrapper">
          <label class="footer-form__label" for="footerFormName">Name*</label>
          <input id="footerFormName" class="footer-input__name" placeholder="Your name" type="text">
        </div>
        <div class="separate-data__wrapper">
          <label class="footer-form__label" for="footerFormPhone">Phone*</label>
          <input id="footerFormPhone" class="footer-input__phone" placeholder="Your phone number"
                 type="text">
        </div>
        <div class="separate-data__wrapper">
          <label class="footer-form__label" for="footerFormEmail">Email</label>
          <input id="footerFormEmail" class="footer-input__email" placeholder="Your working email"
                 type="text">
        </div>
        <div class="separate-data__wrapper">
          <label class="footer-form__label" for="footerFormMessage">Message*</label>
          <textarea id="footerFormMessage" class="footer-input__Message" placeholder="Your message"
                    type="text"></textarea>
        </div>
        <div class="separate-data__wrapper separate-data-checkbox__wrapper">
          <input id="footerFormCheckbox" class="footer-input__Message" placeholder="Your message"
                 type="checkbox" checked>
          <label for="footerFormCheckbox">I agree to receive communications from Createx Construction
            Bureau.</label>
        </div>
        <div class="footer-form-button__wrapper">
          <button class="main-btn call-wrapper__btn footer-form-btn" type="submit">send request</button>
        </div>

      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: "QuickFormFooter"
}
</script>
<style scoped>
.footer-form__wrapper {
  position: relative;
  padding-bottom: 40px;
}

.footer-bg__img {
  position: absolute;
  top: -5vw;
  left: 0;
  z-index: -1;
  background-image: url(../assets/images/footer-form-bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 826px;
}

.footer-form {
  max-width: 495px;
  width: 100%;

  background: #FFFFFF;

  border: 1px solid #E5E8ED;

  box-shadow: 0px 60px 80px -20px rgba(30, 33, 44, 0.16), 0px 26px 24px -10px rgba(30, 33, 44, 0.1), 0px 12px 10px -6px rgba(30, 33, 44, 0.08), 0px 4px 4px -4px rgba(30, 33, 44, 0.05);
  border-radius: 4px;
  margin: 0 0 0 auto;

  padding: 48px 40px;
}

.footer-form__title h3 {
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;

  text-align: center;
  color: var(--main-title-color);
  margin-bottom: 24px;
}

.separate-data__wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.separate-data-checkbox__wrapper {
  display: flex;
  flex-direction: row;
}

.footer-form-btn {
  margin: 0 auto;
  background-color: var(--main-orange-color);
  border: 1px solid var(--main-orange-color);
}

.footer-form__label {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: #424551;
}

.footer-form input,
textarea {
  background: #F4F5F7;
  resize: none;
  border: 1px solid #D7DADD;
  border-radius: 4px;


  font-weight: 400;
  font-size: 14px;
  color: var(--main-title-color);
  line-height: 150%;

  padding: 11px 0 12px 16px;
}

.footer-form input,
textarea:focus-visible {
  outline: none;
}
</style>