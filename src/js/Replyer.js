class Replyer {
  constructor() {
    this.defaultReply = ["然后呢?", "真的吗!", "好厉害"]
  }

  reply(text) {
    return this.defaultReply[this.getRndNum(0, this.defaultReply.length)]
  }

  getRndNum(minNum, maxNum) {
    return minNum + Math.floor(Math.random() * (maxNum - minNum))
  }
}

export default Replyer
