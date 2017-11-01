<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="500" height="100" viewBox="0 0 500 100">
      <defs v-if="bgFilter">
          <filter x="0" y="0" height="1" width="1" id="communitybg">
              <feFlood :flood-color="background"/>
              <feComposite in="SourceGraphic"/>
          </filter>
      </defs>
      <text x="0" y="40" font-family="Zilla Slab Highlight" font-weight="700" font-size="40" :fill="mozillaColor">mozilla</text>
      <text x="0" y="91" font-family="Zilla Slab Highlight" font-size="40" :fill="color" :filter="bgFilter">{{ community }}</text>
  </svg>
</template>

<script>
import { colorValidator } from './validators';
import { COLORS } from './colors';

//TODO adapt to official layouts
//TODO fix background filter
//TODO allow a community image/logo thing (flags?)
//TODO dynamically decide width
//TODO fix spacing

export default {
    name: 'logo',
    props: {
        community: String,
        configuration: {
            type: String,
            default: "highlight-below",
            validator(val) {
                return val == "highlight-below" || val == "highlight-above" || val == "above";
            }
        },
        color: {
            type: String,
            default: COLORS.Black,
            validator: colorValidator
        },
        background: {
            type: String,
            validator: colorValidator
        },
        mozillaInverted: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        mozillaColor() {
            return this.mozillaInverted ? "white": "black";
        },
        bgFilter() {
            return this.background.length ? "url(#communitybg)" : "";
        }
    }
}
</script>

<style>

</style>
