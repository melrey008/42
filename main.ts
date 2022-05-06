input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showNumber(30)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    basic.showIcon(IconNames.Happy)
})
radio.onReceivedString(function (receivedString) {
    if ("1" == receivedString) {
        basic.showNumber(30)
    }
    if ("2" == receivedString) {
        basic.showString("kaixo")
    }
    if ("3" == receivedString) {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showString("kaixo")
})
radio.setGroup(30)
basic.forever(function () {
	
})
