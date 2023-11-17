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
    <article class="serie-container">
      <img class="mx-[50px] mb-[20px] mt-[100px] h-[150px]"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9af4c12f-a0d9-48ab-a9d3-240148699eaf/ddrmyz1-e0eb36c4-c631-45d7-8e27-d47c2f679365.png/v1/fill/w_1027,h_778/_logo__jojo_s_bizarre_adventure_logo_recreation_by_rapbattleeditor0510_ddrmyz1-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTcwIiwicGF0aCI6IlwvZlwvOWFmNGMxMmYtYTBkOS00OGFiLWE5ZDMtMjQwMTQ4Njk5ZWFmXC9kZHJteXoxLWUwZWIzNmM0LWM2MzEtNDVkNy04ZTI3LWQ0N2MyZjY3OTM2NS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Ilp4MHH4svhlqydszfLGMLX1RameyTFw2uihPbK5Qvw"
        alt="">
      <p class="w-[500px] font-semibold mx-[50px] my-[4px]">Jonathan Joestar, también conocido como JoJo, pelea contra
        su ambicioso hermanastro, Dio Brando, quien, tras utilizar <br>
        una antigua máscara de piedra, se ha convertido en un poderoso vampiro.</p>
      <BannerButtons></BannerButtons>
    </article>

    <!--CARROUSELS-->
    <Carrousel></Carrousel>

  </main>
</template>

<script>
import Carrousel from '@/components/customCarrousel.vue'
import UserPanel from '@/components/customUserPanel.vue'
import Notifications from '@/components/customNotifications.vue'
import NavbarOptions from '@/components/NavbarOptions.vue'
import SelectOptions from '@/components/SelectOptions.vue'
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
    SelectOptions,
    ButtonsCompose,
    BannerButtons
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