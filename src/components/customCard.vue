<template>
    <main class="container h-[500px]">
        <section class="card-container bg-transparent w-[200px] ml-[50px] mr-[100px] hover:cursor-pointer">
            <h1 class="text-[250px] text-black font-bold">{{ number }}</h1>
            <img class="h-[200px] w-[150px]" :src="url">
        </section>
    </main>
</template>

<script>
export default {
    props: {
        number: String,
        url: String
    }
}
</script>

<style>
.container{
    display: flex;
    flex-direction: row;
}

.card-container {
    display: flex;
    flex-direction: row;
}


</style>