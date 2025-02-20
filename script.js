import MusicTools from "./MusicTools.js";

//Get HTML Elements

let midiInput = document.getElementById("midiInput");
let midiToFreq = document.getElementById("midiToFreq");
let freqResult = document.getElementById("freqResult");

let freqInput = document.getElementById("freqInput");
let freqToMidi = document.getElementById("freqToMidi");
let midiResult = document.getElementById("midiResult");

let dbfsInput = document.getElementById("dbfsInput");
let dbfsToLinear = document.getElementById("dbfsToLinear");
let linearResult = document.getElementById("linearResult");

let linearInput = document.getElementById("linearInput");
let linearToDbfs = document.getElementById("linearToDbfs");
let dbfsResult = document.getElementById("dbfsResult");


// Create Functions

const midiToFreqFunct = function() {
    freqResult.innerText = MusicTools.midiPitchToFrequency(midiInput.value);
};

const freqToMidiFunct = function() {
    midiResult.innerText = MusicTools.frequencyToMidiPitch(freqInput.value);
};

const dbfsToLinearFunct = function() {
    linearResult.innerText = MusicTools.dbfsToLinearAmplitude(dbfsInput.value);
};

const linearToDbfsFunct = function() {
    dbfsResult.innerText = MusicTools.linearAmplitudeTodBFS(linearInput.value);
};


// Add Event Listeners

midiToFreq.addEventListener("click", midiToFreqFunct);
freqToMidi.addEventListener("click", freqToMidiFunct);
dbfsToLinear.addEventListener("click", dbfsToLinearFunct);
linearToDbfs.addEventListener("click", linearToDbfsFunct);