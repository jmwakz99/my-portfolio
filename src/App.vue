<template>
  <div id="app">
    <b-navbar
      style="background-color: ffffff; font-weight: 700"
      id="navbar"
      toggleable="lg"
    >
      <b-navbar-brand href="/">JOHNSON MWAKAZI</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="mr-4" text="Lang" href="#project" right>
            PROJECTS
          </b-nav-item>
          <b-nav-item class="mr-4" text="Lang" href="#about" right>
            ABOUT ME
          </b-nav-item>
          <b-nav-item class="mr-4" text="Lang" href="#about" right>
            CONTACT
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="fixed-action-btn">
      <a href="#navbar" class="btn-floating btn-large red">
        <i class="fa fa-arrow-up" id="icon" style="color: blue"></i>
      </a>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script></script>

<style>
html {
  scroll-behavior: smooth;
}
#app {
  font-family: Montserrat, helvetica neue, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
.fixed-action-btn {
  bottom: 45px;
  right: 24px;
  position: fixed;
  padding-top: 15px;
  margin-bottom: 0;
  z-index: 997;
  display: block;
  color: rgba(0, 0, 0, 0.87);
  line-height: 1.6;
  font-size: 16px;
}

.btn-floating {
  width: 56px;
  height: 56px;
  padding: 0;
  line-height: 54px;
  font-size: 15px;
  display: inline-block;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: background-color 0.3s;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  outline: 0;
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  background-color: transparent !important;
  box-sizing: inherit;
}
#icon {
  display: inline-block;
  left: 40%;
  bottom: 40%;
  position: absolute;
}
</style>
