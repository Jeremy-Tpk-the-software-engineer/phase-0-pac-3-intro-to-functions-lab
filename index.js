function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    const IcantHearYou = "I can't hear you!";
    const yesIndeed = "YES INDEED!";
    const loveTo = "I would love to!";
    const letDinner = "Let's have dinner together!";
    if (string.toLowerCase(string) === string) {
        return IcantHearYou;
    }
    else if (string.toUpperCase(string) === string) {
        return yesIndeed;
    }
    else if ("Let's have dinner together!" === string) {
        return loveTo;
    }
}