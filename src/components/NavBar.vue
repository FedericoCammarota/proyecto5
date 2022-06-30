<template>
  <section class="src-components-navbar">
    <div id="navigator">
      <button id="reset">New colors</button>
      <span id="message"> </span>

      <button id="easy" @click="easy()">easy</button>
      <button id="hard" @click="hard()">hard</button>
    </div>

    <div v-for="(value, index) in colors" :key="index" id="container" :style="{backgroundColor:color().pickedColor}">
      <div class="square">{{ index }}</div>
    </div>
  </section>
</template>

<script>

export default {
  name: "src-components-navbar",
  props: ["mostrar"],
  mounted() {
     this.haciaElPadre()
  },
  data() {
    return {
      colorCount: 6,
      isHard: true,
      colors: [],
      squares: document.querySelectorAll(".square"),
      colorDisplay: document.getElementById("colorDisplay"),
      messageDisplay: document.getElementById("message"),
      /* pickedColor: this.colors[this.PickColor()], */
      h1: document.querySelector("h1"),
      restartButton: document.querySelector("#reset"),
      header: document.querySelector("#header"),
      easyButton: document.querySelector("#easy"),
      hardButton: document.querySelector("#hard"),
    };
  },
  methods: {
 /*    init() {
	for (var i = 0; i < colorCount.length; i++) {
		console.log(colors[i])
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function () {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "You Picked Right!";
				setAllColorsTo(pickedColor);
				restartButton.textContent = "Play Again!";
				header.style.backgroundColor = pickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
				messageDisplay.style.color = "#000000";
			}
		});
	}

	restart();
}, */
    hard() {
      if (!this.isHard) {
        this.isHard = true;
        /* this.hardButton.classList.add("selected");
        this.easyButton.classList.remove("selected"); */
        this.colorCount = 6;
        this.restart();
        /*   for (var i = 3; i < 6; i++) {
          this.squares[i].style.display = "block";
        } */
      }
    },
    easy() {
      if (this.isHard) {
        this.isHard = false;
        /*  easyButton.classList.add("selected");
        hardButton.classList.remove("selected"); */
        this.colorCount = 3;
        /*   for (var i = 0; i < this.colorCount; i++) {
          this.squares[i + 3].style.display = "none";
        } */
         this.restart();
      }
    },
    restart() {
      this.colors = this.createNewColors(this.colorCount);
      this.pickedColor = this.colors[this.PickColor()];
     /*  this.colorDisplay.textContent = this.pickedColor; */
     /*  this.textContent = "Pick New Colors!"; */
     /*  this.header.style.backgroundColor = "steelblue"; */
     /*  this.messageDisplay.textContent = "";
      this.restartButton.textContent = "New Colors!"; */
      /* for (var i = 0; i < this.colorCount.length; i++) {
        this.colorCount[i].style.backgroundColor = this.colors[i];
      } */
    },
     haciaElPadre(){
       this.colors = this.createNewColors(this.colorCount);
       this.pickedColor = this.colors[this.PickColor()];
       this.$emit("mostrar",this.pickedColor)
     },
    color(){
      this.colors = this.createNewColors(this.colorCount);
      this.pickedColor = this.colors[this.PickColor()];
      let color = this.colors
      return{
        color
      }
    
    },
    createRandomStringColor() {
      var newColor = 
        "rgb(" +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ")";
    
      return newColor;
    },
    createNewColors(numbers) {
      var arr = [];
      for (var i = 0; i < numbers; i++) {
        arr.push(this.createRandomStringColor());
      }
      return arr;
    },
    PickColor() {
      var quantity;
      if (this.isHard) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity);
    },
    randomInt() {
      return Math.floor(Math.random() * 256);
    },
  },
  computed: {
    
  },
};
</script>

<style scoped lang="css">
.src-components-navbar {
}

#navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}

/* .selected {
	background-color: steelblue;
	color: white;
} */
button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}

#message {
  color: #ffffff;
  display: inline-block;
  width: 20%;
}

.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
#container {
  margin: 20px auto;
  max-width: 600px;
}
</style>
