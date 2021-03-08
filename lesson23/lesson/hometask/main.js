const runTest1 = function () {
    const app = document.getElementById("app");
    app.innerHTML = `<div>
    <div class="colorText">
      <button>Button</button>
      <p id="paragraph1">I am just paragraph</p>
    </div>
    <div>
      <input/>
    </div>
  </div>`;
  
    const btn = document.querySelector("button");
    const paragraph1 = document.querySelector("#paragraph1");
    const input = document.querySelector("input");
  
    btn.addEventListener("click", function () {
      paragraph1.style.fontSize = "50px";
    });
  
    const btnText = btn.innerHTML;
    btn.addEventListener("mouseover", function () {
      this.innerHTML = "Наведён курсор";
    });
  
    btn.addEventListener("mouseleave", function () {
      this.innerHTML = btnText;
    });
  
    input.addEventListener("blur", function () {
      if (!input.value.includes("@")) {
        alert("предупреждение");
      }
    });
  
    input.addEventListener("focus", function () {
      this.style.background = "#69F0AE";
    });
  
    input.addEventListener("blur", function () {
      this.style.background = "#FF8A80";
    });
  };
  //runTest1();
  
  const runTest2 = function () {
    const app = document.getElementById("app");
    app.innerHTML = `<button>кнопка</button>`;
  
    const btn = document.querySelector("button");
  
    let clicksCounter = 0;
  
    btn.addEventListener("click", function () {
      const name = prompt("Имя пользователя?");
      clicksCounter++;
  
      const p = document.createElement("p");
      p.innerHTML = name;
      if (clicksCounter % 2 === 0) {
        app.appendChild(p);
      } else {
        btn.parentNode.insertBefore(p, btn);
      }
    });
  };
  //runTest1();
  //runTest2();
  const runTest = function (testName) {
    switch (testName) {
      case 1:
        runTest1();
        break;
      case 2:
        runTest2();
        break;
      default:
        null;
    }
  };
  runTest(1);
  