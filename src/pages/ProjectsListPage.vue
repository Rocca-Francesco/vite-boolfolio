<script>
import ProjectCard from '../components/ProjectCard.vue';
// axios per le chiamate
import axios from "axios";

export default {
  data() {
    return {
      endpointStart: "http://127.0.0.1:8000/api/projects",
      projects: {
        data: [],
        pagination: [],
      },
    }
  },

  methods: {
    searchOnProjectApi(endpoint = null) {
      if (!endpoint) endpoint = this.endpointStart;
      axios.get(endpoint).then((response) => {
        this.projects.data = response.data.data;
        this.projects.pagination = response.data.links;
      });

    }
  },

  created() {
    this.searchOnProjectApi();
  },

  emits: ['searchOnProjectApi'],

  components: { ProjectCard }
}
</script>

<template>
  <ProjectCard :projects="projects.data" :pagination="projects.pagination" @searchOnProjectApi="searchOnProjectApi" />
</template>

<style lang="scss" scoped></style>