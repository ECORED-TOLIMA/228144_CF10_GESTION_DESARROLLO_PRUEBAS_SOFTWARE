<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Herramientas y gestión del proceso de pruebas 

    figure
      img(src='@/assets/curso/tema4/1.png', alt='', style="width: 1290px").m-auto

    p.mt-4 El proceso de pruebas de <em>software</em> no depende únicamente de la definición de técnicas o la ejecución de casos, sino también del uso de herramientas que permiten automatizar, registrar y controlar cada actividad. Estas herramientas facilitan la organización del trabajo, mejoran la trazabilidad y permiten gestionar grandes volúmenes de información de manera eficiente.

    .row.align-items-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/2.png', alt='', style="width: 480px").m-auto
      .col-lg-8
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p La gestión del proceso de pruebas implica coordinar actividades, controlar resultados y asegurar que cada fase del testing se ejecute de forma ordenada. En este contexto, las herramientas no reemplazan el criterio del equipo, sino que potencian su capacidad para planificar, ejecutar y evaluar las pruebas.


        p.mt-2 Las herramientas utilizadas en pruebas de <em>software</em> pueden clasificarse según su función dentro del proceso. Algunas se enfocan en la automatización de pruebas, otras en la gestión de casos y otras en el seguimiento de incidencias. Esta clasificación permite seleccionar herramientas adecuadas según las necesidades del proyecto.

        p Las herramientas de pruebas se clasifican de la siguiente manera:

    .row
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Automatización
          p.text-center Ejecuta pruebas repetitivas de forma automática, reduciendo el trabajo manual y el tiempo de validación.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Gestión de pruebas
          p.text-center Organiza y controla los casos de prueba y sus resultados.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Seguimiento de errores
          p.text-center Registra y monitorea las incidencias detectadas durante las pruebas.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Integración continua
          p.text-center Automatiza pruebas dentro del proceso de desarrollo para detectar fallos tempranos.

    p.mt-4 Las herramientas de automatización permiten ejecutar pruebas repetitivas sin intervención manual, mejorando la eficiencia y reduciendo el tiempo de validación, especialmente en pruebas de regresión. Por su parte, las herramientas de gestión de pruebas facilitan la organización de casos, el registro de resultados y la trazabilidad entre requisitos y evidencias. En este contexto, la herramienta #[b Selenium] se utiliza para la automatización de pruebas, #[b JIRA] para la gestión de incidencias, #[b TestRail] para la administración de casos de prueba y #[b Jenkins]  para la integración continua dentro del proceso de desarrollo.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema4/3.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p La gestión del proceso de pruebas implica coordinar estas herramientas dentro de un flujo de trabajo coherente, asegurando que la información fluya entre ellas sin pérdida de datos. Esto permite mantener una visión clara del estado del sistema y facilita la toma de decisiones.
          
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema4/4.svg', style='width: 100px').m-auto
          
          .col
            p Un aspecto clave en esta gestión es la trazabilidad, la cual permite relacionar requisitos, casos de prueba, resultados y defectos. Esto asegura que cada elemento del sistema ha sido evaluado y que los errores detectados pueden ser rastreados hasta su origen.

    .bloque-texto-g.bg-3.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La integración de herramientas dentro del proceso de pruebas permite automatizar flujos de trabajo, mejorar la comunicación entre equipos y reducir errores asociados a la gestión manual de información. Esto es especialmente relevante en proyectos de gran escala, donde el volumen de pruebas puede ser elevado.<br><br>Además, la gestión adecuada del proceso permite identificar cuellos de botella, optimizar recursos y mejorar la eficiencia del equipo, asegurando que las pruebas se ejecuten de manera oportuna y con resultados confiables.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Estas herramientas se integran dentro de procesos de desarrollo continuo, donde las pruebas se ejecutan automáticamente en cada cambio del sistema. Esto permite mantener un control constante sobre la calidad del <em>software</em> y facilita la entrega de versiones estables.



    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1. Herramientas para la aplicación de pruebas


    .row.align-items-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/6.svg', alt='', style="width: 290px").m-auto
      .col-lg-9
        p Las herramientas para la aplicación de pruebas permiten ejecutar, automatizar y controlar la validación del <em>software</em>, facilitando la evaluación del sistema bajo diferentes condiciones. Su uso no solo acelera la ejecución de las pruebas, sino que también mejora la precisión, la repetibilidad y la organización del proceso de aseguramiento de la calidad.

        p Estas herramientas se seleccionan según el tipo de sistema, el entorno de desarrollo y los objetivos de validación. Dado que no todas cumplen la misma función, su aplicación debe responder a las siguientes necesidades específicas dentro del proceso de pruebas, garantizando una cobertura adecuada del <em>software</em>:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema4/7.svg', alt='Texto que describa la imagen')
          
        h4.text-center Herramientas de ejecución de pruebas
        p Se enfocan en la ejecución de casos de prueba, ya sea de forma manual asistida o automatizada, permitiendo validar el comportamiento del sistema de manera constante y reducir el esfuerzo en tareas repetitivas.
      .col-md.tarjeta.bg-7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema4/8.svg', alt='Texto que describa la imagen')
          
        h4.text-center Herramientas de automatización funcional
        p Permiten ejecutar pruebas simulando la interacción del usuario con la aplicación, facilitando la validación de procesos completos sin intervención manual. Son ampliamente utilizadas en pruebas de regresión, donde es necesario ejecutar los mismos casos en múltiples versiones del sistema.
      .col-md.tarjeta.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema4/9.svg', alt='Texto que describa la imagen')
          
        h4.text-center Herramientas de pruebas de rendimiento
        p Se utilizan para analizar el comportamiento del sistema bajo diferentes niveles de carga, identificando fallos relacionados con tiempos de respuesta, estabilidad y capacidad. Son fundamentales en sistemas con múltiples usuarios o grandes volúmenes de información.


    p.mt-4 Además de su función específica, estas herramientas permiten integrar el proceso de pruebas dentro de flujos automatizados, lo que facilita la ejecución continua de validaciones a medida que el sistema evoluciona. Esto reduce la dependencia de pruebas manuales y mejora la eficiencia del equipo.

    p Los beneficios del uso de herramientas de pruebas son:


    .row.bg-04
      .col-12
        .p-5
          .row.align-items-center.justify-content-center
            .col-11
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 1
                  p.mb-0 Reduce significativamente el tiempo de ejecución de las pruebas al eliminar tareas manuales repetitivas y permitir una validación más rápida del sistema.

                hr(style="border-color: 3px solid #AFAFAF;")
          
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 2
                  p.mb-0 Mejora la confiabilidad de los resultados, ya que las pruebas se ejecutan de forma consistente y sin errores humanos.

                hr(style="border-color: 3px solid #AFAFAF;")
          
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 3
                  p.mb-0 Permite validar cambios en el <em>software</em> ejecutando los mismos casos de prueba en diferentes versiones del sistema.

                hr(style="border-color: 3px solid #AFAFAF;")


                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 4
                  p.mb-0 Facilita procesos continuos al incorporar las pruebas dentro del flujo de desarrollo, asegurando una validación constante del sistema.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p La implementación de estas herramientas debe realizarse de manera estratégica, considerando el costo, la curva de aprendizaje y el beneficio que aportan al proceso. No todas las herramientas son necesarias en todos los proyectos, por lo que su selección debe alinearse con los objetivos de validación.

        p.mt-4 El uso de herramientas para la aplicación de pruebas se ha convertido en un elemento esencial para garantizar la calidad del <em>software</em>, permitiendo ejecutar validaciones de forma continua, estructurada y eficiente.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2. Gestión del proceso y confidencialidad

    .row.align-items-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/10.png', alt='', style="width: 480px").m-auto
      .col-lg-7
        p La gestión del proceso de pruebas se enfoca en coordinar, controlar y supervisar las actividades de validación del <em>software</em>, asegurando que se ejecuten de forma organizada y conforme a los objetivos definidos. Este control no solo permite verificar el cumplimiento del plan de pruebas, sino también mantener la calidad del proceso y la trazabilidad de los resultados.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Dentro de esta gestión, la confidencialidad adquiere un papel fundamental, ya que las pruebas suelen involucrar información sensible como datos de usuarios, configuraciones del sistema y resultados internos del <em>software</em>. Por ello, es necesario establecer mecanismos que garanticen la protección de esta información durante todo el proceso.

        p.mt-4 La gestión del proceso de pruebas establece controles que permiten monitorear el avance, validar resultados e identificar desviaciones oportunamente. Estos controles se aplican de forma continua desde la planificación hasta el cierre de incidencias, asegurando la calidad del proceso de validación del <em>software</em>, de la siguiente manera:    


    .row.justify-content-center.mt-4
      .col-lg-7
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Paso 1. Seguimiento del avance")
            .col-md-12.mb-4.mb-md-0
              p Permite controlar el progreso de las actividades de prueba y verificar el cumplimiento del cronograma establecido.
    
          .row(numero="2" titulo="Paso 2. Control de ejecución de casos")
            .col-md-12.mb-4.mb-md-0
              p Supervisa que los casos de prueba se ejecuten correctamente según lo planificado y registra su estado.
    
          .row(numero="3" titulo="Paso 3. Validación de resultados")
            .col-md-12.mb-4.mb-md-0
              p Evalúa los resultados obtenidos para confirmar que cumplen con los criterios de aceptación y calidad definidos.

          .row(numero="4" titulo="Paso 4. Gestión de incidencias")
            .col-md-12.mb-4.mb-md-0
              p Registra, da seguimiento y cierra los errores detectados, apoyando la toma de decisiones mediante reportes del proceso.
    
      .col-lg-5.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema4/11.png', alt='', style="width: 100%").m-auto


    .row.align-items-center.justify-content-center.mt-4(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/12.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        p La trazabilidad permite relacionar cada prueba con los requisitos del sistema y con los resultados obtenidos, facilitando el control del proceso y la identificación de áreas no evaluadas. Esto asegura que la validación sea completa y evita omisiones que puedan afectar la calidad del <em>software</em>.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p La confidencialidad en el proceso de pruebas implica proteger la información utilizada y generada durante la validación del sistema. Esto incluye datos de prueba, resultados, reportes e incidencias, los cuales pueden contener información crítica para la organización.

        p.mt-2 Es importante analizar la siguiente imagen para entender un poco el proceso cíclico que se realiza para controlar y proteger la información:

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 9. 
          span Medidas de control y protección de la información en el proceso de pruebas de <em>software</em>
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema4/13.svg',
            alt='Figura 9 que ilustra las medidas de control y protección de la información en el proceso de pruebas de <em>software</em>, mostrando su aplicación a lo largo de las fases de requisitos, diseño, implementación, pruebas y despliegue, mediante actividades como requisitos de seguridad, evaluación de riesgos, modelado de amenazas, codificación segura, análisis SAST y SCA, pruebas de seguridad, VAPT y revisión de configuraciones.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema4/14.svg',
            alt=''
          )


    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para garantizar la confidencialidad, es necesario implementar medidas que controlen el acceso a la información y aseguren su uso adecuado dentro del proceso de pruebas.<br><br>

        p La gestión adecuada de la confidencialidad permite evitar riesgos asociados a la exposición de información sensible, lo que es especialmente relevante en sistemas que manejan datos personales o financieros. Esto no solo protege a la organización, sino que también garantiza el cumplimiento de normativas de seguridad.


    .row.align-items-center.mt-4(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/16.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p teAdemás, la integración entre la gestión del proceso y la confidencialidad permite establecer un entorno controlado donde las pruebas se ejecutan de forma segura, asegurando que tanto el proceso como la información se mantengan bajo control.

        p En entornos actuales, donde las pruebas se integran en procesos continuos, la gestión y la confidencialidad deben adaptarse a dinámicas más rápidas, garantizando control sin afectar la agilidad del desarrollo. Esto implica utilizar herramientas que permitan automatizar controles y monitorear el acceso a la información en tiempo real.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p En conjunto, la correcta aplicación de estos elementos permite desarrollar pruebas de <em>software</em> en un entorno organizado, seguro y confiable, asegurando que tanto el proceso como los datos utilizados cumplan con estándares de calidad y seguridad.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3. Modelos de procesos y documentación

    p Los modelos de procesos en pruebas de <em>software</em> definen la forma en que se organizan y ejecutan las actividades de validación, estableciendo una secuencia estructurada que permite controlar el desarrollo de las pruebas desde su planificación hasta el cierre. Estos modelos no solo describen qué actividades se realizan, sino también cómo se relacionan entre sí y cómo se integran dentro del ciclo de vida del <em>software</em>.


    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/17.svg', alt='', style="width: 480px").m-auto
      .col-lg-6
        p A través de estos modelos se logra estandarizar el proceso de pruebas, facilitando su aplicación en diferentes proyectos y permitiendo mantener consistencia en la ejecución. Esto resulta fundamental en entornos donde se requiere control, trazabilidad y calidad en cada fase del proceso.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Los modelos de procesos pueden variar según el enfoque del desarrollo, pero en general incluyen actividades como planificación, diseño, ejecución, evaluación y cierre. Estas etapas permiten estructurar el trabajo de forma progresiva, asegurando que cada fase cumpla un propósito específico dentro del proceso.

        p.mt-4 Las siguientes son las fases del modelo de proceso de pruebas:

    .row.justify-content-center.mt-4
      .col-lg-8
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Planificación")
            .col-md-12.mb-4.mb-md-0
              p Define el alcance del proceso de pruebas, la estrategia a seguir, los recursos necesarios, los riesgos identificados y el cronograma de ejecución.
    
          .row(numero="2" titulo="Diseño")
            .col-md-12.mb-4.mb-md-0
              p Consiste en la creación y documentación de los casos de prueba, a partir de los requisitos del sistema, asegurando una cobertura adecuada de las funcionalidades.
    
          .row(numero="3" titulo="Ejecución")
            .col-md-12.mb-4.mb-md-0
              p Implica la aplicación de las pruebas planificadas, la ejecución de los casos de prueba y el registro detallado de los resultados obtenidos.
    
          .row(numero="4" titulo="Evaluación")
            .col-md-12.mb-4.mb-md-0
              p Analiza los resultados de las pruebas para identificar defectos, medir el cumplimiento de los criterios de aceptación y evaluar la calidad del <em>software</em>.

          .row(numero="5" titulo="Cierre")
            .col-md-12.mb-4.mb-md-0
              p Consolida la información generada durante el proceso, documenta las lecciones aprendidas y formaliza el cierre de las actividades de prueba.


      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema4/18.png', alt='', style="width: 100%").m-auto

    p.mt-4 La aplicación de estas fases permite identificar dependencias entre actividades, lo que facilita la coordinación del equipo y la optimización del proceso. Además, proporciona una base para medir el desempeño de las pruebas y detectar oportunidades de mejora.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p La documentación en el proceso de pruebas es el medio mediante el cual se registra, organiza y comunica la información generada durante la validación del <em>software</em>. Esta documentación no se limita a informes finales, sino que abarca todos los elementos que permiten comprender, ejecutar y evaluar las pruebas.


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La documentación cumple múltiples funciones dentro del proceso: facilita la ejecución de pruebas, permite el seguimiento de resultados y sirve como evidencia del trabajo realizado. Su correcta gestión permite mantener la trazabilidad y asegurar que la información esté disponible para futuras evaluaciones.
        <br><br>
        p La calidad de la documentación influye directamente en la efectividad del proceso de pruebas. Una documentación clara permite reproducir pruebas, entender resultados y facilitar la comunicación entre los miembros del equipo.


    p.mt-4 Además, los modelos de procesos y la documentación se complementan, ya que los modelos definen cómo se ejecutan las pruebas y la documentación registra lo que ocurre en cada fase. Esta relación permite mantener un control completo del proceso, desde la planificación hasta el cierre.



    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p Las pruebas se integran en procesos continuos, la documentación tiende a ser más dinámica, adaptándose a herramientas digitales que permiten actualizar la información en tiempo real. Esto mejora la accesibilidad y facilita la gestión del proceso

        p.mt-4 La correcta aplicación de modelos de procesos y una adecuada gestión de la documentación permiten garantizar que las pruebas se desarrollen de manera organizada, controlada y verificable, contribuyendo a la calidad del <em>software</em> y a la eficiencia del equipo.

    separador
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4. Resolución de problemas y operación de pruebas

    p La operación de pruebas corresponde a la ejecución controlada de los casos definidos, donde se valida el comportamiento del sistema en condiciones reales o simuladas. Durante esta fase, el equipo de pruebas no solo ejecuta actividades previamente diseñadas, sino que también identifica desviaciones, analiza su impacto y toma decisiones para su tratamiento.


    .row.align-items-center.mt-4(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema4/20.png', alt='', style="width: 480px").m-auto
      .col-lg-8.bg-4.p-4

        figure
          img(src="@/assets/curso/tema4/21.svg", alt="", style="width: 90px")

        p.mt-2 La resolución de problemas se integra directamente en esta operación, ya que los errores detectados deben ser analizados y gestionados de manera eficiente para evitar que afecten el funcionamiento del sistema. Este proceso requiere un enfoque estructurado que permita identificar la causa del problema y aplicar soluciones adecuadas.

    p.mt-4 Durante la ejecución de pruebas, es común encontrar errores que pueden tener diferentes niveles de complejidad. Por esta razón, es necesario establecer un proceso que permita analizarlos de forma ordenada, evitando soluciones superficiales que no resuelvan la causa real del problema; además, se debe tener en cuenta lo siguiente:

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/22.svg', alt='').img100.m-auto
        
        p.text-center
          b Identificación del error durante la ejecución
        p.text-center.mb-0 Consiste en detectar y documentar el fallo en el momento en que ocurre la prueba, registrando las condiciones, pasos realizados y evidencias necesarias para su posterior análisis.
              
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/23.svg', alt='').img100.m-auto
        p.text-center
          b Análisis de la causa del fallo
        p.text-center.mb-0 Implica examinar el origen del error para determinar si está relacionado con el código, la configuración, los datos de prueba o el diseño del sistema, evitando correcciones temporales.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/24.svg', alt='').img100.m-auto
        p.text-center
          b Evaluación del impacto en el sistema
        p.text-center.mb-0 Permite determinar cómo el error afecta la funcionalidad, el rendimiento, la seguridad o la experiencia del usuario, así como su gravedad y prioridad de corrección.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/25.svg', alt='').img100.m-auto
        p.text-center
          b Definición de solución adecuada
        p.text-center.mb-0 Consiste en proponer y aplicar una solución que ataque la causa raíz del problema, validando posteriormente que la corrección no genere nuevos errores.


    p.mt-4 La identificación de la causa raíz es un elemento clave en la resolución de problemas, ya que permite evitar la repetición de errores y mejorar la calidad del sistema. Este análisis puede involucrar la revisión de código, configuración del sistema o condiciones de ejecución.


    .row.align-items-center.mt-4(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/26.png', alt='', style="width: 480px").m-auto
      .col-lg-7
        p La operación de pruebas también implica monitorear el comportamiento del sistema durante la ejecución, registrando resultados y evidencias que permitan validar el cumplimiento de los requisitos. Este monitoreo facilita la detección de patrones de error y permite anticipar posibles fallos en etapas posteriores.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p La correcta operación de pruebas permite detectar errores en tiempo oportuno, lo que reduce el impacto en el desarrollo y facilita la corrección. Además, el registro de resultados permite mantener un historial de pruebas que puede ser utilizado para análisis futuros.
        
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema4/27.svg', style='width: 100px').m-auto
          
          .col
            p En este contexto, la comunicación entre el equipo de pruebas y el equipo de desarrollo es fundamental para la resolución de problemas. La claridad en la información registrada facilita la comprensión del error y acelera su solución.


    p.mt-4 Para realizar un reporte adecuado de problemas en el proceso de pruebas, es necesario incluir información clave que permita comprender, analizar y resolver el error de manera eficiente, teniendo en cuenta las siguientes acciones:

    SlyderB.mb-5.mt-4.p-4(:datos="datosSlyder" style="background-color: #EEE1E1 !important;")

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p La operación de pruebas se integra con herramientas que permiten automatizar el monitoreo, registrar resultados en tiempo real y gestionar incidencias de manera centralizada. Esto mejora la eficiencia del proceso y facilita la toma de decisiones.



</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Descripción del problema',
        texto:
          'En primer lugar, se debe proporcionar una <b>descripción clara del problema</b>, explicando qué ocurre y en qué contexto se presenta, evitando ambigüedades que dificulten su interpretación.',
        imagen: require('@/assets/curso/tema4/28.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Evidencias de la ejecución',
        texto:
          'Adicionalmente, es fundamental adjuntar <b>evidencias de la ejecución</b>, como capturas de pantalla, registros del sistema o resultados obtenidos, que respalden el hallazgo y permitan verificar el comportamiento observado. Estas evidencias facilitan la reproducción del error por parte del equipo técnico.',
        imagen: require('@/assets/curso/tema4/29.png'),
      },
      {
        titulo: 'Determinación de la severidad',
        texto:
          'También se debe indicar la <b>severidad del problema</b>, la cual refleja el nivel de impacto que tiene el error sobre el funcionamiento del sistema. Esto permite dimensionar la gravedad del fallo y orientar su tratamiento dentro del proceso.',
        imagen: require('@/assets/curso/tema4/30.png'),
      },
      {
        titulo: 'Definición de la prioridad',
        texto:
          'Por último, es necesario establecer la <b>prioridad de la incidencia</b>, definiendo el nivel de urgencia con el que debe ser atendida. Este criterio permite organizar la resolución de problemas, asegurando que los errores más críticos sean gestionados en menor tiempo.',
        imagen: require('@/assets/curso/tema4/31.png'),
      },
    ],
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
