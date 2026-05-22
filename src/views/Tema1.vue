<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Metodologías de desarrollo de <em>software</em>

    .row.align-items-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/1.svg', alt='', style="width: 390px").m-auto
      .col-lg-8
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Estos son enfoques estructurados que permiten organizar y gestionar la construcción de sistemas informáticos, mediante la definición de fases, actividades, roles y entregables. Su aplicación facilita la planificación del proyecto, el control de los procesos y la entrega de soluciones alineadas con los requerimientos establecidos.
 

        p.mt-2 En términos generales, el desarrollo de <em>software</em> se compone de diversas etapas, las cuales se integran de forma ordenada dentro de una metodología. Estas etapas permiten transformar necesidades del usuario en soluciones funcionales, asegurando trazabilidad y control durante todo el proceso. Dichas etapas son:

      .row.justify-content-center
        .col-10
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5 Figura 1. 
            span Ciclo general del desarrollo de <em>software</em>
          figure
            img.d-none.d-md-block.m-auto(
              src='@/assets/curso/tema1/2.svg',
              alt='Figura 1 que representa el ciclo general del desarrollo de <em>software</em>, que inicia con la definición de necesidades, continúa con el análisis y el diseño, avanza hacia la codificación y las pruebas, y finaliza con la validación, el mantenimiento y la evolución continua del sistema.'
            )
            img.d-block.d-md-none.m-auto(
              src='@/assets/curso/tema1/2m.svg',
              alt='Figura 1 que representa el ciclo general del desarrollo de <em>software</em>, que inicia con la definición de necesidades, continúa con el análisis y el diseño, avanza hacia la codificación y las pruebas, y finaliza con la validación, el mantenimiento y la evolución continua del sistema.'
            )


    .bloque-texto-g.bg-3.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El uso de metodologías aporta organización al desarrollo, mejora la comunicación entre los equipos de trabajo y reduce la probabilidad de errores, al establecer procedimientos claros y definidos. Además, permite optimizar el uso de recursos y facilita el seguimiento del avance del proyecto mediante la definición de actividades y responsabilidades.

    .row.align-items-center.mt-4(data-aos="fade-down")
      .col-lg-7
        p Estas metodologías pueden adaptarse según el tipo de proyecto, el tamaño del equipo y las necesidades del entorno, lo que permite su aplicación en diferentes contextos organizacionales. En la práctica, su implementación no es rígida, sino que puede ajustarse para responder a cambios, manteniendo siempre el enfoque en la calidad del producto final.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p Las metodologías también influyen directamente en la forma en que se integran las pruebas de <em>software</em>. Dependiendo del enfoque adoptado, las pruebas pueden ubicarse en fases específicas o desarrollarse de manera continua, lo que impacta en la detección temprana de errores y en la mejora del producto.
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/4.png', alt='', style="width: 480px").m-auto
      
    .row.bg-04
      .col-12
        .p-5
          .row.align-items-center.justify-content-center(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema1/5.svg', alt='', style="width: 390px").m-auto
            .col-lg-6
              p La integración de pruebas en el desarrollo consta de:

              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Control de planificación de pruebas.
          
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Análisis y diseño de pruebas.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Implementación y ejecución de pruebas.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Evaluación de los criterios de salida y elaboración de informes.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Actividades de cierre de pruebas.

              p En este sentido, la selección de una metodología adecuada es un factor determinante en el éxito del proyecto, ya que influye en el tiempo de desarrollo, la calidad del <em>software</em> y la capacidad de respuesta ante cambios. Por ello, su correcta aplicación permite estructurar el proceso de desarrollo de manera eficiente, garantizando resultados coherentes y alineados con los objetivos del sistema.

          
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Conceptos y tipos de metodologías

    .row.align-items-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/6.png', alt='', style="width: 480px").m-auto
      .col-lg-7
        p Una metodología de desarrollo de <em>software</em> es un conjunto estructurado de principios, prácticas y actividades que orientan la planificación, ejecución y control de un proyecto tecnológico. Su propósito es definir cómo se organizan las tareas, cómo interactúan los roles involucrados y cómo se gestionan los cambios durante el desarrollo del sistema.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/7.svg', style='width: 100px').m-auto
          
          .col
            p A través de una metodología se establecen criterios para la toma de decisiones, la gestión de requerimientos y la validación de resultados, lo que permite mantener coherencia entre lo que se necesita y lo que se construye. Esto resulta especialmente importante en proyectos donde intervienen múltiples actores y donde la calidad del <em>software</em> depende de la correcta coordinación de actividades.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Las metodologías no solo definen el proceso técnico, sino también la forma en que se gestiona el proyecto, incluyendo la comunicación con el cliente, la organización del equipo y la entrega de resultados parciales o finales. Por esta razón, su selección influye directamente en la eficiencia del desarrollo y en la capacidad de adaptación ante cambios.

        p.mt-4 Partiendo de lo anterior, la siguiente tabla presenta una clasificación general de las metodologías de desarrollo de <em>software</em>, según su enfoque y su aplicación principal en distintos tipos de proyectos:

        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 1. 
          span Clasificación de metodologías de desarrollo

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #FFEBBE")
              tr
                th Tipo
                th Enfoque
                th Aplicación principal

            tbody
              tr(style="background-color: #F6F6F6")
                td.text-start 
                  b Tradicional.
                td.text-start Secundaria.
                td.text-start Proyectos con requisitos definidos.

              tr
                td.text-start 
                  b Ágil.
                td.text-start Iterativo e incremental.
                td.text-start Proyectos dinámicos.

              tr(style="background-color: #F6F6F6")
                td.text-start
                  b Híbrida.
                td.text-start Combinada.
                td.text-start Proyectos con control y flexibilidad.

        p.mt-4.text-center Dentro de esta clasificación, cada metodología se destaca por lo siguiente:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/8.svg')
          
        h4.text-center Metodologías tradicionales
        p Organizan el desarrollo en fases consecutivas que deben completarse antes de avanzar a la siguiente. Este enfoque facilita el control del proceso y la documentación, pero limita la incorporación de cambios una vez iniciado el proyecto. 
      .col-md.tarjeta.bg-7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/9.svg')
          
        h4.text-center Metodologías ágiles
        p Trabajan mediante ciclos cortos de desarrollo que permiten evaluar resultados de forma continua, ajustando el producto según las necesidades del usuario. Su enfoque prioriza la colaboración del equipo, la entrega frecuente de resultados y la adaptación rápida a los cambios del proyecto.
      .col-md.tarjeta.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/10.svg')
          
        h4.text-center Metodologías híbridas
        p Surgen como una alternativa que busca integrar la estructura de los modelos tradicionales con la flexibilidad de los enfoques ágiles, permitiendo mantener control sin perder capacidad de adaptación. Este tipo de enfoque es común en organizaciones que requieren cumplimiento de estándares, pero también necesitan responder a cambios del entorno.

    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/24.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        p En conclusión:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Las metodologías tradicionales permiten mayor previsibilidad en el desarrollo.

    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Las metodologías ágiles facilitan la adaptación continua.


          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Las metodologías híbridas equilibran control y flexibilidad.

        p La elección del tipo de metodología no es arbitraria, sino que depende de factores como la claridad de los requisitos, el tamaño del proyecto, la experiencia del equipo y el nivel de interacción con el cliente. En proyectos donde los requerimientos son estables, los enfoques tradicionales resultan adecuados; mientras que, en entornos cambiantes, las metodologías ágiles ofrecen mejores resultados.

      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color2.p-4
                p Además, la metodología seleccionada define la forma en que se integran las pruebas de <em>software</em>. En modelos secuenciales, las pruebas suelen ubicarse al final del proceso, mientras que en enfoques iterativos se incorporan de manera continua, permitiendo detectar errores de forma temprana y reducir costos de corrección.

    p.m-4.text-center La siguiente imagen resume un poco lo que aborda cada metodología:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 2. 
          span Metodologías de desarrollo de <em>software</em>
        figure
          img.m-auto(
            src='@/assets/curso/tema1/11.svg',
            alt='Figura 2 que contiene un esquema comparativo de las metodologías de desarrollo tradicional (cascada), ágil e híbrida, que muestra sus etapas principales, el flujo de trabajo y las diferencias entre procesos secuenciales, iterativos y combinados dentro del ciclo de desarrollo de <em>software</em>.'
          )
          
    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p En este sentido, las metodologías no solo determinan cómo se desarrolla el <em>software</em>, sino también cómo se controla su calidad y cómo se gestionan los cambios durante su construcción. Una correcta selección y aplicación permite optimizar recursos, mejorar la coordinación del equipo y asegurar resultados alineados con los objetivos del proyecto.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2. Metodologías tradicionales y ágiles

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las metodologías tradicionales y ágiles representan dos enfoques distintos para la gestión del desarrollo de <em>software</em>, diferenciándose principalmente en la forma en que abordan la planificación, la ejecución y la adaptación a los cambios. Mientras que unas priorizan la previsión y el control, las otras se enfocan en la flexibilidad y la entrega progresiva de valor.

    p.mt-4 Aunque anteriormente se presentó una descripción general de las metodologías tradicionales y ágiles, a continuación, se profundiza en aspectos más específicos de cada una, resaltando su enfoque, forma de trabajo y las indicaciones que orientan su aplicación en distintos tipos de proyectos:

    .row.justify-content-center
      .col-lg-12
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-10")
          .tarjeta.clr--pink02.p-4(titulo="Metodologías tradicionales")
            .row.align-items-center
              .col-lg-7
                p También conocidas como enfoques predictivos, se basan en una planificación detallada desde el inicio del proyecto, donde se definen con precisión los requisitos, tiempos, recursos y etapas antes de comenzar el desarrollo. Este enfoque permite establecer un control riguroso sobre el proceso, facilitar la documentación y reducir la incertidumbre, siendo especialmente adecuado para proyectos con requerimientos estables y bien definidos.
              .col-lg-5.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema1/13.png', alt='', style="width: 390px").m-auto
    
          div(titulo="Metodologías ágiles")
            .row.align-items-center
              .col-lg-7
                p Se fundamentan en un modelo iterativo e incremental, en el cual el desarrollo se realiza en ciclos cortos que permiten obtener entregables funcionales de manera frecuente. Este enfoque facilita la incorporación de cambios, promueve la colaboración continua con el cliente y el equipo de trabajo, y permite validar el producto de forma constante, adaptándose a entornos dinámicos y necesidades cambiantes.
              .col-lg-5.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema1/14.png', alt='', style="width: 390px").m-auto
    
    p.mt-4.text-center La siguiente tabla brinda una comparación específica y puntual de cada una:


    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 2. 
          span Comparación entre metodologías tradicionales y ágiles

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #FFEBBE")
              tr
                th Aspecto 
                th Tradicional
                th Ágil

            tbody
              tr(style="background-color: #F6F6F6")
                td.text-start 
                  b Planificación.
                td.text-start Inicial y detallada.
                td.text-start Evolutiva.

              tr
                td.text-start 
                  b Cambios.
                td.text-start Limitados.
                td.text-start Frecuentes.

              tr(style="background-color: #F6F6F6")
                td.text-start
                  b Entregas.
                td.text-start Final del proyecto.
                td.text-start Iterativas. 

              tr
                td.text-start 
                  b Participación del cliente.
                td.text-start Baja.
                td.text-start Alta.

              tr(style="background-color: #F6F6F6")
                td.text-start
                  b Control.
                td.text-start Alto.
                td.text-start Adaptativos.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p El modelo tradicional más representativo es el modelo en cascada, en el cual cada fase se completa antes de iniciar la siguiente. Este enfoque permite documentar cada etapa con precisión, lo que facilita la trazabilidad y el control del proyecto, aunque puede generar dificultades cuando surgen cambios en etapas avanzadas.


    .row.align-items-center.mt-4(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/15.png', alt='', style="width: 480px").m-auto
      .col-lg-8
        p En contraste, las metodologías ágiles como Scrum o Kanban organizan el trabajo en ciclos cortos llamados iteraciones o sprints, donde se desarrollan funcionalidades específicas que pueden ser evaluadas por el usuario. Esto permite identificar ajustes necesarios de forma temprana y reducir el riesgo de construir soluciones que no respondan a las necesidades reales. Con ello se establece lo siguiente:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 El enfoque tradicional facilita la documentación y el control del proceso.
    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 El enfoque ágil permite responder rápidamente a cambios.
    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 La interacción continua mejora la calidad del producto final.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p Estas diferencias también impactan en la gestión de pruebas de <em>software</em>. En los modelos tradicionales, las pruebas suelen concentrarse en fases finales, lo que puede retrasar la detección de errores. En metodologías ágiles, las pruebas se integran dentro de cada iteración, permitiendo validar continuamente el funcionamiento del sistema.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/16.svg', style='width: 100px').m-auto
          
          .col
            p La elección entre metodologías tradicionales y ágiles no implica que una sea mejor que la otra, sino que depende del contexto del proyecto. En entornos con alta incertidumbre, los enfoques ágiles ofrecen ventajas en adaptabilidad, mientras que, en proyectos con requisitos definidos, los modelos tradicionales permiten mayor control.

        p.mt-2.text-center.bg-12.p-4 La diferencia entre metodologías tradicionales y ágiles radica en cómo gestionan el cambio, la planificación y la entrega del <em>software</em>.


    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3. Marcos de referencia y lecciones aprendidas

    p En el desarrollo de <em>software</em>, los marcos de referencia constituyen estructuras de apoyo que orientan la organización del trabajo, la colaboración entre equipos y la mejora de los procesos. A diferencia de las metodologías, estos no definen un flujo rígido de actividades, sino que establecen principios, prácticas y herramientas que pueden adaptarse según el contexto del proyecto.

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-1(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/17.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:0px")
              .col-lg
                p Su implementación permite estandarizar la forma en que se gestionan las tareas, se distribuyen responsabilidades y se controla el avance del desarrollo. Esto resulta especialmente relevante en entornos donde intervienen múltiples equipos o donde se requiere mantener consistencia en la entrega de resultados. Para complementar lo explicado, se sugiere analizar la siguiente imagen:


    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 3.
          span Estandarización de procesos y coordinación en el desarrollo de <em>software</em>
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema1/18.svg',
            alt='Figura 3 que relaciona las metodologías ágiles Kanban vs. Scrum, mostrando las columnas To Do, Doing y Done, junto con elementos como Team Sprint, Daily Scrum Meeting y Product Increment.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema1/18m.svg',
            alt=''
          )

    p.mt-4.text-center Entre los marcos de referencia más utilizados se encuentran Scrum, Kanban y DevOps. Cada uno aporta elementos específicos que fortalecen la gestión del desarrollo:


    .row.justify-content-center
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/19.svg' alt='AvatarTop').m-auto
          .tarjeta.bg-4.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Scrum]

                    p Organiza el trabajo en iteraciones con roles definidos.
    
    
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/20.svg' alt='AvatarTop').m-auto
          .tarjeta.bg-4.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Kanban]

                    p Permite visualizar el flujo de tareas y optimizar procesos.
    
    
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/21.svg' alt='AvatarTop').m-auto
          .tarjeta.bg-4.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b DevOps]

                    p Integra el desarrollo y la operación para mejorar la entrega continua del <em>software</em>.

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La adopción de estos marcos no implica su aplicación literal. En la práctica, los equipos ajustan sus principios a las condiciones reales del proyecto, lo que genera variaciones en su implementación. Esta adaptación es necesaria para responder a factores como el tamaño del equipo, la complejidad del sistema y el nivel de interacción con el usuario.

    p.mt-4 El uso de marcos de referencia también influye en la forma en que se gestionan las pruebas de <em>software</em>, ya que promueve la integración de actividades de validación dentro del proceso de desarrollo. Esto permite identificar errores de manera temprana y ajustar el producto de forma progresiva, evitando acumulación de fallos en etapas finales.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Sin embargo, la verdadera mejora no proviene únicamente de la adopción de un marco de referencia, sino del análisis posterior de su aplicación. En este punto, las lecciones aprendidas cumplen un papel fundamental, ya que permiten evaluar lo ocurrido durante el desarrollo y generar conocimiento útil para proyectos futuros.


    .row.align-items-center.justify-content-center.mt-4(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/23.png', alt='', style="width: 380px").m-auto
      .col-lg-6
        p Estas lecciones surgen de la experiencia obtenida en la ejecución de actividades, tanto en situaciones exitosas como en aquellas que presentan dificultades. Su propósito es identificar patrones de comportamiento que impactan el desarrollo, permitiendo ajustar prácticas y mejorar la toma de decisiones, donde:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Permiten reconocer aciertos que deben mantenerse.
    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Evidencian errores que deben evitarse.
    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Facilitan la mejora de procesos.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Apoyan la toma de decisiones futuras.

        p Y se accionan con la siguiente información:


    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 3. 
          span Aplicación de lecciones aprendidas

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #FFEBBE")
              tr
                th Situación
                th Acción generada

            tbody
              tr(style="background-color: #F6F6F6")
                td.text-start 
                  b Fallos en la comunicación.
                td.text-start Ajuste en canales de interacción.

              tr
                td.text-start 
                  b Retrasos en entregas.
                td.text-start Mejora en planificación.

              tr(style="background-color: #F6F6F6")
                td.text-start
                  b Errores recurrentes.
                td.text-start Integración de pruebas tempranas.

              tr
                td.text-start 
                  b Cambios frecuentes.
                td.text-start Ajuste en gestión de requerimientos.

    p.mt-4 En la práctica, la gestión de lecciones aprendidas implica un proceso de recolección, análisis y aplicación. No se limita a registrar información, sino que requiere interpretar los resultados obtenidos y convertirlos en acciones concretas que impacten el desarrollo futuro.

    p A continuación, se relaciona el proceso de gestión y aplicación de lecciones aprendidas en el desarrollo de <em>software</em>:

    .row.justify-content-center
      .col-10
        ImagenInfografica.color-acento-botones.d-none.d-md-block.m-auto(data-aos="fade-down")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/25.svg', alt='')

          .tarjeta.color-secundario.p-3(x="6%" y="12%" numero="+")
            p ¿Cómo influyen los cambios en el funcionamiento del equipo?

          .tarjeta.color-secundario.p-3(x="94%" y="12%" numero="+")
            p Oportunidades en el flujo de trabajo del proceso.

          .tarjeta.color-secundario.p-3(x="6%" y="86%" numero="+")
            p Implementar cambios.

          .tarjeta.color-secundario.p-3(x="94%" y="86%" numero="+")
            p ¿Cómo se puede mejorar el proceso actual?

        img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema1/25m.svg',
            alt=''
          )

    .row.align-items-center(data-aos="fade-down")
      .col-lg-8
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p Este proceso de aprendizaje continuo permite a los equipos evolucionar progresivamente, fortaleciendo su capacidad para enfrentar nuevos proyectos con mayor eficiencia. A medida que se acumula experiencia, se reducen los errores, se optimiza el uso de recursos y se mejora la calidad del <em><em>software</em></em> entregado.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/26.svg', style='width: 100px').m-auto
          
          .col
            p Además, la integración de lecciones aprendidas favorece la construcción de conocimiento organizacional, permitiendo que las mejoras no dependan de individuos, sino que se conviertan en prácticas adoptadas por todo el equipo. Esto contribuye a la estandarización de procesos y a la consolidación de buenas prácticas dentro de la organización.

        p.mt-4 En entornos dinámicos, donde los cambios son frecuentes, este enfoque resulta especialmente relevante, ya que permite ajustar el desarrollo sin perder control sobre el proceso. De esta manera, los marcos de referencia y las lecciones aprendidas se complementan, generando un equilibrio entre estructura y adaptación.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/27.png', alt='', style="width: 480px").m-auto
          

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
