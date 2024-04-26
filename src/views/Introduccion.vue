<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="zoom-in" style="place-self:center;")
        .h-100.p-4(style="background-color:#D0D1FA;border-radius:12px;")
          p.mb-0 En este componente formativo se describen las enfermedades no transmisibles y las causas que hacen que las personas las adquieran; asimismo se estudian algunas enfermedades como la obesidad, la diabetes y el cáncer, las cuales podrían llegar a adquirirse por malos hábitos alimenticios.   
      .col-lg-4(data-aos="fade-left" data-aos-delay="600" data-aos-offset="300" data-aos-easing="ease-in-sine")
        figure.m-auto.col-10.col-md-8.col-lg-12
          img(src="@/assets/curso/intro1.svg")
    
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/intro2.png")
      .col-lg-9(data-aos="fade-left" data-aos-delay="600" data-aos-offset="300" data-aos-easing="ease-in-sine")
        .row
          .col-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/intro3.svg")
          .col(style="place-self:center;")
            p Y no dejaremos de estudiar la actividad física y la promoción de entornos saludables. 
            p.mb-0 Luego, continuaremos con la percepción sensorial de los alimentos por medio del sabor, color, y demás sentidos, además se describen aspectos importantes a tener en cuenta en la preparación de alimentos saludables. 
        p.mt-4 Finalmente, se reseñan algunas preparaciones saludables a base de maíz y yuca. 
        p.mb-0 #[span(style="background-color:#95DBB3;") Bienvenido a esta experiencia de aprendizaje.] 


    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
