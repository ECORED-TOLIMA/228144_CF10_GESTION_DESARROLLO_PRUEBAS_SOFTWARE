<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Desafío QA master: dominio del proceso de pruebas de <em><em>software</em></em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar de forma integral los conocimientos sobre el proceso de pruebas de <em>software</em>, abarcando metodologías de desarrollo, fundamentos, técnicas, gestión, automatización y mejora continua, con el propósito de fortalecer la comprensión conceptual y aplicada en entornos reales de desarrollo y aseguramiento de la calidad.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de una metodología de desarrollo de <em>software</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar el proceso de desarrollo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ejecutar pruebas automáticas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar interfaces gráficas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Documentar errores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué caracteriza a las metodologías ágiles?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Procesos rígidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Documentación extensa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Adaptabilidad al cambio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso exclusivo de pruebas manuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué representan las lecciones aprendidas en un proyecto?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Errores eliminados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conocimiento adquirido del proceso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Documentos técnicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Requisitos funcionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el objetivo principal de las pruebas de <em>software</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar sistemas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear código.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Implementar interfaces.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Verificar el cumplimiento de requisitos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué nivel de prueba valida componentes individuales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Integración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Unidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aceptación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es un ejemplo de prueba no funcional?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Validación de login.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prueba de rendimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Registro de usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Flujo de compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué elemento define condiciones específicas de validación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escenario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Caso de prueba.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incidencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evidencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué documento define la estrategia de pruebas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informe.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Caso de prueba.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Matriz.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Plan de pruebas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué permite un cronograma de pruebas?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluar código.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar tiempos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar pruebas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar errores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué describe un escenario de prueba?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Error del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resultado esperado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Situación general de uso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Código fuente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuál es el objetivo de las técnicas de prueba?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar código.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar pruebas eficientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Registrar errores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Documentar resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué representa el ciclo TDD?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Test → Deploy → Design.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Code → Test → Debug.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Red → Green → Refactor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Plan → Execute → Report.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuál es una herramienta de pruebas?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Excel.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Selenium.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Word.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'PowerPoint.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué garantiza la confidencialidad en pruebas?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Documentación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Automatización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acceso controlado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ejecución manual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué describe un modelo de proceso?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Código fuente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estructura de actividades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Interfaz gráfica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Base de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué implica la resolución de problemas?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar pruebas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registrar datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar <em>software</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Analizar y corregir errores.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué mide la cobertura de pruebas?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tiempo de ejecución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cantidad de errores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alcance de validación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Recursos usados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué define el plan de certificación?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseño del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Validación final del <em>software</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Desarrollo del código.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestión de recursos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué es el <em>refactoring</em>?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear código nuevo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejorar el código sin cambiar su funcionalidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ejecutar pruebas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar errores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué permite la automatización de pruebas?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar interfaces.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir documentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ejecutar pruebas manuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ejecutar pruebas de forma automática.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
