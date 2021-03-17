<template>
  <div class="empty">
    <div class="drink">
      <div class="drink-text">
        <h4 class="drink-text-title">Oops, can't find anything</h4>
        <p class="drink-text-desc">:(</p>
      </div>
      <img
        class="drink-img"
        src="../../assets/not-found.png"
        alt="nothing found"
      />
    </div>
  </div>
</template>

<style scoped>
.empty {
  margin: 10px;
  width: 700px;
  box-shadow: 0px 0px 4px 1px lightgray;
}
.drink {
  padding: 1.5rem 2rem;
  height: 100px;
  display: flex;
  background-color: #ffffff;
}
.drink-text {
  text-align: left;
  margin-top: -0.75em;
  flex: 1 1 auto;
  padding-right: 1rem;
}
.drink-img {
  flex: 0 0 auto;
  width: 100px;
  height: 100px;
}
</style>
