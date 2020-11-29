<template>
    <header id="header">
        <div class="center">
            <!-- Logo -->
            <div id="logo">
                <img src="../assets/images/vuejs.png" alt="logotipo" class="app-logo">
                <span id="brand"> <strong>Master</strong> VueJS </span>
            </div>

            <!-- Menu -->
            <nav id="menu">
                <ul>
                    <li> 
                        <router-link to="/home" active-class="active">Inicio</router-link>
                    </li>
                    <li> 
                        <router-link to="/blog" active-class="active">Blog</router-link>
                    </li>
                    <li> 
                        <router-link to="/form" active-class="active">Formulario</router-link> 
                    </li>
                    <li> 
                        <router-link to="/page1" active-class="active">Pagina 1</router-link>           
                    </li>
                    <li> 
                        <router-link to="/page2" active-class="active">Pagina 2</router-link>           
                    </li>
                </ul>
            </nav>

            <!-- Limpiar los flotados para que no se pasen los siguientes elementos -->
            <div class="clearfix"></div>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
}
</script>