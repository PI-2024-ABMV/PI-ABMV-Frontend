<script setup></script>
<template>
    <div class="Container">
        <div class="Filme">
            <img src="../../public/open.png" height="20vh" alt="">
            <div class="InfoFilme">
                <p>aaaa</p>
                <p>aaaa</p>
                <p>aaaa</p>
            </div>
        </div>
        <div class="Date">
            <p>aaaa</p>
        </div>
    </div>
</template>
<style scoped>
.Container{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}
.Date{
    display: flex;
    height: 50%;
    background-color: aliceblue;
    border-radius: 40px;
}
.Filme{
    display: flex;
    flex-direction: row;
    height: 50%;
    }
</style>