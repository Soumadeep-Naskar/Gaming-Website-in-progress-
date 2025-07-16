

let day_night = document.getElementById('day_night');
let day_night2 = document.getElementById('day_night2');
day_night2.style.display = 'none'
day_night.addEventListener('click', () => {
  document.documentElement.style.setProperty('--color-1', '#f5f5f5');
  document.documentElement.style.setProperty('--color-2', '#000');
  document.documentElement.style.setProperty('--color-3', '#e0e0e0');
  document.documentElement.style.setProperty('--color-4', 'rgba(0, 0, 0, 0.5)');
  document.documentElement.style.setProperty('--color-5', '#32cd32');
  document.documentElement.style.setProperty('--color-6', '#ffffff');

  // Toggle icons
  day_night.style.display = 'none';
  day_night2.style.display = 'inline-block';
});

day_night2.addEventListener('click', () => {
  document.documentElement.style.setProperty('--color-1', '#262b3f');
  document.documentElement.style.setProperty('--color-2', '#fff');
  document.documentElement.style.setProperty('--color-3', '#1e2337');
  document.documentElement.style.setProperty('--color-4', 'rgba(255,255,255,0.5)');
  document.documentElement.style.setProperty('--color-5', 'greenyellow');
  document.documentElement.style.setProperty('--color-6', '#101820');

  // Toggle icons
  day_night.style.display = 'inline-block';
  day_night2.style.display = 'none';
});

day_night.addEventListener('click', () => {
    document.body.classList.add('light-theme');
    day_night.style.display = 'none';
    day_night2.style.display = 'inline';
});

day_night2.addEventListener('click', () => {
    document.body.classList.remove('light-theme');
    day_night.style.display = 'inline';
    day_night2.style.display = 'none';
});

let active_battery = document.getElementById('active_battery')
let battery_icon = document.getElementById('battery_icon')
let battery_level = document.getElementById('battery_level')
let audio1 = new Audio('audio/Charging.mp3');

// audio.play();

navigator.getBattery().then(battery =>{
  const battery_level_change = () =>{
    battery_level.innerText = (battery.level*100) +"%";
  }
  setInterval(battery_level_change,1000);
  battery_level_change();

  battery_icon.value = battery.charging;
  // alert(battery_icon.value);

  battery.addEventListener('chargingchange',()=>{
    switch (battery.charging) {
      case true:
        battery_icon.classList.remove('bi-battery-half');
        battery_icon.classList.add('bi-battery-charging');
        active_battery.classList.add("active_battery");
        battery_icon.style.color = "#fff"
        audio1.play();
        break;
            case false:
        battery_icon.classList.add('bi-battery-half');
        battery_icon.classList.remove('bi-battery-charging');
        active_battery.classList.remove("active_battery");
        battery_icon.style.color = "unset"
        break;
    }
  })
})


let wifi = document.getElementById('wifi');
const wifi_change = () =>{
  if (navigator.onLine) {
    wifi.style.color = "var(--color-5)"
  }else{
    wifi.style.color="";
  }
}
setInterval(wifi_change, 100);
wifi_change();



let img_change = document.getElementById('img_change');

const change_img_data = ()=>{
  setTimeout(() => {
    img_change.style.background = "url('dwnld/prince-of-persia-warrior-within-pc-game-ubisoft-connect-cover.jpg') no-repeat center center/cover"
  }, 0000);
  setTimeout(() => {
    img_change.style.background = "url('cards/acv.avif') no-repeat center center/cover"
  }, 3000);
  setTimeout(() => {
    img_change.style.background = "url('cards/assasin.jpg') no-repeat center center/cover"
  }, 6000);
}
setInterval(change_img_data,9000)
change_img_data();

let play = document.getElementById('play');
let video = document.getElementById('video');

play.addEventListener('click',()=>{
    if (video.paused || video.currentTime <= 0) {
        video.play();
        video.style.display="flex"
        img_change.style.display = "none";
        play.innerHTML = `<i class = "bi bi-pause-fill"></i> Pause`;
    }else{
video.pause();
video.style.display = '';
img_change.style.display='';
play.innerHTML = `<i class = "bi bi-play-fill"></i> Play`;

    }
});

video.addEventListener('ended',()=>{
  video.pause();
  video.style.display = '';
img_change.style.display='';
play.innerHTML = `<i class = "bi bi-play-fill"></i> Play`;
})
const JoinData = [
  {
    name:"Messi",
    game:"Death Stranding 2",
    img:"member/skysports-lionel-messi-barcelona_5390329.jpg",
    price:"New Member"
  },
    {
    name:"Ronaldo",
    game:"GTA V",
    img:"member/siu.webp",
    price:"New Member"
  },
    {
    name:"Beckham",
    game:"FIFA 23",
    img:"member/beckham.jpg",
    price:"New Member"
  },
    {
    name:"Yamal",
    game:"Zero-Dawn",
    img:"member/yamal.jpeg",
    price:"New Member"
  },
]

let index = 0;
let join_new_member = document.getElementsByClassName('join_new_member')[0];


function UpdateDiv() {
  setInterval(()=>{
let card = document.createElement('div');
card.classList.add('card');
if (index == JoinData.length) {
  index=0;
} else{
  index++;
}
const {name,game,img,price} = JoinData[index-1];
card.innerHTML = `
    <img src="${img}" alt="">
    <div class="content">
        <div class="h6_price">
            <h5>${game}</h5>
            <span>Join Now</span>
            <h6>${price}>
        <p>${name}</p>
    </div>`
    join_new_member.appendChild(card);
    join_new_member.scrollTop += 100;
  },1000);
};


document.addEventListener('DOMContentLoaded',()=>{
  UpdateDiv();
})