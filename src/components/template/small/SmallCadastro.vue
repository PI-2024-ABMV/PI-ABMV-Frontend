<script setup>
</script>
<template>
    
    <div class="Container">
    <img src="../../../../public/logoMew.png" height="120vh" />
    <div class="Campos">
        <div class="input">
            <input name="E-Mail" type="name" placeholder="Nome" />
            <input name="E-Mail" type="e-mail" placeholder="E-mail" />
            <input name="Password" type="password" placeholder="Senha" />
            <input name="Password" type="password" placeholder="Confirmar Senha" />
        </div>

      <button class="ButtonCadastro">Cadastrar</button>
      <hr />
    </div>
  </div>
  <div class="Login">
    <h3>Já possui uma conta?</h3>
    <router-link to="/login" class="BotaoLogin">Entrar</router-link>
  </div>

</template>
<style scoped>

.Container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  gap: 6rem;
  margin-top: 5vh;
  margin-bottom: 3vh;
}

.Campos {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  align-items: center;
}
.input{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  align-items: center;
}
.Campos input {
  width: 90%;
  height: 7vh;
  border-radius: 20px;
  border: solid 1px #ddb1ff;
  padding: 1vh;
  font-family: 'Lexend Mega';
  font-size: 1rem;
  background-color: #262424;
  padding: 20px;
  color: #ddb1ff;
  outline-color: #ddb1ff;
}
.Login {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 1vw;
  color: #ffffff;
  margin-left: 10vw;
}
.ButtonCadastro {
  width: 35%;
  height: 7vh;
  border-radius: 30px;
  border: solid 1px #ddb1ff;
  font-family: 'Lexend Mega';
  font-size: 1rem;
  background-color: #262424;
  color: #ddb1ff;
  padding: 5px;
  cursor: pointer;
}
.ButtonCadastro:hover {
  background-color: #ddb1ff;
  color: #5F09A3;
}
.BotaoLogin {
  text-decoration: none;
  color: #ddb1ff;
  text-shadow: 0px 0px 10px #ddb1ff;

}
hr {
  width: 80%;
  border: 1px solid #ddb1ff;
  box-shadow: 0px 0px 10px #ddb1ff;
  
}

</style>