<template>
  <main class="container bg-jojos">

    <!--NAVBAR-->
    <section class="nav-container bg-black">
      <NavbarOptions></NavbarOptions>
    </section>

    <!---MOVIES GENRE PANEL-->
    <section class="movies h-[100px] w-[100%]">
      <h1 class="text-[35px] font-semibold ml-[50px]">Películas</h1>
      <SelectOptions></SelectOptions>
      
      <!--GRID & LINE BUTTONS-->
      <ButtonsCompose></ButtonsCompose>
    </section>

    <!--NOTIFICATIONS-->
    <Notifications v-if="showNotifications"></Notifications>

    <!--USER PANEL-->
    <UserPanel v-if="showPanel"></UserPanel>


    <!--PRINCIPAL BANNER-->
    <BannerCompose></BannerCompose>
    <BannerButtons></BannerButtons>

    <!--CARROUSELS-->
    <Carrousel></Carrousel>

  </main>
</template>

<script>
import Carrousel from '@/components/CarrouselCompose.vue'
import UserPanel from '@/components/UserPanelCompose.vue'
import Notifications from '@/components/NotificationCompose.vue'
import NavbarOptions from '@/components/NavbarOptions.vue'
import SelectOptions from '@/components/SelectOptions.vue'
import ButtonsCompose from '@/components/ButtonsCompose.vue'
import BannerCompose from '@/components/BannerCompose.vue'

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
    SelectOptions,
    ButtonsCompose,
    BannerCompose
},
  methods: {
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


/*MOVIES*/
.movies {
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.line {
  display: flex;
  align-items: center;
}

.line-icon {
  filter: invert(1);
  transform: rotate(180deg);
}

.grid {
  display: flex;
  align-items: center;
}

.grid-icon {
  filter: invert(1);
}
</style>