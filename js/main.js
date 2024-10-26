// Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).
const names = [
    "Dancing Wolf",
    "Electric Spirit",
    "Thunderous Snack",
    "Crying Shadow",
    "Bouncing Thunder",
    "Silent Fury",
    "Blazing Comet",
    "Laughing Ghost",
    "Whispering Fury",
    "Jagged Star",
    "Freaky Shark",
    "Howling Breeze",
    "Screaming Beetle",
    "Dreaming Dragon",
    "Radiant Sphinx",
    "Warped Samurai",
    "Chaotic Phoenix",
    "Cunning Ninja",
    "Twisted Toad",
    "Floating Island",
    "Fearless Bandit",
    "Psycho Lynx",
    "Raging Tornado",
    "Savage Whisper",
    "Venomous Wave",
    "Majestic Warrior",
    "Gritty Sage",
    "Cosmic Knight",
    "Cyborg Demon",
    "Vibrant Phantom",
    "Screaming Scorpion",
    "Zenith Jester",
    "Ninja Hummingbird"
];

document.getElementById("submit").addEventListener("click", createSeed);

// radio button ids: dog, cat, morning, evening, salty, sweet, party, relax, talkative, reserved
function createSeed(){
    let seed = 0;
    if(document.getElementById('dog').checked) {
        seed += 1
    }
    if(document.getElementById('cat').checked) {
        seed += 20
    }
    if(document.getElementById('morning').checked) {
        seed += 300
    }
    if(document.getElementById('evening').checked) {
        seed += 4000
    }
    if(document.getElementById('salty').checked) {
        seed += 50000
    }
    if(document.getElementById('sweet').checked) {
        seed += 600000
    }
    if(document.getElementById('party').checked) {
        seed += 7000000
    }
    if(document.getElementById('relax').checked) {
        seed += 8
    }
    if(document.getElementById('talkative').checked) {
        seed += 92
    }
    if(document.getElementById('reserved').checked) {
        seed += 101432
    }
    const rng = new Random(seed);
    const rando = rng.nextFloat();

    console.log('seed is ' + seed);
    console.log('random number is ' + rando)
    const nameIndex = Math.floor(rando * names.length);
    const wuTangName = names[nameIndex];
    document.getElementById("wu-tang-name").innerText = `Your Wu-Tang name is: ${wuTangName}`;

}

// seeded pseudorandom number generator from https://gist.github.com/blixt/f17b47c62508be59987b
function Random(seed) {
    console.log('random function called with seed ' + seed)
    this._seed = seed % 2147483647;
    if (this._seed <= 0) this._seed += 2147483646;
  }
  
  /**
   * Returns a pseudo-random value between 1 and 2^32 - 2.
   */
  Random.prototype.next = function () {
    return this._seed = this._seed * 16807 % 2147483647;
  };
  
  
  /**
   * Returns a pseudo-random floating point number in range [0, 1).
   */
  Random.prototype.nextFloat = function (opt_minOrMax, opt_max) {
    // We know that result of next() will be 1 to 2147483646 (inclusive).
    return (this.next() - 1) / 2147483646;
  };