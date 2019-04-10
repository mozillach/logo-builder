<template>
    <div class="mzp-c-button-download-container">
        <a v-if="uri" class="mzp-c-button mzp-t-product mzp-t-secondary mzp-t-small" :href="uri" :download="fileName" :type="mimeType">Download Logo</a>
    </div>
</template>

<script>
import { mimeValidator } from './validators';

//TODO the downloaded SVG doesn't include the fonts...

export default {
    name: 'save-file',
    props: {
        name: String,
        contents: String,
        mimeType: {
            type: String,
            default: "image/svg+xml",
            validator: mimeValidator
        }
    },
    data() {
        return {
            lastURI: '',
            lastContents: ''
        };
    },
    computed: {
        fileName() {
            return `logo-${this.name}.svg`;
        },
        uri() {
            if((!this.lastURI || this.lastContents !== this.contents) && this.contents) {
                if(this.lastURI) {
                    URL.revokeObjectURL(this.lastURI);
                }
                this.lastContents = this.contents;
                const file = new File([ this.contents ], this.fileName, {
                    type: this.mimeType
                });
                this.lastURI = URL.createObjectURL(file);
            }
            return this.lastURI;
        }
    }
}
</script>

<style>

</style>
