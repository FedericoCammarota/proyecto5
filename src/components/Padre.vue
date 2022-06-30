<template>

  <section class="src-components-padre">
   <div id="header">
		<h1>The Great <br>
			<span id="colorDisplay">RGB({{texto}})</span>
			<br>
			Guessing Game</h1>
     <!-- <Navbar @mostrar="texto=$event"/>  -->
	</div>
  
  </section>

</template>

<script>


/*   import Navbar from "/components/Navbar.vue" */
  export default  {
    name: 'src-components-padre',
     components : {
     /*  Navbar, */
    },
    props: [],
    mounted () {

    },
    data () {
      return {
      
          texto:"",
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-padre {

  }

  #header {
	transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
}
#colorDisplay {
	font-size: 200%;
}
</style>
