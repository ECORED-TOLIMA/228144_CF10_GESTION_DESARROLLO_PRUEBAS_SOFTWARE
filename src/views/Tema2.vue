<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fundamentos de las pruebas de <em>software</em>

    .row.align-items-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/1.png', alt='', style="width: 380px").m-auto
      .col-lg-8
        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  figure
                    img(src="@/assets/curso/tema2/2.svg", alt="", style="width: 90px")

                  p.mt-2 Las pruebas de <em>software</em> constituyen un conjunto de actividades orientadas a evaluar el comportamiento de un sistema con el fin de identificar fallos y verificar que cumple con los requisitos definidos. Su aplicación no se limita a detectar errores, sino que permite validar la calidad del producto, reducir riesgos y asegurar su correcto funcionamiento antes de su implementación.

    p.mt-4 En el desarrollo de <em>software</em>, las pruebas forman parte de un proceso continuo que acompaña la construcción del sistema, integrándose en diferentes etapas según la metodología adoptada. Este enfoque permite anticipar problemas, evitar fallos críticos y mejorar la confiabilidad del producto final.

    .titulo-tres.mt-5: h3 Enfoque de las pruebas de <em>software</em>

    .row.align-items-center(data-aos="fade-down")
      .col-lg-7
        p El proceso de pruebas se centra en comparar el comportamiento esperado del sistema con los resultados obtenidos durante su ejecución. Para ello, se diseñan escenarios que permiten evaluar diferentes condiciones de uso, identificando posibles inconsistencias o fallos.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Este proceso implica no solo la ejecución de pruebas, sino también la planificación, el análisis de resultados y la toma de decisiones sobre la calidad del sistema. De esta manera, las pruebas se convierten en un mecanismo de control que permite asegurar que el <em>software</em> cumple con los estándares establecidos.

      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/3.png', alt='', style="width: 500px").m-auto


    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-tres.mt-5: h3 Niveles de prueba
        p Las pruebas se organizan en niveles que permiten evaluar el sistema de manera progresiva, desde sus componentes individuales hasta su funcionamiento completo. Cada nivel consiste en lo siguiente:
        
    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/4.svg', alt='').img100.m-auto
        p.text-center
          b Pruebas unitarias
        p.text-center.mb-0 Se enfocan en validar componentes individuales del sistema, como funciones, métodos o clases, asegurando que cada parte funcione correctamente de forma aislada antes de integrarse con otros elementos.
              
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/5.svg', alt='').img100.m-auto
        p.text-center
          b Pruebas de integración
        p.text-center.mb-0 Verifican la correcta interacción entre módulos o componentes ya probados, evaluando el intercambio de datos, la comunicación y el comportamiento conjunto para detectar errores en las conexiones entre partes del sistema.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/6.svg', alt='').img100.m-auto
        p.text-center
          b Pruebas de sistema
        p.text-center.mb-0 Evalúan el sistema completo en un entorno similar al de producción, comprobando que todas las funcionalidades trabajen de manera integrada y cumplan con los requisitos técnicos y funcionales establecidos.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/7.svg', alt='').img100.m-auto

        p.text-center
          b Pruebas de aceptación
        p.text-center.mb-0 Validan el sistema desde la perspectiva del usuario final o del cliente, confirmando que el producto satisface las necesidades, expectativas y criterios definidos antes de su entrega o puesta en funcionamiento.

    .row.justify-content-center.mt-4
      .col-lg-10
        p Cada nivel cumple una función específica dentro del proceso, permitiendo identificar errores en diferentes etapas del desarrollo. Este enfoque progresivo facilita la detección temprana de fallos y mejora la calidad del producto final.       
        

    .titulo-tres.mt-5: h3 Tipos de pruebas

    p.mt-2 Las pruebas pueden clasificarse según el enfoque utilizado para evaluar el sistema. Esta clasificación permite aplicar diferentes técnicas según el objetivo de la prueba. Los siguientes son los tipos de pruebas más aplicados:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/8.svg', alt='Texto que describa la imagen')
          
        h4.text-center Pruebas funcionales
        p Verifican que las funcionalidades del sistema cumplan correctamente con los requisitos establecidos y respondan según lo esperado ante distintas acciones del usuario.
      .col-md.tarjeta.bg-7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/9.svg', alt='Texto que describa la imagen')
          
        h4.text-center Pruebas no funcionales
        p Evalúan aspectos como el rendimiento, la seguridad, la usabilidad y la estabilidad del sistema, garantizando una experiencia adecuada bajo diferentes condiciones.
      .col-md.tarjeta.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/10.svg', alt='Texto que describa la imagen')
          
        h4.text-center Pruebas manuales
        p Son ejecutadas por personas que interactúan directamente con el sistema, explorando su comportamiento, identificando errores y validando la experiencia de uso.

      .col-md.tarjeta.bg-12.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/11.svg', alt='Texto que describa la imagen')
          
        h4.text-center Pruebas automatizadas
        p Son ejecutadas por herramientas especializadas que permiten repetir pruebas de forma eficiente, detectar fallos de manera temprana y optimizar el tiempo del proceso de validación.


    p.mt-4.text-center Basado en lo anterior, se relaciona el siguiente esquema explicativo:

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 4. 
          span Clasificación de los tipos de pruebas de <em>software</em>
        figure
          img(
            src='@/assets/curso/tema2/12.svg',
            alt='Figura 4 que contiene un esquema de los tipos de pruebas de <em>software</em>, mostrando la clasificación entre pruebas funcionales y no funcionales, niveles de prueba como unitarias, de integración y de sistema, enfoques de diseño como caja blanca, negra y gris, así como pruebas manuales, automatizadas, de rendimiento, carga, estrés, escalabilidad, compatibilidad, usabilidad y estabilidad.'
          )

        p.mt-4 La combinación de estos tipos permite realizar una evaluación completa del sistema, cubriendo tanto su funcionamiento como su comportamiento en condiciones específicas.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p Las pruebas de <em>software</em> permiten reducir el impacto de errores, mejorar la calidad del producto y garantizar su funcionamiento en condiciones reales. Su integración dentro del desarrollo evita retrabajos y facilita la entrega de soluciones confiables.



    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1. Concepto, objetivos y niveles de prueba

    p Para contextualizarse en esta temática, se invita a acceder al siguiente video introductorio, en el cual se explican de manera clara el concepto de pruebas de <em>software</em>, sus objetivos principales y los niveles de prueba. A través de ejemplos prácticos, se muestra cómo las pruebas permiten verificar el cumplimiento de los requisitos, identificar fallos y reducir riesgos, proporcionando una base sólida para comprender su importancia dentro del proceso de desarrollo de <em>software</em>:

    .row.justify-content-center.align-items-center.mt-4           
      .col-lg-12
        figure(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/wXQ3wUC9qQw?si=UyR9drhodT28prFt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-4 Los niveles de prueba no se ejecutan de forma aislada, sino que se complementan entre sí, permitiendo construir una validación progresiva del sistema. Este enfoque facilita la detección temprana de errores en etapas iniciales, evitando que se propaguen hacia niveles más complejos donde su corrección implica mayor esfuerzo.

    p La siguiente imagen detalla cómo se aplica este proceso de niveles:

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 5. 
          span Niveles de pruebas de <em>software</em> y su aplicación en el proceso de desarrollo
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema2/13.svg',
            alt='Figura 5 que muestra los niveles de pruebas de <em>software</em> y su aplicación dentro del proceso de desarrollo de manera piramidal, desde las pruebas unitarias enfocadas en componentes pequeños y aislados, pasando por las pruebas de integración que verifican el trabajo conjunto de los módulos, hasta las pruebas de interfaz y extremo a extremo, que evalúan flujos críticos del sistema mediante pruebas automáticas y manuales.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema2/13m.svg',
            alt=''
          )


    .bloque-texto-g.bg-3.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La correcta aplicación de estos niveles depende del contexto del proyecto y de la metodología utilizada. En enfoques iterativos, los niveles pueden ejecutarse de forma continua, mientras que en modelos secuenciales se aplican en etapas específicas. Esta diferencia influye en la rapidez con la que se detectan errores y en la eficiencia del proceso de validación.

    .row.align-items-center.mt-4(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema2/15.png', alt='', style="width: 380px").m-auto
      .col-lg-8
        p Este comportamiento refuerza la importancia de aplicar correctamente cada nivel de prueba, ya que permite distribuir la detección de errores a lo largo del desarrollo y no concentrarla en una única fase.

        p Además, los niveles de prueba se relacionan con el concepto de cobertura, el cual indica qué porcentaje del sistema ha sido evaluado. Una cobertura adecuada no implica probar todo, sino asegurar que las funcionalidades críticas han sido verificadas bajo condiciones relevantes.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p En las metodologías ágiles, los niveles de prueba no se aplican de manera estrictamente secuencial, sino que pueden ejecutarse de forma continua e integrada. Esto permite mantener un control constante sobre el estado del <em>software</em> y facilita la entrega de versiones funcionales en periodos cortos.


    p.mt-4 Esta integración también fortalece la retroalimentación dentro del equipo, ya que los resultados de las pruebas se convierten en insumos directos para la mejora del sistema. De esta manera, las pruebas dejan de ser una etapa final y se convierten en una actividad permanente dentro del desarrollo.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2. Tipos de pruebas de <em>software</em>


    .row.align-items-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/16.png', alt='', style="width: 380px").m-auto
      .col-lg-8
        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p La clasificación de las pruebas de <em>software</em> responde a la necesidad de evaluar el sistema desde diferentes perspectivas, permitiendo analizar su comportamiento, desempeño y seguridad. Esta diversidad de enfoques evita depender de un único criterio de validación y facilita la detección de fallos en distintos niveles del sistema.


        p.mt-4 En la práctica, los tipos de prueba se seleccionan según el riesgo asociado a cada funcionalidad, lo que permite priorizar aquellas áreas que pueden generar mayor impacto en caso de fallo. Este criterio orienta el esfuerzo hacia los componentes más críticos del sistema y mejora la eficiencia del proceso de validación.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema2/17.svg', style='width: 100px').m-auto
          
          .col
            p Además de la clasificación general, es importante considerar que los tipos de prueba pueden diferenciarse según el acceso al código, el momento de ejecución y el objetivo específico de validación. Esta diversidad permite construir una estrategia de pruebas más precisa y adaptada al proyecto. Su clasificación se realiza de esta manera:

    .row.justify-content-center.mt-4
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.clr-paleYellow.p-4.text-center.bg-09
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/18.svg', alt='Estructura lógica', style='width: 80px')
          h4.mb-0 Caja negra

          p Sin acceso al código - validación funcional. Se centran en evaluar el comportamiento del sistema desde el punto de vista del usuario, sin considerar su implementación interna.
    
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.clr-paleYellow.p-4.text-center.bg-09
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/19.svg', alt='Ideas generales', style='width: 80px')
          h4.mb-0 Caja blanca
          p Acceso al código - evaluación interna. Analizan la lógica del código, permitiendo verificar estructuras internas como condiciones, ciclos y flujos de ejecución.
    
      .col-lg-4
        .tarjeta.clr-paleYellow.p-4.text-center.bg-09
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/20.svg', alt='Ideas principales', style='width: 80px')
          h4.mb-0 Caja gris
          p Acceso parcial - validación combinada. Combina ambos enfoques, siendo útil en escenarios donde se requiere validar funcionalidad con cierto conocimiento técnico.


    p.mt-4 Otro criterio relevante corresponde al objetivo de validación, donde los tipos de prueba se seleccionan según el aspecto del sistema que se desea evaluar, como su estabilidad, rendimiento o seguridad. Encontrando las siguientes:

    .row
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Pruebas de regresión
          p.text-center Verifican que cambios no afecten funcionalidades existentes.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Pruebas de carga
          p.text-center Evalúan comportamiento bajo alta demanda.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Pruebas de estrés
          p.text-center Analizan límites del sistema.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Pruebas de seguridad
          p.text-center Identifican vulnerabilidades.


    .row.align-items-center.mt-4(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/21.svg', alt='', style="width: 390px").m-auto
      .col-lg-8
        p Estas pruebas permiten anticipar problemas que no son evidentes en condiciones normales, ampliando el alcance de la evaluación más allá del funcionamiento básico del sistema.

        p La combinación de estos enfoques permite construir una cobertura más completa del sistema, evitando depender únicamente de pruebas funcionales. Esto es especialmente importante en sistemas críticos, donde aspectos como el rendimiento o la seguridad tienen un impacto directo en la operación.

        p Los tipos de prueba se integran dentro de procesos continuos, donde se ejecutan de forma recurrente a medida que el sistema evoluciona. Este enfoque permite mantener un control constante sobre el estado del <em>software</em> y facilita la detección temprana de errores introducidos por cambios recientes.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p De esta manera, los tipos de prueba no deben entenderse como categorías aisladas, sino como componentes de una estrategia de validación que se adapta al contexto del proyecto y a las características del sistema.


    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3. Elementos y procedimientos de prueba

    .row.align-items-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema2/22.png', alt='', style="width: 480px").m-auto
      .col-lg-8
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Las pruebas de <em>software</em> se sustentan en un conjunto de elementos que permiten estructurar la validación del sistema de manera organizada y coherente. Estos elementos definen las bases sobre las cuales se construyen las actividades de prueba, estableciendo qué se evalúa y bajo qué condiciones, sin entrar aún en su ejecución detallada.
        p.mt-2 Dentro de estos elementos se incluyen componentes que permiten representar la información necesaria para validar el sistema, garantizando que las pruebas puedan ser diseñadas y analizadas de forma consistente.

        p Los siguientes son los elementos clave en las pruebas de <em>software</em>:


    .row.justify-content-center 
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema2/23.png', alt='', style="width: 100%").m-auto
      .col-lg-8
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Caso de prueba")
            .col-md-12.mb-4.mb-md-0
              p Define de manera detallada las condiciones, pasos y criterios bajo los cuales se evalúa una funcionalidad específica del sistema, permitiendo verificar su correcto comportamiento.
    
          .row(numero="2" titulo="Datos de prueba")
            .col-md-12.mb-4.mb-md-0
              p Proveen las entradas necesarias para ejecutar los casos de prueba, representando escenarios reales, límites o situaciones excepcionales que ayudan a validar el sistema.
    
          .row(numero="3" titulo="Resultado esperado")
            .col-md-12.mb-4.mb-md-0
              p Establece el comportamiento correcto que debería presentar el sistema tras la ejecución del caso de prueba, sirviendo como referencia para comparar los resultados obtenidos.

          .row(numero="4" titulo="Evidencia")
            .col-md-12.mb-4.mb-md-0
              p Registra y respalda los resultados obtenidos durante la ejecución de las pruebas, mediante capturas, registros o reportes que permiten verificar y auditar el proceso.

          .row(numero="5" titulo="Incidencia")
            .col-md-12.mb-4.mb-md-0
              p Documenta los fallos o desviaciones detectadas frente al resultado esperado, incluyendo información relevante para su análisis, corrección y seguimiento posterior.
    
      
    p.mt-4 Los datos de prueba permiten representar diferentes condiciones de evaluación, facilitando la validación del sistema en escenarios diversos. Su adecuada selección contribuye a mejorar la calidad de las pruebas, asegurando que el sistema sea evaluado en situaciones relevantes.


    .row.align-items-center.mt-4(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/24.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p Las evidencias generadas durante las pruebas permiten analizar el comportamiento del sistema, ya que proporcionan información verificable sobre los resultados obtenidos. Estas evidencias constituyen la base para interpretar los resultados sin necesidad de repetir la ejecución.

        p.mt-2 Las incidencias representan desviaciones detectadas durante la validación, permitiendo identificar comportamientos que no cumplen con lo esperado. Su registro facilita el análisis posterior y su tratamiento dentro del proceso. Interpretando con ello lo siguiente:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Los elementos definen la base estructural de las pruebas.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Permiten organizar la información de validación.
  
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Facilitan el análisis de resultados.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Contribuyen a la consistencia del proceso.


    .row.align-items-center.justify-content-center.mt-4
      .col-lg-10
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-1(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/25.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:0px")
              .col-lg
                p.p-2 En este contexto, los elementos de prueba no representan actividades del proceso, sino componentes que permiten estructurar la validación del sistema. Su correcta definición garantiza que las pruebas puedan desarrollarse de manera ordenada en las fases posteriores.

        p.mt-4 Este procedimiento no se aplica de manera lineal, sino que puede integrarse dentro de ciclos continuos de desarrollo, permitiendo ejecutar pruebas de forma recurrente. Esto facilita la detección temprana de errores y mejora la calidad del <em>software</em> a lo largo del tiempo.

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
