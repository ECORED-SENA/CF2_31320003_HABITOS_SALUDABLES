<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Enfermedades causadas por mala alimentación
    
    .row
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/1.svg")
      .col-lg-9(data-aos="fade-left")
        .row
          .col-lg-7.mb-4.mb-lg-0.pe-lg-0
            .h-100.p-4(style="background-color:#EBEBFD;")
              p.mb-0 Las enfermedades ocasionadas por mala alimentación, son en la actualidad un problema de considerable importancia. Los hábitos alimenticios de las personas tienen una gran influencia en su salud, de hecho, el consumo excesivo de ciertos productos, así como la eliminación completa de algunos de estos, termina por ocasionar diversos padecimientos. 
          .col-lg-5.ps-lg-0
            figure.col-9.col-md-8.col-lg-12
              img(src="@/assets/curso/tema2/2.svg")
        p.mt-4.mb-0(data-aos="fade-up") Como se ha explicado, el cuerpo humano necesita de muchos nutrientes para funcionar correctamente, por ejemplo, del consumo de carbohidratos, proteínas, vitaminas, minerales, entre otros. Cuando no se le aporta al cuerpo la cantidad suficiente de algunas de las sustancias mencionadas anteriormente, este tiende a sufrir desbalances nutricionales, haciendo que algunas de sus funciones básicas no se realicen adecuadamente, generándose enfermedades; igualmente cuando se ingieren cantidades excesivas de alimentos, es posible que surjan complicaciones debido a la superabundancia de nutrientes, así como componentes dañinos para el organismo. 
    
    p.mt-4(data-aos="fade-right") A continuación se describen las principales enfermedades ocasionadas por la mala alimentación. 

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_1 2.1 Cáncer
    
    .row
      .col(style="place-self:center;" data-aos="fade-right")
        p.mb-0 El cáncer es una enfermedad en donde las células normales se vuelven anormales (cancerígenas o malignas), multiplicándose de forma descontrolada y dispersándose por los tejidos a través de la sangre. El cáncer se genera por muchas causas, entre ellas por factores alimenticios, genéticos, laborales, tabaco, virus, radiaciones, alcohol, contaminación ambiental, fármacos y aditivos alimentarios. 
      .col-auto.d-none.d-md-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/3.svg")
    
    .row.mt-4
      .col-lg-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/4.png")
      .col-lg-8(data-aos="fade-left")
        p Los factores que influyen en el desarrollo del cáncer, son: 
        .p-4(style="background-color:#787CF0;border-radius:15px;")
          .bg-white.cont_2_1.mb-3.p-3(style="border-radius:15px;box-shadow:0px 0px 10px rgba(0,0,0,.25);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema2/5.svg")
              .col(style="place-self:center;")
                p.mb-0 Carcinógenos naturales en los alimentos, contaminantes, o diferentes causas asociadas con el cocinado y la preservación de alimentos.
          .bg-white.cont_2_1.mb-3.p-3(style="border-radius:15px;box-shadow:0px 0px 10px rgba(0,0,0,.25);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema2/6.svg")
              .col(style="place-self:center;")
                p.mb-0 Activación o desactivación metabólica de los carcinógenos durante la dieta. Un ejemplo de este factor es la formación de radicales de oxígeno debido a la peroxidación lipídica; estos pueden ser retardados e incluso bloqueados por los procesos enzimáticos normales del cuerpo humano o también por la presencia de selenio o betacarotenos en los alimentos. 
          .bg-white.cont_2_1.mb-3.p-3(style="border-radius:15px;box-shadow:0px 0px 10px rgba(0,0,0,.25);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema2/7.svg")
              .col(style="place-self:center;")
                p.mb-0 Formación de carcinógenos mediante la flora intestinal. 
          .bg-white.cont_2_1.p-3(style="border-radius:15px;box-shadow:0px 0px 10px rgba(0,0,0,.25);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema2/8.svg")
              .col(style="place-self:center;")
                p.mb-0  Estímulo de genes cancerígenos a través de los lípidos o por la inhibición de la activación del cáncer, mediante el consumo de la vitamina A. 
    
    .cont_2_2.mt-4.pt-4
      TituloDecorativo.mt-5(titulo="Prevención del cáncer mediante la dieta")
      
      .row
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/10.png")
        .col-lg-7(data-aos="fade-left")
          .tarjeta.tarjeta--azul.p-4.p-lg-5.pb-lg-4.cont_slyder2
            SlyderA(tipo="b")
              .row.mt-lg-4.mb-lg-4
                .col-lg-8.mb-4.mb-lg-0.text-white(style="place-self:center;")
                  h4 #[span.bg-white(style="padding:.5rem .9rem;color:#30169A !important;border-radius:50px;") 1] 
                  p.mb-0.mt-4 Aumentar el consumo de alimentos ricos en fibra como manzanas, peras, coliflor, banano, brócoli, albaricoques, fresas, naranjas, zanahorias, patatas, espinacas, guisantes, garbanzos, judías, lentejas, cereales y derivados del grano entero como la pasta y el pan. 
                .col-lg-4(style="place-self:center;")
                  figure.col-7.col-md-6.col-lg-12.m-auto
                    img(src='@/assets/curso/tema2/12.svg')
              .row.mt-lg-4.mb-lg-4
                .col-lg-8.mb-4.mb-lg-0.text-white(style="place-self:center;")
                  h4 #[span.bg-white(style="padding:.5rem .9rem;color:#30169A !important;border-radius:50px;") 2]
                  p.mb-0.mt-4 Disminuir el consumo de grasas animales. Evitar el consumo de grasa saturada de las carnes, tratar de no cocinar con manteca y mantequilla. 
                .col-lg-4(style="place-self:center;")
                  figure.col-7.col-md-6.col-lg-12.m-auto
                    img(src='@/assets/curso/tema2/13.svg')
              .row.mt-lg-4.mb-lg-4
                .col-lg-8.mb-4.mb-lg-0.text-white(style="place-self:center;")
                  h4 #[span.bg-white(style="padding:.5rem .9rem;color:#30169A !important;border-radius:50px;") 3]
                  p.mb-0.mt-4 Limitar el consumo de productos de pastelería y helados.  
                .col-lg-4(style="place-self:center;")
                  figure.col-7.col-md-6.col-lg-12.m-auto
                    img(src='@/assets/curso/tema2/14.svg')
              .row.mt-lg-4.mb-lg-4
                .col-lg-8.mb-4.mb-lg-0.text-white(style="place-self:center;")
                  h4 #[span.bg-white(style="padding:.5rem .9rem;color:#30169A !important;border-radius:50px;") 4]
                  p.mb-0.mt-4 Incrementar el consumo de verduras y frutas frescas (vitaminas A y C), debido a su alto potencial para prevenir cánceres.   
                .col-lg-4(style="place-self:center;")
                  figure.col-7.col-md-6.col-lg-12.m-auto
                    img(src='@/assets/curso/tema2/15.svg')
              .row.mt-lg-4.mb-lg-4
                .col-lg-8.mb-4.mb-lg-0.text-white(style="place-self:center;")
                  h4 #[span.bg-white(style="padding:.5rem .9rem;color:#30169A !important;border-radius:50px;") 5]
                  p.mb-0.mt-4 Emplear métodos de cocción correctos. Evitar freír los alimentos a altas temperaturas y asimismo, no utilizar el aceite de cocina varias veces porque la liberación de tóxicos es relativamente alta. 
                .col-lg-4(style="place-self:center;")
                  figure.col-7.col-md-6.col-lg-12.m-auto
                    img(src='@/assets/curso/tema2/16.svg')
              .row.mt-lg-4.mb-lg-4
                .col-lg-8.mb-4.mb-lg-0.text-white(style="place-self:center;")
                  h4 #[span.bg-white(style="padding:.5rem .9rem;color:#30169A !important;border-radius:50px;") 6]
                  p.mb-0.mt-4 Tener una dieta baja en calorías y realizar ejercicio moderado con el fin de prevenir la obesidad. 
                .col-lg-4(style="place-self:center;")
                  figure.col-7.col-md-6.col-lg-12.m-auto
                    img(src='@/assets/curso/tema2/17.svg')
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2 Obesidad
    
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Se genera por la acumulación excesiva de tejido graso; su manifestación característica se visualiza en el aumento del peso corporal. Esta enfermedad no trasmisible es una de las más comunes en el mundo, debido a problemas en la alimentación y se produce cuando las personas tienen hábitos alimenticios en los que consumen una mayor cantidad de calorías de las que gastan. La caloría corresponde a la unidad de medición de la energía (obtenida de la ingesta de grasas o carbohidratos) aportada por los alimentos. 
        .p-4(style="background-color:#EBEBFD;border-radius:10px;")
          p.mb-0 La Organización Mundial de la Salud (OMS) establece que una persona es obesa cuando su índice de masa corporal (IMC) es igual o superior a 30; asimismo, y se calcula dividiendo el peso de la persona (kilogramos) por el cuadrado de su estatura (en metros). 
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/18.png")
    
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/19.png")
      .col-lg-8(data-aos="fade-left")
        p Igualmente existen casos en los que hay individuos que sufren de obesidad, aún cuando su consumo de alimento es mínimo, situación generada por factores genéticos y en donde la mejor solución, es una intervención quirúrgica. 
        p.mb-0 La obesidad puede llevar a que se presenten otro tipo de enfermedades y complicaciones cardiovasculares como presión alta, aumento del colesterol en la sangre y diabetes, así como alteraciones pulmonares como disminución de la capacidad respiratoria, fatiga y sudoración; igualmente se presentan problemas gastrointestinales como cálculos en la vesícula, reflujo gastroesofágico e incluso cáncer en el colon. 
    
    TituloDecorativo.mt-5(titulo="Recomendaciones y tratamiento para la obesidad")

    p(data-aos="fade-left") Las características del tratamiento varían según el tipo de obesidad y sexo de la persona. De manera general, se puede afirmar que una buena forma de luchar contra la obesidad es mediante una dieta adecuada (disminución de calorías), combinada con la realización de ejercicio físico; adicionalmente, es necesario tener en cuenta los siguientes aspectos: 

    .row.mt-4
      .col-lg-3.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_2_3.text-center.text-white(style="background-color:#5357DE;border-radius:15px;")
          figure.mt-3
            img(src="@/assets/curso/tema2/21.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Prevenir la ingesta de azúcares. 
      .col-lg-3.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_2_3.text-center.text-white(style="background-color:#5357DE;border-radius:15px;")
          figure.mt-3
            img(src="@/assets/curso/tema2/22.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Disminuir el consumo de alimentos grasos y aceites. 
      .col-lg-3.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_2_3.text-center.text-white(style="background-color:#5357DE;border-radius:15px;")
          figure.mt-3
            img(src="@/assets/curso/tema2/23.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Evitar los aperitivos entre comidas. 
      .col-lg-3.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_2_3.text-center.text-white(style="background-color:#5357DE;border-radius:15px;")
          figure.mt-3
            img(src="@/assets/curso/tema2/24.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Mermar el consumo de bebidas alcohólicas. 
    
    .mt-5.p-4.p-lg-0(style="background-color:#F1EBE0;border-radius:12px;")
      .row
        .col-lg-auto.col-md-12(data-aos="fade-up")
          figure.m-auto.col-7.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/25.svg")
        .col-lg.col-md-12(data-aos="fade-left" style="place-self:center;")
          p.text-white #[span.ps-2.pe-2(style="background-color:#30169A;") ¿Cómo puedo prevenir la obesidad por medio de la dieta?]
          ul.lista-ul.mt-3.mb-0
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Incluir en la alimentación dietas ricas en fibra consumiendo frutas, verduras y cereales integrales. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Cocinar los alimentos usando horno o plancha, evitando la cocción en grasas animales. 
            li.d-flex.mb-0
              i.fas.fa-walking(style="color:#30169A;")
              div Beber abundante líquido durante el día, aproximadamente dos litros, esto en personas adultas. 
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_3 2.3  Diabetes #[em mellitus]
    
    p(data-aos="fade-right") Es un estado de hiperglucemia crónica, es el resultado de una serie de factores genéticos y ambientales que con frecuencia actúan simultáneamente. La hiperglucemia se ocasiona debido a un déficit (absoluto o relativo) de insulina endógena, o por un exceso de agentes que se oponen a su acción; este desequilibrio lleva a una anormalidad en el metabolismo de carbohidratos, grasas y proteínas. 
    p(data-aos="fade-left") Existen dos tipos de diabetes: 


      

   


      
</template>
<script>
import TituloDecorativo from '../components/TituloDecorativo.vue'
export default {
  name: 'Tema2',
  components: {
    TituloDecorativo,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_2_1
  transition: all .3s ease-in-out
.cont_2_1:hover
  transform: scale(1.02)
  cursor: pointer
.cont_2_2, .cont_2_2 *
  position: relative
.cont_2_2:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  background: url(../assets/curso/tema2/9.png)
  background-size: 100% 100%
.cont_slyder2
  background: url(../assets/curso/tema2/11.png)
  background-size: cover
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #FCA651
  border-color: #FCA651
.slyder-a__bullets__item--active
  background-color: #FCA651 !important
  border-color: #FCA651 !important
.slyder-a__bullets__item
  background-color: #EDCFB1
  border: 1px solid #EDCFB1
.cont_2_3
  background: url(../assets/curso/tema2/20.png)
  background-size: 100% 100%
</style>
