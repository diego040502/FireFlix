<template>
    <main class="h-[100px] hover:cursor-pointer">
        <h2 class="ml-[50px] mt-[60px] mb-[10px] text-[18px] font-semibold">TV de fantasía imaginativa</h2>
        <section class="tv-container">
            <Frame v-for="(frame, index) in frames" :key="index" :url="frame.url" :Temporada="frame.Temporada" :Episodio="frame.Episodio"></Frame>
        </section>
        <h2 class="ml-[50px] mb-[10px] text-[18px] font-semibold">Tendencias</h2>
        <section class="trend-container">
            <Frame v-for="(frame, index) in frames" :key="index" :url="frame.url" :Temporada="frame.Temporada" :Episodio="frame.Episodio"></Frame>
        </section>
    </main>
</template>

<script>
import Frame from '@/components/FrameCompose.vue'
export default {
    data() {
        return {
            frames: [
                { url: 'https://cinepremiere.com.mx/wp-content/uploads/2021/03/Jojos-Netflix-900x491.jpg', Temporada: 'T1', Episodio: 'E2' },
                { url: 'https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU93A44HU_j-CXeoS66qSwMCoO8tfB1v8CyaZBiqzBZgw92iEXgBGK7nEHoUNtKMqnJw6aM5-abVxS8PMUu0Gu8VGk9gKeh3uL6HQsisn2vcNr6HWhcMmewnMBxde5Zm7jmXXA.jpg?r=158', Temporada: 'T3', Episodio: 'E20' },
                { url: 'https://somoskudasai.com/wp-content/uploads/2021/11/portada_one-punch-man-15.jpg', Temporada: 'T2', Episodio: 'E10' },
                { url: 'https://sm.ign.com/ign_latam/news/b/breaking-b/breaking-bad-movie-title-and-netflix-release-date-revealed_v3st.jpg', Temporada: 'T6', Episodio: 'E1' }
            ]
        }
    },
    components: {
        Frame
    }
}
</script>

<style>
.tv-container {
    display: flex;
    flex-direction: row;
}

.trend-container{
    display: flex;
    flex-direction: row;
}

h2{
    transition: transform 0.3s ease;
    cursor: pointer;
}

h2:hover{
    transform: translateX(10px);
}


</style>