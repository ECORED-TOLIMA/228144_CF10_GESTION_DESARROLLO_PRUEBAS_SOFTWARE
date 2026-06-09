<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Ejecución, certificación y mejora continua 

    figure
      img(src='@/assets/curso/tema5/1.png', alt='', style="width: 1290px").m-auto

    p.mt-4 La fase de ejecución, certificación y mejora continua corresponde al cierre del proceso de pruebas de <em>software</em>. En esta etapa se consolidan los resultados obtenidos, se valida el cumplimiento de los criterios de calidad definidos y se establecen acciones orientadas a la optimización del sistema y del propio proceso de pruebas. Para este proceso se deben realizar los siguientes pasos:

    .row.justify-content-center
      .col-lg-12
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-10")
          .tarjeta.clr--pink02.p-4(titulo="Paso 1. Ejecución de pruebas")
            .row.align-items-center
              .col-lg-7
                p En esta etapa se aplican de manera completa los casos de prueba definidos, asegurando que todas las funcionalidades críticas del sistema hayan sido evaluadas. Durante la ejecución se analiza el comportamiento del <em>software</em> bajo condiciones controladas y se recopilan evidencias que respalden los resultados obtenidos.

                p Actividades principales:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Aplicación completa de pruebas.
                
                  li
                    i.lista-ul__vineta
                    p.mb-0 Validación de resultados obtenidos.
                
                  li
                    i.lista-ul__vineta
                    p.mb-0 Registro de evidencias.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Evaluación del cumplimiento de requisitos.
              
              .col-lg-5.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema5/2.png', alt='', style="width: 576px").m-auto  
    
          div(titulo="Paso 2. Certificación del <em>software</em>")
            .row.align-items-center
              .col-lg-7
                p La certificación consiste en verificar que el sistema cumple con los criterios de calidad establecidos, con base en los resultados de la ejecución de pruebas y la resolución de incidencias críticas. Este paso permite decidir si el <em>software</em> está en condiciones de ser liberado o implementado.

                p La certificación no implica la ausencia total de errores, sino la garantía de un funcionamiento adecuado dentro de los parámetros definidos.
              
              .col-lg-5.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema5/3.png', alt='', style="width: 576px").m-auto  
    
          div(titulo="Paso 3. Mejora continua del proceso")
            .row.align-items-center
              .col-lg-7
                p Una vez certificada la calidad del <em>software</em>, se inicia la mejora continua, enfocada en analizar el proceso de pruebas para identificar oportunidades de optimización. Este análisis permite ajustar técnicas, herramientas y procedimientos para mejorar futuras ejecuciones.

                p
                  b Acciones clave:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Identificación de oportunidades de mejora.

                
                  li
                    i.lista-ul__vineta
                    p.mb-0 Ajuste de técnicas de prueba.

                
                  li
                    i.lista-ul__vineta
                    p.mb-0 Optimización del proceso.


                  li
                    i.lista-ul__vineta
                    p.mb-0 Retroalimentación al equipo.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Conclusión del proceso.

              
              .col-lg-5.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema5/4.png', alt='', style="width: 576px").m-auto  




    .row.align-items-start.justify-content-center.mt-2
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema5/5.svg', style='width: 100px').m-auto
      
      .col-lg-9
        p Estas actividades se integran dentro de ciclos continuos, donde la ejecución de pruebas, la validación de resultados y la mejora del proceso se realizan de forma iterativa. Esto permite mantener un control constante sobre la calidad del <em>software</em> y facilita la adaptación a cambios.

    .row.justify-content-center.mt-4
      .col-lg-10
        p.mt-4.bg-12.text-center.p-4 El cierre del proceso de pruebas no es un final, sino un punto de partida para la mejora continua.


    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Ejecución de pruebas, cobertura y rendimiento


    p La ejecución de pruebas constituye la fase en la cual se aplican los casos definidos sobre el sistema, con el objetivo de validar su comportamiento bajo condiciones específicas. Este proceso implica no solo la ejecución de los casos de prueba, sino también la recopilación de resultados y evidencias que permitan evaluar el cumplimiento de los requisitos establecidos.

    .row.align-items-center.mt-4(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/6.png', alt='', style="width: 480px").m-auto
      .col-lg-8
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p Durante la ejecución, se verifica si el comportamiento observado coincide con el esperado, lo que permite identificar desviaciones y registrar incidencias. Esta validación debe realizarse de manera controlada, asegurando que las condiciones de prueba sean consistentes y reproducibles.

        p.mt-4 El análisis de los resultados permite determinar el estado del sistema, clasificando las pruebas como exitosas o fallidas. Esta información es clave para tomar decisiones sobre la calidad del <em>software</em> y definir acciones correctivas en caso de ser necesario.

        p Basado en lo anterior, a continuación, se presenta un ejemplo sobre los resultados de la ejecución de pruebas:

    .row.justify-content-center
      .col-10
        ImagenInfografica.color-acento-botones.d-none.d-md-block.m-auto(data-aos="fade-down")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema5/7.svg', alt='')

          .tarjeta.color-secundario.p-3(x="15%" y="65%" numero="+")
            p La prueba se ejecutó correctamente y cumple con los criterios esperados.

          .tarjeta.color-secundario.p-3(x="40%" y="65%" numero="+")
            p La prueba se ejecutó, pero no cumple con los criterios esperados.

          .tarjeta.color-secundario.p-3(x="63%" y="65%" numero="+")
            p La prueba no pudo ejecutarse debido a una dependencia o problema pendiente.

          .tarjeta.color-secundario.p-3(x="85%" y="65%" numero="+")
            p La prueba no ha sido ejecutada en este ciclo de pruebas.

        img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema5/8.svg',
            alt=''
          )

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La cobertura de pruebas se refiere al grado en que el sistema ha sido evaluado mediante los casos de prueba ejecutados. Este concepto permite medir qué porcentaje de funcionalidades, requisitos o código ha sido validado, proporcionando una visión cuantitativa del alcance de las pruebas.

    p.mt-4 Una cobertura adecuada no implica probar todos los posibles escenarios, sino asegurar que las áreas críticas del sistema han sido evaluadas. Esto permite optimizar el proceso, enfocando los esfuerzos en los componentes más relevantes.

    p Complementando los procesos anteriores, se presenta la siguiente imagen clasificatoria:

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 10. 
          span Clasificación de las métricas de cobertura de pruebas de <em>software</em>
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema5/10.svg',
            alt='Figura 10 que presenta la clasificación de las métricas de cobertura de pruebas de software, agrupando las medidas de cobertura funcional, de datos y de código. La figura incluye métricas como cobertura de funciones, resultados y cadenas de funciones; cobertura de valores, atributos y objetos; y cobertura de declaraciones, métodos, sucursales, rutas y estados, integradas dentro de las medidas de cobertura de pruebas (TCOV-1), utilizadas para evaluar el nivel de prueba alcanzado.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema5/11.svg',
            alt=''
          )

    .row.align-items-center.justify-content-center.mt-4(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/12.png', alt='', style="width: 480px").m-auto
      .col-lg-6
        p La medición de la cobertura permite identificar áreas no evaluadas y ajustar el proceso de pruebas para mejorar su alcance. Esto es especialmente útil en sistemas complejos, donde es necesario priorizar la validación de ciertos componentes.

        p El rendimiento del sistema evalúa la capacidad del <em>software</em> para responder de manera eficiente bajo diferentes condiciones de carga. Este aspecto es fundamental en sistemas que requieren procesar grandes volúmenes de información o atender múltiples usuarios simultáneamente. 

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p La relación entre ejecución, cobertura y rendimiento permite evaluar el sistema de manera integral, considerando tanto el cumplimiento de funcionalidades como su comportamiento bajo condiciones reales. Esta combinación proporciona una visión completa del estado del <em>software</em>.

      

    .row.justify-content-center
      .col-lg-10
        p.mt-4 Estas actividades se integran en procesos automatizados que permiten ejecutar pruebas, medir cobertura y analizar rendimiento de forma continua. Esto mejora la calidad del software y facilita la detección temprana de problemas.
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p La correcta aplicación de estos elementos permite garantizar que el <em>software</em> no solo cumpla con los requisitos, sino que también funcione de manera eficiente y estable, asegurando su calidad antes de su implementación.



    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Plan de certificación y gestión de incidencias

    p El plan de certificación establece las condiciones bajo las cuales un sistema puede ser aprobado para su implementación, definiendo criterios claros de calidad y validación. Este plan se construye a partir de los resultados obtenidos en las pruebas, permitiendo determinar si el <em>software</em> cumple con los requisitos funcionales, de rendimiento y de seguridad definidos.

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A diferencia de la ejecución de pruebas, la certificación se enfoca en la toma de decisiones, evaluando si el sistema está en condiciones de ser liberado o si requiere ajustes adicionales. Este proceso implica analizar la información disponible y verificar que los criterios establecidos han sido cumplidos.
        <br> <br>
        p El plan de certificación define los elementos necesarios para realizar esta validación, incluyendo criterios de aceptación, evidencias requeridas y condiciones mínimas que debe cumplir el sistema. Esto permite asegurar que la decisión de liberar el <em>software</em> se base en información objetiva.


    p.mt-4 La certificación no implica que el sistema esté libre de errores, sino que los riesgos asociados a su uso son aceptables y que las incidencias identificadas han sido tratadas de manera adecuada. Esto permite garantizar un nivel de calidad que respalde su implementación.


    .row.align-items-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/14.png', alt='', style="width: 480px").m-auto
      .col-lg-8
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p La gestión de incidencias en esta fase se enfoca en controlar los errores detectados durante las pruebas, asegurando que aquellos con mayor impacto hayan sido resueltos antes de la certificación. Este proceso permite mantener control sobre el estado del sistema y evitar la liberación de <em>software</em> con fallos críticos.


        p.mt-3 Las incidencias deben ser clasificadas según su severidad y prioridad, lo que permite organizar su tratamiento y definir cuáles deben ser atendidas antes de la certificación. Esta clasificación facilita la toma de decisiones y mejora la eficiencia del proceso.

        p Las incidencias se clasifican de la siguiente manera:

    .row.mt-4
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Crítica
          p.text-center Afecta el funcionamiento principal.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Alta
          p.text-center Impacto significativo.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Media
          p.text-center Impacto moderado.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Baja
          p.text-center Impacto mínimo.     


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p La relación entre el plan de certificación y la gestión de incidencias es directa, ya que la decisión de aprobar el <em>software</em> depende del estado de los errores identificados. Un sistema no debe ser certificado si existen incidencias críticas sin resolver, ya que esto puede comprometer su funcionamiento.

        .row.align-items-center.mt-4(data-aos="fade-down")
          .col-lg-5.d-none.d-lg-block.order-2
            figure
              img(src='@/assets/curso/tema5/15.png', alt='', style="width: 480px").m-auto
          .col-lg-7
            p Además, el plan de certificación debe considerar la documentación generada durante el proceso de pruebas, ya que esta constituye la evidencia que respalda la decisión tomada. Esto incluye reportes de ejecución, resultados de pruebas y registro de incidencias.

            p Este proceso se apoya en herramientas que permiten automatizar el seguimiento de incidencias y facilitar la toma de decisiones. Esto mejora la eficiencia y permite mantener control sobre el estado del sistema en tiempo real.

            .row.justify-content-center.mt-4
              .col-lg-12
                .row.align-items-center
                  .col-lg-12
                    .cajon.color1.p-4
                      p La correcta aplicación del plan de certificación y la gestión adecuada de incidencias permiten garantizar que el <em>software</em> sea liberado bajo condiciones controladas, minimizando riesgos y asegurando su correcto funcionamiento.


    separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Mejora continua y <em>refactoring</em>

    p A continuación, se abordan dos prácticas fundamentales para el aseguramiento de la calidad del <em>software</em>: la mejora continua y el <em>refactoring</em>. Ambas se orientan a optimizar el sistema de manera progresiva, aunque desde enfoques complementarios.


    .titulo-tres.mt-5: h3 Mejora continua

    p.mt-4 La mejora continua en el proceso de pruebas de <em>software</em> se orienta a optimizar de manera progresiva la calidad del sistema y la eficiencia de las actividades de validación. Este enfoque no se limita a corregir errores detectados, sino que implica analizar los resultados obtenidos, identificar patrones y aplicar ajustes que fortalezcan tanto el producto como el proceso.

    .bloque-texto-g.bg-3.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este contexto, la mejora continua se basa en la retroalimentación generada durante las pruebas, la cual permite evaluar qué aspectos funcionaron adecuadamente y cuáles requieren ajustes. Este análisis se convierte en un insumo clave para la toma de decisiones orientadas a optimizar futuras iteraciones del sistema.
        <br> <br>
        p La aplicación de la mejora continua permite evolucionar el proceso de pruebas, ajustando técnicas, herramientas y estrategias de validación. Esto contribuye a incrementar la cobertura, reducir errores recurrentes y optimizar el uso de recursos.

    p.mt-4.text-center Los elementos de la mejora continua son:

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/17.svg', alt='').img100.m-auto
        p.text-center
          b Análisis de resultados
        p.text-center.mb-0 Permite identificar fallos recurrentes y patrones de error a partir de los resultados obtenidos en las pruebas, facilitando la detección de debilidades en el sistema y en el proceso.
              
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/18.svg', alt='').img100.m-auto
        p.text-center
          b Retroalimentación
        p.text-center.mb-0 Consiste en utilizar la información generada durante las pruebas para mejorar el proceso, fortaleciendo la toma de decisiones y promoviendo ajustes oportunos.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/19.svg', alt='').img100.m-auto

        p.text-center
          b Ajuste de estrategias
        p.text-center.mb-0 Implica optimizar las técnicas, herramientas y enfoques de prueba con base en los resultados analizados, aumentando la efectividad de la validación.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/20.svg', alt='').img100.m-auto
        p.text-center
          b Seguimiento
        p.text-center.mb-0 Se enfoca en evaluar las mejoras implementadas, verificando su impacto y asegurando la evolución continua del proceso de pruebas.

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-tres.mt-5: h3 <em>refactoring</em> 

        p.mt-4 El <em>refactoring</em>, por su parte, se enfoca en la mejora del código fuente sin alterar su funcionalidad. Este proceso permite optimizar la estructura interna del sistema, facilitando su mantenimiento y reduciendo la complejidad del código.

    .row.bg-04
      .col-12
        .p-5
          .row.align-items-center.justify-content-center(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema5/21.png', alt='', style="width: 390px").m-auto
            .col-lg-6
              p A diferencia de la corrección de errores, el <em>refactoring</em> no busca solucionar fallos visibles, sino mejorar la calidad interna del <em>software</em>, lo que impacta directamente en su estabilidad y evolución.

              p Dentro de sus beneficios basados en la calidad del código se encuentran:

              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Mejor legilibilidad.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Complejidad reducida.
          
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Mayor factlidad de mantenimiento.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Reducción de la deuda técnica.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Rendimiento mejorado.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Extensibilidad sin esfuerzo.


    p.mt-4 El <em>refactoring</em> se realiza de manera controlada, apoyándose en pruebas que permiten verificar que los cambios realizados no afectan el comportamiento del sistema. Esto garantiza que la mejora del código no introduzca nuevos errores.

    p La relación entre mejora continua y <em>refactoring</em> es directa, ya que ambos procesos buscan optimizar el sistema desde diferentes perspectivas. Mientras la mejora continua se enfoca en el proceso de pruebas, el <em>refactoring</em> actúa sobre el código, permitiendo que ambos elementos evolucionen de manera conjunta.


    .row.align-items-center.mt-4(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema5/22.png', alt='', style="width: 480px").m-auto
      .col-lg-7.bg-4.p-4

        figure
          img(src="@/assets/curso/tema5/23.svg", alt="", style="width: 90px")
        p.mt-2  En la práctica, la mejora continua se implementa a través de ciclos iterativos donde se analizan resultados, se aplican ajustes y se evalúa su impacto. Este enfoque permite evolucionar el proceso de pruebas de manera progresiva, asegurando que cada iteración aporte valor al sistema.

    .row.mt-4.justify-content-center
      .col-lg-10
        p El <em>refactoring</em>, por su parte, se integra dentro del desarrollo continuo, permitiendo mantener la calidad del código a medida que el sistema crece. Esto evita la acumulación de problemas estructurales que pueden afectar el rendimiento y la estabilidad del <em>software</em>.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  .row.align-items-center
                    .col-lg-2
                      figure
                        img(src='@/assets/curso/tema5/24.svg', alt='', style="width: 180px").m-auto
                    .col-lg-10
                      p La aplicación conjunta de mejora continua y <em>refactoring</em> permite reducir la deuda técnica, la cual representa el costo acumulado de decisiones que afectan la calidad del código. Al abordar estos aspectos de manera oportuna, se mejora la sostenibilidad del sistema a largo plazo.

</template>

<script>
export default {
  name: 'Tema5',
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
