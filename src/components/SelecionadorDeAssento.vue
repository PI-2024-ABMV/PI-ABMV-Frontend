<script setup>
import SofaSingle from 'vue-material-design-icons/SofaSingle.vue';
import { ref } from 'vue';


const mapSeats = ref([
    [0, 0, 0, 0, 0,-1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0,-1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
    [-1],
    [0, 0, 0, 0, 0,-1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0,-1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0,-1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0,-1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0,-1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0,-1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0,-1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
])

const getColor = (v) => v == 1 ?'red' : v == 2 ? 'grey' : '#DDB1FF'

function selectSeat(row, col){
    if(mapSeats.value[row][col] == 0){
        mapSeats.value[row][col] = 2;
    }else if (mapSeats.value[row][col] == 2){
        mapSeats.value[row][col] = 0;
    }
}

</script>
<template>
    <div class="row-seat" v-for="(rowSeat, i) in mapSeats" :key="i">
            <div class="space-row" v-if="rowSeat == [-1]"></div>
            <div v-else class="seats">
                <template v-for="(seat, j) in rowSeat" :key="j" >
                    <SofaSingle 
                        v-if="seat != -1"
                        :fill-color="getColor(seat)" 
                        @click="selectSeat(i, j)" 
                    />
                    <span v-else class="seat-space"> &nbsp;</span>
                </template>
            </div>
        </div>
</template>
<style scoped>
.space-row {
    margin-top: 10px;
}
.seat-space {
    margin: 0 10px;
}
.row-seat {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.row-seat {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
</style>