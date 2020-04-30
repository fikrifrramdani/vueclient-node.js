<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-container>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Posts</b-nav-item>
            <b-nav-item href="#">Disabled</b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container class="mt-3"></b-container>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
