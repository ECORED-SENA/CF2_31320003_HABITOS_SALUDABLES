<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Percepción sensorial de los alimentos 
    
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        p Los alimentos son vitales en la nutrición porque contienen carbohidratos, grasas, proteínas, vitaminas y minerales, sustancias necesarias para un buen desarrollo fisiológico. Sin embargo, con el pasar del tiempo se han desarrollado productos para suplir necesidades alimenticias, pero con el inconveniente de una vida útil corta, por lo que se han implementado diversas metodologías de conservación. Un ejemplo es la utilización de la sal, usada por nuestros antepasados como conservador de carnes, o el uso del vinagre, el cual más adelante alcanzó su gran expansión en la industria química.
        .row
          .col-lg-auto.col-md-12.mb-4.mb-lg-0.pe-lg-0
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src="@/assets/curso/tema5/1.png")
          .col-lg.ps-lg-0
            .p-4.h-100.d-flex.flex-wrap.align-content-center(style="background-color:#EBEBFD;")
              p.mb-0 Por otra parte, se sabe que ahora hay más gente en el mundo con mejores niveles de vida de los que había en el pasado, lo que ha hecho surgir el término de alimentos saludables. La gente moderna está demandando productos sanos, libres de cualquier tipo de contaminación sea física, química o biológica; los nuevos alimentos requieren de la integración de metodologías como el aseguramiento de la calidad desde que se produce en campo hasta que se transforma en producto. Para ello, se han utilizado tecnologías de innovación y métodos de análisis más funcionales en la manipulación, preparación y conservación de los alimentos. 
      .col-lg-3(data-aos="zoom-in-left" data-aos-delay="500")
        figure.m-auto.col-6.col-md-6.col-lg-12
          img(src="@/assets/curso/tema5/2.png")
    
    p.mt-4(data-aos="fade-up") Hablemos sobre el sabor, olor y color de los alimentos: 

    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right" data-aos-delay="500")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema5/3.svg")
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Sabor de un alimento")
            p Cuando se tiene un resfriado, los alimentos no parecen tener sabor, esto solo es una verdad a medias. La sensación que se genera tiene dos componentes, sabor y gusto, es más, se puede demostrar fácilmente si se cierran los ojos y se aprieta la nariz, no se distingue entre un helado de vainilla y uno de chocolate. 
            p En la naturaleza se tienen solo cuatro sabores fundamentales, agrio, dulce, amargo y salado. Es importante resaltar que existe mucha gente que carece de sabor, de la misma manera que hay personas daltónicas, lo anterior debido a factores hereditarios. Hay varias respuestas menores al sabor. Las personas detectan muy fácilmente a través del gusto y el tacto lo jabonoso. 
            p.mb-0 Respecto al gusto, se encuentra que ciertas sustancias dan una sensación de temperatura, por ejemplo, cuando se come pimienta, se siente calor, o con una menta, frío. 
          .row.col-xl-11.m-auto(titulo="Olor de los alimentos")
            p Es un sentido químico, así como el gusto, de igual manera, los nervios olfativos están ocultos en un pasaje nasal. El sentido del olfato es 2500 veces más sensible que el del gusto. 
            p.mb-0 La clasificación común incluye los olores a tierra, fruta, flores, pescado, especias, pútrido y aceites. 
          .row.col-xl-11.m-auto(titulo="Color del alimento")
            p En su forma natural, los alimentos se ven brillantes y coloreados. No hay pigmentos grises en las frutas, las verduras, las hortalizas, las carnes, entre otras. Cuando se observa este color en un comestible se debe a un grado de descomposición, el aspecto opaco puede indicar un cambio en los valores nutricionales. 
            p Calentando, congelando o secando los alimentos, estos cambian sus cualidades físicas y químicas, es más, en algunos casos pueden ser deseables como en el caso de la carne calentada o congelada, haciéndola más tierna. 
            p.mb-0 Cada alimento tiene una apariencia y un color asociado, cualquier desviación genera dudas. Los cambios en la pigmentación de los alimentos pueden ser una señal de variación en su valor nutritivo. Por ejemplo, el pescado con ojos opacos y piel pegajosa es sospechoso; el olor en los plátanos maduros son un indicador de sus condiciones comestibles; los vegetales crudos que han perdido el brillo en el color, estando suaves y marchitos tienen un valor alimenticio menor que aquellos con buen aspecto y con tejidos firmes y vivos; la carne sin suavidad al tacto o color brillante también es de dudosa calidad. 
    
    TituloDecorativo.mt-5(titulo="Cambios en la percepción sensorial de los alimentos")

    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p El gusto se puede fatigar, así como el sentido del olfato, por ejemplo, si se consume ajo, todo lo que se coma por un rato sabrá a este; es posible distinguir el sabor degradado de los nutrientes, así como sus características físicas, es más el grado del cambio está relacionado con la utilidad del alimento.
        .row.mt-4
          .col-lg.col-md-12(data-aos="zoom-in-up" data-aos-delay="700")
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#D0D1FA;border-radius:15px;")
              p.mb-0 Hay que evitar los tratamientos con calor excesivo, porque esto genera una alteración en el alimento. Las altas temperaturas pueden dañar ciertas cualidades, en algunos casos como en el de la leche ultrapasteurizada, el calor es un factor que ayuda a conservar este producto por más tiempo, a una temperatura ambiente. 
          .col-lg-auto.col-md-12(data-aos="zoom-in-up" data-aos-delay="700")
            figure.m-auto.col-7.col-md-6.col-lg-12
              img(src="@/assets/curso/tema5/4.svg")
      .col-lg-4(data-aos="zoom-in-left" data-aos-delay="500")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema5/5.png")

   


      
</template>

<script>
import TituloDecorativo from '../components/TituloDecorativo.vue'
export default {
  name: 'Tema5',
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
</style>
