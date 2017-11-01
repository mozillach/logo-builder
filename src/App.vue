<template>
    <div id="app">
        <h1>Mozilla Community Logo Generator</h1>
        <div class="logoWrapper" :style="{ background }">
            <logo :color="color" :community="community" :mozillaInverted="inverted" class="logo" ref="logo"/>
        </div>
        <save-file :contents="source" :name="community"/>
        <section>
            <h2>Settings</h2>
            <setting name="Main Color">
                <color-picker @change="setColor" :color="color"/>
            </setting>
            <setting name="Community Name">
                <input type="text" @input="setCommunity" :value="community"/>
            </setting>
            <setting name="Invert Mozilla Logo">
                <input type="checkbox" @change="setInverted" :checked="inverted"/>
            </setting>
            <setting name="Background Color">
                <color-picker @change="setBackground" :color="background" showNone showSecondary/>
            </setting>
        </section>
    </div>
</template>

<script>
import Logo from './Logo.vue';
import ColorPicker from './ColorPicker.vue';
import Setting from './Setting.vue';
import SaveFile from './SaveFile.vue';
import { COLORS } from './colors';

export default {
    name: 'app',
    components: {
        ColorPicker,
        Logo,
        SaveFile,
        Setting
    },
    data() {
        return {
            color: COLORS.Black,
            background: '',
            inverted: false,
            community: decodeURIComponent(window.location.hash.substr(1)) || "Switzerland",
            source: ''
        };
    },
    methods: {
        setColor(val) {
            this.color = val;
        },
        setCommunity(event) {
            this.community = event.target.value;
            window.location.hash = this.community;
        },
        setInverted(event) {
            this.inverted = event.target.checked;
        },
        setBackground(val) {
            this.background = val;
        }
    },
    updated() {
        this.$nextTick(() => {
            this.source = this.$refs.logo.$el.outerHTML;
        });
    }
}
</script>

<style>
body {
    padding: 0;
    margin: 0;
}

#app {
    font-family: 'Zilla Slab', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 2em;
}

h1, h2 {
    font-weight: normal;
}

.logoWrapper {
    width: 100%;
    padding: 1em;
    margin: 0.5em 0;
}

.logo {
    max-width: 500px;
}
</style>
