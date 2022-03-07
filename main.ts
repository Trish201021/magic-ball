input.onGesture(Gesture.Shake, function () {
    Random = randint(0, 2)
    if (Random == 0) {
        basic.showString("No")
    } else if (Random == 1) {
        basic.showString("Yes")
    } else {
        basic.showString("Maybe")
    }
})
let Random = 0
basic.showIcon(IconNames.Heart)
