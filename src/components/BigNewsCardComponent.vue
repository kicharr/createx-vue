<template>
  <div id="newsCard" class="big-news news-card">
    <img class="big-news__preview" :src="newsPreview" alt="News image">

    <div class="big-news-description__wrapper">
      <div class="news-title__wrapper">
        <a id="newsCardName" href="#" class="news-card__link big-news-card__link ">
          {{ newsTitle }}
        </a>
      </div>
      <div class="news-data__wrapper">
        <p class="news-type__text">{{ newsType }}</p>
        <span></span>
        <p class="news-date__text">{{ newsDate }}</p>
        <span></span>
        <div class="news-comments__wrapper">
          <img src="../assets/icons/comments.svg">
          <p class="news-type__text news-comment__text">{{ newsQuantityComments }} {{ newsCommentsCount }}</p>
        </div>
      </div>
      <p class="big-news-card__description">
        {{ newsDescription }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BigNewsCardComponent',
  data() {
    return {

      newsCardData: [
        {newsPreview: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200'},
        {newsTitle: 'How to Build Climate Change- Resilient Infrastructure'},
        {newsType: 'Industry News'},
        {newsDate: 'June 24, 2020'},
        {newsQuantityComments: null},
        {newsCommentsCount: 'Comments'},
        {newsDescription: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...'}
      ]
    }
  },
  beforeMount() {
    this.newsCommentsCount < 1 ? this.newsCommentsCount = 'Comment' : null
  },
  methods: {
  }
}
</script>

<style scoped>

</style>