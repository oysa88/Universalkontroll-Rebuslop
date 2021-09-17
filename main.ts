input.onButtonPressed(Button.A, function () {
    if (Post > 6) {
        Post = 1
    } else {
        Post += 1
    }
    radio.setGroup(Post)
    basic.showNumber(Post)
    basic.pause(2000)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (Post == 2) {
        radio.sendString("Start produksjon")
        basic.pause(10000)
        radio.sendString("Stopp produksjon")
    } else if (Post == 3) {
        radio.sendString("CFAEGDC")
    } else if (Post == 4) {
        radio.sendValue("spill", 3)
        radio.sendValue("spill", 1)
        radio.sendValue("spill", 4)
        radio.sendValue("spill", 2)
    } else if (Post == 5) {
        radio.sendString("33333333666K66I")
    } else if (Post == 6) {
        if (Post) {
            radio.sendString("Lys av")
            Lys = false
        } else {
            radio.sendString("Lys på")
            Lys = true
        }
    } else if (Post == 7) {
        radio.sendString("systemtest")
    }
})
let Lys = false
let Post = 0
Post = 1
Lys = false
