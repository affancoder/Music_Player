console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio("assests/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: " Bella",
    filePath: "assests/1.mp3",
    coverPath: "cover/0.jpg",
  },
  {
    songName: " Alone",
    filePath: "assests/2.mp3",
    coverPath: "cover/2.jpg",
  },
  {
    songName: " Faded",
    filePath: "assests/3.mp3",
    coverPath: "cover/3.jpg",
  },
  {
    songName: " Kid Lori",
    filePath: "assests/4.mp3",
    coverPath: "cover/4.jpg",
  },
  {
    songName: " Love u",
    filePath: "assests/5.mp3",
    coverPath: "cover/5.jpg",
  },
  {
    songName: " Billian billian",
    filePath: "assests/6.mp3",
    coverPath: "cover/6.jpg",
  },
  {
    songName: " Made in India",
    filePath: "assests/7.mp3",
    coverPath: "cover/7.jpeg",
  },
  {
    songName: " Kya Baat Hai",
    filePath: "assests/8.mp3",
    coverPath: "cover/8.jpg",
  },
  {
    songName: " Hookah",
    filePath: "assests/9.mp3",
    coverPath: "cover/9.jpg",
  },
  {
    songName: " Ishare Tere",
    filePath: "assests/10.mp3",
    coverPath: "cover/10.jpg",
  },
  {
    songName: " Sanam re",
    filePath: "assests/11.mp3",
    coverPath: "cover/11.jpeg",
  },
  {
    songName: " Tera Hua",
    filePath: "assests/12.mp3",
    coverPath: "cover/12.jpg",
  },
  {
    songName: " Dill Diya Gallan",
    filePath: "assests/13.mp3",
    coverPath: "cover/13.jpg",
  },
  {
    songName: " Rafta Rafta",
    filePath: "assests/14.mp3",
    coverPath: "cover/14.jpg",
  },
  {
    songName: " Baarish",
    filePath: "assests/15.mp3",
    coverPath: "cover/15.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//handle play.pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");
    gif.style.opacity = 0;
  }
});

//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `assests/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 6) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `assests/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex >= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `assests/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

window.addEventListener("load", () => {
  // Animate the navbar
  gsap.from("nav", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out" });

  // Animate the song list containers
  gsap.from(".container", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2, // Stagger animation for multiple containers
  });

  // Animate individual song items
  gsap.from(".songItem", {
    duration: 1.5,
    x: -50,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.1, // Stagger animation for song items
    delay: 0.5,
  });

  // Animate the bottom player controls
  gsap.from(".bottom", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    delay: 1,
  });
});
