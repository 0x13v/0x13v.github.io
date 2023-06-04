<template>
  <div class="d-xl-flex align-items-xl-center" id="wrapper" style="color: rgb(255,255,255);">

    <nav class="navbar navbar-dark align-items-center sidebar sidebar-dark accordion bg-gradient-primary p-0"
      style="background: rgb(0,0,0);color: rgb(255,255,255);height: 20%;margin-right: 15px;margin-left: 5px;">
      <div class="container-fluid d-flex flex-column p-0"><a
          class="navbar-brand border rounded border-0 border-dark d-flex justify-content-center align-items-center sidebar-brand m-0"
          href="#">
          <div class="sidebar-brand-icon rotate-n-15"><img class="rounded-circle bg-primary"
              src="/assets/img/logo.png?h=e5727fb00a8e1197816d3462c44ab2b6" loading="auto" width="64px" height="64px"
              style="transform: rotate(15deg);"></div>
          <div class="sidebar-brand-text mx-3"><span class="font-monospace text-lowercase fw-lighter">0x13v</span></div>
        </a>
        <hr class="sidebar-divider my-0">
        <ul class="navbar-nav text-light border rounded border-3 border-dark" id="accordionSidebar"
          style="margin-top: 30px;">
          <li class="nav-item"><router-link :to="{ name: 'home', query: { datasearch:'' } }" class="nav-link">
      <i class="fas fa-home"></i>
      <span class="font-monospace text-uppercase">Home</span>
    </router-link>
    </li>
   
    <li class="nav-item"><a class="nav-link" href="#"  @click="profile"><i class="fas fa-user"></i><span
                                class="font-monospace text-uppercase">Profile</span>  </a></li>
          <li class="nav-item"><router-link :to="{ name: 'home', query: { datasearch:'writeups' } }" class="nav-link"><i class="fas fa-pencil-alt"></i><span
                class="font-monospace text-uppercase">Writeups</span>  </router-link></li>
          <li class="nav-item"><router-link :to="{ name: 'home', query: { datasearch:'notes' } }" class="nav-link"><i class="far fa-sticky-note"></i><span
                class="font-monospace text-uppercase">Notes</span>  </router-link></li>
          <li class="nav-item"><router-link :to="{ name: 'home', query: { datasearch:'projects' } }" class="nav-link"><i class="fab fa-gitlab"></i><span
                class="font-monospace text-uppercase">Projects &amp; Testing</span>  </router-link></li>
          <li class="nav-item"><router-link :to="{ name: 'home', query: { datasearch:'awards' } }" class="nav-link"><i class="fas fa-award"></i><span
                class="font-monospace text-uppercase">AWARDS</span>  </router-link></li>
        </ul>
        <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle"
            type="button"></button></div>
      </div>
    </nav>
    <div
      class="text-white-50 bg-dark border rounded border-2 d-flex flex-column justify-content-sm-center justify-content-lg-center"
      id="content-wrapper" style="color: rgb(0,0,0);">
      <div class="container-fluid text-white-50"
        style="background: #000000;color: rgb(255,255,255);border-width: 13.4px;border-style: double;overflow: auto;width: 100%;height: 100%;min-height: 500px;">
        <router-view />
      </div>
    </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a>
  </div>
</template>

<script>
export default {
  methods: {
    profile(blog) {

      this.$router.push({
        name: 'blog-view',
        params: {
          url: 'aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzB4MTN2LzB4MTN2L21haW4vUkVBRE1FLm1k',
          title: 'info'
        }
      });
    }
  }
};
</script>