music.playTone(294, music.beat(BeatFraction.Eighth))
music.playTone(294, music.beat(BeatFraction.Sixteenth))
music.playTone(330, music.beat(BeatFraction.Quarter))
music.playTone(294, music.beat(BeatFraction.Quarter))
music.playTone(392, music.beat(BeatFraction.Quarter))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(294, music.beat(BeatFraction.Eighth))
music.playTone(294, music.beat(BeatFraction.Sixteenth))
music.playTone(330, music.beat(BeatFraction.Quarter))
music.playTone(294, music.beat(BeatFraction.Quarter))
music.playTone(392, music.beat(BeatFraction.Quarter))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(294, music.beat(BeatFraction.Eighth))
music.playTone(294, music.beat(BeatFraction.Sixteenth))
music.playTone(587, music.beat(BeatFraction.Quarter))
music.playTone(440, music.beat(BeatFraction.Quarter))
music.playTone(392, music.beat(BeatFraction.Quarter))
music.playTone(349, music.beat(BeatFraction.Quarter))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(523, music.beat(BeatFraction.Eighth))
music.playTone(523, music.beat(BeatFraction.Sixteenth))
music.playTone(494, music.beat(BeatFraction.Quarter))
music.playTone(440, music.beat(BeatFraction.Quarter))
music.playTone(392, music.beat(BeatFraction.Half))
esp8266.setupWifi(
SerialPin.C17,
SerialPin.C16,
BaudRate.BaudRate115200,
"BYOD-WLAN",
"ESH_$1_Erdgeschoss"
)
basic.forever(function () {
    if (esp8266.wifiOK() == true) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
    }
    basic.showNumber(SCD30.readCO2())
    esp8266.sendToThinkSpeak(
    "V2L5Y365T1VLJ6B8",
    SCD30.readCO2()
    )
})
