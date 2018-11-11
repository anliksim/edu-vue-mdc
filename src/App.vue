<template>
    <div class="home">
        <Shrine/>
    </div>
</template>

<script>
    import Shrine from './components/Shrine.vue'

    export default {
        name: 'app',
        components: {
            Shrine
        }
    }
</script>

<style lang="scss">

    html, body {
        height: 100%;
    }

    body {
        font-family: 'Roboto';
        margin: 0;
        padding-top: 0.1px; // Prevent header h1 margin from pushing body down
    }

    .home {
        display: flex;
    }
</style>
