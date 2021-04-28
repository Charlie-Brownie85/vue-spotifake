<template>
  <div class="spotify-card">
    <div class="spotify-card__picture">
      <img :src="imageURL" alt="placeholder" />
    </div>
    <div class="spotify-card__info">
      <span class="spotify-card__title">{{ cardTitle }}</span>
      <span class="spotify-card__subtitle">{{ cardSubtitle }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      cardInfo: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        cardType: this.cardInfo.type,
        cardTitle: this.cardInfo.name,
      };
    },
    computed: {
      imageURL() {
        return (this.cardType === 'track'
          ? this.cardInfo.album?.images[1]?.url
          : this.cardInfo.images[1]?.url) || require('../assets/img/img-placeholder.jpg');
      },
      cardSubtitle() {
        let subtitleText = '';
        switch (this.cardType) {
          case 'album':
            subtitleText = this.cardInfo.artists[0]?.name;
            break;
          case 'track':
            subtitleText = this.cardInfo.artists
              .map((artist) => artist.name)
              .join(', ');
            break;
          case 'artist':
            subtitleText = `${this.cardInfo.followers?.total} followers`;
            break;
          default:
            subtitleText = '';
        }
        return subtitleText;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .spotify-card {
    background-color: $color-spotify-black;
    cursor: pointer;
    width: 100%;
    height: 100px;

    display: grid;
    grid-template-columns: 100px auto;

    transition: background-color 0.3s ease;

    &:hover {
      background-color: $color-spotify-dark-grey;
    }

    &__picture {
      width: 100%;
      height: 100%;
      overflow: hidden;

      img {
        display: block;
        height: 100%;
        object-fit: cover;
        // object-position: center center;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 10px 20px;
      overflow: hidden;

      span {
        // display: inline-block;
        width: calc(100%);
        text-align: left;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 1.2;
      }
    }

    &__title {
      font-weight: bold;
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
    }

    &__subtitle {
      font-weight: 300;
      font-style: italic;
      font-size: 0.8rem;
      color: $color-spotify-light-grey;
    }
  }
</style>