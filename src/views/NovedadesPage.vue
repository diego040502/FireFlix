<template>
    <!--NAVBAR-->
    <section class="nav-container bg-black">
        <NavbarOptionsVue></NavbarOptionsVue>
    </section>

    <!--NOTIFICATIONS-->
    <Notifications v-if="showNotifications"></Notifications>

    <!--USER PANEL-->
    <UserPanel v-if="showPanel"></UserPanel>

    <!--CARROUSEL-->
    <Carrousel></Carrousel>


</template>

<script>
import Carrousel from '@/components/CarrouselCompose.vue'
import UserPanel from '@/components/UserPanelCompose.vue'
import Notifications from '@/components/NotificationCompose.vue'
import NavbarOptionsVue from '@/components/NavbarOptions.vue'

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
        NavbarOptionsVue
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