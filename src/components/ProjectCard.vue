<script>
export default {
  props: {
    projects: Array,
  }
}
</script>

<template>
  <div class="container">
    <div class="row p-2 justify-content-between">
      <div class="card col-2 m-2 p-0" v-for="project in projects">
        <div class="card-header">
          Featured
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">{{ project.lenguages }}</p>
          <a href="#" class="btn btn-primary">Go to details</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
