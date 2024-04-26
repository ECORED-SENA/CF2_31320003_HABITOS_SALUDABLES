<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Promoción de entornos saludables
    
    .row
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        p Algunas estrategias para promover la salud y prevenir enfermedades crónicas no trasmisibles, son: 
        AcordionA.mt-4(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Fomentar un estilo de vida individual")
            p.mb-0 Realizando actividad física, promoviendo espacios libres del humo de tabaco y consumiendo frutas y verduras. 
          .row.col-xl-11.m-auto(titulo="Promover un entorno saludable")
            p.mb-0 En diferentes ámbitos sociales, hogares, en el trabajo, estudio, entre otros; porque existe una relación importante entre estos sectores en los cuales transcurre la vida cotidiana. Si el entorno en el que se interactúa ofrece una variedad de alternativas, la población va a tener la posibilidad de elegir más opciones saludables de vida. 
          .row.col-xl-11.m-auto(titulo="Impulsar la regulación de productos y servicios ")
            p.mb-0 Esto se logra a través de leyes que reglamenten el consumo de tabaco y de sodio, consiguiendo en gran medida prevenir enfermedades no transmisibles. 
      .col-lg-3(data-aos="fade-left")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/1.png")
    
    .mt-5.p-4.p-lg-0.pe-lg-5(style="background-color:#F1EBE0;border-radius:12px;")
      .row
        .col-lg-auto.col-md-12(data-aos="fade-up")
          figure.m-auto.col-7.col-md-7.col-lg-12.ps-lg-3
            img(src="@/assets/curso/tema3/2.svg")
        .col-lg.col-md-12(data-aos="fade-left" style="place-self:center;")
          p.text-white #[span.ps-2.pe-2(style="background-color:#30169A;") Y, ¿qué es un entorno saludable?]
          p En el trascurso del tiempo se ha podido evidenciar que la salud individual está relacionada con la comunitaria, es decir, con el entorno donde las personas conviven, estudian, trabajan y pasan su tiempo de ocio, pero los cambios sociales, económicos y ambientales, han llevado a que las personas ocupen más su tiempo frente a aparatos tecnológicos como el televisor, los computadores, celulares, entre otros. Estos factores han promovido el sedentarismo, la obesidad y el consumo de tabaco, dando como resultado estilos de vida poco saludables, por ende es importante que en los lugares donde se pasa la mayor parte de la vida se desarrollen ámbitos saludables en pro de una buena salud. 
          p.mb-0 Teniendo en cuenta lo anterior, se ha generado una tendencia mundial, la cual consiste en implementar espacios saludables, es decir ambientes donde se reduzcan los factores de riesgo de enfermedades crónicas transmisibles por medio de la promoción de espacios libres de humo de tabaco, estilos de vida activa (ejercicio físico y buena postura), donde se mejoren los hábitos alimentarios en lugares de trabajo, universidades, escuelas, entre otras. 
    
    TituloDecorativo.mt-5(titulo="Beneficios de un entorno saludable")

    .row.mt-4
      .col-lg-4.col-md-6.mb-4(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_3_1.text-center.text-white(style="background-color:#5357DE;border-radius:15px;")
          figure.mt-3
            img(src="@/assets/curso/tema3/3.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Mantener y mejorar la salud y bienestar de los miembros del lugar de trabajo. 
      .col-lg-4.col-md-6.mb-4(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_3_1.text-center.text-white(style="background-color:#5357DE;border-radius:15px;")
          figure.mt-3
            img(src="@/assets/curso/tema3/4.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Enriquecer la imagen empresarial e institucional haciendo saber a los miembros de la organización que se preocupa por la salud de ellos. 
      .col-lg-4.col-md-6.mb-4(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_3_1.text-center.text-white(style="background-color:#5357DE;border-radius:15px;")
          figure.mt-3
            img(src="@/assets/curso/tema3/5.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Aumentar la satisfacción en el sitio de desempeño haciendo que los miembros se sientan seguros en el lugar de trabajo.
      .col-lg-4.col-md-6.mb-4(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_3_1.text-center.text-white(style="background-color:#5357DE;border-radius:15px;")
          figure.mt-3
            img(src="@/assets/curso/tema3/6.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Fomentar el desempeño académico y laboral. 
      .col-lg-4.col-md-6.mb-4(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_3_1.text-center.text-white(style="background-color:#5357DE;border-radius:15px;")
          figure.mt-3
            img(src="@/assets/curso/tema3/7.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Motivar el compromiso y el desarrollo del sentido de pertenencia por la institución o lugar de trabajo. 
      .col-lg-4.col-md-6.mb-4(data-aos="zoom-in-left" data-aos-delay="500")
        figure.m-auto.col-8.col-md-12
          img(src="@/assets/curso/tema3/8.svg")
    
    .p-4.mt-5(style="background-color:#EBEBFD;")
      TituloDecorativo(titulo="Lugares de trabajo saludables")
      .row
        .col(style="place-self:center;" data-aos="fade-right")
          p.mb-0 Los operarios pasan la mayor parte de su tiempo en el trabajo, por eso para mejorar su salud y bienestar, es importante promover el desarrollo de espacios laborares con hábitos saludables, reduciendo factores de riesgo de enfermedades crónicas transmisibles, porque si se logra todo lo anterior, el resultado será una mayor competitividad. 
        .col-auto.d-none.d-md-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema3/9.svg")

    TituloDecorativo.mt-5(titulo="Universidad saludable")

    p(data-aos="fade-right") Las universidades tienen un papel importante en la promoción de la salud, porque en sus locaciones jóvenes y adultos pasan gran parte de su día, sea porque estudian o laboran allí. Por esto es de gran relevancia que estos ámbitos ayuden a promover conductas saludables, y las líneas de acción que deben incluir las universidades, son: 

    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/10.png")
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Políticas saludables")
            p.mb-0 Realizando actividad física, promoviendo espacios libres del humo de tabaco y consumiendo frutas y verduras. 
          .row.col-xl-11.m-auto(titulo="Ambientes y entornos saludables")
            p.mb-0 Crear ambientes físicos y psicosociales que propicien un ambiente saludable, el cual disminuya riesgos. 
          .row.col-xl-11.m-auto(titulo="Coordinación intersectorial")
            p.mb-0 Es importante que la universidad instituya áreas como bienestar universitario, obra social y zonas académicas, para promover actividades sostenibles, con el fin que exista una consolidación de universidad saludable. 
    
    TituloDecorativo.mt-5(titulo="Escuelas saludables")

    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Los niños son el futuro de cualquier país y este tipo de población es muy vulnerable, por eso es importante crear entornos físicos seguros libres de humo de tabaco y con estructuras adecuadas donde se fomenten relaciones interpersonales positivas (respeto, identidad cultural y participación de la comunidad). En estos espacios donde se educan a los niños, es necesario promover la alimentación sana, así como actividades deportivas, recreacionales y culturales, como acceso a servicios públicos, con el fin que sea un ambiente sano y propicio para que se desarrollen, previniendo enfermedades no transmisibles. 
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-9.col-md-8.col-lg-12
          img(src="@/assets/curso/tema3/11.png")



   


      
</template>

<script>
import TituloDecorativo from '../components/TituloDecorativo.vue'
export default {
  name: 'Tema3',
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
.acordion__accion__btn--a
  background-color: #FCA651
  box-shadow: 0px 0px 7px 2px rgba(0,0,0,.3)
.acordion .tarjeta--azul
  background-color: #30169A
.acordion .tarjeta--azul h3
  color: #fff
.acordion .tarjeta.tarjeta--azul.acordion__activo
  background-color: #EBEBFD
.acordion .tarjeta.tarjeta--azul.acordion__activo h3
  color: #12263F
.cont_3_1
  background: url(../assets/curso/tema2/20.png)
  background-size: 100% 100%
</style>
