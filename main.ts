function 左回転 () {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, スピード + バランス)
    pins.analogWritePin(AnalogPin.P15, スピード + バランス)
    pins.analogWritePin(AnalogPin.P16, 0)
}
input.onButtonPressed(Button.A, function () {
    電源 += 1
    if (電源 == 2) {
        電源 = 0
    }
})
function バック () {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, スピード + バランス)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, スピード + バランス)
}
function 距離を測る () {
    距離 = 0
    while (距離 == 0) {
        距離 = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters
        )
    }
    led.plotBarGraph(
    距離,
    300,
    true
    )
    return 距離
}
function 前進 () {
    pins.analogWritePin(AnalogPin.P12, スピード + バランス)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, スピード + バランス)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function 右回転 () {
    pins.analogWritePin(AnalogPin.P12, スピード + バランス)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, スピード + バランス)
}
function 停止 () {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
}
let 距離 = 0
let バランス = 0
let スピード = 0
let 電源 = 0
電源 = 0
スピード = 500
バランス = 0
pins.servoWritePin(AnalogPin.P2, 0)
basic.pause(200)
pins.servoWritePin(AnalogPin.P2, 180)
basic.pause(200)
pins.servoWritePin(AnalogPin.P2, 90)
停止()
basic.forever(function () {
    while (電源 == 1) {
        距離を測る()
        if (距離 > 25) {
            前進()
        } else if (距離 < 15) {
            バック()
        } else {
            停止()
        }
    }
    停止()
})
