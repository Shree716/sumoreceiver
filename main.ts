radio.onReceivedValue(function (name, value) {
    comment.comment("DO NOT CHANGE!")
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
    if (name == "A") {
        action = "A"
    }
    if (name == "B") {
        action = "B"
    }
    if (name == "AB") {
        action = "AB"
    }
    if (name == "C") {
        action = "C"
    }
    if (name == "D") {
        action = "D"
    }
    if (name == "E") {
        action = "E"
    }
    if (name == "F") {
        action = "F"
    }
})
let strip: neopixel.Strip = null
let action = ""
let yValue = 0
let xValue = 0
comment.comment("CHANGE THE RADIO GROUP TO YOUR TEAM'S JOYSTICK NUMBER")
radio.setGroup(48)
basic.showIcon(IconNames.Yes)
basic.showString("R")
basic.forever(function () {
    if (action == "A") {
        comment.comment("Insert A-Button Action Between These Comments")
        wuKong.setLightMode(wuKong.LightMode.BREATH)
        strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
        strip = strip.range(0, 4)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        comment.comment("Insert A-Button Action Between These Comments")
        action = "Z"
    } else if (action == "B") {
        comment.comment("Insert B-Button Action Between These Comments")
        for (let index = 0; index < 3; index++) {
            music.playMelody("A F E F D G E F ", 200)
        }
        comment.comment("Insert B-Button Action Between These Comments")
        action = "Z"
    } else if (action == "AB") {
        comment.comment("Insert A/B-Button Action Between These Comments")
        wuKong.stopAllMotor()
        comment.comment("Insert A/B-Button Action Between These Comments")
        action = "Z"
    } else if (action == "C") {
        comment.comment("Insert C-Button Action Between These Comments")
        wuKong.setAllMotor(-100, 100)
        basic.pause(100)
        wuKong.stopAllMotor()
        comment.comment("Insert C-Button Action Between These Comments")
        action = "Z"
    } else if (action == "D") {
        comment.comment("Insert D-Button Action Between These Comments")
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
        comment.comment("Insert D-Button Action Between These Comments")
        action = "Z"
    } else if (action == "E") {
        comment.comment("Insert E-Button Action Between These Comments")
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 80)
        comment.comment("Insert E-Button Action Between These Comments")
        action = "Z"
    } else if (action == "F") {
        comment.comment("Insert F-Button Action Between These Comments")
        wuKong.setAllMotor(100, -100)
        basic.pause(100)
        wuKong.stopAllMotor()
        comment.comment("Insert F-Button Action Between These Comments")
        action = "Z"
    } else {
        comment.comment("DO NOT CHANGE!")
        wuKong.setMotorSpeed(wuKong.MotorList.M1, yValue + xValue)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, yValue - xValue)
    }
})
