<template>
  <div id="app">
    <chatNav :name="hostName"></chatNav>
      <chatBody 
        :messages="messages"
        :hUrl="hostAvatarUrl"
        :cUrl="customerAvatarUrl"
      ></chatBody>
      <chatInput @say="input"></chatInput>
  </div>
</template>

<script>
import chatNav from "./components/chatNav"
import chatInput from "./components/chatInput"
import chatBody from "./components/chatBody"
import Replyer from "./js/Replyer.js"

export default {
    name: "App",
    components: {
        chatNav,
        chatBody,
        chatInput
    },
    data() {
        return {
            hostName: "李子园",
            customerName: "laputa",
            hostAvatarUrl: "blackboy",
            customerAvatarUrl: "pika",
            messages: [
                {
                    id: 1,
                    text: "我们已经是好友了",
                    type: "response"
                }
            ],
            nextMsgId: 2,
            maxDelayTime: 3000
        }
    },
    methods: {
        input(text) {
            this.sendMessage(text, "request")
            let vm = this
            setTimeout(function() {
                let response = vm.replyer.reply(
                    vm.messages[vm.messages.length - 1]
                )
                vm.sendMessage(response, "response")
            }, this.replyer.getRndNum(0, this.maxDelayTime))
        },
        sendMessage(text, type) {
            this.messages.push({
                id: ++this.nextMsgId,
                text: text,
                type: type
            })
        }
    },
    created() {
        this.replyer = new Replyer()
    }
}
</script>

<style>
html,
body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
#app {
    position: absolute;
    left: 50%;
    top: 30px;
    bottom: 30px;
    margin-left: -180px;
    width: 360px;
    padding: 20px 0;
    border-radius: 20px;
    background: #00b894;
    color: #fff;
    text-align: center;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-shadow: 0px 0px 25px rgba(1, 1, 1, 0.1);
}

@media screen and (max-width: 480px) {
    #app {
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        margin-left: 0;
        padding: 0;
        background: #fff;
    } 
}
</style>
