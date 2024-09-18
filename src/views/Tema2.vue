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
            .h-100.p-4.d-flex.flex-wrap.align-content-center(style="background-color:#EBEBFD;")
              p.mb-0 Las enfermedades ocasionadas por mala alimentación, son en la actualidad un problema de considerable importancia. Los hábitos alimenticios de las personas tienen una gran influencia en su salud, de hecho, el consumo excesivo de ciertos productos, así como la eliminación completa de algunos de estos, termina por ocasionar diversos padecimientos. 
          .col-lg-5.ps-lg-0
            figure.col-9.col-md-8.col-lg-12.m-auto
              img(src="@/assets/curso/tema2/2.svg")
        p.mt-4.mb-0(data-aos="fade-up") Como se ha explicado, el cuerpo humano necesita de muchos nutrientes para funcionar correctamente, por ejemplo, del consumo de carbohidratos, proteínas, vitaminas, minerales, entre otros. Cuando no se le aporta al cuerpo la cantidad suficiente de algunas de las sustancias mencionadas anteriormente, este tiende a sufrir desbalances nutricionales, haciendo que algunas de sus funciones básicas no se realicen adecuadamente, generándose enfermedades; igualmente cuando se ingieren cantidades excesivas de alimentos, es posible que surjan complicaciones debido a la superabundancia de nutrientes, así como componentes dañinos para el organismo. 
    
    p.mt-4(data-aos="fade-right") A continuación, se describen las principales enfermedades ocasionadas por la mala alimentación. 

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
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/4.png")
      .col-lg-8(data-aos="fade-left")
        p Los factores que influyen en el desarrollo del cáncer, son: 
        .p-4(style="background-color:#5357DE;border-radius:15px;")
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
        p Se genera por la acumulación excesiva de tejido graso; su manifestación característica se visualiza en el aumento del peso corporal. Esta enfermedad no transmisible es una de las más comunes en el mundo, debido a problemas en la alimentación y se produce cuando las personas tienen hábitos alimenticios en los que consumen una mayor cantidad de calorías de las que gastan. La caloría corresponde a la unidad de medición de la energía (obtenida de la ingesta de grasas o carbohidratos) aportada por los alimentos. 
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

    .row.mt-4
      .col-lg-6.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-right")
        .h-100.p-4.p-lg-5(style="background-color:#C3C4F4;border-radius:15px 0px 0px 15px;")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/tema2/26.svg" data-aos="zoom-in-up" data-aos-delay="500")
            .col(style="place-self:end;")
              h5.text-white.ps-3.pe-3.pt-1.pb-1(style="background-color:#30169A;max-width:fit-content;") Diabetes tipo I
          p.mt-4 También llamada diabetes juvenil, se caracteriza por hacer que la persona sea insulinodependiente; para esta suele utilizarse la sigla DMID (diabetes #[em mellitus] insulinodependiente). 
      .col-lg-6.mb-4.mb-lg-0.ps-lg-0(data-aos="fade-left")
        .h-100.p-4.p-lg-5(style="background-color:#5357DE;border-radius:0px 15px 15px 0px;")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/tema2/27.svg" data-aos="zoom-in-up" data-aos-delay="500")
            .col(style="place-self:end;")
              h5.text-white.ps-3.pe-3.pt-1.pb-1(style="background-color:#30169A;max-width:fit-content;") Diabetes tipo II
          p.mt-4.text-white O del adulto, en un principio no es insulinodependiente; sus siglas son DMNID (diabetes #[em mellitus] no insulinodependiente). 
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/28.png")
      .col-lg-8(data-aos="fade-left")
        p Además de los tipos mencionados anteriormente, existen otras modalidades de diabetes, entre las que se hallan: 
        ul.lista-ul.mt-3.mb-0.ps-4
          li.d-flex
            i.fas.fa-walking(style="color:#30169A;")
            div Diabetes secundarias asociadas a fármacos. 
          li.d-flex
            i.fas.fa-walking(style="color:#30169A;")
            div Por tolerancia alterada a los glúcidos.
          li.d-flex
            i.fas.fa-walking(style="color:#30169A;")
            div Gestacional.
          li.d-flex.mb-0
            i.fas.fa-walking(style="color:#30169A;")
            div Las ocasionadas por mala nutrición.
        p.mt-4.mb-0 Una persona que sufre de diabetes tiene complicaciones constantemente, padece de insuficiencia renal, de lesiones oculares, o de los nervios periféricos; asimismo, presenta una mayor incidencia de enfermedades coronarias, de arteriopatías en las extremidades de los miembros inferiores, o igualmente, puede comparecer de una trombosis cerebral. 
    
    p.mt-4(data-aos="fade-right") Las siguientes, son las recomendaciones para la dieta de un diabético: 

    .tarjeta.tarjeta--gris.p-4.mt-4.cont_slyder3
      PasosB.color-acento-botones
        .row.col-xl-11.m-auto.text-white.mt-4.mb-4(titulo="")
          .col-lg.mb-4.mb-lg-0(style="place-self:center;")
            p La dieta de un diabético difiere solo en algunos puntos con respecto a la de una dieta balanceada normal, de hecho las desigualdades que se presentan van más con la adaptación de algunas características fisiopatológicas de la diabetes y con el tipo de tratamiento que la persona recibe. 
          .col-lg-auto(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/30.svg')
        .row.col-xl-11.m-auto.text-white.mt-4.mb-4(titulo="")
          .col-lg.mb-4.mb-lg-0(style="place-self:center;")
            p El equilibrio de la dieta para la diabetes radica en el control y en el seguimiento de lo que se ingiere. Hoy en día, lo recomendable es no alejarse mucho de la dieta balanceada de una persona no diabética, pero sí es necesario que se mantengan ciertos niveles de nutrientes en la alimentación. 
          .col-lg-auto(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/31.svg')
        .row.col-xl-11.m-auto.text-white.mt-4.mb-4(titulo="")
          .col-lg.mb-4.mb-lg-0(style="place-self:center;")
            p Los glúcidos deben corresponder al 55 % de la dieta, dentro de estos, un 15 % debe estar constituido por hidratos de carbono simples, un 30 % por grasas (repartiendo equitativamente la cantidad de grasas saturadas, monoinsaturadas y poliinsaturadas) y un 10 % por proteína.
          .col-lg-auto(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/32.svg')
        .row.col-xl-11.m-auto.text-white.mt-4.mb-4(titulo="")
          .col-lg.mb-4.mb-lg-0(style="place-self:center;")
            p Es recomendable que la dieta tenga un buen contenido de fibra, debe presentar una restricción moderada al consumo de colesterol y de ácidos grasos saturados, de igual manera es necesario prohibir el consumo de alcohol. 
          .col-lg-auto(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/33.svg')
        .row.col-xl-11.m-auto.text-white.mt-4.mb-4(titulo="")
          .col-lg.mb-4.mb-lg-0(style="place-self:center;")
            p El aporte de calorías y proteínas de la dieta varía según el estado fisiológico de la persona, de su contextura, edad y sexo, si se encuentra en estado de embarazo, de la actividad física que realiza, entre otras; por eso se recomienda que un especialista oriente la dieta, de acuerdo a cada caso particular. 
          .col-lg-auto(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/34.svg')
        .row.col-xl-11.m-auto.text-white.mt-4.mb-4(titulo="")
          .col-lg.mb-4.mb-lg-0(style="place-self:center;")
            p El horario en el cual se ingieren los nutrientes, de este dependerá la normalización de los ciclos metabólicos. La distribución de los alimentos entre las distintas comidas del día y los refrigerios debe concordar con las preferencias dictaminadas por la dieta, la actividad física que realiza el individuo y con el requerimiento de insulina. Lo recomendable es comer seis veces al día, pero para los tratados con insulina es obligatorio; no se debe pasar mucho tiempo en ayuno debido a que esto puede ocasionar hipoglucemia. 
          .col-lg-auto(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/35.svg')
        .row.col-xl-11.m-auto.text-white.mt-4.mb-4(titulo="")
          .col-lg.mb-4.mb-lg-0(style="place-self:center;")
            p Los carbohidratos son esenciales en la dieta del diabético, principalmente los hidratos de carbono simples, los cuales se enmarcan dentro de la glucosa, la fructosa y la galactosa. Son de rápida absorción por lo cual es posible que provoquen incrementos hiperglucémicos si se ingieren descontroladamente. Se recomienda por ende limitar su consumo a únicamente un 15 % de la dieta, y en la medida de lo posible ingerirlos en forma de fruta; por otra parte, los hidratos de carbono complejos como los polisacáridos y los almidones son de lenta absorción, pudiéndose consumir en una mayor cantidad, pero más sin embargo no debe descuidarse su control. 
          .col-lg-auto(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/36.svg')
        .row.col-xl-11.m-auto.text-white.mt-4.mb-4(titulo="")
          .col-lg.mb-4.mb-lg-0(style="place-self:center;")
            p El consumo de fibra es muy recomendado, porque ayuda a disminuir la absorción de glúcidos, incluso si se lleva una dieta rica en fibra se pueden reducir los requerimientos de insulina. 
          .col-lg-auto(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/37.svg')

    p.mt-4(data-aos="fade-right") Existen muchos alimentos ricos en fibra, de hecho en el mercado se pueden encontrar suplementos dietarios que ayuden a alcanzar el nivel diario requerido de este componente, el cual usualmente está alrededor de los 30 gramos. Es aconsejable en la medida de lo posible, obtener la fibra únicamente mediante el consumo de vegetales y legumbres. 

    .row.mt-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Como complemento a la dieta, debe efectuarse un adecuado ejercicio físico, porque disminuye los requisitos de insulina y mejora el control metabólico; finalmente, se puede consumir lo que en el mercado se conoce como productos tolerados para diabéticos, en los que se ha sustituido el azúcar por fructosa, los edulcorantes artificiales y otros productos similares. Sin embargo, el anexo de uno de estos productos en la dieta debe ser supervisado por un médico, porque su consumo descontrolado puede modificar los niveles de glucemia e inclusive producir diarrea. 
      .col-lg-6(data-aos="fade-left")
        figure.m-auto.col-10.col-md-8.col-lg-12
          img(src="@/assets/curso/tema2/38.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_4 2.4  Enfermedades cardiovasculares 
    
    .row
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in-right" data-aos-delay="500" data-aos-easing="ease-out-cubic")
        figure.m-auto.col-6.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/39.svg")
      .col-lg-9(data-aos="fade-left")
        .row
          .col-lg-7.mb-4.mb-lg-0.pe-lg-0
            .h-100.p-4.d-flex.flex-wrap.align-content-center(style="background-color:#EBEBFD;")
              p.mb-0 Se originan debido a interrupciones de la corriente sanguínea con el corazón, o de aquella que va desde el corazón hacia las demás partes del cuerpo. Estas afecciones aparecen cuando se tienen altos niveles de grasa en el cuerpo y cuando se manejan malos hábitos de alimentación, ocasionando que en las arterias se acumulen diversas sustancias grasas como el colesterol. 
          .col-lg-5.ps-lg-0
            figure.col-9.col-md-8.col-lg-12.m-auto
              img(src="@/assets/curso/tema2/40.svg")
        .row.mt-4
          .col-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/tema2/41.svg")
          .col(style="place-self:center;")
            p.mb-0 Una de las principales enfermedades cardiovasculares es la arteriosclerosis, la cual se define como el endurecimiento y oclusión de las arterias; se ocasiona debido a la formación de una placa de depósito graso llamada ateroma. 
        p.mt-4.mb-0 Los niveles de colesterol en la sangre incrementan las probabilidades de infarto debido a que las obstaculizaciones en las venas hacen que el flujo que alimenta el miocardio (músculo del corazón) se vea disminuido drástica o sencillamente se detenga. Aparte de los infartos, también es posible sufrir una enfermedad llamada trombosis en la que se produce un coágulo en la sangre, generando una obstrucción en el flujo sanguíneo. 
    
    TituloDecorativo.mt-5(titulo="Estrategias para prevenir enfermedades cardiovasculares")

    p(data-aos="fade-right") La prevención de problemas cardiovasculares debe empezar desde la niñez, por medio de hábitos saludables en la alimentación y mediante una buena actividad física, evitando el consumo de alcohol y tabaco. 
    p(data-aos="fade-left") En la alimentación, es necesario tener en cuenta: 

    .row.mt-4
      .col-lg.col-md-12(data-aos="fade-right")
        .row
          .col-lg-4.mb-4(data-aos="zoom-in")
            .text-center.h-100.p-4.text-white.cont_hover_1(style="background-color:#30169A;border-radius:15px;")
              figure
                img(src="@/assets/curso/tema2/42.svg" style="max-width:100px;display:inline;")
              p.mt-4 Consumir carnes blancas como pollo, pescado y pavo.
          .col-lg-4.mb-4(data-aos="zoom-in")
            .text-center.h-100.p-4.text-white.cont_hover_1(style="background-color:#30169A;border-radius:15px;")
              figure
                img(src="@/assets/curso/tema2/43.svg" style="max-width:100px;display:inline;")
              p.mt-4 Preferir los derivados lácteos como leche, yogur y quesos bajos en grasa. 
          .col-lg-4.mb-4(data-aos="zoom-in")
            .text-center.h-100.p-4.text-white.cont_hover_1(style="background-color:#30169A;border-radius:15px;")
              figure
                img(src="@/assets/curso/tema2/44.svg" style="max-width:100px;display:inline;")
              p.mt-4 Aumentar el consumo de frutas y de verduras como la espinaca, la coliflor, la acelga y el brócoli, ricas en fibra y antioxidantes.
          .col-lg-4.mb-4(data-aos="zoom-in")
            .text-center.h-100.p-4.text-white.cont_hover_1(style="background-color:#30169A;border-radius:15px;")
              figure
                img(src="@/assets/curso/tema2/45.png" style="max-width:100px;display:inline;")
              p.mt-4 Comer leguminosas como lentejas y garbanzos, ya que tienen carbohidratos complejos. 
          .col-lg-4.mb-4(data-aos="zoom-in")
            .text-center.h-100.p-4.text-white.cont_hover_1(style="background-color:#30169A;border-radius:15px;")
              figure
                img(src="@/assets/curso/tema2/46.svg" style="max-width:100px;display:inline;")
              p.mt-4 Disminuir el consumo de sal y de alimentos procesados en este mineral. 
          .col-lg-4.mb-4(data-aos="zoom-in")
            .text-center.h-100.p-4.text-white.cont_hover_1(style="background-color:#30169A;border-radius:15px;")
              figure
                img(src="@/assets/curso/tema2/47.svg" style="max-width:100px;display:inline;")
              p.mt-4 Consumir poca carne de cerdo, cordero, cremas y productos de pastelería, en especial los fabricados con grasas saturadas. 
      .col-lg-auto.col-md-12(data-aos="fade-left" data-aos-delay="500" data-aos-easing="ease-out-cubic")
        figure.m-auto.col-6.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/48.png")



      

   


      
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
.cont_slyder3
  background: url(../assets/curso/tema2/29.png)
  background-size: cover
.linea-tiempo-c__header__btn, .linea-tiempo-c__header__btn--left, .linea-tiempo-c__header__btn--right, .pasos-b__header__btn--left, .pasos-b__header__btn--right
  border: 2px solid #FCA651
  background-color: #FCA651
.pasos-b__header__item__tittle
  color: #fff
.pasos-b__header__item__dot
  background-color: #fff
.pasos-b__header__item--before .pasos-b__header__item__dot
  border-color: #95DBB3
  background-color: #95DBB3
.pasos-b__header__item--active .pasos-b__header__item__line-container:before
  background-color: #95DBB3
.pasos-b__header__item--active .pasos-b__header__item__line-container:before
  background-color: #95DBB3
.pasos-b__header__item--before .pasos-b__header__item__line-container:before, .pasos-b__header__item--before .pasos-b__header__item__line-container:after
  background-color: #95DBB3
.cont_hover_1,.cont_hover_1 *
  transition: all .3s ease-in-out
.cont_hover_1:hover
  background-color: #EBEBFD !important
  cursor: pointer
  box-shadow: 0px 4px 35px rgba(0,0,0,.15)
.cont_hover_1:hover p
  color: #12263F !important
.slyder-a__bullets__item
  margin: 0 7px !important
</style>
