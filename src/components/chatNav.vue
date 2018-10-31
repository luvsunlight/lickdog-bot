<template>
    <div class="nav">
        {{ name }}
    </div>
</template>

<script>
export default {
    props: {
        name: String
    }
}
</script>

<style scoped>
.nav {
    position: absolute;
    width: 100%;
    font-size: 20px;
    padding: 10px 0;
    background: #16a085;
}
</style>