<template>
    <!-- This is the setion -->
    <section id="content">
        <h2 class="article-title"> Hooks de Vue</h2>
        <p>Ciclos de vide de Vue</p>

    </section>
</template>

<script>
export default {
    name: "PageComponent",

    // Ciclos de vida
    created(){
        // se activa cuando se crea el componente y antes de que se monte en la web
        console.log('El compomente se ha creado')
    },
    mounted(){
        // Util para cuando queramos activar una accion justo en el momento que se instancia el componente
        console.log('El compomente se ha montado o instanciado')
    },
    updated(){
        // Cada vez que hay un campo en el componente este metodo se actualiza (solo a nivel de vista)
        // es decir si hay un cambio en el template (aparece algo o algo se borra o algo se cambia) este metodo se activa
        console.log('El compomente se ha actualizado')
    },
    destroyed(){
        // Al eliminar un componente este metodo se activa, justo antes de llamar a otro componente
        console.log('El compomente se ha eliminado')
    },
}
</script>