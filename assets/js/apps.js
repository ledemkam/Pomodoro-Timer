const showArbeit = document.querySelector(".showArbeit");
const showpause = document.querySelector(".showPause");
const btnGo = document.querySelector(".b1");
const btnpause = document.querySelector(".b2");
const btnreset = document.querySelector(".b3");
const cycles = document.querySelector("h2");

let zeitAfang = 1800;
let zeitPause = 300;
let pause = false;
let nbdecycles = 0;
cycles.innerText = `Anzahl der Zyklen:  ${nbdecycles}`;
let checkInterval = false;

showArbeit.innerText = `${Math.trunc(zeitAfang / 60)} : ${
  zeitAfang % 60 < 10 ? `0${zeitAfang % 60}` : zeitAfang % 60
}`;

showpause.innerText = `${Math.trunc(zeitPause / 60)} : ${
  zeitPause % 60 < 10 ? `0${zeitPause % 60}` : zeitPause % 60
}`;

btnGo.addEventListener("click", () => {
  if (checkInterval === false) {
    checkInterval = true;

    zeitAfang--;
    showArbeit.innerText = `${Math.trunc(zeitAfang / 60)} : ${
      zeitAfang % 60 < 10 ? `0${zeitAfang % 60}` : zeitAfang % 60
    }`;

    let timer = setInterval(() => {
      if (pause === false && zeitAfang > 0) {
        zeitAfang--;
        showArbeit.innerText = `${Math.trunc(zeitAfang / 60)} : ${
          zeitAfang % 60 < 10 ? `0${zeitAfang % 60}` : zeitAfang % 60
        }`;
      } else if (paused === false && zeitPause === 0 && zeitAfang === 0) {
        zeitAfang = 1800;
        zeitPause = 300;
        nbdecycles++;
        cycles.innerText = `Anzahl der Zyklen:  ${nbdecycles}`;
        showArbeit.innerText = `${Math.trunc(zeitAfang / 60)} : ${
          zeitAfang % 60 < 10 ? `0${zeitAfang % 60}` : zeitAfang % 60
        }`;

        showpause.innerText = `${Math.trunc(zeitPause / 60)} : ${
          zeitPause % 60 < 10 ? `0${zeitPause % 60}` : zeitPause % 60
        }`;
      } else if (paused === false && zeitAfang === 0) {
        zeitPause--;
        showpause.innerText = `${Math.trunc(zeitPause / 60)} : ${
          zeitPause % 60 < 10 ? `0${zeitPause % 60}` : zeitPause % 60
        }`;
      }
    }, 1000);

    //Reset
    btnreset.addEventListener("click", () => {
      clearInterval(timer);
      checkInterval = false;
      zeitAfang = 1800;
      zeitPause = 300;
      showArbeit.innerText = `${Math.trunc(zeitAfang / 60)} : ${
        zeitAfang % 60 < 10 ? `0${zeitAfang % 60}` : zeitAfang % 60
      }`;

      showpause.innerText = `${Math.trunc(zeitPause / 60)} : ${
        zeitPause % 60 < 10 ? `0${zeitPause % 60}` : zeitPause % 60
      }`;
    });
  } else {
    return;
  }
});

btnpause.addEventListener("click", () => {
  if (pause === false) {
    btnpause.innerText = "Play";
  } else if (pause === true) {
    btnpause.innerText = "Pause";
  }
  pause = !pause;
});
