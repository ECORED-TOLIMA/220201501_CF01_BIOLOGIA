<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Referente ecosistémico

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") En los sistemas del entorno vivo, existen relaciones entre los componentes vivos y no vivos, permitiendo un flujo de energía entre ellos.
    
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Clasificación de los factores abióticos del medio ambiente físico

    p.mb-5(data-aos="fade-down") Esta clasificación, se realiza de la siguiente manera:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img02.svg' alt='AvatarTop')
          h4.text-center Factores energéticos 
          p Son la fuente de energía que utilizan los seres vivos para llevar a cabo funciones vitales; puede iniciarse con la captación de luz solar para los organismos fotosintéticos o con la degradación de materia para algunas bacterias.

        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img03.svg' alt='AvatarTop')
          h4.text-center Factores climáticos 
          p Se refiere a los factores que regulan las condiciones climáticas en general.

        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img04.svg' alt='AvatarTop')
          h4.text-center La altitud
          p Es el factor determinado por la altura de un lugar con referencia al nivel del mar.

        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img05.svg' alt='AvatarTop')
          h4.text-center Latitud
          p Factor determinado por la distancia que hay desde el Ecuador hasta los polos y se mide con el astrolabio o el sextante.

        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img06.svg' alt='AvatarTop')
          h4.text-center Continentalidad o distancia al mar 
          p Es el factor que determina la lejanía o cercanía de océanos o mares, lo que influye en la temperatura de un lugar.

    p.mb-5(data-aos="fade-down") Los anteriores factores inciden sobre los elementos del clima como:

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img07.svg", alt="alt").img90.m-auto
          h4.text-center La temperatura 
          p.text-center.mb-0 Es el elemento del clima que indica la medida de calor de un lugar. Se mide con un instrumento llamado termómetro, donde se pueden apreciar los grados de calor o de frío.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img08.svg", alt="alt").img90.m-auto
          h4.text-center La humedad y precipitaciones 
          p.text-center.mb-0 Es el elemento del clima que indica la cantidad de vapor de agua que hay en el aire de un lugar.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img09.svg", alt="alt").img90.m-auto
          h4.text-center La presión 
          p.text-center.mb-0 Se refiere a la densidad o peso del aire en un lugar. Entre más cercanos se está al nivel del mar, es mayor la presión atmosférica.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img10.svg", alt="alt").img90.m-auto
          h4.text-center Los vientos
          p.text-center.mb-0 Es el elemento que indica los movimientos del aire en un lugar.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Factores bióticos
    
    p.mb-4(data-aos="fade-down") Los seres vivos se representan por niveles de organización, los cuales cumplen funciones específicas en un espacio geográfico. Cuando varios individuos se reúnen conforman una población, esta responde a factores ambientales y geográficos; entre ellas se tienen:
    
    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Comunidad biológica

    p(data-aos="fade-down") El concepto de comunidad, es más estrecho que el de ecosistema e implica necesariamente una ubicación geográfica común y funciones compartidas entre sus miembros. Sin embargo, la comunidad no es independiente del ecosistema; con mucha frecuencia la comunidad no tiene límites estrictamente definidos. Por ejemplo: los organismos que habitan un jardín o un bosque.
    p(data-aos="fade-down") Cualquier cambio que afecte o favorezca a una comunidad repercute sobre todos sus miembros. Por ello, el estudio de una comunidad refleja la situación de los organismos que la componen. 
    p.mb-5(data-aos="fade-down") La siguiente figura, es un ejemplo de lo anterior:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 11.
          span <i>Comunidad biológica.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema3/img11.svg', alt='Figura 11 que relaciona lo que significa una comunidad bilógica, la cual posee diferentes animales y un bosque.')
          figure.movil
            img(src='@/assets/curso/temas/tema3/img12.svg', alt='Figura 11 que relaciona lo que significa una comunidad bilógica, la cual posee diferentes animales y un bosque.')

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Ecosistemas

    p(data-aos="fade-down") Se define generalmente como el conjunto de los factores biocenosis o bióticos (organismos vivos) y los biotopos o abióticos (componentes sin vida), que interactúan en el mismo espacio y tiempo. 
    p.mb-5(data-aos="fade-down") En el concepto de ecosistema, se consideran las complejas interacciones que se dan entre organismos como plantas, bacterias, algas, animales, hongos y protozoos, entre otros, los cuales conforman la comunidad biológica. Además, se tienen en cuenta los flujos de energía y los materiales que recorren dicha comunidad. Estos pueden ser sostenibles, gracias a los ciclos biogeoquímicos, que cumplen los elementos más importantes como el carbono, el nitrógeno, el oxígeno y el fósforo.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-6.col-12.order-lg-1.order-2
            p(data-aos="fade-down") El flujo de energía en los ecosistemas se evidencia en primer nivel, a través de las cadenas alimenticias que parten de la luz del sol, permitiendo a las plantas realizar el proceso de fotosíntesis, por eso se denominan autótrofas. El segundo nivel corresponde a los herbívoros o consumidores de primer orden que como su nombre lo indica, se alimentan de plantas, a su vez los carnívoros se alimentan de animales diferentes a los de su especie, constituyendo el tercer nivel.
            .cajon.cajon.C02.color-primario.p-4
              p.mb-0 Adicionalmente, en algunos ecosistemas, se pueden encontrar los omnívoros que se alimentan de plantas y animales; y por último, pero no menos importante, están los saprofitos que se alimentan de materia orgánica en descomposición devolviendo y cerrando el ciclo y la transferencia de los nutrientes y energía.
          .col-lg-6.col-md-7.col-8.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center.mb-5(data-aos="flip-up")
              .col
                .titulo-sexto.color-acento-contenido
                  h5 Figura 12.
                  span <i>Ecosistema.</i>
              .row.justify-content-center
                .col
                  figure
                    img(src='@/assets/curso/temas/tema3/img13.svg', alt='Figura 12 que relaciona un ejemplo de un ecosistema, el cual representa uno acuático, con animales y plantas.')

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Flujos de energía

    p.mb-5(data-aos="fade-down") Hace relación a la energía a la energía que le brindan, tanto animales como plantas a los diversos tipos de animales en su cadena alimenticia, tal como se puede apreciar en la siguiente figura:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 13.
          span <i>Flujos de energía.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema3/img14.svg', alt='Figura 11 que relaciona lo que significa una comunidad bilógica, la cual posee diferentes animales y un bosque.')
          figure.movil
            img(src='@/assets/curso/temas/tema3/img15.svg', alt='Figura 11 que relaciona lo que significa una comunidad bilógica, la cual posee diferentes animales y un bosque.')

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Clases de ecosistemas

    p.mb-5(data-aos="fade-down") A continuación, se explica cada una de las clases de ecosistemas existentes:

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img17.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Acuáticos
            h5.t2.mb-2 Acuáticos
            p.mb-0 Son aquellos que se dan en presencia de agua, sea esta dulce o salada. Es decir, en la hidrósfera terrestre.

      .col-xl-3.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img18.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Terrestres 
            h5.t2.mb-2 Terrestres 
            p.mb-0 Se ubican en la zona terrestre de la biosfera, que es el espacio en el cual habitan todos los seres vivos. La biósfera va desde una capa fina del suelo, hasta aproximadamente 8 metros sobre la superficie de la planta.

      .col-xl-3.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img19.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Abiertos 
            h5.t2.mb-2 Abiertos 
            p.mb-0 En estos se da un intercambio de materia y energía con otros ecosistemas. No están restringidos.

      .col-xl-3.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-0(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img20.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Cerrados 
            h5.t2.mb-2 Cerrados 
            p.mb-0 Todas las interacciones ecológicas se dan al interior de los mismos. Así, no hay un flujo, ni intercambio de materia, ni de energía con otros ecosistemas.

    .row.justify-content-center
      .col-lg-8.col-12(data-aos="fade-up")
        .cajon.cajon.C02.color-primario.p-4
          p.mb-0.text-center Cuando un nivel o eslabón desaparece, se pone en riesgo todo el ecosistema.
              
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Ciclos biogeoquímicos

    .bloque-texto-g.bloque-texto-g--inverso.C01.p-3.p-sm-4.p-md-5.mb-0(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img16.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Al hablar de ciclo en el entorno ecosistémico, se hace referencia a un proceso circular en donde intervienen los seres vivos, la tierra y un proceso químico. Es un tipo de reciclaje que hace la naturaleza en el aprovechamiento de recursos como el agua, el calcio, el nitrógeno, oxígeno y el carbono, entre otros.
        br
        br

</template>

<script>
export default {
  name: 'Tema3',
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
