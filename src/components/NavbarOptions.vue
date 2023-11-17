<template>
  <section class="flex flex-row items-center justify-center">
    <h4 class="text-primary text-3xl font-semibold my-4 mx-[50px] hover:cursor-pointer">FireFlix</h4>
    <Router-Link to="/" class="mr-[19px] text-sm font-semibold text-terciary">Inicio</Router-Link>
    <Router-Link to="/admin/series"
      class="mr-[19px] text-sm font-semibold text-terciary hover:text-gray">Series</Router-Link>
    <Router-Link to="/admin/movies"
      class="mr-[19px] text-sm font-semibold text-terciary hover:text-gray">Películas</Router-Link>
    <Router-Link to="/admin/novedades" class="mr-[19px] text-sm font-semibold text-terciary hover:text-gray">Novedades
      populares</Router-Link>
    <Router-Link to="/" class="mr-[19px] text-sm font-semibold text-terciary hover:text-gray">Mi lista</Router-Link>
    <Router-Link to="/" class="mr-[19px] text-sm font-semibold text-terciary hover:text-gray">Explora por
      idiomas</Router-Link>
    <img class="search-icon w-6 ml-[290px] hover:cursor-pointer" @click="show = !show" src="../assets/img/search.svg">

    <Transition name="deploy">
      <input v-if="show"
        class="search-bar px-[20px] py-[6px] bg-transparent ml-[860px] border-solid border-white border-[1px] text-[14px]"
        placeholder="Títulos, personas, géneros">
    </Transition>


    <Router-Link to="/" class="ml-[20px] text-sm font-[550] text-terciary">Niños</Router-Link>
    <img @mouseover="showNotifications = true" @mouseleave="showNotifications = false"
      class="notification-icon w-6 ml-[20px] hover:cursor-pointer"
      src="https://cdn-icons-png.flaticon.com/512/472/472371.png" />
    <img @mouseover="showPanel = true" @mouseleave="showPanel = false"
      class="user-icon w-8 ml-[20px] hover:cursor-pointer"
      src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      showNotifications: false,
      showPanel: false,
      show: false
    }
  }
}
</script>