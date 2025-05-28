<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El entorno vivo estudia a los seres vivos, desde su nivel celular hasta su relación con el ambiente. Incluye la estructura y funciones de las células, las funciones vitales como nutrición y reproducción, la interacción con factores bióticos y abióticos en los ecosistemas, así como el uso de la biotecnología para mejorar la vida, considerando sus beneficios y riesgos.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo Entorno vivo, se parte del análisis del referente celular, el cual explica por medio de teoría y práctica lo relacionado con los procesos celulares; luego se aborda el referente organísmico como una unidad completa; seguidamente se apropia el referente ecosistémico con los factores y componente vivos y no vivos; finalmente, se trata la biotecnología por medio de una serie de ventajas y desventajas, así como su proceso de aplicación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
