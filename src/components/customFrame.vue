<template>
    <main class="ml-[50px] frame-container" @mouseover="showContent = true" @mouseleave="showContent = false">
        <img :src="url" class="thumbnail w-[260px] mr-[2px] rounded-[2px]" alt="">
        <section v-if="showContent" class="w-[260px]">
            <div class="buttons-container ml-[15px] mt-[15px]">
                <button><img class="rounded-[100%] bg-terciary h-[30px] w-[30px] mr-[5px]" src="https://icon-library.com/images/play-icon-svg/play-icon-svg-28.jpg" alt=""></button>
                <button class="inverted bg-gray h-[30px] w-[30px] rounded-[100%] mr-[5px] text-black"><strong>+</strong></button>
                <button class="inverted bg-gray h-[30px] w-[30px] rounded-[100%] mr-[5px] text-black"><strong>x</strong></button>
                <button><img class="inverted rounded-[100%] bg-gray h-[30px] w-[30px] ml-[120px] mr-[5px]" src="https://icons-for-free.com/download-icon-more+icon-1320183327641553014_512.png" alt=""></button>
            </div>
            <h3 class="text-terciary text-[12px] mt-[20px] ml-[15px]">{{ Temporada }}:{{ Episodio }}</h3>
            <div class="bg-primary ml-[15px]">
                <hr class="ml-[100px]">
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            showContent: false
        }
    },
    props: {
        url: String,
        Temporada: String,
        Episodio: String
    }
}
</script>

<style scoped>
.buttons-container{
    display: flex;
    flex-direction: row;
}

.inverted{
    filter: invert(1);
    background-size: contain;
    border: 2px solid black;
}

.frame-container{
    height: 300px;
}

.frame-container:hover{
    color: white;
    box-shadow: 5px 5px 10px black;
    transform: scale(1.2);
    transition: transform 0.3s;
    z-index: 2;
}

.frame-container:hover .thumbnail{
    width: 300px;
}
</style>