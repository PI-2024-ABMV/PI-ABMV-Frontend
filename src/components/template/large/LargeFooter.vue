<script setup>
import Facebook from 'vue-material-design-icons/Facebook.vue';
import Instagram from 'vue-material-design-icons/Instagram.vue';
import twitter from 'vue-material-design-icons/Twitter.vue';
</script>

<template>
<footer>
    <div class="conteudo">
        <div class="termos">
            <router-link class="link">
                <p>Quem Somos?</p>
            </router-link>
            <router-link class="link">
                <p>Privacidade e Segurança</p>
            </router-link>
            <router-link class="link">
                <p>Termos de uso</p>
            </router-link>
        </div>
        <div class="midias-socias">
            <p class="siga">Siga-nos nas redes sociais</p>
            <div class="midia">
                <Facebook />
                <span>
                    Facebook
                </span>
            </div>
            <div class="midia">
                <Instagram /> 
                <span>
                    Instagram
                </span>
            </div>
            <div class="midia">
                <twitter />
                <span>
                    Twitter
                </span>
          </div>
        </div>
    </div>
</footer>
</template>

<style scoped>
footer {
    background-color: #262424;
    color: white;
    text-align: center;
    padding: 10px;
    position: relative;
    top: 20vh;
    width: 100%;
}   
.conteudo {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.termos {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 10px;
}
.termos p {
    cursor: pointer;
    display: flex;
    text-decoration: none;
}
.midias-socias {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.midia {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
}
.siga{
    font-size: 20px;
    font-weight: bold;
    color: #fffbfb;
}
span {
    font-size: 12px;
}
.midia:hover {
    filter: drop-shadow(0 0 5px #DDB1FF);
    cursor: pointer;
}
p, span{
    color: #DDB1FF;
}

.link {
    text-decoration: none;
}   
.link:hover {
    filter: drop-shadow(0 0 5px #DDB1FF);
}

</style>