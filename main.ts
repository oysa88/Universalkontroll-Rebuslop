input.onButtonPressed(Button.A, function () {
    radio.setGroup(4)
    radio.sendValue("Reset", 0)
    basic.showNumber(4)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(5)
    radio.sendNumber(55)
    basic.showNumber(5)
    basic.pause(1000)
    basic.clearScreen()
})
