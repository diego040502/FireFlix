<template>
    <section class="panel w-[200px] h-[320px] bg-transparent ml-[1050px] border-2 border-gray">
        <div class="users">
            <img class="w-[40px] h-[40px] ml-[15px] mt-[10px] rounded-[4px] hover:cursor-pointer" src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" alt="">
            <h5 class="text-[12px] ml-[10px] hover:cursor-pointer">Diego</h5>
        </div>
        <div class="users">   
            <img class="w-[40px] h-[40px] ml-[15px] mt-[8px] rounded-[4px] hover:cursor-pointer" src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" alt="">
            <h5 class="text-[12px] ml-[10px] hover:cursor-pointer">Ronaldo</h5>
        </div>
        <div class="users">
            <img class="w-[40px] h-[40px] ml-[15px] mt-[8px] rounded-[4px] hover:cursor-pointer" src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" alt="">
            <h5 class="text-[12px] ml-[10px] hover:cursor-pointer">Manuel</h5>
        </div>
        <RouterLink class="ml-[10px] hover:cursor-pointer hover:border-b-2 hover:border-white text-[13px] mb-[10px] mt-[10px] hover:border-b-2 border-gray" to="/"> <img src=""> Administrar perfiles</RouterLink>
        <RouterLink class="ml-[10px] hover:cursor-pointer hover:border-b-2 hover:border-white text-[13px] mb-[10px] hover:border-b-2 border-gray" to="/"> <img src=""> Transferir perfil</RouterLink>
        <RouterLink class="ml-[10px] hover:cursor-pointer hover:border-b-2 hover:border-white text-[13px] mb-[10px] hover:border-b-2 border-gray" to="/"> <img src=""> Cuenta</RouterLink>
        <RouterLink class="ml-[10px] hover:cursor-pointer hover:border-b-2 hover:border-white text-[13px] mb-[10px] hover:border-b-2 border-gray" to="/"> <img src=""> Centro de ayuda</RouterLink>
        <h5 class="close text-[13px] ml-[20px] py-[5px]">Cerrar sesión en Netflix</h5>
    </section>
</template>

<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

<style>
    .panel{
        z-index: 2;
        position: absolute;
        display: flex;
        flex-direction: column;
    }

    .users{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .close{
        justify-content: center;
    }
</style>