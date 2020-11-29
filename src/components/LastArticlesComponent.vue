<template>
    <!-- This is the setion -->
    <section id="content">
        <h2 class="article-title">Last articles</h2>

        <!-- List of articles -->
        <div id="articles">
            <article class="article-item" id="article-template">
                <div class="image-wrap">
                    <img src="https://www.wur.nl/upload/841ba4f7-4290-4398-9f54-f9db7cb6d5e0_Afbeelding-bij-cursus-Bonn.jpg" alt="Landscape"/>
                </div>
                <h2> Test article</h2>
                <span class="date"> 5 minute ago</span>
                <a href="article.html">Read more</a>
                <!-- Limpiar los flotados para que no se pasen los siguientes elementos -->
                <div class="clearfix"></div>
            </article>
        </div>
    </section>
</template>

<script>
export default {
    name: "LastArticlesComponent",
}
</script>