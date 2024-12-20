<script setup></script>
<template>
  <div class="Container">
    <div class="Login">
      <h2>Bem-Vindo Novamente!</h2>
      <p>Adicione os seus dados pessoais para se cadastrar aqui na MewMovies!</p>
      <button>
        <RouterLink class="link" to="/login"> Logar </RouterLink>
      </button>
    </div>
    <div class="Cadastro">
      <img src="../../../../public/logoMew.png" height="70vh" />
      <div class="Campos">
        <input name="Nome" type="text" placeholder="Nome" />
        <input name="E-Mail" type="e-mail" placeholder="E-mail" />
        <input name="Senha" type="password" placeholder="Senha" />
        <input name="ConfirmaSenha" type="password" placeholder="Confirmar Senha" />
      </div>
      <button class="ButtonCadastro">Cadastrar</button>
    </div>
  </div>
</template>
<style scoped>
.ButtonCadastro {
  width: 20%;
  height: 6vh;
  border-radius: 30px;
  border: solid 1px #ddb1ff;
  padding: 1vh;
  font-family: 'Lexend Mega';
  font-size: 1rem;
  background-color: #262424;
  color: #ddb1ff;
  padding: 5px;
  cursor: pointer;
}
.ButtonCadastro:hover {
  background-color: #ddb1ff;
  color: #5f09a3;
}
.Campos {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  align-items: center;
}
.Campos input {
  width: 50%;
  height: 6vh;
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
::-webkit-input-placeholder {
  color: #ddb1ff;
  font: 'Lexend Mega';
}
.Container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Cadastro {
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
}
.Login p {
  width: 60%;
  text-align: center;
}
.Login button {
  width: 40%;
  height: 6vh;
  border-radius: 30px;
  padding: 1vh;
  font-family: 'Lexend Mega';
  font-size: 1rem;
  background-color: #5f09a3;
  color: #ddb1ff;
  padding: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 10px #490175;
}
.Login {
  width: 35%;
  height: 100%;
  background-color: #5f09a3;
  border-radius: 0px 330px 330px 0px;
  box-shadow: 0px 0px 10px #5f09a3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  color: #ddb1ff;
}
.link {
  color: inherit;
  text-decoration: none;
}
</style>
