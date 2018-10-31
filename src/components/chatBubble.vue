<template>
    <div class="bubble-wrapper clearfix">
        <!-- <img 
            :src="url" 
            :class="bubbleType" 
            class="avator"
            draggable="false"> -->
        <span class="bubble" :class="bubbleType">{{ msg }}</span>
    </div>
</template>

<script>
export default {
    props: {
        msg: String,
        url: String,
        bubbleType: {
            type: String,
            default() {
                return "request"
            },
            validator: function(value) {
                return ["request", "response"].indexOf(value) !== -1
            }
        }
    },
    computed: {}
}
</script>

<style scoped>
.bubble-wrapper {
    width: 100%;
    margin: 10px 0px;
}
.bubble {
    max-width: 80%;
    padding: 0 0.6em;
    border-radius: 7px;
    background: #38ada9;
    line-height: 36px;
    box-shadow: 5px 5px 15px 0 rgba(102, 102, 102, 0.5);
}
.request {
    float: right;
    background: #f39c12;
}
.response {
    float: left;
    background: #3498db;
}
.avator {
    width: 36px;
    height: 36px;
    margin: 0 10px;
    border-radius: 50%;
}
</style>