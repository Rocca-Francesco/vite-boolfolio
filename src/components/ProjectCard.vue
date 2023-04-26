<script>
export default {
  data() {
    return {
      title: "Projects List",
    }
  },

  props: {
    projects: Array,
    pagination: Array,
  }
}
</script>

<template>
  <div class="container">
    <h1 class="px-1">{{ title }}</h1>
    <div class="row p-2 justify-content-between">
      <div class="col-3 py-2 px-1" v-for="project in projects" key="{{ project.id }}">
        <div class="card m-2 p-0 h-100">
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
      <nav class="my-2">
        <ul class="pagination">
          <li v-for="page in  pagination ">
            <button type="button" class="page-link" :class="{ disabled: !page.url, active: page.active }"
              @click="$emit('searchOnProjectApi', page.url)" v-html="page.label"></button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
