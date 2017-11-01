<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" :viewBox="viewBox" preserveAspectRatio="xMidYMid meet">
      <text x="0" y="40" font-family="Zilla Slab" font-size="40" font-weight="600" :fill="color" ref="community">{{ community }}</text>
      <text x="0" y="74" font-family="Zilla Slab Highlight" font-weight="700" font-size="24" :fill="mozillaColor" ref="mozilla">mozilla</text>
  </svg>
</template>

<script>
import { colorValidator } from './validators';
import { COLORS } from './colors';

// Notes on the logo:
// The dot is currently 3px wide, which means spaces should be 3px.
// The mozilla logo/uppercase slab are 28px high.

//TODO allow a community image/logo thing (flags?)

export default {
    name: 'logo',
    props: {
        community: String,
        color: {
            type: String,
            default: COLORS.Black,
            validator: colorValidator
        },
        mozillaInverted: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            width: 500,
            height: 78
        };
    },
    computed: {
        mozillaColor() {
            return this.mozillaInverted ? COLORS.White: COLORS.Black;
        },
        viewBox() {
            return `0 0 ${this.width} ${this.height}`;
        }
    },
    methods: {
        updateWidth() {
            this.width = Math.max(this.$refs.community.getBBox().width, this.$refs.mozilla.getBBox().width);
        }
    },
    mounted() {
        this.$nextTick(() => this.updateWidth());
    },
    updated() {
        this.$nextTick(() => this.updateWidth());
    }
}
</script>

<style>

</style>
