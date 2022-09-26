
let isDesktop;

(() => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        isDesktop=false
        alert("This application works on PC only")
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        isDesktop=false
        alert("This application works on PC only")
    }else{
        isDesktop=true
    }

})();

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing")
}

function playSound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    // If wrong button pressed
    if (!audio) return;
    // cut the sound when try to play sound quick 
    audio.currentTime = 0
    // Play sound
    audio.play()
    // Add anum class
    key.classList.add("playing")
    // remove anum class
    key.addEventListener("transitionend", removeTransition)
}

if (isDesktop) {
    window.addEventListener("keydown", playSound)
}