<template>
    <div class="input-wrapper">
        <input 
            class="input" 
            type="text"
            v-focus
            v-model="inputText"
            @keydown.enter="say"
            :placeholder="placeholderText"
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputText: "",
            placeholderText: "说点什么..."
        }
    },
    methods: {
        say() {
            if (this.inputText) {
                this.$emit("say", this.inputText)
                this.inputText = ""
            }
        }
    },
    directives: {
        focus: {
            inserted: function(el) {
                el.focus()
            }
        }
    }
}
</script>

<style scoped>
.input-wrapper {
    position: absolute;
    width: 100%;
    bottom: 20px;
}
.input {
    width: 100%;
    height: 50px;
    border: none;
    box-sizing: border-box;
    outline: none;
    background: #fff;
    color: #0a3d62;
    text-decoration: none;
    font-size: 18px;
    text-indent: 0.4em;
}

@media screen and (max-width: 480px) {
    .input-wrapper {
        bottom: 0;
    } 
}
</style>