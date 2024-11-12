<script></script>
<template>
<div class="Container">
    <img src="../../../../public/user.jpeg"  width="200vw">
    <h1>Miau</h1>
    <button>Editar</button>
    <hr>
</div>
</template>
<style scoped>
.Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:  #DDB1FF ;
    margin-top: 20vh;
    gap: 1rem;
}
img {
    border-radius: 50%;
    margin-bottom: 20px;
    border: 3px solid #ddb1ff;
}
hr {
    margin-top: 5vh;
    width: 90%;
    border: 1px solid #ddb1ff;
    box-shadow: 0px 0px 10px #ddb1ff;   
}
button {
    padding: 10px 15px;
    background-color: #262424;
    color: #ddb1ff;
    border: 1px solid #ddb1ff;
    border-radius: 10px;
    cursor: pointer;
}
</style>