const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);


      function crearGrafica() {
        const graficaResultados = document.getElementById('graficaResultados');
          const data = {
          labels: [
            'Responsabilidad, formación y capacitación',
            'Tolerancia y respeto',
            'Comunicación',
            'Trabajo en equipo',
            'Calidad'
          ],
          datasets: [{
            label: 'Resultados',
            data: [40, 50, 40, 60, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
          }]
        };

          const options ={
            scale: {
                r:{
                    min: 0,
                    max: 100,
                }     
              }
          }

          const config = {
            type: 'radar',
            data: data,
            options: options
          };

          var myChart = new Chart(
                graficaResultados,
                config
              );
      }
      

  const mostrarResultados = document.getElementById('mostrarResultados');

  mostrarResultados.addEventListener("click", crearGrafica);


//Insertar preguntas


  const preguntas = [
    {
        seccion: "Responsabilidad, formación y capacitación",
        preguntasSeccion: {
        pregunta1: "¿En tu trabajo las oportunidades de desarrollo laboral solo las reciben unas cuantas personas privilegiadas?",
        pregunta2: "¿Mujeres y hombres tienen las mismas oportunidades de ascenso y capacitación?",
        pregunta3: "¿Has participado en algún programa de capacitación en los últimos doce meses?",
        pregunta4: "¿En los últimos doce meses te han realizado una evaluación de desempeño?",
        pregunta5: "¿Crees que la competencia para obtener mejores puestos es justa y equitativa?",
      }
    },
    {
        seccion: "Tolerancia y respeto",
        preguntasSeccion: {
        pregunta1: "¿Sientes que se te trata con respeto en tu trabajo?",
        pregunta2: "¿En tu trabajo los hombres cuentan con licencia de paternidad?",
        pregunta3: "¿En tu trabajo tanto mujeres como hombres tienen las mismas facilidades para atender problemas familiares no previstos?",
        pregunta4: "¿Algunas vez has notado alguna burla debido a características personales sobre tu persona?",
        pregunta5: "¿En tu trabajo los superiores/directivos reciben un trato mucho más respetuoso que los subordinados?",
      }
    },
    {
        seccion: "Comunicación",
        preguntasSeccion: {
        pregunta1: "¿Tu superior está abierto para mantener comunicación contigo?",
        pregunta2: "¿Se te comunican tus funciones y tareas de manera clara y precisa" ,
        pregunta3: "¿Se da seguimiento a los objetivos de departamento?",
        pregunta4: "¿En tu departamento la mayoría conoce bien las metas?",
        pregunta5: "¿Se te informa periódicamente sobre el avance en los proyectos?",
      }
    },
    {
        seccion: "Trabajo en equipo",
        preguntasSeccion: {
        pregunta1: "¿Existe integración y cooperación entre los miembros del equipo?",
        pregunta2: "¿Los equipos de trabajo aseguran la igualdad y la no discriminación?" ,
        pregunta3: "¿Le tienes confianza a tu equipo de trabajo?",
        pregunta4: "¿Puedes expresar tu opinión a tus compañeros?",
        pregunta5: "¿Es eficiente la forma en que te comunicas con tus compañeros?",
      }
    },
    {
        seccion: "Calidad",
        preguntasSeccion: {
        pregunta1: "¿Cuentas con el material y equipo que necesitas para desempeñar tu trabajo?",
        pregunta2: "¿Puedes dar lo mejor de ti cada día?" ,
        pregunta3: "¿Alguien en el trabajo estimula tu desarrollo?",
        pregunta4: "¿Alguien supervisa tu trabajo realizado?",
        pregunta5: "Si te encuentras con un problema o una situación inusual, ¿sabes a dónde acudir para encontrar una solución?",
      }
    },
  ]


const contenedorCuestionario = document.getElementById('cuestionario');

function mostrarCuestionario() {
	const seccionesYpreguntas = [];

	preguntas.forEach((seccionActual, numeroDeSeccion) => {
	  const preguntas = [];

    
	  for (pregunta in seccionActual.preguntasSeccion) {
		preguntas.push(
		  `
            <div class="query__question">
              <p>${seccionActual.preguntasSeccion[pregunta]}</p>
            </div>
          <div class="query__slider"> 
            <input class="slider" type="range" min="0" max="100" step="10" id="slider__response" name="respuesta${1}">
            <div class="slider__labels">
              <label for="slider__response" >Poco de acuerdo</label>
              <label for="slider__response" >Muy de acuerdo</label>
            </div>
          </div>
      `
		);
	  }

	  seccionesYpreguntas.push(
		`<header class="block__header">
        <h2>${seccionActual.seccion}</h2>
      </header>
			<article class="grid grid--1x2 query">
        ${preguntas.join("")} 
       </article>
			`
	  );
	});

	contenedorCuestionario.innerHTML = seccionesYpreguntas.join("");
  }

  mostrarCuestionario();
