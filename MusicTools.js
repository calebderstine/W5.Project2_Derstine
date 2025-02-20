const MusicTools = {

    midiPitchToFrequency: function(midiPitch) {
        return 440 * Math.pow(2, ((midiPitch - 69) / 12));
    },
    frequencyToMidiPitch: function(frequency) {
        return 69 + 12 * Math.log2(frequency / 440);
    },
    dbfsToLinearAmplitude: function (dbfs) {
        return Math.pow(10, dbfs / 20);
    },
    linearAmplitudeTodBFS: function(linear) {
        return 20 * Math.log10(linear);
    },
};


export default MusicTools;