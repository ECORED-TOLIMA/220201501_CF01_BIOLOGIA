<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Referente organísmico
    
    .bloque-texto-g.bloque-texto-g--inverso.C01.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un referente organísmico en un entorno vivo, hace referencia al organismo como unidad completa de vida; es decir, un ser vivo que funciona como un todo integrado. Es una forma de analizar cómo interactúan los sistemas dentro de un ser vivo y cómo ese ser se relaciona con su entorno.
        br
        br

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Funciones vitales

    p(data-aos="fade-down") Son todos aquellos procesos que los organismos tienen que realizar de manera periódica para mantenerse con vida.
    p(data-aos="fade-down") Son comunes a todos los tipos de organismos vivos (a excepción de los virus), además de ser algunas de las características que más los diferencian de los seres inertes.
    p.mb-5(data-aos="fade-down") Por lo anterior, se invita a que acceda al siguiente video y conozca todo lo que tiene que ver con las funciones vitales: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vIejGKA0u8w?si=7HGfRI3BOZX0V9th" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Tipos de nutrición 

    p.mb-5(data-aos="fade-down") La siguiente figura sintetiza las clasificaciones de los tipos de nutrición: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <i>Clasificación de los tipos de nutrición.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img02.svg', alt='Figura 1 que contiene la explicación del proceso de nutrición de los autótrofos y los heterótrofos; destacando que en los primeros predominan los productores como las plantas y en los segundos los consumidores como los animales.')
          figure.movil
            img(src='@/assets/curso/temas/tema2/img03.svg', alt='Figura 1 que contiene la explicación del proceso de nutrición de los autótrofos y los heterótrofos; destacando que en los primeros predominan los productores como las plantas y en los segundos los consumidores como los animales.')

    p.mb-5(data-aos="fade-down") De acuerdo a la clasificación anterior, a continuación, se explica un poco sobre los productores:

    .row.mb-5
      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4
              h4.text-center Plantas
              p.text-center Seres vivos multicelulares que realizan fotosíntesis, tienen raíces, tallos y hojas, y producen su propio alimento usando la luz solar.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4
              h4.text-center Bacterias
              p.text-center Microorganismos unicelulares, sin núcleo definido (procariotas), que pueden vivir en casi cualquier ambiente y cumplir funciones beneficiosas o causar enfermedades. 

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4
              h4.text-center Algas 
              p.text-center Organismos acuáticos (unicelulares o multicelulares) que realizan fotosíntesis, pero no tienen raíces, tallos ni hojas verdaderos como las plantas.


    p.mb-5(data-aos="fade-down") Igualmente, se explican los tipos de animales considerados consumidores: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row(titulo="Herbívoro")
            .col-12.mb-0.mb-md-0
              p.mb-0 Son los que se alimentan de plantas. En la cadena trófica, son los consumidores primarios. Por ejemplo: la vaca y el oso panda, mientras que los que comen carne son consumidores secundarios. 
          .row(titulo="Carnívoro")
            .col-12.mb-0.mb-md-0
              p.mb-0 Son los que se alimentan a base de carne ya sea por depredación o consumo de carroña. A pesar de que existen muchas especies de animales carnívoros, algunas subespecies no son consumidoras exclusivas de carne. Por ejemplo: el tigre y el león.
          .row(titulo="Omnívoros")
            .col-12.mb-0.mb-md-0
              p.mb-0 Son los animales que se alimentan tanto de animales, como de las plantas. Entre los mamíferos están: el cerdo, el oso polar, el erizo y el perro. En las aves están: los cuervos, la urraca, los trepadores, etc. De igual manera, el ser humano es un ser vivo omnívoro.
          .row(titulo="Saprofitas")
            .col-12.mb-0.mb-md-0
              p.mb-0 Organismos que vive sobre materia orgánica en descomposición y se alimenta de ella. Por ejemplo: los hongos, setas, mohos y bacterias, que se encargan de la putrefacción.

      .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/img07.png', alt='Imagen decorativa')

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Tipos de respiración 

    p.mb-5(data-aos="fade-down") En las siguientes figuras, se relacionan los tipos de respiración en los seres vivos, explicando en cada uno su respectivo funcionamiento:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span <i>Clasificación de los tipos de nutrición.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img08.svg', alt='Figura 2 que explica el respectivo procedimiento que se da al momento de tener una respiración anaerobia; destacando que todo se da mediante una fermentación que contiene etanol y lactante, así como la glucólisis que presenta glucosa y piruvato.')
          figure.movil
            img(src='@/assets/curso/temas/tema2/img09.svg', alt='Figura 2 que explica el respectivo procedimiento que se da al momento de tener una respiración anaerobia; destacando que todo se da mediante una fermentación que contiene etanol y lactante, así como la glucólisis que presenta glucosa y piruvato.')

    p.mb-5(data-aos="fade-down") La molécula de glucosa en modo anaerobia sobrevive en ausencia de Oxígeno, pasa por un proceso de fermentación; es decir, que produce alcohol, dióxido de carbono y energía.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span <i>Respiración aerobia.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img10.svg', alt='Figura 3 que representa el proceso de respiración aerobia, el cual parte de una célula, luego pasar por la respiración celular y finalmente, interviene el ciclo de Krebs.')
          figure.movil
            img(src='@/assets/curso/temas/tema2/img11.svg', alt='Figura 3 que representa el proceso de respiración aerobia, el cual parte de una célula, luego pasar por la respiración celular y finalmente, interviene el ciclo de Krebs.')

    p(data-aos="fade-down") En modo aeróbico, en las mitocondrias se libera de la glucosa, energía con ayuda del oxígeno dando como resultado 38 ATP, dióxido de carbono y agua. 
    p.mb-5(data-aos="fade-down") A continuación, se presenta la respiración a escala de los seres vivos, podrá conocer su tipo de respiración y la forma en la que la realiza: 

    .tarjeta.tarjeta--BG01.p-md-5.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Amiba
            p <b>Tipo de respiración:</b> difusión a través de la membrana celular. 
            p <b>Forma de realización de la respiración:</b> los gases atraviesan la membrana celular.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img12.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Lombriz de tierra
            p <b>Tipo de respiración:</b> cutánea.
            p <b>Forma de realización de la respiración:</b> se lleva a cabo a través de la piel. Algunos animales usan este órgano para realizar el intercambio gaseoso, estos son los anélidos y anfibios.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img13.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Insecto
            p <b>Tipo de respiración:</b> traqueal.
            p <b>Forma de realización de la respiración:</b> se presenta en insectos y arácnidos, el intercambio gaseoso se da por medio de una serie de tubos llamados tráqueas que tienen agujeros que conectan al exterior llamados estigmas estos permiten el ingreso y egreso del aire.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img14.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Pez
            p <b>Tipo de respiración:</b> branquial.
            p <b>Forma de realización de la respiración:</b> se presenta en animales acuáticos es decir que toman el oxígeno del agua de su medio, para este intercambio poseen branquias.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img15.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Paloma
            p <b>Tipo de respiración:</b> pulmonar con sacos aéreos.
            p <b>Forma de realización de la respiración:</b> se presenta en las aves, los sacos aéreos se llenan de aire que proviene de los bronquios donde se realiza el intercambio gaseoso.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img16.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Frijol
            p <b>Tipo de respiración:</b> estomas con sacos aéreos.
            p <b>Forma de realización de la respiración:</b> las plantas igual que los animales respiran: tomando oxígeno del aire y expulsando dióxido de carbono a través de las estomas.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img17.jpg', alt='Imagen decorativa')

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Tipos de circulación

    p.mb-5(data-aos="fade-down") En el reino animal se presentan dos tipos de circulación, denominados abiertos y cerrados.

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg.m-1(data-aos="fade-left")
            .row
              .col-12.px-auto
                figure
                  img(src='@/assets/curso/temas/tema2/img18.jpg')
              .col-12
                .cajon.cajon--C02.p-4
                  p #[b Abiertos]
                  p.mb-0 La sangre va por unos tubos hacia una laguna central o senos.
                  
          .col-lg.m-1(data-aos="fade-right")
            .row
              .col-12.px-auto
                figure
                  img(src='@/assets/curso/temas/tema2/img19.jpg')
              .col-12
                .cajon.cajon--C02.p-4
                  p #[b Cerrados]
                  p.mb-0 Hace referencia a un sistema de vasos sanguíneos en donde la sangre sólo pasa por una sola vez.

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Tipos de productos de desecho

    p.mb-5(data-aos="fade-down") A continuación, se presenta una tabla con la explicación acerca de los productos de desecho en los seres vivos:

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <em>Órganos implicados en la excreción</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(style= "width: 24%") Productos de desecho 
                th(style= "width: 19%") Origen del producto 
                th(style= "width: 19%") Órgano productor
                th(style= "width: 19%") Órgano de excreción 
                th(style= "width: 19%") Medio excretor 
            tbody
              tr
                td(style="background-color: #F6F6F6") Urea.
                td(style="background-color: #F6F6F6") Por la degradación de aminoácidos.
                td(style="background-color: #F6F6F6") Hígado. 
                td(style="background-color: #F6F6F6") Riñones.
                td(style="background-color: #F6F6F6") Orina.

              tr
                td Ácido úrico. 
                td Por la degradación de las purinas. 
                td Hígado. 
                td Riñones.
                td Orina.

              tr
                td(style="background-color: #F6F6F6") Pigmentos biliares. 
                td(style="background-color: #F6F6F6") Por la degradación de la hemoglobina. 
                td(style="background-color: #F6F6F6") Hígado.
                td(style="background-color: #F6F6F6") Aparato digestivo. 
                td(style="background-color: #F6F6F6") Heces.

              tr
                td Agua.
                td Respiración celular.
                td Conjunto de células del organismo.
                td 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Riñones.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Piel. 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Pulmones. 
                td
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Orina.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Sudor.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Vapor de agua.

              tr
                td(style="background-color: #F6F6F6") CO2. 
                td(style="background-color: #F6F6F6") Respiración celular. 
                td(style="background-color: #F6F6F6") Conjunto de células del organismo.
                td(style="background-color: #F6F6F6") Pulmones. 
                td(style="background-color: #F6F6F6") Aire espirado. 

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Funciones de relación

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img20.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La adaptación y la forma de relacionarse los seres vivos, constituyen otra de las funciones vitales que permiten su supervivencia.
          br
          br
          | Los receptores son células nerviosas que tienen como tarea, percibir los estímulos y generar la respuesta adecuada, para tal efecto interpretan el estímulo, ya sea mecánico, químico o térmico, entre otros, para enviarlo a través de un impulso nervioso.

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Sistema musculoesquelético

    p.mb-5(data-aos="fade-down") Otra forma de relación de los seres vivos, se da a partir de su forma, estabilidad y movimiento. El sistema musculoesquelético contiene células musculares, cartilaginosas y óseas que pertenecen al tejido conectivo.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span <i>Sistema musculoesquelético.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img21.svg', alt='Figura 4 que contiene tres imágenes que representan el sistema musculoesquelético en el hombre y en la mujer.')
          figure.movil
            img(src='@/assets/curso/temas/tema2/img22.svg', alt='Figura 4 que contiene tres imágenes que representan el sistema musculoesquelético en el hombre y en la mujer.')

    p.mb-5(data-aos="fade-down") Partiendo de lo anterior, se da una indicación de los tipos de huesos y su ubicación en el sistema esquelético: 

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img23.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="22%" y="10.5%" numero="01")
            p.text-center Omóplato.
             
          .tarjeta.tarjeta--blanca.p-3(x="77%" y="10.5%" numero="02")
            p.text-center Fémur.
             
          .tarjeta.tarjeta--blanca.p-3(x="77%" y="60%" numero="03")
            p.text-center Vértebras cervicales.
                           
          .tarjeta.tarjeta--blanca.p-3(x="22%" y="60%" numero="04")
            p.text-center Martillo, yunque y estribo.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-md-8.col-10.movil
        figure
          img(src='@/assets/curso/temas/tema2/img24.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") De igual manera, se relaciona la siguiente figura que representa el tejido muscular:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span <i>Tejido muscular.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img25.svg', alt='Figura 5 que representa por medio de tres imágenes que están en diferentes ángulos, la composición del tejido muscular, destacando que existe un tejido liso y un tejido cardíaco.')
          figure.movil
            img(src='@/assets/curso/temas/tema2/img26.svg', alt='Figura 5 que representa por medio de tres imágenes que están en diferentes ángulos, la composición del tejido muscular, destacando que existe un tejido liso y un tejido cardíaco.')

    p.mb-5(data-aos="fade-down") Existen tres clases de tejido muscular: 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img27.svg", alt="alt").img90.m-auto
          h4.text-center Tejido liso
          p.text-center.mb-0 Constituye las paredes de los órganos huecos.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img28.svg", alt="alt").img90.m-auto
          h4.text-center  Tejido estriado
          p.text-center.mb-0 Presenta como su nombre lo indica, estrías o fibras transversales.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img29.svg", alt="alt").img90.m-auto
          h4.text-center Tejido cardiaco
          p.text-center.mb-0 Tiene una mezcla entre el liso y el estriado, todos funcionan de manera involuntaria.

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Funciones de relación

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-7.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
            p(data-aos="fade-down") Las neuronas son las células especializadas del sistema nervioso, que tienen como función conducir el impulso nervioso, a través de señales eléctricas. Este sistema se va complejizando a medida que se avanza en la escala evolutiva de los animales. 
            p(data-aos="fade-down") Los receptores captan los estímulos externos e internos, procesando la información y generando diferentes tipos de respuestas. 
            p(data-aos="fade-down") Los órganos de los sentidos son los primeros receptores que determinan ciertas características al entorno inmediato a ellos, como sensibilidad a la luz, cambios de temperatura, diferenciación de sabores y texturas entre otras permitiendo una respuesta ante el estímulo. 
            
          .col-lg-5.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img30.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span <i>Sentidos.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img31.svg', alt='Figura 6 que muestra un proceso cuando los sentidos entran en estímulos. Como por ejemplo, una pluma rosando la mano o una puntilla clavada en un dedo.')
          figure.movil
            img(src='@/assets/curso/temas/tema2/img32.svg', alt='Figura 6 que muestra un proceso cuando los sentidos entran en estímulos. Como por ejemplo, una pluma rosando la mano o una puntilla clavada en un dedo.')

    p.mb-5(data-aos="fade-down") Como se puede evidenciar, en la siguiente figura se aprecian autopistas sensoriales y nerviosas motoras desde un estímulo a la corteza sensorial: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span <i> Autopistas sensoriales y nerviosas motoras.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img33.svg', alt='Figura 7 que contiene una simulación de autopistas sensoriales y nerviosas motoras, en el sistema nervioso central y el sistema nervioso periférico.')
          figure.movil
            img(src='@/assets/curso/temas/tema2/img34.svg', alt='Figura 7 que contiene una simulación de autopistas sensoriales y nerviosas motoras, en el sistema nervioso central y el sistema nervioso periférico.')

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Sistema endocrino

    p(data-aos="fade-down") Las hormonas son el objeto de estudio de este apartado del sistema de relación, se definen como secreciones de órganos y tejidos de los seres vivos que pasan a la sangre para regular funciones específicas como crecimiento, metabolismo, desarrollo y maduración de órganos sexuales, etc. En sitios alejados de su punto de formación, presenta similitudes con el sistema nervioso en cuanto a que abarca todo el organismo a través de una red y diferencias en cuanto a que en vez de utilizar estímulos eléctricos usa los químicos.
    p.mb-5(data-aos="fade-down") Por lo anterior, por medio de las siguientes figuras, se puede apreciar el funcionamiento dl sistema endocrino, tanto masculino, como femenino: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span <i>Sistema endocrino masculino.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img35.svg', alt='Figura 8 que relaciona los órganos que están presentes dentro del sistema endocrino masculino.')
          figure.movil
            img(src='@/assets/curso/temas/tema2/img36.svg', alt='Figura 8 que relaciona los órganos que están presentes dentro del sistema endocrino masculino.')

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span <i>Sistema endocrino femenino.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img37.svg', alt='Figura 9 que relaciona los órganos que están presentes dentro del sistema endocrino femenino.')
          figure.movil
            img(src='@/assets/curso/temas/tema2/img38.svg', alt='Figura 9 que relaciona los órganos que están presentes dentro del sistema endocrino femenino.')

    p.mb-5(data-aos="fade-down") Como complemento de lo anterior, a continuación, se relaciona una tabla explicativa de las glándulas y sus respectivas funciones: 

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span <em>Órganos implicados en la excreción</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(style= "width: 30%") Glándula
                th(style= "width: 70%") Función 
                
            tbody
              tr
                td(style="background-color: #F6F6F6") Hipófisis. 
                td(style="background-color: #F6F6F6") Controla todo el sistema endocrino actúa sobre el crecimiento y maduración de las gónadas. 

              tr
                td Tiroides. 
                td Regula procesos metabólicos. 

              tr
                td(style="background-color: #F6F6F6") Paratiroides. 
                td(style="background-color: #F6F6F6") Regula la concentración de sales en la sangre. 

              tr
                td Páncreas. 
                td Regula la concentración de glucosa en la sangre. 

              tr
                td(style="background-color: #F6F6F6") Suprarrenales.
                td(style="background-color: #F6F6F6") Aceleran el metabolismo ayudan en el manejo de las emociones. 

              tr
                td Gónadas. 
                td Producción de óvulos en la hembra y de espermatozoides en el macho. 

              tr
                td(style="background-color: #F6F6F6") Ovarios. 
                td(style="background-color: #F6F6F6") Producen los óvulos y las hormonas sexuales. 
                

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 La reproducción

    p(data-aos="fade-down") La reproducción es un proceso biológico que permite la generación de nuevos seres vivos. Según el mecanismo por el que ocurre la reproducción puede ser sexual o asexual. 
    p.mb-5(data-aos="fade-down") De acuerdo a lo anterior, la siguiente figura, relaciona por medio de un mapa conceptual, en qué consiste la reproducción en los seres vivos:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 10.
          span <i>Reproducción en los seres vivos.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img39.svg', alt='Figura 10 que contiene un mapa conceptual que explica el proceso de reproducción sexual y asexual en los seres vivos.')
          figure.movil
            img(src='@/assets/curso/temas/tema2/img40.svg', alt='Figura 10 que contiene un mapa conceptual que explica el proceso de reproducción sexual y asexual en los seres vivos.')

    p.mb-5(data-aos="fade-down") Partiendo de la figura anterior, a continuación, se relacionan los actores presentes en el proceso asexual:

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Bipartición")
                .col-12.mb-4.mb-md-0
                  p.mb-0 La fisión binaria es el método por el cual los procariontes (bacterias y arqueas) y algunos protozoarios, producen nuevos individuos que son genéticamente idénticos al organismo parental. En este caso, el material genético se duplica para luego separarse en dos células hijas con la misma identidad genética.

              .row(numero="2" titulo="Gemación")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Es una forma de reproducción asexual donde el organismo produce uno o más brotes o yemas, que crecen y luego se separan para formar un nuevo organismo. Organismos que se reproducen de esta forma son las levaduras, las hidras de agua dulce y las anémonas de mar.

              .row(numero="3" titulo="Esporulación")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Es una forma de reproducción asexual que consiste en la formación de células reproductoras o esporas, de las cuales se puede originar un nuevo individuo. Se presenta en los mohos.

              .row(numero="4" titulo="Mitosis")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Proceso de reproducción de una célula que consiste, fundamentalmente, en la división longitudinal de los cromosomas y en la división del núcleo y del citoplasma; como resultado se constituyen dos células hijas con el mismo número de cromosomas y la misma información genética que la célula madre.

              .row(numero="5" titulo="Injerto")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Se une un fragmento de tallo a otra planta de una variedad diferente.

              .row(numero="6" titulo="Estaca")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Se corta un trozo del tallo de la planta madre para que produzca raíces y origine una nueva planta.

              .row(numero="7" titulo="Acodo")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Se dobla una rama se introduce en el suelo.
          .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img41.png', alt='Imagen decorativa')

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Reproducción en animales

    p.mb-5(data-aos="fade-down") A continuación, se relaciona información acerca de los productos de desecho en los seres vivos:

    AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta tarjeta--C03")(data-aos="flip-up")
      .row(titulo="Poríferos")
        .col-md-5.mb-4.mb-md-0.px-5
          p <b>Tipo de reproducción:</b> gemación.
          p <b>Tipo de fecundación:</b> no aplica.
          p <b>Organismos:</b> corales.
          p <b>Otras características:</b> forman colonias.

        .col-md-7
          figure
            img(src='@/assets/curso/temas/tema2/img42.jpg', alt='Imagen decorativa')

      .row(titulo="Anélidos")
        .col-md-5.mb-4.mb-md-0.px-5
          p <b>Tipo de reproducción:</b> sexual – hermafroditismo.
          p <b>Tipo de fecundación:</b> interna.
          p <b>Organismos:</b> lombriz de tierra.
          p <b>Otras características:</b> también se reproducen asexualmente.

        .col-md-7
          figure
            img(src='@/assets/curso/temas/tema2/img43.jpg', alt='Imagen decorativa')

      .row(titulo="Platelmintos")
        .col-md-5.mb-4.mb-md-0.px-5
          p <b>Tipo de reproducción:</b> sexual – hermafroditismo.
          p <b>Tipo de fecundación:</b> interna.
          p <b>Organismos:</b> planarias.
          p <b>Otras características:</b> también se reproducen asexualmente.

        .col-md-7
          figure
            img(src='@/assets/curso/temas/tema2/img44.jpg', alt='Imagen decorativa')

      .row(titulo="Moluscos")
        .col-md-5.mb-4.mb-md-0.px-5
          p <b>Tipo de reproducción:</b> sexual – hermafroditismo.
          p <b>Tipo de fecundación:</b> interna.
          p <b>Organismos:</b> caracol.
          p <b>Otras características:</b> también se reproducen asexualmente.

        .col-md-7
          figure
            img(src='@/assets/curso/temas/tema2/img45.jpg', alt='Imagen decorativa')


</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
