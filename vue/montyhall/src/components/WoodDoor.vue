<template>
    <div class="door-area">
        <div class="door-frame" :class="{ selected: selected }"> <!-- :class="{classe css que será aplicada: valor que define se aplica ou não a classe}"-->
            <GiftBox v-if="open && hasGift"/>
        </div>
        <div class="door" 
            @click="selected = !selected"
            :class="{ open }">
            <div class="number" :class="{ selected }">{{ number }}</div> <!-- :class é o mesmo que no anterior, apenas de forma mais simples -->
            <div class="knob" 
                :class="{ selected }"
                @click.stop="open = true"></div>
        </div>
    </div>
</template>

<script>
    import GiftBox from './GiftBox';

    export default {
        name: 'WoodDoor',
        components: { GiftBox },
        props: {
            number: {},
            hasGift: { type: Boolean }
        },
        data: function () {
            return {
                open: false,
                selected: false,
            }
        }
    }
</script>

<style>
:root {
    --door-border: solid 5px brown;
    --selected-border: solid 5px yellow;
}

.door-area {
    position: relative;
    width: 200px;
    height: 310px;
    border-bottom: solid 10px #aaa;
    margin-bottom: 20px;

    font-size: 3rem;
    display: flex;
    justify-content: center;
}

.door-frame {
    position: absolute;
    width: 180px;
    height: 300px;

    border-left: var(--door-border);
    border-top: var(--door-border);
    border-right: var(--door-border);

    display: flex;
    justify-content: center;
    align-items: flex-end;
}   

.door {
    position: absolute;
    top: 5px;
    height: 295px;
    width: 170px;
    background-color: chocolate;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
}

.door .knob {
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: brown;
    align-self: flex-start;
    margin-top: 60px;
}

.door-frame.selected {
    border-left: var(--selected-border);
    border-top: var(--selected-border);
    border-right: var(--selected-border);
}

.door > .number.selected {
    color: yellow
}

.door > .knob.selected {
    background-color: yellow;
}

.door.open {
    background-color: #0007;
}

.door.open .knob {
    display: none;
}

.door.open .number {
    display: none;
}
</style>