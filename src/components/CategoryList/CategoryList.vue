<template>
  <ul class="category-list">
    <li class="category-list__list-item" v-for="category in categoryItems" v-bind:key="category.id"> 
      <router-link class="category-list__list-content-wrapper" :to="`/exercise/${category.id}`" tag="div" >
        <div class="category-list__item-text-wrapper">
          {{category.name}}
        </div>
        <div class="category-list__chevron-wrapper">
          <svg class="category-list__cheveron" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"/>
          </svg>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CategoryList",
  props: ["categoryItems"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @font-face {
    font-family: "OpenSansSemiBold";
    src: url('../../assets/fonts/Open_Sans/OpenSans-SemiBold.ttf');
    font-weight: 600;
  }

  @keyframes arrowMove {
    from {
      transform: translateX(0)
    }
    to {
      transform: translateX(5px);
    }
  }

  .category-list {
    list-style: none;
    background-color: rgb(220,220,220);
    margin: 0;
    padding: 0;

    &__list-item {
      font-family: "OpenSansSemiBold";
      margin: 0;
      padding: 10px 5px;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background-color: rgb(190, 190, 190);
        color: white;

        .category-list__cheveron {
          fill: white;
          animation: arrowMove 0.5s ease-in-out infinite 0.1s alternate;
        }
      }
    }

    &__list-content-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &__item-text-wrapper {
      flex: 1 1 auto;
    }

    &__chevron-wrapper {
      display: flex;
      align-items: center;
      flex: 0 0 auto;
    }

    &__cheveron {
      width: 20px;
      height: 20px;
    }
  }
</style>
