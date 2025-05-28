<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Referente celular
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") Toda forma de vida está basada en las células y por eso se toman como referencia o punto de partida para entender la vida. Es por esto, que la célula es esencial para estudiar y comprender los seres vivos, ya que todos los organismos están formados por células (según la teoría celular).
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Teoría celular moderna
    
    p.mb-5(data-aos="fade-down") La teoría celular moderna es una versión actualizada de la teoría celular clásica y establece los principios fundamentales sobre las células y su papel en los seres vivos.  

    .row.justify-content-center.align-items-center.mb-0.cajon--C01.p-4
      .col-12(data-aos="flip-up")
        .row.justify-content-center.align-items-center
          .col-lg-6.col-12.order-lg-2.order-2.mb-lg-0
            .row.justify-content-center.mb-0(data-aos="flip-up")
              .col-12.mb-3
                .tarjeta-avatar-b.h-100
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/temas/tema1/img02.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--C01.py-4(style= "width: 100%")
                    .p-4
                      h4 Unidad morfológica
                      p Todo ser vivo está constituido por células. 
          .col-lg-6.col-12.order-lg-1.order-1.mb-lg-0.p-4
            p(data-aos="fade-down") Esta teoría es un pilar fundamental de la biología, fue formulada en 1838 por los científicos Schielden y Schwann y ha sido ampliada con los avances en biología molecular y genética.
            p(data-aos="fade-down") Al respecto es importante conocer lo siguiente:

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Clasificación de las células

    p.mb-5(data-aos="fade-down") Las células se clasifican de acuerdo a su forma, tamaño y estructura, de la siguiente manera: 

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Según su forma

    .row.justify-content-center
      .col-12.col-lg-3.col-md-6.h-100.mb-md-3.mb-4(data-aos="fade-down")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/img03.jpg', alt='Imagen decorativa')
        h4 Esféricas
        p Células adiposas. 

      .col-12.col-lg-3.col-md-6.h-100.mb-md-3.mb-4(data-aos="fade-down")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/img04.jpg', alt='Imagen decorativa')
        h4 Estrelladas
        p Neuronas.

      .col-12.col-lg-3.col-md-6.h-100.mb-md-3.mb-4(data-aos="fade-down")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/img05.jpg', alt='Imagen decorativa')
        h4 Alargadas
        p Fibras musculares. 

      .col-12.col-lg-3.col-md-6.h-100.mb-md-3.mb-4(data-aos="fade-down")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/img06.jpg', alt='Imagen decorativa')
        h4 Isodiamétrica
        p células vegetales amorfas (sin forma). Ejemplo: amebas.

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Por su tamaño

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .row.justify-content-center        
          .col-xl-6.col-lg-6.col-md-6.col-12.mb-xl-0
            .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
              .indicador--hover(v-if="mostrarIndicador")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema1/img07.jpg", alt="")
              .crd_hover_txt--body
                h5.t1.mb-3 Macroscópicas
                h5.t2.mb-2 Macroscópicas
                p.mb-0 Aquellas que se aprecian a simple vista. Ejemplo: el huevo.

          .col-xl-6.col-lg-6.col-md-6.col-12.mb-xl-0
            .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
              .indicador--hover(v-if="mostrarIndicador")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema1/img08.jpg", alt="")
              .crd_hover_txt--body
                h5.t1.mb-3 Microscópicas
                h5.t2.mb-2 Microscópicas
                p.mb-0 Aquellas que se observan con ayuda del microscopio, siendo la unidad de medida la micra.

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 50px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Por su estructura y complejidad

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Procariota")
        .row.justify-content-center.p-4
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img09.jpg', alt='Imagen decorativa')
          .col-lg-4.order-lg-1.order-2
            p Células simples sin membrana nuclear, ni organelos citoplasmáticos, excepto ribosomas. 

      .py-3.py-md-4(titulo="Eucariota")
        .row.justify-content-center.p-4
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img10.jpg', alt='Imagen decorativa')
          .col-lg-4.order-lg-1.order-2
            p Células complejas con núcleo, pueden ser vegetales y animales.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Organelos celulares

    p(data-aos="fade-down") Los organelos presentes en las células, difieren según sean estas procariotas, eucariotas, animales o vegetales.
    p.mb-5(data-aos="fade-down") Para profundizar acerca de los organelos, acceda a cada uno de ellos para conocer su respectiva información:

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="11.2%" y="20.6%" numero="01")
            p.text-center También denominado pilis, se encarga de transmitir el material genético. 
             
          .tarjeta.tarjeta--blanca.p-3(x="35.5%" y="9.8%" numero="02")
            p.text-center Orgánulo donde se encuentra el material genético de la célula (no es un núcleo).
             
          .tarjeta.tarjeta--blanca.p-3(x="58%" y="9.8%" numero="03")
            p.text-center Gel interior de la célula que compone su cuerpo.
                           
          .tarjeta.tarjeta--blanca.p-3(x="79.8%" y="9.8%" numero="04")
            p.text-center Estructura cromosómica del ADN que se replica de forma independiente, junto al ADN de la bacteria. Algunas células carecen de plásmidos.
             
          .tarjeta.tarjeta--blanca.p-3(x="89.2%" y="48.7%" numero="05") 
            p.text-center Participantes de la síntesis de la proteína y poseedores del ARN ribosómico.             

          .tarjeta.tarjeta--blanca.p-3(x="80.2%" y="90.7%" numero="06") 
            p.text-center Membrana semipermeable, construida por un micoplasma, que tiene la función de separar el exterior de la célula de su interior.            

          .tarjeta.tarjeta--blanca.p-3(x="56.2%" y="90.7%" numero="07") 
            p.text-center Pared que brinda rigidez y protección a la célula y que, dependiendo de la bacteria, puede ser muy gruesa (bacterias Gram positivas) o muy delgada (batería Gram negativas).        

          .tarjeta.tarjeta--blanca.p-3(x="36.2%" y="90.7%" numero="08") 
            p.text-center Capa externa y rígida que sirve como protectora de la célula.           

          .tarjeta.tarjeta--blanca.p-3(x="11.2%" y="78.7%" numero="09")
            p.text-center Órgano anexo, unido a la membrana celular, que permite su motilidad.             

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-md-8.col-10.movil
        figure
          img(src='@/assets/curso/temas/tema1/img12.svg', alt='Imagen decorativa')


    p.mb-5(data-aos="fade-down") De igual manera, es importante conocer los organelos presentes en la célula vegetal y animal, ya que algunos de ellos tienen similitud y otros, diferencias:

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img13.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="62.2%" y="11.5%" numero="+")
            p.text-center Contiene el material genético que participa en la reproducción celular.
             
          .tarjeta.tarjeta--blanca.p-3(x="62.2%" y="20.5%" numero="+")
            p.text-center Ayudan a la célula en la fabricación de proteínas, en ellos se originan los ribosomas. 
             
          .tarjeta.tarjeta--blanca.p-3(x="67%" y="31.5%" numero="+")
            p.text-center Almacena y segrega proteínas sintetizadas en los ribosomas.
                           
          .tarjeta.tarjeta--blanca.p-3(x="67%" y="40.8%" numero="+")
            p.text-center Produce y segrega grasas. 
             
          .tarjeta.tarjeta--blanca.p-3(x="62.2%" y="51.7%" numero="+") 
            p.text-center Ayudan a la célula en la fabricación de proteínas.

          .tarjeta.tarjeta--blanca.p-3(x="62.2%" y="61.7%" numero="+") 
            p.text-center Completa la fabricación de compuestos procedentes del R.E. y los segrega a otras zonas de la célula o al exterior.

          .tarjeta.tarjeta--blanca.p-3(x="62.2%" y="71.7%" numero="+") 
            p.text-center Son las centrales energéticas de las células eucariotas. Forman ATP como resultado de la oxidación de compuestos orgánicos. (Respiración celular). 

          .tarjeta.tarjeta--blanca.p-3(x="62.2%" y="81.7%" numero="+")
            p.text-center Digieren el alimento en las células. Sus enzimas pueden destruir a la propia célula.

          .tarjeta.tarjeta--blanca.p-3(x="84.2%" y="91.8%" numero="+")
            p.text-center En su interior se produce la fotosíntesis, por la cual la energía solar se transforma en energía útil para la célula. 

          .tarjeta.tarjeta--blanca.p-3(x="66.2%" y="91.8%" numero="+")
            p.text-center Actúa como soporte Confiere protección y da forma a las células.

          .tarjeta.tarjeta--blanca.p-3(x="60.9%" y="91.8%" numero="+")
            p.text-center Protege la célula del medio. Transporta sustancias el interior o exterior de la célula. Controla el paso de sustancias entre el interior y el exterior de la célula y la aísla del medio.

          .tarjeta.tarjeta--blanca.p-3(x="28.5%" y="91.8%" numero="+")
            p.text-center Almacenan sustancia. Algunas tienen funciones digestivas, de transporte o de reserva.

          .tarjeta.tarjeta--blanca.p-3(x="14.5%" y="91.8%" numero="+")
            p.text-center Auxiliares en la formación durante la división celular.

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-auto.movil
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/img16.svg', alt='Imagen decorativa')
        a.anexo.mb-5(:href="obtenerLink('/downloads/Anexo_Organelos_presentes_en_la_célula_vegetal_y_animal.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Organelos presentes en la célula vegetal y animal.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Niveles de organización de los seres vivos

    p.mb-5(data-aos="fade-down") El mundo vivo puede organizarse en diferentes niveles: 

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img14.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="12%" y="65.5%" numero="01")
            p.text-center Se considera la mínima expresión de un ser vivo en cuanto forma y función.
             
          .tarjeta.tarjeta--blanca.p-3(x="33.5%" y="39.8%" numero="02")
            p.text-center Es la reunión de células de la misma clase.
             
          .tarjeta.tarjeta--blanca.p-3(x="60.5%" y="39.8%" numero="03")
            p.text-center Cuando se reúnen varios tejidos para cumplir una función en común. 
                           
          .tarjeta.tarjeta--blanca.p-3(x="83.8%" y="65.8%" numero="04")
            p.text-center Reunión de varios órganos que trabajan en equipo cumpliendo una función.
             
          .tarjeta.tarjeta--blanca.p-3(x="47.5%" y="80%" numero="05") 
            p.text-center Reunión de varios órganos que trabajan en equipo cumpliendo una función.

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-md-8.col-10.movil
        figure
          img(src='@/assets/curso/temas/tema1/img15.svg', alt='Imagen decorativa')


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
