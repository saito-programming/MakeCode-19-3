function 右折 () {
    共通(135, 220)
}
function 後進 () {
    共通(205, 65)
}
input.onButtonPressed(Button.A, function () {
    右折()
})
function 実際の角度 (角度: number) {
    return 角度 * 2 / 3
}
function 共通 (_1: number, _2: number) {
    pins.servoWritePin(AnalogPin.P1, 実際の角度(_1))
    pins.servoWritePin(AnalogPin.P2, 実際の角度(_2))
}
function 左折 () {
    共通(50, 135)
}
function 前進 () {
    共通(65, 205)
}
input.onButtonPressed(Button.AB, function () {
    左折()
})
input.onButtonPressed(Button.B, function () {
    後進()
})
function 停止 () {
    共通(135, 135)
}
停止()
basic.showIcon(IconNames.Happy)
