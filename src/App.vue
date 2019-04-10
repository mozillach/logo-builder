<template>
    <div id="app">
        <header class="mzp-l-content">
            <h1>Mozilla Community Logo Generator</h1>
        </header>
        <div class="logoWrapper" :style="{ background }">
            <logo :color="color" :community="community" :mozillaInverted="inverted" class="logo" ref="logo" @source="setSource"/>
        </div>
        <save-file :contents="source" :name="community"/>
        <section class="mzp-l-content">
            <h2>Settings</h2>
            <setting name="Main Color" input-id="color">
                <color-picker @change="setColor" :color="color" id="color"/>
            </setting>
            <setting name="Community Name" input-id="community">
                <input type="text" @input="setCommunity" :value="community" id="community"/>
            </setting>
            <p>
                <label class="mzp-u-inline">
                    <input type="checkbox" @change="setInverted" :checked="inverted"/> Invert Mozilla Logo
                </label>
            </p>
            <setting name="Background Color" input-id="background">
                <color-picker @change="setBackground" :color="background" showNone showSecondary id="background"/>
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
import { serialize, deserialize } from './logo-data';

export default {
    name: 'app',
    components: {
        ColorPicker,
        Logo,
        SaveFile,
        Setting
    },
    data() {
        const hashData = deserialize(decodeURIComponent(window.location.hash.substr(1)));
        return {
            color: hashData.color || COLORS.Black,
            background: '',
            inverted: hashData.inverted,
            community: hashData.community || "Switzerland",
            source: ''
        };
    },
    methods: {
        setColor(val) {
            this.color = val;
        },
        setCommunity(event) {
            this.community = event.target.value;
        },
        setInverted(event) {
            this.inverted = event.target.checked;
        },
        setBackground(val) {
            this.background = val;
        },
        setSource(source) {
            this.source = source;
        },
        updateHash() {
            window.location.hash = serialize({
                color: this.color,
                inverted: this.inverted,
                community: this.community
            });
        }
    },
    watch: {
        community() {
            this.updateHash();
        },
        inverted() {
            this.updateHash();
        },
        color() {
            this.updateHash();
        }
    }
}
</script>

<style>
body {
    padding: 0;
    margin: 0;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
}

.logoWrapper {
    width: calc(100% - 2em);
    padding: 1em;
    margin: 0.5em 0;
}

.logo {
    max-width: 500px;
}
</style>
