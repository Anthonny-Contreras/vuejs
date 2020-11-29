<template>
     <!-- This is the setion -->
    <section id="content">
        <h2 class="article-title">Test</h2>
        <div id="mi-componente">
            <h1>Esto es mi componente</h1>
            <h2>{{ subtitulo }}</h2>
        </div>
        
    </section>
</template>

<script>
export default {
    name: "Micomponente",
    data() {
        return{
            subtitulo: "Esto es una variable de vue"
        }
    }
}
</script>