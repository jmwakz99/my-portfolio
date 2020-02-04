<template>
  <b-container
    style="background-color: #f5f8fa; margin-top: 30px; max-width: 38em"
    id="project"
    fluid
  >
    <b-row>
      <div class="mx-auto" style="width: 70%;">
        <h2 class="mt-3 text-center">PROJECTS</h2>
      </div>
    </b-row>
    <b-row>
      <b-col sm="6" xs="12" v-for="project in projects" :key="project.title">
        <b-card
          class="mx-auto mt-4"
          :title="project.title"
          :img-src="project.image"
          img-alt="Image"
          img-top
          style="max-width: 20rem; height: 100%"
        >
          <b-card-text>{{ project.description }}</b-card-text>
          <div>
            <b-button
              variant="outline-dark"
              :href="project.siteLink"
              class="mr-3 mb-2"
              >View The Site</b-button
            >
            <b-button
              class="mb-2"
              :href="project.githubLink"
              variant="outline-secondary"
              >View The Code</b-button
            >
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: ["projects"]
};
</script>
