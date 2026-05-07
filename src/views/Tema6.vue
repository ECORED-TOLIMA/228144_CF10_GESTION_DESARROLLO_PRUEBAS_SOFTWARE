<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Informes, trazabilidad y automatización de pruebas

    .row.align-items-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/1.png', alt='', style="width: 480px").m-auto
      .col-lg-8.bg-4.p-4

        figure
          img(src="@/assets/curso/tema6/2.svg", alt="", style="width: 90px")

        p.mt-2 El proceso de pruebas de <em>software</em> no concluye únicamente con la ejecución de casos, sino con la consolidación de la información generada, el seguimiento de los elementos evaluados y la integración de mecanismos que permitan optimizar futuras validaciones. En este contexto, los informes, la trazabilidad y la automatización constituyen componentes fundamentales para garantizar el control, la transparencia y la eficiencia del proceso.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema6/3.png', alt='', style="width: 480px").m-auto
      .col-lg-6
        p Los informes de pruebas permiten comunicar los resultados obtenidos, facilitando la toma de decisiones sobre el estado del sistema. Estos informes deben presentar información clara, estructurada y basada en evidencia, permitiendo identificar el nivel de cumplimiento de los requisitos y el estado de las incidencias.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Un informe de pruebas no se limita a mostrar resultados, sino que integra indicadores que permiten evaluar la calidad del <em>software</em>. Esto incluye métricas como porcentaje de pruebas aprobadas, número de incidencias detectadas y nivel de cobertura alcanzado.

        p.mt-4 Los elementos que componen un informe de pruebas son:

    .tarjeta--container.row.mb-5.mt-4
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema6/4.svg', alt='Texto que describa la imagen')
          
        h4.text-center Resumen ejecutivo
        p Presenta el estado general del proceso de pruebas, ofreciendo una visión consolidada de los resultados, avances y conclusiones relevantes para la toma de decisiones.
      .col-md.tarjeta.bg-7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema6/5.svg', alt='Texto que describa la imagen')
          
        h4.text-center Resultados
        p Muestran la ejecución de las pruebas realizadas, indicando el estado de los casos evaluados y el nivel de cumplimiento de los criterios definidos.
      .col-md.tarjeta.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema6/6.svg', alt='Texto que describa la imagen')
          
        h4.text-center Incidencias
        p Detallan los errores identificados durante la ejecución, describiendo su tipo, severidad e impacto sobre el funcionamiento del sistema.

      .col-md.tarjeta.bg-12.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema6/7.svg', alt='Texto que describa la imagen')
          
        h4.text-center Métricas
        p Permiten evaluar la calidad del <em>software</em> mediante indicadores que reflejan el desempeño, la cobertura de pruebas y la estabilidad del sistema.



    p.mt-4 La trazabilidad en pruebas de <em>software</em> permite relacionar los diferentes elementos del proceso, asegurando que cada requisito haya sido evaluado mediante uno o más casos de prueba. Este vínculo facilita el control del proceso y permite identificar áreas que no han sido validadas.


    .row.align-items-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/8.png', alt='', style="width: 480px").m-auto
      .col-lg-8
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p La trazabilidad no solo conecta requisitos y pruebas, sino que también integra resultados e incidencias, permitiendo seguir el ciclo completo desde la definición hasta la validación final.

        p.mt-4 El uso de matrices de trazabilidad permite visualizar estas relaciones de manera estructurada, facilitando el análisis del alcance de las pruebas y el control del proceso. Además, se debe tener en cuenta:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Relación entre requisitos y pruebas.
    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Seguimiento de resultados.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Control de incidencias.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Verificación de cobertura.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p La automatización de pruebas permite ejecutar validaciones de manera repetitiva y controlada, reduciendo la intervención manual y mejorando la eficiencia del proceso. Esta automatización se integra dentro de flujos de trabajo continuos, permitiendo validar el sistema cada vez que se realizan cambios.


        p.mt-4 La implementación de automatización permite asegurar consistencia en la ejecución de pruebas, reducir errores humanos y mejorar la velocidad de validación. Esto es especialmente útil en pruebas de regresión y en sistemas que requieren validaciones constantes.


    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La integración de informes, trazabilidad y automatización permite construir un proceso de pruebas completo, donde la información generada se utiliza para mejorar la calidad del <em>software</em> y optimizar futuras validaciones.
        <br> <br>
        p Además, estos elementos permiten mantener control sobre el proceso, facilitando la toma de decisiones y asegurando que el <em>software</em> cumpla con los estándares de calidad definidos.


    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Informes de pruebas funcionales y no funcionales

    p Los informes de pruebas son el medio fundamental para comunicar y documentar los resultados obtenidos durante el proceso de validación del <em>software</em>. A través de ellos se evalúa el grado de cumplimiento de los requisitos y el comportamiento general del sistema, facilitando la toma de decisiones sobre su calidad y preparación para su uso. En este contexto, los informes de pruebas se clasifican en dos tipos principales:


    .row.align-items-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/10.png', alt='', style="width: 480px").m-auto
      .col-lg-8
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.justify-content-center 
              AcordionA(tipo="b" clase-tarjeta="tarjeta bg-10").color-primario
                //-1ra pestaña
                .row(titulo="Informes de pruebas funcionales")
                  p Los informes de pruebas funcionales se enfocan en verificar que el sistema cumpla con las funcionalidades definidas en los requisitos. Su objetivo es comprobar que las entradas generen los resultados esperados y que la lógica del sistema opere correctamente. Estos informes permiten identificar errores funcionales, validar el comportamiento del <em>software</em> y documentar los resultados de los casos de prueba ejecutados.
        
                //-2da pestaña  
                .row(titulo="Informes de pruebas no funcionales")
                  p Los informes de pruebas no funcionales analizan aspectos relacionados con el desempeño del sistema, tales como rendimiento, seguridad y usabilidad. A través de métricas y resultados medibles, estos informes evalúan cómo se comporta el <em>software</em> bajo diferentes condiciones de operación, proporcionando información clave sobre su eficiencia, estabilidad y calidad global.
                
    p.mt-4 El análisis de estos informes permite identificar no solo fallos en el sistema, sino también oportunidades de mejora en su comportamiento. Esto facilita la toma de decisiones sobre ajustes necesarios antes de la implementación del <em>software</em>.


    .row.bg-04
      .col-12
        .p-5
          .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.order-2
              figure
                img(src='@/assets/curso/tema6/11.png', alt='', style="width: 480px").m-auto
            .col-lg-6
              p Además, los informes deben integrar información de manera que permita comparar resultados a lo largo del tiempo, identificando tendencias y evaluando el impacto de las mejoras implementadas. Esto convierte los informes en herramientas clave para la mejora continua del proceso de pruebas. Destacando lo siguiente:

              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Comparación de resultados históricos

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Identificación de patrones de error.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Evaluación de mejoras aplicadas.   
          
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Seguimiento del rendimiento.

              .row.justify-content-center.mt-4
                .col-lg-12
                  .row.align-items-center
                    .col-lg-12
                      .cajon.color2.p-4
                        p La correcta elaboración de informes permite mejorar la comunicación entre los equipos de pruebas, desarrollo y gestión, asegurando que la información sea comprensible y útil para todos los involucrados. Esto facilita la coordinación y mejora la eficiencia del proceso.

    p.mt-4 Los informes se generan a partir de herramientas que permiten consolidar información en tiempo real, facilitando el acceso a resultados y mejorando la toma de decisiones. Esta automatización permite mantener actualizada la información y reduce el esfuerzo manual en la generación de reportes.


    separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Trazabilidad de pruebas y control de versiones


    .bloque-texto-g.bg-3.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La trazabilidad en pruebas de <em>software</em> permite establecer relaciones claras entre los diferentes elementos del proceso de validación, asegurando que cada requisito definido haya sido verificado mediante casos de prueba y que sus resultados puedan ser rastreados. Este mecanismo facilita el control del proceso, al permitir identificar qué partes del sistema han sido evaluadas y cuáles requieren validación adicional.



    p.mt-4 A diferencia de otros elementos del proceso de pruebas, la trazabilidad no se limita a registrar información, sino que establece conexiones entre requisitos, casos de prueba, resultados e incidencias, proporcionando una visión integral del sistema. Basado en lo anterior, la trazabilidad se apoya en los siguientes aspectos:



    .tarjeta--container.row.mb-5.mt-4
      .col-md.tarjeta.bg-1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema6/13.svg', alt='Texto que describa la imagen')
          
        h4.text-center Relación entre requisitos y pruebas
        p.text-center Vincula cada requisito con sus casos de prueba correspondientes.
      .col-md.tarjeta.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema6/14.svg', alt='Texto que describa la imagen')
          
        h4.text-center Seguimiento de resultados
        p.text-center Registra el estado de ejecución de las pruebas realizadas.
      .col-md.tarjeta.bg-1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema6/15.svg', alt='Texto que describa la imagen')
          
        h4.text-center Control de incidencias
        p.text-center Gestiona los defectos detectados durante las pruebas.

      .col-md.tarjeta.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema6/16.svg', alt='Texto que describa la imagen')
          
        h4.text-center Verificación de cobertura
        p.text-center Comprueba que todos los requisitos hayan sido validados.


    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema6/17.svg', style='width: 100px').m-auto
      
      .col
        p El control de versiones, por su parte, permite gestionar los cambios realizados en el <em>software</em> a lo largo del tiempo, asegurando que cada modificación pueda ser identificada, registrada y, en caso necesario, revertida. Este control resulta fundamental durante el proceso de pruebas, ya que permite validar el sistema en diferentes estados de desarrollo y sobre versiones específicas.


    p.mt-4 Asimismo, el uso de control de versiones facilita la coordinación entre equipos de trabajo y garantiza que las pruebas se ejecuten sobre versiones controladas del sistema. En este contexto, el control de versiones permite:

    .row.mt-4
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Asociación de pruebas a versiones
          p.text-center Relaciona los resultados con una versión específica del sistema.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Seguimiento de cambios
          p.text-center Permite identificar modificaciones entre versiones.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Identificación de errores por versión
          p.text-center Facilita ubicar fallos según la versión afectada.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Control del historial de pruebas
          p.text-center Mantiene un registro de pruebas ejecutadas.   


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p La integración entre trazabilidad y control de versiones permite establecer un control completo del proceso de pruebas, asegurando que cada validación esté asociada a una versión del sistema y que los resultados puedan analizarse de manera coherente. Estas prácticas fortalecen la organización del proceso de pruebas y contribuyen a una validación más estructurada y alineada con la evolución del <em>software</em>.


    separador
    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3 Automatización, integración y entrega continua

    p La automatización, la integración continua y la entrega continua constituyen pilares fundamentales en los procesos modernos de desarrollo y pruebas de <em>software</em>. Estas prácticas permiten ejecutar validaciones de manera constante, integrar cambios de forma controlada y garantizar que el sistema esté siempre en condiciones de ser desplegado. A continuación, la explicación de cada una:


    .row.justify-content-center
      .col-lg-12
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-10")
          .tarjeta.clr--pink02.p-4(titulo="Automatización")
            .row.align-items-center
              .col-lg-7
                p La automatización de pruebas se orienta a la ejecución automática de casos de prueba, eliminando la necesidad de intervención manual en tareas repetitivas. Este enfoque permite validar el sistema con mayor frecuencia, reduciendo el tiempo de detección de errores y mejorando la calidad del <em>software</em>.

                p La automatización se aplica principalmente en pruebas de regresión, donde es necesario verificar que los cambios realizados no afecten funcionalidades existentes. Además, permite ejecutar pruebas en diferentes entornos, asegurando consistencia en los resultados.

              .col-lg-5
                figure
                  img(src='@/assets/curso/tema6/18.png', alt='', style="width: 100%").m-auto
    
          div(titulo="Integración continua")
            .row.align-items-center
              .col-lg-7
                p La integración continua (CI) consiste en la práctica de integrar cambios en el código de manera frecuente, ejecutando automáticamente pruebas para validar cada modificación. Este proceso permite detectar errores en etapas tempranas, evitando que se acumulen problemas en el sistema.

                p En este contexto, cada cambio realizado en el código activa un proceso automático que compila el sistema, ejecuta pruebas y genera resultados. Esto permite mantener un control constante sobre el estado del <em>software</em>.

              .col-lg-5
                figure
                  img(src='@/assets/curso/tema6/19.png', alt='', style="width: 100%").m-auto
    
          div(titulo="Entrega continua")
            .row.align-items-center
              .col-lg-7
                p La entrega continua (CD) amplía el concepto de integración continua, permitiendo que el <em>software</em> validado esté listo para su despliegue en cualquier momento. Este enfoque asegura que el sistema se mantenga en un estado estable, facilitando su implementación en entornos productivos.

                p La entrega continua no implica necesariamente que el <em>software</em> se despliegue automáticamente, sino que garantiza que el sistema cumple con los criterios necesarios para ser liberado.

              .col-lg-5
                figure
                  img(src='@/assets/curso/tema6/20.png', alt='', style="width: 100%").m-auto


    p La combinación de automatización, integración y entrega continua permite construir un flujo de trabajo donde el <em>software</em> es validado de manera constante, asegurando su calidad en cada etapa del desarrollo. Este enfoque reduce el riesgo de errores en producción y mejora la capacidad de respuesta ante cambios.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/21.png', alt='', style="width: 480px").m-auto
      .col-lg-6
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema6/22.svg', style='width: 80px').m-auto
          
          .col
            p Además, estas prácticas permiten mejorar la colaboración entre equipos, ya que facilitan la integración de cambios y la validación conjunta del sistema. Esto contribuye a una mayor eficiencia en el desarrollo y a una mejor calidad del <em>software</em>; destacando:

        ul.lista-ul--color.mt-2
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Integración frecuente de cambios.
    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Validación automática del sistema.
    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Reducción de errores en producción.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Mejora en la colaboración.

        p.mt-4 Estas prácticas se implementan mediante herramientas que permiten automatizar el flujo completo, desde la integración del código hasta la ejecución de pruebas y la preparación del despliegue. Esto facilita la gestión del proceso y mejora la visibilidad del estado del sistema.



    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p La integración de automatización, CI y CD permite establecer un proceso continuo donde el <em>software</em> es validado, mejorado y preparado para su entrega de manera constante. Este enfoque transforma el proceso de pruebas en una actividad permanente, alineada con el desarrollo del sistema.














</template>

<script>
export default {
  name: 'Tema6',
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
