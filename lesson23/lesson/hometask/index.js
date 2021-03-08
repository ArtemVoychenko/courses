const runTask1 = function () {
    const app = document.getElementById("app");
    app.innerHTML = `<div>
   <div>
   <p id="one" class="two">One</p>
   <p class="two">Two</p>
   </div>
   <div>
   <p id="four">Four</p>
   <p name="five">Five</p>
   </div>
    </div>
    `;
    const appSelector = document.getElementById("four");
    console.log(appSelector.textContent);
  
    const appClass = document.getElementsByClassName("two");
    for (let i = 0; i < appClass.length; i++) {
      appClass[i].style.fontSize = "30px";
    }
    const elements = document.getElementsByTagName("p");
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].hasAttribute("name")) {
        elements[i].style.color = "red";
      }
    }
  
    const three = document.createElement("p");
    three.innerHTML = "Tree";
    appClass[1].appendChild(three);
  
    const parSel = appSelector.parentElement;
    //console.log(parSel);
    for (let i = 0; i < parSel.children.length; i++) {
      parSel.children[i].style.background = "yellow";
    }
  };
  //runTask1();
  
  const runTask2 = function () {
    const app = document.getElementById("app");
    app.innerHTML = `<div>
   <div>
   <p>One</p>
  <p>Two</p>
   </div>
   <div>
   <p>abc</p>
  <p>DEF</p>
   </div>
    </div>
    `;
    const P = document.getElementsByTagName("p");
    console.log(P[1]);
    const reg = P[2].textContent;
    P[2].textContent = P[2].textContent.toUpperCase();
  };
  runTask2();
  
  const runTask3 = function () {
    const app = document.getElementById("app");
    let m = 1;
    m = "1";
    for (let i = 0; i <= 10; i++) {
      const three = document.createElement("p");
      three.innerHTML = m;
      app.appendChild(three);
      m = m + 1;
    }
  };
  //runTask3();
  
  const runTask4 = function () {
    const app = document.getElementById("app");
  
    const foodName = prompt("Какое блюдо вы будете есть?", " ");
  
    const textElement = document.createElement("p");
    switch (foodName) {
      case "breakfast":
        textElement.innerHTML = "Вы выбрали " + foodName + " отличный выбор";
        break;
      case "lunch":
        textElement.innerHTML =
          "Вы выбрали " + foodName + " к сожалению, обед закончился";
        break;
      case "dinner":
        textElement.innerHTML = "Вы выбрали " + foodName + " приятного аппетита!";
        break;
      default:
        textElement.innerHTML = "такого блюда нет!";
    }
    app.appendChild(textElement);
  };
  //runTask4();
  