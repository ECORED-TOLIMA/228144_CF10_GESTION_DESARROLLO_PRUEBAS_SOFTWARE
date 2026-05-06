<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure
      img(src='@/assets/curso/intro/1.png', alt='', style="width: 1220px").m-auto

    p.mt-4 En el desarrollo de <em>software</em> moderno, garantizar la calidad de los productos es un factor crítico para el éxito de las organizaciones y la satisfacción de los usuarios. En este contexto, las pruebas de <em>software</em> se convierten en una disciplina fundamental dentro del ciclo de vida del desarrollo, ya que permiten identificar errores, validar funcionalidades y asegurar que los sistemas cumplan con los requisitos establecidos.

    .row.align-items-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/intro/3.png', alt='', style="width: 396px").m-auto
      .col-lg-8
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p Es así como este componente aborda de manera integral los conceptos, metodologías y herramientas necesarias para planificar, ejecutar y controlar las actividades de prueba. Inicia con el análisis de las metodologías de desarrollo, tanto tradicionales como ágiles, permitiendo comprender el entorno en el que se integran las pruebas. Posteriormente, se profundiza en los fundamentos de las pruebas de <em>software</em>, sus tipos, niveles y procedimientos, estableciendo las bases para una adecuada gestión de la calidad.
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/intro/2.svg', style='width: 100px').m-auto
          
          .col
            p Se desarrollan competencias en la planificación de pruebas, diseño de escenarios y casos, aplicación de técnicas especializadas y gestión de incidencias, incorporando enfoques modernos como el desarrollo guiado por pruebas (TDD). Asimismo, se estudian herramientas tecnológicas, modelos de procesos y prácticas relacionadas con la documentación, la confidencialidad y la resolución de problemas en entornos reales.

    p.mt-2 Finalmente, se integra la ejecución de pruebas, la certificación del <em>software</em> y la mejora continua, junto con la elaboración de informes, la trazabilidad y la automatización de pruebas en entornos de integración y entrega continua. 


</template>

<script>
export default {
  name: 'Introduccion',
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
