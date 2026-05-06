<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda de manera integral el proceso de pruebas de software dentro del desarrollo de sistemas, iniciando con el estudio de las metodologías tradicionales y ágiles y los marcos de referencia que orientan los proyectos de software; posteriormente, se analizan los fundamentos de las pruebas, sus tipos, niveles y procedimientos, junto con la planificación, técnicas, escenarios y casos de prueba. A lo largo del componente se profundiza en la gestión del proceso, el uso de herramientas, la ejecución y certificación del software, así como en la mejora continua y el refactoring, para finalmente integrar la elaboración de informes, la trazabilidad, el control de versiones y la automatización con prácticas de integración y entrega continua, fortaleciendo la calidad y confiabilidad del software desarrollado.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que organiza de forma progresiva el proceso de desarrollo y pruebas de software. Inicia con las metodologías de desarrollo, continúa con los fundamentos y la planificación de las pruebas, e integra las herramientas y la gestión del proceso. Finalmente, relaciona la ejecución, certificación y mejora continua con los informes, la trazabilidad y la automatización, mostrando cómo estos elementos se articulan para garantizar la calidad y evolución del software.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
