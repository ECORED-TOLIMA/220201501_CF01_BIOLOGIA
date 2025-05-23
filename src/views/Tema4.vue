<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Biotecnología

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El término fue establecido por el ingeniero Húngaro Karl Ereky en 1919, la cual es considerada como alta tecnología, conformada por muchas disciplinas como la biología, bioquímica, genética, virología, agronomía, ecología, ingeniería, física, química, medicina, farmacología, veterinaria, entre otras.
          br
          br
          | Abarca técnicas como cultivo de células y tejidos, uso de enzimas, fermentación microbiana, procesos como la transformación, la clonación de frutales, procesos biotecnológicos de la cerveza, entre muchos otros que la hacen calificar como una de las posibles soluciones para prevenir daños ambientales actuales.

    p.mb-5(data-aos="fade-down") Partiendo de lo anterior, es importante que acceda al siguiente video, el cual, explica como la industria biotecnológica se ha convertido en una oportunidad para los países en desarrollo como Colombia, donde se implementan cultivos In vitro en el departamento del César con el apoyo del SENA.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ZUl0_JrzXrw?si=HbZTPlbUW-tpGKi-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-2.order-2
            p(data-aos="fade-down") Esta ciencia ha sido aplicada en algunos sectores como el económicos y ambiental, generando una serie de productos de mejor calidad y más amigables con el medio ambiente. Ha logrado diversos avances en la salud, como producir nuevos medicamentos o mejorar diagnóstico de enfermedades como el sida.
            .cajon.cajon.C02.color-primario.px-4.py-3
              p.mb-0 Existen numerosos conceptos de la biotecnología, una de las primeras definiciones aceptadas internacionalmente para biotecnología es la publicada en 1982 por la Organización para la Cooperación y el Desarrollo Económico (OCDE), utilizada por Thieman (2009), donde se define como “la aplicación de los principios de la ciencia y la ingeniería al tratamiento de materias por agentes biológicos en la producción de bienes y servicios” (pág. 25).
          .col-lg-4.col-md-7.col-8.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center.mb-5(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema4/img02.svg', alt='Imagen decorativa')

                  
    p.mb-5(data-aos="fade-down") Para complementar lo anterior, el siguiente video, trata sobre el desarrollo de productos biotecnológicos en Colombia: 

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-down")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/kuEIjDn_-_M?si=BJ9dj0dSxkfScB7S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Ventajas y desventajas

    p.mb-5(data-aos="fade-down") La biotecnología es una ciencia de amplio espectro y puede ser beneficiosa en su aplicación para solucionar muchas problemáticas y mejoras de otras, pero también puede presentar algunas desventajas. A continuación, se describen las más significativas:

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Ventajas

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/temas/tema4/img03.svg' alt='AvatarTop')
        h4.text-center Mejora la salud 
        p.text-center Demostrando que ha contribuido con investigaciones y generación de medicamentos que favorecen la calidad de vida, con respecto a algunas enfermedades. Un ejemplo es la creación de microorganismos para sintetizar las cadenas formadoras de insulina.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/temas/tema4/img04.svg' alt='AvatarTop')
        h4.text-center Reduce el hambre
        p.text-center Ya que gracias a esta se puede cultivar en terrenos que no eran cultivables por condiciones del suelo.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/temas/tema4/img05.svg' alt='AvatarTop')
        h4.text-center Incrementa la flexibilidad en la forma de cultivos
        p.text-center Porque gracias a la biotecnología se han logrado cultivos mejorados y resistentes a plagas.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/temas/tema4/img06.svg' alt='AvatarTop')
        h4.text-center Ayuda a reducir la contaminación ambiental
        p.text-center Ya que contribuye a la descontaminación por residuos en el medio ambiente, tratamiento de aguas residuales con bacterias, limpieza de hidrocarburos aplicando microorganismos, entre otros.

    p.mb-5(data-aos="fade-down") El siguiente video de Orbiotec, muestra a una empresa de Villavicencio (Colombia) que desarrolla productos biotecnológicos que reducen el impacto ambiental de cultivos agrícolas. Esto, ayuda a complementar el conocimiento sobre las ventajas del tema:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/6F8leCVKHXc?si=jOPNaxNL062NyDmm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Desventajas

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.mb-3
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img07.svg' alt='AvatarTop').img150
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .px-4.py-5
              p.mb-0 Podría ser usada como armas biológicas de destrucción masiva. 

      .col-lg-10.mb-3
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img08.svg' alt='AvatarTop').img150
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .px-4.py-5
              p.mb-0 A pesar de que la biotecnología actúa favorablemente, no se conoce a ciencia cierta si con el transcurrir del tiempo el introducir microorganismos diferentes al medio, puedan tener consecuencias posteriores negativas, provocar daños colaterales como afectar la evolución de las especies y sus relaciones con el medio o que daños puede producir al medio ambiente los cultivos modificados o la afectación que puede tener en el ser humano cualquier modificación genética.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Aplicaciones


    p.mb-5(data-aos="fade-down") La aplicación de la biotecnología no es nueva su aplicación viene desde tiempos remotos en la historia de la humanidad. 

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .cajon.cajon.C03.color-secundario.p-4
          .row.justify-content-center
            .col-lg-9.col-12.order-lg-1.order-2(data-aos="fade-down")      
              h4 Ejemplo:
              p.mb-0 Fermentación de granos de cereales para producir una bebida alcohólica de una aldea neolítica de Jiahu China 7000 a. C. o producción de pan con levadura en Egipto 2000-1200 a. C. 
            .col-auto.order-lg-2.order-1(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema4/img09.svg', alt='Imagen decorativa')

    p(data-aos="fade-down") La aplicación de biotecnología es muy diversa, se aplica en farmacia, medicina, tecnología de los alimentos, veterinaria, tratamiento de residuos y la agricultura.
    p.mb-5(data-aos="fade-down") De acuerdo al área de aplicación, esta presenta una clasificación determinada por colores, así: 

    .row.mb-5
      .col-lg-10.col-12
        LineaTiempoE.color-acento-contenido
          .row(titulo="01")
            .col-lg-2.mb-3.mb-lg-0.col-4
              figure(data-aos="flip-up")
                img.img200(src='@/assets/curso/temas/tema4/img10.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0(data-aos="fade-down")
              h5 Biotecnología roja
              p.mb-0 Asociada a la salud animal seres humanos y vegetal. Ejemplo: producción de antibióticos. 

          .row(titulo="02")
            .col-lg-2.mb-3.mb-lg-0.col-4
              figure(data-aos="flip-up")
                img.img200(src='@/assets/curso/temas/tema4/img11.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0(data-aos="fade-down")
              h5 Biotecnología blanca 
              p.mb-0 Vinculada a los procesos industriales. Ejemplo: producción de nuevas energías. 

          .row(titulo="03")
            .col-lg-2.mb-3.mb-lg-0.col-4
              figure(data-aos="flip-up")
                img.img200(src='@/assets/curso/temas/tema4/img12.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0(data-aos="fade-down")
              h5 Biotecnología verde 
              p.mb-0 Aplicada al sector agrícola y ambiental, esta trata de mejorar procesos en la agricultura, ganadería, entre otros; siendo amigable con el medio ambiente y contribuyendo a una producción limpia. Ejemplo: creación de biofertilizantes, aplicada a la biorremediación (aplicación de microorganismos para destrucción de contaminantes ambientales).

          .row(titulo="04")
            .col-lg-2.mb-3.mb-lg-0.col-4
              figure(data-aos="flip-up")
                img.img200(src='@/assets/curso/temas/tema4/img13.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0(data-aos="fade-down")
              h5 Biotecnología azul 
              p.mb-0 Relacionada con el mundo marino y organismos acuáticos, exploración y explotación donde el uso de estos conlleva a buscar alternativas de solución a las problemáticas que se puedan presentar.

    p.mb-5(data-aos="fade-down") Dependiendo de las necesidades que surjan y nuevas aplicaciones, también nacerán nuevos colores en la clasificación de las biotecnologías, como, por ejemplo:

    .row.mb-0
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon--C01.p-4.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema4/img14.svg' alt="Imagen decorativa")
          .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon--C02.p-4.h-100
              h4 Biotecnología gris 
              p.mb-0 Relacionadas con el manejo de residuos. 
          
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon--C01.p-4.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema4/img15.svg' alt="Imagen decorativa")
          .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon--C02.p-4.h-100
              h4 Biotecnología dorada 
              p.mb-0 Vinculada a las herramientas informáticas.

      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon--C01.p-4.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema4/img16.svg' alt="Imagen decorativa")
          .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon--C02.p-4.h-100
              h4 Biotecnología púrpura 
              p.mb-0 Estudia la parte legal de la biotecnología.

      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon--C01.p-4.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema4/img17.svg' alt="Imagen decorativa")
          .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon--C02.p-4.h-100
              h4 Biotecnología amarilla 
              p.mb-0 Dedicada a la búsqueda de mejoras de los productos.

      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon--C01.p-4.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema4/img18.svg' alt="Imagen decorativa")
          .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon--C02.p-4.h-100
              h4 Biotecnología marrón 
              p.mb-0 Se enfoca en el tratamiento de los suelos desérticos, mediante la aplicación de los microorganismos aplicados.

      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon--C01.p-4.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema4/img19.svg' alt="Imagen decorativa")
          .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon--C02.p-4.h-100
              h4 Biotecnología negra 
              p.mb-0 Investiga sobre aquellos microorganismos que son causantes de enfermedades y por lo tanto, resulta ser una biotecnología dedicada a producir armas biológicas.

      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon--C01.p-4.h-100
              img.w-100.my-auto(src='@/assets/curso/temas/tema4/img20.svg' alt="Imagen decorativa")
          .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon--C02.p-4.h-100
              h4 Biotecnología naranja 
              p.mb-0 Muy importante en estos momentos, ya que es la que se vincula con la enseñanza de la biotecnología para producir los bienes y servicios para satisfacer las necesidades actuales.
</template>

<script>
export default {
  name: 'Tema4',
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
