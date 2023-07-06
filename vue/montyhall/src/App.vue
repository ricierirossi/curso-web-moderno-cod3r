<template>
    <div id="app">
        <h1>Problema de Montyhall</h1>
        <WoodDoor number="1" :hasGift="false" /> <!-- o dois-pontos garente que o valor passado será "false" e não uma string que resulta em "true" -->
    </div>
</template>

<script>
    import WoodDoor from './components/WoodDoor'

    export default {
        name: 'App',
        components: { WoodDoor }
    }
</script>

<style>
* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    color: #FFF;
    background: linear-gradient(to left, #0f0c29, #302b63, #24243e);;
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
}
</style>
