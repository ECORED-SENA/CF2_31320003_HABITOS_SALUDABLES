<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Preparación de alimentos saludables 
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema6/1.svg")
      .col(style="place-self:center;" data-aos="fade-left")
        p.mb-0 Tiene que ver con los procedimientos necesarios para preparar una comida que involucra materias primas, ingredientes, procesos de cocción y demás acciones que hagan de un alimento algo comestible. Los controles que se realicen en todo el proceso, desde la selección de las materias primas hasta la elaboración del alimento, son muy importantes, debido a que en este punto se determina la calidad nutricional y fisicoquímica del alimento.

    p.mt-4(data-aos="fade-up") Los parámetros a verificar en la compra de algunos alimentos, son: 

    AcordionA.mt-4(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.col-xl-11.m-auto(titulo="Huevos")
        .col-lg-8.mb-4.mb-lg-0
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Cuando compre huevos, los cascarones deben estar limpios y sin roturas. La temperatura de recepción debe ser de 4ºC (si es necesario tome la temperatura de este, es decir, coja un huevo, rómpalo y vacíelo en un vaso, posteriormente mida). 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Los huevos no deben presentar ningún olor. Es necesario que las yemas resalten y estén firmes, las claras tienen que estar bien adheridas a las yemas. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Cuando compre huevos refrigérelos inmediatamente, puede ser en su recipiente original, o en cajas plásticas. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Al refrigerar los huevos, estos no deben estar sucios o con excremento. 
            li.d-flex.mb-0
              i.fas.fa-walking(style="color:#30169A;")
              div Los huevos congelados deben recibirse a -18ºC y el huevo líquido a 4ºC. 
        .col-lg-4
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema6/2.png")
      .row.col-xl-11.m-auto(titulo="Productos lácteos")
        .col-lg-8.mb-4.mb-lg-0
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div #[strong Leche:] tome la temperatura de la leche, esta debe estar a 4ºC y si está cruda, refrigérela inmediatamente. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div #[strong Mantequilla:] debe tener un sabor fresco y un color uniforme, rechácela si presenta una apariencia babosa. 
            li.d-flex.mb-0
              i.fas.fa-walking(style="color:#30169A;")
              div #[strong Queso:] el sabor y la textura deben ser correctos, si tiene corteza, debe estar limpia y sin roturas.
        .col-lg-4
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema6/3.png")
      .row.col-xl-11.m-auto(titulo="Carne de res")
        .col-lg-8.mb-4.mb-lg-0
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Compre con el respectivo color característico. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Descarte si presenta manchas negras o verdes. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Acepte si tiene una temperatura de 4ºC o menor y si el color es rojo carmesí brillante. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Prescinda si la temperatura es superior a 4ºC y si exhibe una textura babosa, pegajosa o seca. Realice la prueba del dedo, la cual consiste en hacer presión sobre la carne, y si queda marcado sobre esta, rechácela. 
        .col-lg-4
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema6/4.png")
      .row.col-xl-11.m-auto(titulo="Carne de cerdo")
        .col-lg-8.mb-4.mb-lg-0
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Admita si la temperatura es de 4ºC o menor. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Si la grasa presenta una coloración blanca y limpia, quiere decir que está en buen estado. 
            li.d-flex.mb-0
              i.fas.fa-walking(style="color:#30169A;")
              div Rechace si la temperatura es mayor a 4ºC. 
        .col-lg-4
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema6/5.png")
      .row.col-xl-11.m-auto(titulo="Aves")
        .col-lg-8.mb-4.mb-lg-0
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div La temperatura debe ser de 4ºC o menor. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Es necesario que el color sea uniforme, ya sea amarillo brillante o blanco o rosado, no debe presentar decoloraciones. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Permitir si viene rodeado con hielo o con algún sistema de refrigeración. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Descartar si el color es morado o verde alrededor del cuello del animal, y si tiene las puntas de las alas oscuras. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Desechar si el olor es fuerte (descompuesto). 
            li.d-flex.mb-0
              i.fas.fa-walking(style="color:#30169A;")
              div Abstenerse si la textura es pegajosa bajo las alas, coyunturas, y si la carne es suave. 
        .col-lg-4
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema6/6.png")
      .row.col-xl-11.m-auto(titulo="Pescado")
        .col-lg-8.mb-4.mb-lg-0
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Admita si este viene con una temperatura de 4ºC o menor. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Debe tener un olor fuerte, aspecto característico del pescado. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Los ojos del pez deben ser brillantes, claros y resaltantes. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div La textura debe ser firme, retractarse al tacto, y venir empacado con hielo o contar con algún sistema de refrigeración. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Descartar si las branquias son grises o verdes. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Prescindir si tiene olor a amoniaco. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div No consumir si los ojos están hundidos, nublados, o si presenta un color rojizo alrededor. 
            li.d-flex.mb-0
              i.fas.fa-walking(style="color:#30169A;")
              div Absténgase si la carne es tan suave que se hunde al oprimirla con el dedo, quedando la huella impresa. 
        .col-lg-4
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema6/7.png")
      .row.col-xl-11.m-auto(titulo="Frutas y verduras")
        .col-lg-8.mb-4.mb-lg-0
          p Antes de comer frutas, verduras y legumbres, tenga en cuenta: 
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Deben lavarse con suficiente agua y con cepillo para eliminar la tierra, en el caso de las hortalizas, es necesario fregarlas hoja por hoja. Para higienizar las frutas y verduras, dejarlas en solución de yodo o hipoclorito a 0.3 ml por litro de agua por 15 minutos; este procedimiento se realiza para eliminar bacterias, insectos, larvas y parásitos. 
            li.d-flex.mb-0
              i.fas.fa-walking(style="color:#30169A;")
              div Cuando compre frutas y verduras observe que no estén en mal estado (secas, blandas, con raspaduras, o con presencia de picaduras de animales). 
        .col-lg-4
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema6/8.png")
      .row.col-xl-11.m-auto(titulo="Leguminosas y cereales")
        .col-lg-8.mb-4.mb-lg-0
          p Frijol, lentejas, arroz y maíz: 
          ul.lista-ul.mb-0.mt-3.ps-4
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Supervisar por medio de los sentidos, que estos alimentos no presentan olor a húmedo o viejo. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Observe que las leguminosas como los cereales, no contengan insectos o gusanos. 
            li.d-flex.mb-0
              i.fas.fa-walking(style="color:#30169A;")
              div Revisar que el empaque de estos productos esté completamente sellado.
        .col-lg-4
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema6/9.png")
      .row.col-xl-11.m-auto(titulo="Enlatados")
        .col-lg-8.mb-4.mb-lg-0
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Nunca consuma un alimento enlatado vencido, porque corre el riesgo de padecer botulismo. 
            li.d-flex
              i.fas.fa-walking(style="color:#30169A;")
              div Descarte latas infladas, mal selladas, oxidadas, abolladas, con fugas, que estén goteando, o cuyo contenido esté espumoso o con mal olor. 
            li.d-flex.mb-0
              i.fas.fa-walking(style="color:#30169A;")
              div No pruebe el contenido de las latas para examinarlas, utilice los demás sentidos como el olfato y el tacto. 
        .col-lg-4
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema6/10.png")
    
    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema6/11.png")
      .col-lg-7(data-aos="fade-left")
        .p-4(style="background-color:#DAF2E4;border-radius:10px;")
          figure
            img(src="@/assets/curso/tema6/12.svg" style="max-width:100px;")
          p.mt-3.mb-0 Al momento de elaborar alimentos, es importante tener en cuenta el factor temperatura, de hecho, si están entre los 5 y los 65ºC, pueden aparecer agentes patógenos con facilidad; por tal razón, la comida debe cocinarse a una temperatura superior a los 65ºC para así matar todos los parásitos y bacterias, además esta debe almacenarse a una temperatura inferior a los 5ºC. 
    
    p.mt-4(data-aos="fade-right") Recomendaciones para la preparación de alimentos: 

    .tarjeta.tarjeta--azul.p-4.p-lg-5.pb-lg-4.cont_slyder_6_1.mt-4
      SlyderA(tipo="b")
        .row.col-xl-11.m-auto
          .col-lg-7.mb-4.mb-lg-0.text-white.pe-lg-5(style="place-self:center;")
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-walking
                div Los platos de comida deben ser preparados poco tiempo antes de su consumo. 
              li.d-flex.mb-0
                i.fas.fa-walking
                div En los casos en que se requiera preparar una comida para ser consumida en un plazo de tiempo mayor al recomendado, se debe almacenar en las condiciones de refrigeración y protección adecuadas, por ende se debe conservar la comida a una temperatura inferior a 5°C, preferiblemente en un recipiente cerrado para así evitar en gran proporción el contacto y el desarrollo de gérmenes. 
          .col-lg-5(style="place-self:center;")
            figure.col-8.col-md-7.col-lg-12.m-auto
              img(src='@/assets/curso/tema6/13.png')
        .row.col-xl-11.m-auto
          .col-lg-7.mb-4.mb-lg-0.text-white.pe-lg-5(style="place-self:center;")
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-walking
                div Las materias primas que se utilicen deben ser de confianza, no se aconseja utilizar productos cuyo contenido y calidad no esté asegurada. Si hay presencia de gérmenes en dichos productos, es muy probable que terminen contaminando los alimentos. 
              li.d-flex.mb-0
                i.fas.fa-walking
                div No deben cocinarse alimentos parcialmente, sino completamente, es decir tanto la superficie como el interior de los mismos. 
          .col-lg-5(style="place-self:center;")
            figure.col-8.col-md-7.col-lg-12.m-auto
              img(src='@/assets/curso/tema6/14.png')
        .row.col-xl-11.m-auto
          .col-lg-7.mb-4.mb-lg-0.text-white.pe-lg-5(style="place-self:center;")
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-walking
                div Debe tenerse especial cuidado al cocinar carnes como la de res, cerdo, pollo, pescado, entre otras, ya que si no se hace correctamente pueden permanecer en ellas microorganismos patógenos causantes de enfermedades debido a que la carne cruda representa un entorno muy favorable para los gérmenes, por ende se debe cocinar a temperaturas superiores a los 65ºC para así destruir dichos microbios. 
              li.d-flex.mb-0
                i.fas.fa-walking
                div Cuando se requiera preparar un alimento que no tiene que ser cocinado, como por ejemplo, frutas o legumbres, debe lavarse cuidadosamente con agua limpia para poder eliminar todos los gérmenes. 
          .col-lg-5(style="place-self:center;")
            figure.col-8.col-md-7.col-lg-12.m-auto
              img(src='@/assets/curso/tema6/15.png')
        .row.col-xl-11.m-auto
          .col-lg-7.mb-4.mb-lg-0.text-white.pe-lg-5(style="place-self:center;")
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-walking
                div Las verduras deben cocinarse a vapor para que no pierdan los nutrientes hidrosolubles. 
              li.d-flex.mb-0
                i.fas.fa-walking
                div Las carnes deben consumirse al punto, esto se logra cuando se hace a la plancha, cocidas o al horno. 
          .col-lg-5(style="place-self:center;")
            figure.col-8.col-md-7.col-lg-12.m-auto
              img(src='@/assets/curso/tema6/16.png')
        .row.col-xl-11.m-auto
          .col-lg-7.mb-4.mb-lg-0.text-white.pe-lg-5(style="place-self:center;")
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-walking
                div Las legumbres deben colocarse en remojo antes de cocinarse, porque presentan unas sustancias llamadas antinutrientes, los cuales pueden ser perjudiciales para el ser humano. 
              li.d-flex.mb-0
                i.fas.fa-walking
                div Los huevos deben lavarse en el momento en que van a ser empleados en las preparaciones, debido a que en el cascarón, muchas veces contienen excremento de ave. 
          .col-lg-5(style="place-self:center;")
            figure.col-8.col-md-7.col-lg-12.m-auto
              img(src='@/assets/curso/tema6/17.png')
    
    TituloDecorativo.mt-5(titulo="Precaución en la manipulación de alimentos")

    p(data-aos="fade-left") Es toda acción que implique un contacto físico con estos, incluyendo la utilización de manos o con utensilios de cocina (sartenes, ollas, platos y cubiertos). 
    p(data-aos="fade-right") A continuación se exponen las precauciones a tener en cuenta: 

    .row.mt-4
      .col-lg-3.col-md-6.mb-4(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_6_1.text-center(style="background-color:#EBEBFD;border-radius:15px;")
          figure.mt-4
            img(src="@/assets/curso/tema6/18.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Lave las manos con agua y jabón antes de entrar en contacto con los alimentos a preparar. 
      .col-lg-3.col-md-6.mb-4(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_6_1.text-center(style="background-color:#EBEBFD;border-radius:15px;")
          figure.mt-4
            img(src="@/assets/curso/tema6/19.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Enjuague las manos varias veces durante el proceso de manipulación. 
      .col-lg-3.col-md-6.mb-4(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_6_1.text-center(style="background-color:#EBEBFD;border-radius:15px;")
          figure.mt-4
            img(src="@/assets/curso/tema6/20.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Las superficies que van a entrar en contacto con la comida, como por ejemplo tablas de corte de verduras o carne, deben estar debidamente desinfectadas, para esto existen diversos productos. 
      .col-lg-3.col-md-6.mb-4(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_6_1.text-center(style="background-color:#EBEBFD;border-radius:15px;")
          figure.mt-4
            img(src="@/assets/curso/tema6/21.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Tenga en cuenta que los productos de limpieza presentan químicos como el cloro, por lo que se recomienda lavar con agua limpia, para así remover cualquier residuo químico. 
      .col-lg-3.col-md-6.mb-4(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_6_1.text-center(style="background-color:#EBEBFD;border-radius:15px;")
          figure.mt-4
            img(src="@/assets/curso/tema6/22.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Los utensilios de cocina deben estar debidamente desinfectados. 
      .col-lg-3.col-md-6.mb-4(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_6_1.text-center(style="background-color:#EBEBFD;border-radius:15px;")
          figure.mt-4
            img(src="@/assets/curso/tema6/23.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Las personas enfermas no deben manipular la comida a preparar, ya que pueden transmitir gérmenes contaminantes. 
      .col-lg-3.col-md-6.mb-4(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_6_1.text-center(style="background-color:#EBEBFD;border-radius:15px;")
          figure.mt-4
            img(src="@/assets/curso/tema6/24.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Si la persona que se dispone a manipular el alimento posee heridas visibles en las manos, debe cubrirlas con vendas, más sin embargo, lo preferible es que no entre en contacto hasta que se haya recuperado. 
      .col-lg-3.col-md-6.mb-4(data-aos="zoom-in")
        .h-100.p-4.p-lg-4.cont_6_1.text-center(style="background-color:#EBEBFD;border-radius:15px;")
          figure.mt-4
            img(src="@/assets/curso/tema6/25.svg" style="max-width:100px;display:inline;")
          p.mt-3.mb-4 Es muy importante que la comida preparada sea servida en platos perfectamente limpios y desinfectados, no deben tener restos de comida, ni de suciedad visible. 
    
    .tarjeta.color-primario.p-3(style="background-color:#30169A;" data-aos="zoom-in-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema6/26.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Preparaciones saludables
              p.text-small Lo invitamos a descargar el PDF Preparaciones saludables, en el cual, encontrará información sobre dos productos que hacen parte de nuestro día a día: el maíz y la yuca, y aprenderá a realizar deliciosas preparaciones saludables, a base de estos dos alimentos. 
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Preparaciones_saludables .pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download


   


      
</template>

<script>
import TituloDecorativo from '../components/TituloDecorativo.vue'
export default {
  name: 'Tema6',
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
.cont_slyder_6_1
  background: url(../assets/curso/tema6/27.png)
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
.cont_6_1
  background: url(../assets/curso/tema1/8.png)
  background-size: 100% 100%
</style>
