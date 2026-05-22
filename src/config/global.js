export default {
  global: {
    Name: 'Gestión del proceso de pruebas de <em>software</em>',
    Description:
      'Este componente abarca metodologías de desarrollo, fundamentos y tipos de pruebas, así como técnicas para diseñar casos, gestionar incidencias y aplicar herramientas especializadas. Además, incluye la ejecución, certificación y mejora continua del <em>software</em>, junto con la generación de informes, trazabilidad y automatización en entornos de integración continua.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Metodologías de desarrollo de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos y tipos de metodologías',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Metodologías tradicionales y ágiles',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Marcos de referencia y lecciones aprendidas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de las pruebas de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto, objetivos y niveles de prueba',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de pruebas de <em>software</em>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Elementos y procedimientos de prueba',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planificación y técnicas de pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Plan de pruebas: concepto, alcance y formatos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Recursos, cronograma y gestión de ítems',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Escenarios, casos de prueba y nomenclaturas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Técnicas de pruebas de <em>software</em>',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Enfoque TDD y gestión de incidencias',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas y gestión del proceso de pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Herramientas para la aplicación de pruebas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Gestión del proceso y confidencialidad',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Modelos de procesos y documentación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Resolución de problemas y operación de pruebas',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ejecución, certificación y mejora continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Ejecución de pruebas, cobertura y rendimiento',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Plan de certificación y gestión de incidencias',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Mejora continua y refactoring',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Informes, trazabilidad y automatización de pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Informes de pruebas funcionales y no funcionales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Trazabilidad de pruebas y control de versiones',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Automatización, integración y entrega continua',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA10_228144_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '<strong>Automatización de pruebas</strong>',
      significado:
        'uso de herramientas y scripts para ejecutar pruebas de manera automática, mejorando la eficiencia, repetibilidad y control del proceso de validación.',
    },
    {
      termino: '<strong>Caso de prueba</strong>',
      significado:
        'unidad básica de validación que describe condiciones específicas de entrada, pasos de ejecución y resultados esperados para verificar el comportamiento del sistema.',
    },
    {
      termino: '<strong>Cobertura de pruebas</strong>',
      significado:
        'medida que indica el grado en que los requisitos, funcionalidades o componentes del sistema han sido evaluados mediante pruebas.',
    },
    {
      termino: '<strong>Escenario de prueba</strong>',
      significado:
        'descripción general de una situación funcional del sistema que representa un flujo de uso, a partir del cual se derivan múltiples casos de prueba.',
    },
    {
      termino: '<strong>Incidencia</strong>',
      significado:
        'registro de una desviación entre el comportamiento esperado y el observado en el sistema durante la ejecución de pruebas.',
    },
    {
      termino:
        '<strong>Metodología de desarrollo de <em>software</em></strong>',
      significado:
        'conjunto de enfoques, principios y prácticas que guían la planificación, construcción y entrega de un sistema de <em>software</em>, definiendo cómo se organizan las actividades y los roles dentro del proceso.',
    },
    {
      termino: '<strong>Plan de pruebas</strong>',
      significado:
        'documento que define la estrategia de validación del <em>software</em>, incluyendo alcance, criterios, prioridades y organización de las actividades de prueba.',
    },
    {
      termino: '<strong>Pruebas de <em>software</em></strong>',
      significado:
        'proceso sistemático de evaluación del sistema con el fin de verificar su funcionamiento, identificar errores y asegurar que cumple con los requisitos definidos.',
    },
    {
      termino: '<strong>Técnicas de pruebas</strong>',
      significado:
        'métodos estructurados utilizados para diseñar casos de prueba de forma eficiente, permitiendo seleccionar datos y condiciones relevantes para la evaluación del sistema.',
    },
    {
      termino: '<strong>Trazabilidad</strong>',
      significado:
        'capacidad de relacionar requisitos, casos de prueba, resultados e incidencias, permitiendo el seguimiento completo del proceso de validación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Beck, K. (2003). <em>Test Driven Development: By Example</em>. Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Black, R., van Veenendaal, E. & Graham, D. (2018). <em>Foundations of Software Testing: ISTQB Certification</em> (4th ed.). Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Chacon, S. & Straub, B. (2014). <em>Pro Git</em> (2nd ed.). Apress.',
      link: '',
    },
    {
      referencia:
        'Forsgren, N., Humble, J. & Kim, G. (2018). <em>Accelerate: The Science of Lean Software and DevOps</em>. IT Revolution Press.',
      link: '',
    },
    {
      referencia:
        'Humble, J. & Farley, D. (2010). <em>Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation</em>. Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Schwaber, K. & Beedle, M. (2002). <em>Agile Software Development with Scrum</em>. Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Sommerville, I. (2016). <em>Software Engineering </em>(10th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Spillner, A., Teschner, T. & Pfahl, D. (2014). <em>Software Testing Foundations: A Study Guide for the Certified Tester Exam</em> (4th ed.). Rocky Nook.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
