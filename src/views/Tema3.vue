<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Planificación y técnicas de pruebas

    .bloque-texto-g.bg-3.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La planificación de pruebas establece cómo se organizará la validación del <em>software</em> antes de su ejecución, definiendo alcance, prioridades, recursos y criterios de aceptación. Este proceso no se limita a programar actividades, sino que orienta la toma de decisiones sobre qué probar, en qué orden y con qué profundidad, de acuerdo con los riesgos del proyecto.

    p.mt-4 Una planificación adecuada permite anticipar necesidades, evitar improvisaciones y asegurar que las pruebas se alineen con los objetivos del sistema. En este sentido, la selección de técnicas de prueba no es independiente, sino que responde directamente a lo definido en la planificación.

    .titulo-tres.mt-5: h3 Estructuración de la planificación de pruebas

    p.mt-4 La planificación se construye a partir del análisis del sistema, identificando funcionalidades críticas, dependencias y posibles puntos de fallo. Esto permite establecer un enfoque selectivo que optimiza el uso de recursos sin sacrificar calidad.

    p Los componentes de la planificación de Tarjetas.

    .row.justify-content-center 
      .col-lg-5.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema3/2.png', alt='', style="width: 100%").m-auto
      .col-lg-7
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Alcance")
            .col-md-12.mb-4.mb-md-0
              p Define de manera clara qué funcionalidades, módulos y procesos del sistema serán evaluados, estableciendo límites precisos sobre lo que se incluye y excluye en las pruebas.
    
          .row(numero="2" titulo="Recursos")
            .col-md-12.mb-4.mb-md-0
              p Determina los responsables del proceso de pruebas, las herramientas a utilizar y los entornos necesarios para garantizar una ejecución adecuada y controlada.

          .row(numero="3" titulo="Cronograma")
            .col-md-12.mb-4.mb-md-0
              p Establece los tiempos, fechas y secuencia de las actividades de prueba, permitiendo organizar y coordinar eficientemente cada etapa del proceso.

          .row(numero="4" titulo="Criterios de aceptación")
            .col-md-12.mb-4.mb-md-0
              p Define las condiciones y resultados esperados que deben cumplirse para considerar validada una funcionalidad o el sistema en su conjunto.

    p.mt-4 La planificación también define el momento en que se ejecutarán las pruebas dentro del desarrollo, lo que permite coordinar actividades con el equipo técnico y asegurar que los resultados se integren oportunamente en el proceso.

    .titulo-tres.mt-5: h3 Relación entre planificación y técnicas de prueba

    .row.align-items-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema3/3.png', alt='', style="width: 480px").m-auto
      .col-lg-7
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p Las técnicas de prueba son los métodos utilizados para diseñar y ejecutar los casos de prueba. Su selección depende del tipo de sistema, la complejidad de las funcionalidades y los objetivos definidos en la planificación.

        p.mt-2 En lugar de aplicar técnicas de forma indiscriminada, se seleccionan aquellas que permiten cubrir los escenarios más relevantes, asegurando una validación eficiente.

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Las técnicas determinan cómo se prueban las funcionalidades.
    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 La planificación define dónde aplicarlas.
    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Su combinación optimiza la cobertura.


    .row.align-items-center.mt-4(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/4.png', alt='', style="width: 480px").m-auto
      .col-lg-7
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Las técnicas se agrupan según el tipo de información utilizada para diseñar los casos de prueba, lo que permite abordar el sistema desde diferentes perspectivas.

        p.mt-2 La partición de equivalencia permite reducir el número de pruebas al agrupar datos con comportamiento similar, mientras que el análisis de valores límite se enfoca en los extremos donde suelen presentarse errores. Las tablas de decisión facilitan la evaluación de múltiples condiciones, y las pruebas basadas en estados permiten validar transiciones dentro del sistema.

        p Estas técnicas no se aplican de manera aislada, sino que se combinan según el tipo de funcionalidad evaluada, lo que permite construir casos de prueba más completos sin incrementar innecesariamente el esfuerzo.

    .row.justify-content-center.mt-4(data-aos="fade-down")
      .col-lg-10
        .titulo-tres.mt-5: h3 Aplicación práctica de técnicas

        p.mt-4 En escenarios reales, las técnicas se utilizan para diseñar pruebas que cubran diferentes comportamientos del sistema, evitando duplicidad de casos y mejorando la eficiencia del proceso.

        .row.align-items-center(data-aos="fade-down")
          .col-lg-5.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/5.png', alt='', style="width: 480px").m-auto
          .col-lg-7
            .row.justify-content-center.mt-4
              .col-lg-12
                .row.align-items-center
                  .col-lg-12
                    .cajon.color2.p-4
                      figure
                        img(src="@/assets/curso/tema3/6.svg", alt="", style="width: 90px")
                      p.mt-2 La combinación de una planificación adecuada con técnicas bien seleccionadas permite estructurar el proceso de pruebas de manera eficiente, asegurando que los esfuerzos se concentren en los aspectos más relevantes del sistema. Esto evita la ejecución de pruebas innecesarias y mejora la calidad de los resultados obtenidos.

        p.mt-4 La planificación y las técnicas de pruebas constituyen un componente esencial para la validación del <em>software</em>, ya que permiten organizar el proceso, priorizar escenarios y aplicar métodos adecuados para evaluar el sistema. Su correcta integración garantiza una cobertura eficiente, optimiza recursos y contribuye a la entrega de <em>software</em> confiable.


    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1. Plan de pruebas: concepto, alcance y formatos

    p El plan de pruebas es un documento que organiza de manera estructurada la ejecución de las pruebas dentro de un proyecto de <em>software</em>, estableciendo qué se va a evaluar, bajo qué condiciones y con qué criterios definidos. Su función principal es servir como guía para el equipo de pruebas, asegurando coherencia entre los objetivos del sistema y las actividades de validación.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Este documento no se limita a describir actividades, sino que define criterios claros para la toma de decisiones durante el proceso de pruebas. A través del plan se establecen prioridades, se identifican riesgos y se determina la cobertura esperada, lo que permite enfocar los esfuerzos en los aspectos más relevantes del sistema.


        .row.align-items-center.mt-4(data-aos="fade-down")
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/7.png', alt='', style="width: 480px").m-auto
          .col-lg-8
            p El alcance del plan de pruebas delimita las funcionalidades, módulos o procesos que serán evaluados, evitando la ejecución de pruebas innecesarias. Esta definición se basa en el análisis del sistema y en la identificación de áreas críticas, lo que permite priorizar la validación según el impacto que pueda tener un fallo. El plan aplica lo siguiente:

            ul.lista-ul--color
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Define qué se prueba y qué se excluye.
      
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Establece límites claros del proceso.

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Prioriza componentes críticos.

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Evita duplicidad de pruebas.

        p.mt-4 La precisión en el alcance facilita la distribución de actividades y mejora el control del proceso, ya que permite asignar responsabilidades de forma clara y evitar solapamientos en la ejecución de pruebas.


    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El plan de pruebas puede presentarse en diferentes formatos según el contexto del proyecto. En entornos formales se utilizan documentos detallados que abarcan todos los elementos del proceso, mientras que en metodologías ágiles se emplean estructuras más ligeras que priorizan la claridad y la utilidad de la información. Independientemente del formato, el contenido debe ser comprensible, accesible y orientado a la ejecución.

    p.mt-4.text-center A continuación, se detalla la aplicación de los tipos de formatos de un plan de pruebas:


    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/9.svg', alt='Texto que describa la imagen')
          
        h4.text-center Documento estructurado
        p Se aplica en proyectos formales que demandan una planificación detallada y documentación completa. Permite definir con claridad los objetivos, requisitos, responsables y criterios de control, facilitando la trazabilidad del proyecto y el cumplimiento de normas, auditorías o lineamientos institucionales. 
      .col-md.tarjeta.bg-7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/10.svg', alt='Texto que describa la imagen')
          
        h4.text-center Plantilla ágil
        p Está pensada para equipos iterativos que trabajan en ciclos cortos de desarrollo. Ofrece una estructura flexible para organizar tareas, priorizar actividades y registrar avances, favoreciendo la adaptación continua a los cambios y la mejora progresiva del producto.
      .col-md.tarjeta.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/11.svg', alt='Texto que describa la imagen')
          
        h4.text-center Herramienta digital
        p Se orienta a la gestión colaborativa del proyecto, integrando funcionalidades como seguimiento de tareas, comunicación del equipo y control de versiones. Facilita el trabajo conjunto, la visibilidad del progreso y la toma de decisiones basada en información actualizada.


    .row.justify-content-center.mt-2(data-aos="fade-down")
      .col-lg-10
        p La utilidad del plan de pruebas radica en su capacidad para centralizar la información necesaria para la validación del sistema, facilitando la alineación entre los objetivos del proyecto y las actividades de prueba. De esta manera, el plan se convierte en un instrumento de referencia que orienta la toma de decisiones sin duplicar funciones operativas del proceso.


    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2. Recursos, cronograma y gestión de ítems

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema3/12.svg', style='width: 100px').m-auto
      
      .col
        p La ejecución efectiva de las pruebas de <em>software</em> depende de la correcta asignación de recursos, la organización del tiempo y el control de los elementos que intervienen en el proceso. Estos tres componentes no se gestionan de manera independiente, sino que se articulan para asegurar que las pruebas se desarrollen de forma ordenada, eficiente y alineada con los objetivos del proyecto.

    .row.justify-content-center
      .col-lg-10
        .titulo-tres.mt-5: h3 Recursos

        p Los recursos incluyen tanto el talento humano como las herramientas tecnológicas necesarias para diseñar, ejecutar y registrar las pruebas. Su definición no se limita a la cantidad disponible, sino a su adecuación frente a las necesidades del sistema, lo que implica seleccionar perfiles con competencias específicas y herramientas acordes al tipo de pruebas a realizar.

        p Partiendo de lo anterior, se detallan los tipos de recursos en pruebas de <em>software</em>: 


    .row.justify-content-center.mt-4
      .col-lg-8
        .row.justify-content-center 
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-10").color-primario
            //-1ra pestaña
            .row(titulo="Humano")
              p Corresponde al equipo de personas encargadas del diseño, ejecución y análisis de las pruebas. Incluye testers, desarrolladores y líderes técnicos que interpretan los resultados, detectan fallos y proponen mejoras para asegurar la calidad del <em>software</em>.
    
            //-2da pestaña  
            .row(titulo="Tecnológico")
              p Abarca las herramientas de automatización, gestión y seguimiento de pruebas, como frameworks, sistemas de control de incidencias y plataformas de integración continua. Su función es optimizar los procesos, reducir errores repetitivos y mejorar la eficiencia del ciclo de pruebas.
            
            //-3ra pestaña
            .row(titulo="Infraestructura")
              p Comprende los entornos de prueba, servidores, dispositivos y configuraciones necesarias para ejecutar las pruebas en condiciones controladas. Permite simular escenarios reales de uso y verificar el comportamiento del sistema en distintas plataformas.
    
            //-4ra pestaña
            .row(titulo="Información")
              p Incluye los casos de prueba, datos de entrada, resultados esperados y evidencias, que sirven como base para evaluar el cumplimiento de los requisitos. Esta información garantiza trazabilidad, reproducibilidad y soporte para la toma de decisiones.


      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema3/13.png', alt='', style="width: 100%").m-auto


    p.mt-4.text-center Con el fin de conocer la aplicación práctica de los recursos descritos, se relaciona la siguiente imagen explicativa:

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 6.
          span Asignación y distribución de recursos en el proceso de pruebas de <em>software</em>
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema3/14.svg',
            alt='Figura 6 que representa el flujo de trabajo del proceso de pruebas de <em>software</em>, mostrando la interacción entre el gestor de pruebas, el gerente de proyecto y los servidores de compilación, base de datos y prueba, así como las actividades de configuración, notificación de versiones y liberación dentro del entorno de prueba.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema3/14m.svg',
            alt=''
          )

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p La asignación de recursos debe considerar la complejidad del sistema y el alcance de las pruebas, evitando tanto la sobrecarga del equipo como la subutilización de herramientas. Una distribución adecuada permite equilibrar el esfuerzo y mejorar la productividad durante la ejecución.


    .titulo-tres.mt-5: h3 Cronograma

    p.mt-4 El cronograma de pruebas cumple un papel fundamental en la planificación del proceso de aseguramiento de la calidad, ya que organiza las actividades a lo largo del tiempo y define la secuencia en la que deben ejecutarse. Más allá de establecer fechas, el cronograma identifica dependencias entre tareas, lo que permite coordinar eficazmente las pruebas con otras fases del desarrollo del <em>software</em>.

    .row.align-items-center.justify-content-center.mt-4(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/15.png', alt='', style="width: 480px").m-auto
      .col-lg-6
        p Un cronograma bien estructurado facilita el seguimiento del avance, permite anticipar posibles retrasos y realizar ajustes oportunos en la planificación. De esta manera, se evita la acumulación de actividades en las etapas finales del proyecto y se mantiene una visión clara y controlada del estado de las pruebas.

        p Dentro del cronograma se definen las actividades, que corresponden a las tareas específicas que deben ejecutarse durante el proceso de pruebas, así como la secuencia, que establece el orden lógico de ejecución. También se determina la duración estimada de cada actividad, las dependencias entre tareas que condicionan su inicio o finalización y los hitos, que funcionan como puntos de control para evaluar el progreso y el cumplimiento de los objetivos establecidos.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p La relación entre recursos y cronograma es directa, ya que la disponibilidad de personal y herramientas condiciona la duración de las actividades. Por esta razón, la planificación del tiempo debe ajustarse a la capacidad real del equipo, evitando estimaciones que no se puedan cumplir.


    .titulo-tres.mt-5: h3 Gestión

    p.mt-4 La gestión de ítems se centra en el control y seguimiento de todos los elementos que intervienen en el proceso de pruebas de <em>software</em>, tales como los casos de prueba, los defectos identificados, las versiones del sistema y los resultados obtenidos. Este control permite mantener la trazabilidad de cada elemento, facilitando su seguimiento desde el momento en que se crea hasta su cierre o validación final.

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este contexto, un ítem no se limita a un objeto físico o digital, sino que representa cualquier componente relevante que deba ser administrado dentro del proceso de validación. Una gestión adecuada permite conocer en todo momento el estado de las pruebas, identificar avances, pendientes y riesgos, y asegurar que cada actividad esté correctamente documentada.

    .row.bg-04
      .col-12
        .p-5
          .row.align-items-center.justify-content-center(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema3/17.png', alt='', style="width: 390px").m-auto
            .col-lg-7
              p La gestión incluye el registro detallado de los casos de prueba ejecutados, el control de los defectos detectados durante las pruebas, el seguimiento de las correcciones aplicadas por el equipo de desarrollo y la relación de estos elementos con las distintas versiones del sistema. Asimismo, se administran ítems como los casos de prueba, cuyo propósito es validar las funcionalidades del <em>software</em>; los defectos, que permiten documentar y dar seguimiento a los fallos encontrados; las evidencias, que sirven como soporte de los resultados obtenidos; y las versiones, que facilitan el control de los cambios realizados en el sistema a lo largo del tiempo.

              p Este proceso se apoya en herramientas especializadas que permiten registrar, actualizar y consultar la información en tiempo real, lo que mejora la coordinación entre los miembros del equipo, evita la pérdida de datos relevantes y fortalece la toma de decisiones durante el ciclo de pruebas.

              .row.justify-content-center.mt-4
                .col-lg-12
                  .row.align-items-center
                    .col-lg-12
                      .cajon.color2.p-4
                        p La integración entre recursos, cronograma y gestión de ítems permite mantener un control completo del proceso de pruebas, asegurando que cada actividad se ejecute en el momento adecuado, con los recursos necesarios y bajo un seguimiento constante.



    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3. Escenarios, casos de prueba y nomenclaturas

    .row.align-items-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema3/19.png', alt='', style="width: 480px").m-auto
      .col-lg-8
        .row.bg-1.p-4
          figure
            img(src="@/assets/curso/tema3/18.svg", alt="", style="width: 90px")

          p.mt-2 El diseño de pruebas se basa en la construcción de escenarios y casos de prueba que permiten evaluar el sistema en condiciones representativas de uso. Estos elementos no se elaboran de forma aislada, sino que se organizan de manera estructurada para garantizar coherencia entre los requerimientos del sistema y las validaciones realizadas.


    p.mt-4 Un escenario de prueba describe una situación general en la que el sistema debe operar, representando un flujo funcional completo o una interacción relevante. A partir de estos escenarios se derivan los casos de prueba, que detallan condiciones específicas de ejecución, incluyendo entradas, pasos y resultados esperados.

    .row.align-items-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/20.png', alt='', style="width: 480px").m-auto
      .col-lg-8
        p La relación entre escenario y caso de prueba permite descomponer situaciones complejas en validaciones concretas, facilitando la cobertura del sistema sin generar duplicidad de pruebas.

        p La diferencia entre escenario y caso de prueba, radica en lo siguiente:

        .row.justify-content-center
          .col-12.col-md-6.col-lg-6.mb-md-0(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/21.svg' alt='AvatarTop').m-auto
              .tarjeta.bg-4.shadow
                .p-4
                  .row.justify-content-center
                    .col-auto
                      .py-2.px-3
                        p.mb-0 #[b Escenario ]

                        ul.lista-ul--color
                          li
                            i.lista-ul__vineta
                            p.mb-0.text-start  Nivel: general.

                          li
                            i.lista-ul__vineta
                            p.mb-0.text-start Propósito: representar una funcionalidad.
        
        
          .col-12.col-md-6.col-lg-6.mb-md-0(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/22.svg' alt='AvatarTop').m-auto
              .tarjeta.bg-4.shadow
                .p-4
                  .row.justify-content-center
                    .col-auto
                      .py-2.px-3
                        p.mb-0 #[b Caso de prueba]

                        ul.lista-ul--color
                          li
                            i.lista-ul__vineta
                            p.mb-0.text-start Nivel: específico.

                          li
                            i.lista-ul__vineta
                            p.mb-0.text-start Propósito: validar condiciones concretas.
                           
        
    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los casos de prueba deben diseñarse de manera que permitan validar tanto el comportamiento esperado como sus variaciones, incluyendo condiciones normales, excepcionales y límites. Para ello, su estructura debe ser clara y consistente, garantizando que cada caso pueda ejecutarse y analizarse sin ambigüedades mediante la definición precisa de entradas, pasos y resultados esperados.


    .row.align-items-center.justify-content-center.mt-4(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/24.png', alt='', style="width: 480px").m-auto
      .col-lg-6
        p La nomenclatura en pruebas de <em>software</em> corresponde al conjunto de reglas utilizadas para nombrar y organizar escenarios y casos de prueba. Su aplicación permite mantener consistencia, facilitar la identificación de los elementos y mejorar su gestión dentro del proceso, especialmente en entornos donde se manejan múltiples casos de prueba. Además, debe tener en cuenta:  

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Uso de identificadores únicos.

    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Estructura clara en nombres.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Relación con funcionalidades.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Consistencia en la codificación.

        p.mt-4 Los siguientes, son ejemplos de nomenclatura de casos de prueba:

    .row.justify-content-center.mt-4
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/25.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 TC_LOGIN_01
            p.mb-0 Validación de inicio de sesión.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/26.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 TC_USER_02
            p.mb-0 Registro de usuario.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/27.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 TC_PAY_03
            p.mb-0 Proceso de pago.


    p.mt-4 La correcta definición de estos elementos permite establecer una base organizada para la ejecución de pruebas, facilitando el seguimiento de resultados y la gestión de la información asociada al proceso de validación.    

    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4. Técnicas de pruebas de <em>software</em>

    .row.align-items-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema3/28.png', alt='', style="width: 480px").m-auto
      .col-lg-7
        p Las técnicas de pruebas de <em>software</em> son métodos utilizados para diseñar casos de prueba de manera estructurada, permitiendo seleccionar condiciones de evaluación relevantes sin necesidad de ejecutar pruebas innecesarias.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p A diferencia del diseño básico de casos de prueba, las técnicas permiten seleccionar de forma lógica los datos y condiciones bajo las cuales se evaluará el sistema, lo que mejora la calidad del proceso de validación.

        p.mt-2 Para comprender mejor cómo se aplican las técnicas de pruebas de <em>software</em> en el proceso de validación, a continuación, se presenta un esquema que las clasifica según su enfoque:

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 7.  
          span Técnicas de diseño de pruebas en la validación funcional del <em>software</em>
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema3/29.svg',
            alt='Figura 7 que relaciona un esquema en el que se distinguen las técnicas estáticas y dinámicas, así como los métodos de prueba de caja negra y caja blanca, además de aquellas basadas en la experiencia del evaluador.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema3/29m.svg',
            alt=''
          )


    .row.align-items-center.mt-4(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/30.png', alt='', style="width: 480px").m-auto
      .col-lg-8

        .row.bg-4.p-4
          figure
            img(src="@/assets/curso/tema3/31.svg", alt="", style="width: 90px")

          p.mt-2 La partición de equivalencia permite representar conjuntos de datos mediante valores representativos, mientras que el análisis de valores límite se enfoca en condiciones críticas donde suelen presentarse errores. Ambas técnicas contribuyen a mejorar la eficiencia del diseño de pruebas al priorizar datos relevantes.

        
    .row.align-items-center.justify-content-center.mt-4(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema3/32.png', alt='', style="width: 480px").m-auto
      .col-lg-8
        p Estas técnicas se combinan según la complejidad del sistema y el tipo de funcionalidad evaluada, permitiendo diseñar pruebas más completas sin incrementar innecesariamente el número de casos.

        p La correcta selección de técnicas depende del contexto del sistema, los riesgos identificados y los objetivos de la prueba. No todas las técnicas aportan el mismo valor en todos los escenarios, por lo que su aplicación debe ser estratégica y orientada a resultados.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Estas técnicas se integran dentro de procesos continuos, permitiendo diseñar pruebas de manera iterativa y ajustarlas según los resultados obtenidos. Esto mejora la capacidad de adaptación del equipo y fortalece la calidad del <em>software</em> a lo largo del desarrollo.



    separador
    #t_3_5.titulo-segundo.color-acento-contenido
      h2 3.5. Enfoque TDD y gestión de incidencias

    p El enfoque #[b TDD (Test-Driven Development)] plantea una forma de desarrollo en la cual las pruebas se diseñan antes de escribir el código, estableciendo un ciclo de trabajo orientado a la validación continua. Este enfoque transforma el proceso tradicional, ya que el desarrollo se guía por los resultados esperados definidos en las pruebas, permitiendo construir soluciones alineadas con los requisitos desde el inicio.

    .row.align-items-start.justify-content-center.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema3/33.svg', style='width: 100px').m-auto
      
      .col-lg-9
        p En este modelo, cada funcionalidad se desarrolla a partir de una prueba que inicialmente falla, lo que indica que el comportamiento aún no está implementado. Posteriormente, se escribe el código necesario para cumplir con la prueba, y finalmente se optimiza la solución sin alterar su funcionalidad. Dicho proceso, se detalla en la siguiente imagen:


    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 8.  
          span Ciclo de desarrollo dirigido por pruebas (TDD): Red – Green – Refactor
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema3/34.svg',
            alt='Figura 8 que muestra el ciclo de desarrollo dirigido por pruebas (TDD), en el cual se inicia escribiendo una prueba que falla (rojo), se desarrolla el código mínimo para que funcione correctamente (verde) y finalmente se refactoriza el código eliminando redundancias sin afectar su comportamiento.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema3/34m.svg',
            alt=''
          )

        p.mt-4 Este ciclo se conoce como #[b Red → Green → Refactor], y permite validar continuamente el <em>software</em> durante su construcción. La aplicación de TDD no solo mejora la calidad del código, sino que facilita la detección temprana de errores y reduce la necesidad de correcciones posteriores. Cada acción dentro de este ciclo representa lo siguiente:


    .row.justify-content-center
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/35.svg' alt='AvatarTop').m-auto
          .tarjeta.bg-4.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Red]
                    p Definición de prueba que falla.
    
    
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/36.svg' alt='AvatarTop').m-auto
          .tarjeta.bg-4.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Green]
                    p Implementación mínima para pasar la prueba.
    
    
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/37.svg' alt='AvatarTop').m-auto
          .tarjeta.bg-4.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Refactor]
                    p Mejora del código sin afectar resultados.
    

    p.mt-4 El uso de TDD permite generar código más estructurado, ya que obliga a definir claramente qué se espera del sistema antes de su implementación. Además, facilita la creación de pruebas automatizadas que pueden reutilizarse en futuras validaciones, fortaleciendo la estabilidad del <em>software</em>.


    .row.align-items-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/38.png', alt='', style="width: 480px").m-auto
      .col-lg-7
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Sin embargo, su aplicación requiere disciplina y una adecuada comprensión del sistema, ya que implica un cambio en la forma tradicional de desarrollo. No todos los proyectos adoptan TDD en su totalidad, pero sus principios pueden integrarse parcialmente para mejorar la calidad del proceso.


        p.mt-2 La gestión de incidencias se enfoca en el registro, análisis y seguimiento de los errores detectados durante las pruebas. Una incidencia representa cualquier desviación entre el comportamiento esperado y el comportamiento observado del sistema, y su correcta gestión permite garantizar la mejora continua del <em>software</em>.

        p En este contexto, cada incidencia debe documentarse de manera clara, incluyendo información que permita reproducir el error y facilitar su corrección. Esto evita interpretaciones erróneas y mejora la comunicación entre los equipos de desarrollo y pruebas.



    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/39.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El ciclo de vida de una incidencia incluye etapas como detección, registro, análisis, corrección y verificación. Este proceso permite asegurar que los errores sean atendidos de manera ordenada y que su solución sea validada antes de su cierre.
        <br> <br>
        p La relación entre TDD y la gestión de incidencias es directa, ya que el uso de pruebas desde etapas tempranas reduce la cantidad de errores detectados en fases posteriores. Esto mejora la eficiencia del proceso y permite concentrar esfuerzos en problemas más complejos.


    p.mt-4 Ambas prácticas se integran dentro de flujos de trabajo continuos, donde las pruebas automatizadas y la gestión de incidencias permiten mantener el control sobre la calidad del <em>software</em> en todo momento.

    .row.align-items-center.justify-content-center.mt-4(data-aos="fade-down")
      .col-lg-2.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/40.svg', alt='', style="width: 480px").m-auto
      .col-lg-8
        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-3
                  p La aplicación de TDD y una adecuada gestión de incidencias permite fortalecer el proceso de desarrollo, asegurando que los errores sean detectados de forma temprana y gestionados de manera eficiente, lo que contribuye a la entrega de <em>software</em> confiable y de alta calidad.



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
