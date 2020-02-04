<template>
  <div>
    <b-jumbotron
      id="jumbotron"
      style="background-color: #f5f8fa; border-top: 1px solid rgba(0,0,0,0.125); border-bottom: 1px solid rgba(0,0,0,0.125)"
      class="text-center"
    >
      <div class="ml-auto">
        <b-img
          id="me"
          v-bind="mainProps"
          class="mb-2"
          :src="image"
          rounded="circle"
          alt="Not rounded image"
        ></b-img>
        <div>
          <h1
            style="font-size: 3rem; color: #3a4145; margin-top: 0; font-weight: 700"
          >
            Johnson Mwakazi
          </h1>
          <p style="font-size: 1.5rem; color: grey">
            Web
            <span style="color: grey">Developer</span>
          </p>
          <p style="font-size: 1.5rem; color: grey">
            Proficient in,
            <span style="color: #0096cc"
              >Html5, Css3, JavaScript, VueJs and Firebase</span
            >
          </p>
        </div>
      </div>
    </b-jumbotron>
    <div class="mt-3">
      <about />
    </div>
    <div>
      <projects :projects="projects" />
    </div>

    <div class="mt-3 mb-0">
      <leg />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: require("@/assets/images/me.jpg"),
      mainProps: {
        width: 100,
        height: 100
      }
    };
  },
  computed: {
    projects() {
      return this.$store.getters.loadProjects;
    }
  }
};
</script>
<style scoped>
#me {
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.125);
  border-style: solid;
  background-color: white;
}
#me:hover {
  border-color: grey;

  transition: all 0.5s;
  cursor: pointer;
}
#jumbotron {
  background-color: #f5f8fa;
  border-top: 1px solid cornsilk;
  border-bottom: 1px solid cornsilk;
}
</style>
