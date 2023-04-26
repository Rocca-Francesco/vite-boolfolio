<script>
import ProjectCard from './components/ProjectCard.vue';
import Navbar from './components/Navbar.vue';
// axios per le chiamate
import axios from "axios";

export default {
  data() {
    return {
      endpointStart: "http://127.0.0.1:8000/api/projects",
      projects: [],
    }
  },

  methods: {
    searchOnProjectApi() {

      axios.get(this.endpointStart).then((response) => {
        this.projects = response.data;
        console.log(this.projects);
      });

    }
  },

  created() {
    this.searchOnProjectApi();
  },

  components: { ProjectCard, Navbar }
}
</script>

<template>
  <Navbar />
  <ProjectCard :projects="projects" />
</template>

<style lang="scss" ></style>
