let light2 = 0
basic.forever(function () {
    light2 = input.lightLevel()
    if (light2 < 40) {
        basic.showString("nothing")
    } else if (light2 >= 40 && light2 <= 95) {
        music.playMelody("C5 B A G F E D C ", 120)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 35)
        basic.showString("backward")
    } else if (light2 >= 96 || light2 <= 160) {
        music.playMelody("C D E F G A B C5 ", 120)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 35)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 35)
        basic.showString("spin")
    } else {
        music.playMelody("G F G A C5 F E D ", 120)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 15)
        basic.showString("forward")
    }
})
