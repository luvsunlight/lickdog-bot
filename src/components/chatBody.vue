<template>
    <div class="body">
        <chatBubble
            v-for="message in messages"
            :key="message.id"
            :msg="message.text"
            :bubbleType="message.type"
            :url="imgUrl(message.type)"
        ></chatBubble>
    </div>
</template>

<script>
import chatBubble from "./chatBubble"

export default {
    components: {
        chatBubble
    },
    data() {
        return {
            baseUrl: "./src/assets/",
            baseSuffix: ".jpg"
        }
    },
    props: {
        messages: Array,
        hUrl: String,
        cUrl: String
    },
    methods: {
        imgUrl(type) {
            if (type == "response") {
                return this.baseUrl + this.cUrl + this.baseSuffix
            } else if (type == "request") {
                return this.baseUrl + this.hUrl + this.baseSuffix
            }
        }
    }
}
</script>

<style scoped>
.body {
    position: absolute;
    width: 100%;
    top: 67px;
    bottom: 70px;
    padding: 10px;
    background: #e9fbf8;
    overflow: auto;
    box-sizing: border-box;
}
@media screen and (max-width: 480px) {
    .body {
        top: 47px;
        bottom: 50px;
    }
}
.clearfix:after {
    content: "";
    height: 0;
    line-height: 0;
    display: block;
    clear: both;
    visibility: hidden;
}

.clearfix {
    zoom: 1;
}
</style>