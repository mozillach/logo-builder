<template>
    <div id="app">
        <h1>Mozilla Community Logo Generator</h1>
        <logo :color="color" :background="background" :community="community"/>
        <section>
            <h2>Settings</h2>
            <setting name="Main Color">
                <color-picker @change="setColor" :color="color"/>
            </setting>
            <setting name="Background Color">
                <color-picker @change="setBackground" showSecondary showNone :color="background"/>
            </setting>
            <setting name="Community Name">
                <input type="text" @input="setCommunity" :value="community"/>
            </setting>
        </section>
    </div>
</template>

<script>
import Logo from './Logo.vue';
import ColorPicker from './ColorPicker.vue';
import Setting from './Setting.vue';
import { COLORS } from './colors';

export default {
    name: 'app',
    components: {
        ColorPicker,
        Logo,
        Setting
    },
    data() {
        return {
            color: COLORS.Black,
            background: '',
            community: "Switzerland"
        };
    },
    methods: {
        setColor(val) {
            this.color = val;
        },
        setBackground(val) {
            console.log(val);
            this.background = val;
        },
        setCommunity(event) {
            this.community = event.target.value;
        }
    }
}
</script>

<style>
#app {
    font-family: 'Zilla Slab', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1, h2 {
    font-weight: normal;
}
</style>
