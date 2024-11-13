<script></script>
<template>
<div class="Container">
  <h2>Sua Conta</h2>
  <img src="../../../../public/user.jpeg" alt="">
  <h1>Miau</h1>
  <button>Editar</button>
</div>
</template>
<style scoped>
.Container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  color: #DDB1FF;
  gap: 1rem;
}
img{
  margin-top: 5vh;
  width: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: #DDB1FF solid 2px;
  box-shadow: 0px 0px 10px #DDB1FF;
}
button {
    padding: 10px 15px;
    background-color: #262424;
    color: #ddb1ff;
    border: 1px solid #ddb1ff;
    border-radius: 10px;
}
</style>