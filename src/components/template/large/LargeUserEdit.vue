<script></script>
<template>
<div class="Container">
    <img src="../../../../public/user.jpeg"  width="200vw">
    <h1>Miau</h1>
    <hr>
    <input name="Nome" type="text" placeholder="Nome">
    <input name="E-Mail" type="e-mail" placeholder="E-mail">
    <input name="Senha" type="password" placeholder="Senha">
    <button>Confirmar</button>
</div>
</template>
<style scoped>
.Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:  #DDB1FF ;
    margin-top: 10vh;
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
input {
    margin-top: 5vh;
    width: 50%;
    height: 6vh;
    border-radius: 20px;
    border: solid 1px #DDB1FF;
    padding: 1vh;
    font-family: 'Lexend Mega';
    font-size: 1rem;
    background-color: #262424;
    padding: 20px;
    color: #DDB1FF;
    outline-color: #DDB1FF;
}
::-webkit-input-placeholder {
   color: #DDB1FF;
   font: 'Lexend Mega';
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