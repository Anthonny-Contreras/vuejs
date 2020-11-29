<template>
    <!-- This is the sidebar -->
    <aside id="sidebar">
        <div id="nav-blog" class="sidebar-item">
            <h3>You can do this</h3>
            <a href="#" class="btn btn-success">Create article</a>
        </div>

        <div id="search" class="sidebar-item">
            <h3>Search</h3>
            <p>Find your article</p>
            <form action="">
                <input type="text" name="search"/>
                <input type="submit" name="submit" value="Search" class="btn"/>
            </form>
        </div>
    </aside>
</template>

<script>
export default {
    name: "SidebarComponent",
}
</script>