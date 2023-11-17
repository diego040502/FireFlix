<template>
    <div class="container bg-lockwood">
        
        <!--NAVBAR-->
        <nav class="nav-container fixed">
            <h4 class="text-primary text-3xl font-semibold my-4 mx-[50px] hover:cursor-pointer">FireFlix</h4>
            <Router-Link to="/" class="mr-[19px] text-sm font-semibold text-terciary">Inicio</Router-Link>
            <Router-Link to="/admin/series" class="mr-[19px] text-sm font-semibold text-terciary hover:text-gray">Series</Router-Link>
            <Router-Link to="/admin/movies" class="mr-[19px] text-sm font-semibold text-terciary hover:text-gray">Películas</Router-Link>
            <Router-Link to="/admin/novedades" class="mr-[19px] text-sm font-semibold text-terciary hover:text-gray">Novedades populares</Router-Link>
            <img class="search-icon w-6 ml-[290px] hover:cursor-pointer" @click="show = !show" src="../assets/img/search.svg">
            
            <Transition name="deploy">
                <input v-if="show" class="search-bar px-[20px] py-[6px] bg-transparent ml-[860px] border-solid border-white border-[1px] text-[14px]" placeholder="Títulos, personas, géneros">
            </Transition>

            <Router-Link to="/" class="ml-[20px] text-sm font-[550] text-terciary">Niños</Router-Link>
            <img @mouseover="showNotifications = true"  @mouseleave="showNotifications = false" class="notification-icon w-6 ml-[20px] hover:cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/472/472371.png" />
            <img @mouseover="showPanel = true" @mouseleave="showPanel = false" class="user-icon w-8 ml-[20px] hover:cursor-pointer"
                src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" />
        </nav>
        <!--NOTIFICATIONS-->
        <Notifications v-if="showNotifications"></Notifications>

        <!--USER PANEL-->
        <UserPanel v-if="showPanel"></UserPanel>


        <!--PRINCIPAL BANNER-->
        <div class="serie-container">
            <img class="mx-[50px] mb-[20px] mt-[100px] h-[150px]" src="https://occ-0-32-55.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABb1gYIwyQlfMbkUEYcmwtkOMUxote9OFS8ttRlCO5x8cdwEn3F22nAjEfmvOHVPA30rjVNh6ymfMVMTJm1ierupIDzaYsaZ_7o4Kr_3oGXenZQAyUUwmRl3xxw-Z0DvRMe7QXOauaZXLvnArhP9ydWkvp1F2A_1egMhaEUA2USnKDxTDxSNiOg.png?r=1f2" alt="">
            <p class="w-[500px] font-semibold mx-[50px] my-[4px]">En un mundo plagado de fantasmas, en el que gigantescas corporaciones emplean a adolescentes psíquicos para <br> luchar contra lo sobrenatural, solo una empresa opera <br>
                sin la supervisión de un adulto y su nombre es Lockwood & Co.</p>
            <button class="my-[10px] px-[24px] py-[3px] bg-terciary font-semibold ml-[50px] text-black text-[16px] text-center rounded-md items-center hover:bg-gray"><img src="https://icon-library.com/images/play-icon-svg/play-icon-svg-28.jpg" class="w-[30px] inline-block mr-[3px] h-[35px]">Reproducir</button>
            <button class="my-[10px] px-[24px] py-[3px] bg-gray font-semibold ml-[50px] text-white text-[16px] text-center rounded-md items-center hover:bg-transparent"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/1200px-Infobox_info_icon.svg.png" class="more-icon w-[34px] inline-block mr-[3px] h-[35px]">Más información</button>
        </div>

        <!--CARROUSELS-->
        <Carrousel></Carrousel>

    </div>
</template>

<script>
import Carrousel from '@/components/customCarrousel.vue'
import UserPanel from '@/components/UserPanelCompose.vue.js'
import Notifications from '@/components/NotificationsCompose.vue.js'

export default{
    data(){
        return{
            showNotifications: false,
            showPanel: false,
            show: false
        }
    },
    components:{
        Carrousel,
        UserPanel,
        Notifications
    },
    methods:{
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

.container{
    height: 100vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    z-index: 1;
    position: absolute;
}

.more-icon{
    filter: invert(1);
}

.notifications{
    z-index: 2;
    position: absolute;
    background-color: rgba(20, 20, 20, 0.95);
}

.notes{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.search-bar{
    z-index: 0;
    position: absolute;
}

/*TRANSITIONS*/

.deploy-enter-active, .deploy-leave-active{
    transition: all 0.1s ease-out;
    opacity: 1;
}

.deploy-enter-from, .deploy-leave-to{
    transform: translateX(-10px);
    opacity: 0;
}

</style>
