<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Enfermedades no transmisibles
    
    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-8.col-mmd-7.col-lg-12
          img(src="@/assets/curso/tema1/1.png")
      .col-lg-8(data-aos="fade-left")
        .p-4(style="background-color:#F1EBE0;border-radius:10px;")
          p.mb-2 #[span.ps-2.pe-2(style="background-color:#95DBB3;") ¿Sabías que las enfermedades no trasmisibles cobran muchas vidas en el mundo?]
          .row
            .col-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema1/2.svg")
            .col(style="place-self:center;")
              p.mb-0 Se ha demostrado que casi el 80 % de las muertes ocurren en países tercermundistas; antes se creía que este tipo de problemas de salud era una problemática que afectaba más que todo a los países del primer mundo. 
        p.mt-4.mb-0 En la sociedad actual, cuando se habla de enfermedades no transmisibles, se hace referencia a padecimientos cardiovasculares, cáncer, diabetes, enfermedades respiratorias crónicas, obesidad, entre otras. Un alto porcentaje de estos trastornos puede reducirse si se tienen en cuenta cuatro factores de riesgo del comportamiento humano como consumo de dietas poco sanas, tabaco, inactividad física y alcohol excesivo. Ampliemos la información sobre cada una de ellos: 
    
    .tarjeta.tarjeta--azul.p-4.p-lg-5.pb-lg-4.cont_slyder1.mt-4
      SlyderA(tipo="b")
        .row.col-xl-11.m-auto
          .col-lg-7.mb-4.mb-lg-0.text-white(style="place-self:center;")
            h4 Tabaquismo
            p.mb-0 En el mundo se producen alrededor de 6 millones de muertes al año debido a problemas relacionados con el tabaco. Se estima que hacia el 2030, esa cifra aumentará a unos 7,5 millones, representando el 10 % total de fallecimientos en el planeta; hoy en día el consumo está empezando a temprana edad y ocurre en cualquier estrato socioeconómico, sin embargo ,la prevalencia está en los países primermundistas. 
          .col-lg-5(style="place-self:center;")
            figure.col-8.col-md-7.col-lg-12.m-auto
              img(src='@/assets/curso/tema1/4.png')
        .row.col-xl-11.m-auto
          .col-lg-7.mb-4.mb-lg-0.text-white(style="place-self:center;")
            h4 Sedentarismo
            p Las personas que mueren a causa del sedentarismo son aproximadamente 3,2 millones cada año. Los hombres y mujeres que realizan poca actividad física tienen un 30 % más de posibilidades de morir. 
            p.mb-0 Hacer actividad física reduce el riesgo de padecer enfermedades cardiovasculares, depresión, cáncer de mama, de colon y diabetes. Se cree que el sedentarismo es más común en países de ingresos altos, sin embargo, en los de ingresos medios, la población más afectada son las mujeres. 
          .col-lg-5(style="place-self:center;")
            figure.col-8.col-md-7.col-lg-12.m-auto
              img(src='@/assets/curso/tema1/5.png')
        .row.col-xl-11.m-auto
          .col-lg-7.mb-4.mb-lg-0.text-white(style="place-self:center;")
            h4 Uso nocivo de alcohol
            p.mb-0 Cada año mueren aproximadamente 2,3 millones de personas por excesos en el alcohol, y más de la mitad de estos fallecimientos son provocados por enfermedades no transmisibles como la cirrosis hepática, el cáncer y enfermedades cardiovasculares. El consumo de alcohol es mayor en países de ingresos altos.  
          .col-lg-5(style="place-self:center;")
            figure.col-8.col-md-7.col-lg-12.m-auto
              img(src='@/assets/curso/tema1/6.png')
        .row.col-xl-11.m-auto
          .col-lg-7.mb-4.mb-lg-0.text-white(style="place-self:center;")
            h4 Dieta no saludable 
            p.mb-0 Tiene que ver con el consumo elevado de algunos alimentos ricos en carbohidratos, grasas y minerales. La sal es cada vez más común en la población, y con frecuencia es adicionada a las comidas en grandes cantidades, lo que genera el riesgo de posibles padecimientos de hipertensión y de enfermedades cardiovasculares; asimismo, las cardiopatías tienen relación con el consumo elevado de grasas saturadas y ácidos grasos trans. 
          .col-lg-5(style="place-self:center;")
            figure.col-8.col-md-7.col-lg-12.m-auto
              img(src='@/assets/curso/tema1/7.png')
    
    p.mt-4(data-aos="fade-right") Cada vez es más frecuente que la población escoja alimentos mal sanos o comidas chatarra, sobre todo los jóvenes, de acuerdo a las tendencias de comida al paso y de preparación rápida. 
    p(data-aos="fade-left") Hablemos ahora sobre algunas enfermedades: 

    .row.mt-4
      .col-lg-3.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_1_1.text-center(style="background-color:#EBEBFD;border-radius:15px;")
          figure.mt-4
            img(src="@/assets/curso/tema1/9.svg" style="max-width:100px;display:inline;")
          h5.mt-4.text-white.ps-3.pe-4.m-auto.pb-1.pt-1(style="max-width:fit-content;background-color:#30169A;") Hipertensión 
          p.mt-3.mb-0 Se estima que esta enfermedad no trasmisible es la responsable de al menos 2,8 millones de muertes cada año; asimismo, se le relaciona como un importante factor de riesgo dentro de los padecimientos cardiovasculares. 
      .col-lg-3.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_1_1.text-center(style="background-color:#EBEBFD;border-radius:15px;")
          figure.mt-4
            img(src="@/assets/curso/tema1/10.svg" style="max-width:100px;display:inline;")
          h5.mt-4.text-white.ps-3.pe-4.m-auto.pb-1.pt-1(style="max-width:fit-content;background-color:#30169A;") Obesidad  
          p.mt-3.mb-0 Tiene vínculo directo en el padecimiento de cardiopatías y accidentes cerebrovasculares; además, se le asocia con algunos tipos de diabetes. 
      .col-lg-3.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_1_1.text-center(style="background-color:#EBEBFD;border-radius:15px;")
          figure.mt-4
            img(src="@/assets/curso/tema1/11.svg" style="max-width:100px;display:inline;")
          h5.mt-4.text-white.ps-3.pe-4.m-auto.pb-1.pt-1(style="max-width:fit-content;background-color:#30169A;") Hipercolesterolemia  
          p.mt-3.mb-0 El colesterol elevado está relacionado con el riesgo de padecer accidentes vasculares cerebrales y cardiopatías. 
      .col-lg-3.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_1_1.text-center(style="background-color:#EBEBFD;border-radius:15px;")
          figure.mt-4
            img(src="@/assets/curso/tema1/12.svg" style="max-width:100px;display:inline;")
          h5.mt-4.text-white.ps-3.pe-4.m-auto.pb-1.pt-1(style="max-width:fit-content;background-color:#30169A;") Infecciones relacionadas con el cáncer 
          p.mt-3.mb-0 El cáncer está asociado con agentes infecciosos como el virus del papiloma humano, hepatitis B, hepatitis C, y con el #[em helicobacter pylori]; para evitar estos males existen vacunas, las cuales previenen este tipo de transmisiones. 

   


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.cont_slyder1
  background: url(../assets/curso/tema1/3.png)
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
.cont_1_1
  background: url(../assets/curso/tema1/8.png)
  background-size: 100% 100%
</style>
