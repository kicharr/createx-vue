<template>
  <div id="employeeCard" class="team-card">
    <div class="team-worker-img__wrapper">
      <img class="worker-image" :src="employer.photo" alt="Worker">
      <div class="social__wrapper">
        <div class="social__item">
          <a href="#">
            <img src="../assets/icons/in.svg">
          </a>
        </div>
        <div class="social__item">
          <a href="#">
            <img src="../assets/icons/twitter-team-card.svg">
          </a>
        </div>
        <div class="social__item">
          <a href="#">
            <img src="../assets/icons/facebook-team__card.svg">
          </a>
        </div>
      </div>
    </div>

    <p ref="emName" class="worker-name">{{ employer.name }}</p>
    <p class="worker-position">{{ employer.position }}</p>

  </div>
</template>

<script>
export default {
  name: 'EmployerCardComponent',
  data() {

  },
  props: ['employer']

}

</script>


<style scoped>
.team-card {
  text-align: center;
}

.team-worker-name__wrapper {
  margin-bottom: 4px;
}

.worker-name {
  font-size: 20px;
  color: var(--main-title-color);
  font-weight: 700;
  line-height: 150%;
}

.worker-position {
  font-size: 16px;
  color: #787A80;
  line-height: 160%;
}

.team-worker-img__wrapper {
  position: relative;
  margin-bottom: 16px;
  display: flex;
  overflow: hidden;
}

.worker-image {
  width: 285px;
  height: 340px;
}

.social__wrapper {
  padding: 20px 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #FF5A30;
  border-radius: 0 0 4px 4px;
  opacity: 0.7;

  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  transform: translateY(100px);

  transition: all .2s linear;
}

.team-worker-img__wrapper:hover .social__wrapper {
  transform: translateY(0);
}


</style>