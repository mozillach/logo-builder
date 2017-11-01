<template>
    <div>
        <input type="color" :value="color" @input="onSelect" v-if="showPicker"/>
        <select :value="enumColor" @input="onSelect">
            <option v-if="showNone" value="">None</option>
            <option :value="custom" v-if="showCustom">Custom Color</option>
            <optgroup label="Colors">
                <option v-for="(color, name) in colors" :value="color">{{ name }}</option>
            </optgroup>
            <template v-if="showSecondary">
                <optgroup label="Secondary Colors">
                    <option v-for="(color, name) in secondaryColors" :value="color">{{ name }}</option>
                </optgroup>
            </template>
        </select>
    </div>
</template>

<script>
import { COLORS, SECONDARY_COLORS } from './colors';

export default {
    name: 'color-picker',
    props: {
        name: String,
        color: {
            type: String,
            default: COLORS.Black
        },
        showSecondary: {
            type: Boolean,
            default: false
        },
        showNone: {
            type: Boolean,
            default: false
        },
        showCustom: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            colors: COLORS,
            secondaryColors: SECONDARY_COLORS,
            custom: 'custom'
        };
    },
    computed: {
        enumColor() {
            const upperColor = this.color.toUpperCase();
            if(Object.values(COLORS).includes(upperColor)) {
                return this.color;
            }
            if(this.showSecondary && Object.values(SECONDARY_COLORS).includes(upperColor)) {
                return this.color;
            }
            if(this.showNone && !this.color.length) {
                return this.color;
            }
            return this.custom;
        },
        showPicker() {
            return this.showCustom && (!this.showNone || this.color.length);
        }
    },
    methods: {
        onSelect(event) {
            if(event.target.value !== this.custom) {
                this.$emit("change", event.target.value.toUpperCase());
            }
            else {
                this.$emit("change", COLORS.Black);
            }
        }
    }
}
</script>

<style>

</style>
