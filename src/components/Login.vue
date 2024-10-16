<script setup></script>
<template>
    <div class="Container">
        <div class="Login">
            <img src="../../../../public/logoMew.png" height="70vh">
            <div class="Campos">
                <input name="E-Mail" type="text" placeholder="E-mail">
                <input name="E-Mail" type="text" placeholder="Senha">
            </div>
            <button class="ButtonLogin">Login</button>
        </div>
        <div class="Cadastro">
            <h2>Olá</h2>
            <p>Caso não possua uma conta no MewMovies crie uma para ter acesso ap site!</p>
            <button>Cadastre-se</button>
        </div>
    </div>
</template>
<style scoped>
.ButtonLogin {
    width: 20%;
    height: 6vh;
    border-radius: 30px;
    border: solid 1px #DDB1FF;
    padding: 1vh;
    font-family: 'Lexend Mega';
    font-size: 1rem;
    background-color: #262424;
    color: #DDB1FF;
    padding: 5px;
    cursor: pointer;
}

.Container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.Login {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10rem;

}
.Campos{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    align-items: center;
}
.Cadastro {
    width: 40%;
    height: 100%;
    background-color: #5F09A3;
    border-radius: 280px 0px 0px 280px;
    box-shadow: 0px 0px 10px #5F09A3;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    font-size: x-large;
    color: #DDB1FF;
}
.Cadastro p{
    width: 60%;
    text-align: center;
}
.Cadastro button {
    width: 40%;
    height: 6vh;
    border-radius: 30px;
    padding: 1vh;
    font-family: 'Lexend Mega';
    font-size: 1rem;
    background-color: #5F09A3;
    color: #DDB1FF;
    padding: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 10px #490175;
}

.Campos input {
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
</style>