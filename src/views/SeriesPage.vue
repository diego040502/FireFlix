<template>
  <main class="container bg-sherlock">

    <!--NAVBAR-->
    <section class="nav-container bg-black">
      <NavbarOptions></NavbarOptions>
    </section>

    <!---MOVIES GENRE PANEL-->
    <section class="movies h-[100px] w-[100%]">
      <h1 class="text-[35px] font-semibold ml-[50px]">Series</h1>
      <SelectOptionsVue></SelectOptionsVue>
      
      <!--GRID & LINE BUTTONS-->
      <ButtonsCompose></ButtonsCompose>
    </section>

    <!--NOTIFICATIONS-->
    <Notifications v-if="showNotifications"></Notifications>

    <!--USER PANEL-->
    <UserPanel v-if="showPanel"></UserPanel>


    <!--PRINCIPAL BANNER-->
    <article class="serie-container">
      <img class="serie-logo mx-[50px] mb-[20px] mt-[100px] h-[100px] w-[500px]"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Sherlock_Logo.svg/1280px-Sherlock_Logo.svg.png"
        alt="">
      <p class="w-[500px] font-semibold mx-[50px] my-[4px]">Comienza el juego para un excéntrico detective que, con la
        ayuda de su inseparable <br>
        compañero, deberá usar cerebro y músculos para rastrear a un perverso archienemigo.</p>
      <BannerButtons></BannerButtons>
    </article>

    <!--CARROUSELS-->
    <Carrousel></Carrousel>

  </main>
</template>

<script>
import Carrousel from '@/components/customCarrousel.vue'
import UserPanel from '@/components/UserPanelCompose.vue.js'
import Notifications from '@/components/NotificationsCompose.vue.js'
import NavbarOptions from '@/components/NavbarOptions.vue'
import ButtonsCompose from '@/components/ButtonsCompose.vue'
import BannerButtons from '@/components/BannerButtons.vue'

export default {
  data() {
    return {
      showNotifications: false,
      showPanel: false,
      show: false
    }
  },
  components: {
    Carrousel,
    UserPanel,
    Notifications,
    NavbarOptions,
    ButtonsCompose,
    BannerButtons
}
}
</script>

<style>
.search-icon {
  filter: invert(1);
}

.notification-icon {
  filter: invert(1);
}

.nav-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.container {
  height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  z-index: 1;
  position: absolute;
}

.more-icon {
  filter: invert(1);
}

.notifications {
  z-index: 2;
  position: absolute;
  background-color: rgba(20, 20, 20, 0.95);
}

.notes {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.search-bar {
  z-index: 0;
  position: absolute;
}

/*TRANSITIONS*/

.deploy-enter-active,
.deploy-leave-active {
  transition: all 0.1s ease-out;
  opacity: 1;
}

.deploy-enter-from,
.deploy-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}


/*SERIES*/
.serie-logo {
  filter: invert(1);
}
</style>