<template>
  <b-container fluid class="mb-0 mt-4 pb-0">
    <div style="float: left">
      <p>&copy;{{ date }} Johnson Mwakazi</p>
    </div>
    <div style="float: right">
      <a href="https://github.com/jmwakz99"><i class="fa fa-github"></i></a>
      <a href="mailto:mwanjilajohnson@gmail.com">
        <i
          class="fa fa-envelope"
          style="padding: 5px; display: inline-block;"
        ></i>
      </a>
    </div>
  </b-container>
</template>
<script>
export default {
  computed: {
    date() {
      return new Date().getFullYear();
    }
  }
};
</script>
