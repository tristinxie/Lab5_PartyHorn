// main.js
const slider = document.getElementById('volume-slider');
const volumeNum = document.getElementById('volume-number')
const audio = document.getElementById('horn-sound');
const volumeIcon = document.getElementById('volume-image')
const airHorn = document.getElementById('radio-air-horn')
const carHorn = document.getElementById('radio-car-horn')
const partyHorn = document.getElementById('radio-party-horn');
const field = document.getElementById('audio-selection');
const soundImg = document.getElementById('sound-image');
const button = document.getElementById('honk-btn');

const changeVolumeNumber = () => {
    volumeNum.value = slider.value;
}

const changeSlider = () => {
    slider.value = volumeNum.value;
}

const changeVolumeImage = () => {
    if(volumeNum.value <= 100 && volumeNum.value >= 67){
        volumeIcon.src = "./assets/media/icons/volume-level-3.svg";
    }else if (volumeNum.value <= 66 && volumeNum.value >= 34){
        volumeIcon.src = "./assets/media/icons/volume-level-2.svg";
        volumeIcon.alt = "Volume 2/3";
    }else if (volumeNum.value <= 33 && volumeNum.value >= 1){
        volumeIcon.src = "./assets/media/icons/volume-level-1.svg";
        volumeIcon.alt = "Volume 1/3";
    }else{
        volumeIcon.src = "./assets/media/icons/volume-level-0.svg";
        volumeIcon.alt = "Muted";
    }

}
const adjustVolume = () => {
    audio.volume = volumeNum.value / 100;
}

const changeSoundType = () => {
    if(airHorn.checked){
        soundImg.src = './assets/media/images/air-horn.svg';
        audio.src = './assets/media/audio/air-horn.mp3';
    }else if(carHorn.checked){
        soundImg.src = './assets/media/images/car.svg';
        audio.src = './assets/media/audio/car-horn.mp3';
    }else{
        soundImg.src = './assets/media/images/party-horn.svg';
        audio.src = './assets/media/audio/party-horn.mp3';
    }
}

const playSound = (event) => {
    event.preventDefault();
    audio.play();
}

const disableButton = () => {
    if(volumeNum.value == 0){
        button.disabled = true;
    }else{
        button.disabled = false;
    }
}
//Changes volume number and slider
slider.addEventListener("input", changeVolumeNumber);
volumeNum.addEventListener("input", changeSlider);
//Changes volume image
volumeNum.addEventListener("input", changeVolumeImage);
slider.addEventListener("input", changeVolumeImage);
//Change actual audio volume
volumeNum.addEventListener("input", adjustVolume);
slider.addEventListener("input", adjustVolume);
//Change sound type
field.addEventListener("input", changeSoundType);
//Play sound and disabled button on volume 0
button.addEventListener("click", playSound);
volumeNum.addEventListener("input", disableButton);
slider.addEventListener("input", disableButton);