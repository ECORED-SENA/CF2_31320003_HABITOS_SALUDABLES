export default {
  global: {
    componenteFormativo: 'Entornos saludables y preparación de alimentos',
    descripcionCurso:
      '​​Las enfermedades no transmisibles como cáncer, obesidad, diabetes mellitus y enfermedades cardiovasculares, frecuentemente se originan por malos hábitos alimenticios. Promover entornos saludables y aumentar la actividad física, clasificada por intensidad y necesidades nutritivas específicas, mejora la salud general. Además, la percepción sensorial influye en la elección de alimentos, enfatizando la importancia de preparar comidas saludables para prevenir estas condiciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
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
        titulo: 'Enfermedades no transmisibles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Enfermedades causadas por mala alimentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cáncer',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Obesidad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diabetes <em>mellitus</em>',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Enfermedades cardiovasculares',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Promoción de entornos saludables',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Actividad física',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Clasificación de las actividades físicas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Necesidades nutritivas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Percepción sensorial de los alimentos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Preparación de alimentos saludables',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/31320003_CF2_DU.zip',
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
      tema: 'Promoción de entornos saludables ',
      referencia:
        'Organización Panamericana de la Salud. (s.f.). <em>Promoción de la salud</em>.',
      tipo: 'Página web',
      link:
        'https://www.paho.org/es/temas/promocion-salud#:~:text=La%20Promoci%C3%B3n%20de%20la%20Salud%20fomenta%20cambios%20en%20el%20entorno,ambientales%2C%20organizacionales%20y%20personales%20interact%C3%BAan',
    },
  ],
  glosario: [
    {
      termino: 'Lácteos',
      significado:
        'son productos que se obtienen a partir de la leche. Pueden ser derivados directos como la leche fresca, crema, y mantequilla, o productos fermentados como el yogur y el queso. Los lácteos son una fuente importante de nutrientes como calcio, proteínas y vitaminas A y D. ',
    },
    {
      termino: 'Carnes',
      significado:
        'se refieren al tejido muscular de animales que se utiliza como alimento. Este grupo incluye carne de res, cerdo, cordero, y aves, así como los productos derivados de estos animales como embutidos y charcutería. La carne es una fuente rica de proteínas de alta calidad, hierro, zinc y vitamina B12. ',
    },
    {
      termino: 'Frutas y verduras',
      significado:
        'son partes comestibles de plantas que se consumen como parte de la dieta. Las frutas son generalmente dulces o ácidas y ricas en vitaminas, minerales y fibra. Las verduras pueden incluir hojas, raíces, tallos y otras partes de plantas, y son cruciales para una dieta equilibrada debido a su bajo contenido calórico y alta cantidad de nutrientes. ',
    },
    {
      termino: 'Cereales',
      significado:
        'son granos que provienen de cultivos como el trigo, maíz, arroz, cebada, avena y centeno. Estos granos son fundamentales en la alimentación global y se consumen de diversas formas: enteros, en harinas, y como ingredientes de panes, pastas y otros productos alimenticios. Son una fuente principal de carbohidratos y también contienen proteínas, fibras y vitaminas del complejo B. ',
    },
    {
      termino: 'Enlatados',
      significado:
        'son alimentos que han sido procesados y sellados herméticamente en contenedores metálicos para su conservación. Este método permite prolongar la vida útil de los alimentos manteniendo sus nutrientes. Los productos enlatados pueden incluir frutas, verduras, carnes, y pescados, entre otros. ',
    },
    {
      termino: 'Huevo',
      significado:
        'se refiere comúnmente al huevo de gallina, aunque también se consumen huevos de otras aves como patos y codornices. Es un alimento versátil y una fuente excelente de proteína completa, además de contener vitaminas y minerales esenciales. Se puede consumir de muchas maneras, incluyendo cocido, frito o como ingrediente en diversas preparaciones culinarias. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Aristizábal, J. y Sánchez, T. (2007). Guía técnica para producción y análisis de almidón de yuca.',
      link: '',
    },
    {
      referencia:
        'Bravo, F. (2004). El manejo higiénico de los alimentos. México, D. F., México: Limusa. ',
      link: '',
    },
    {
      referencia:
        'Desrosier, N. (1977). The technology of food preservation. Michigan, Estados Unidos de América: Avi publishing company. ',
      link: '',
    },
    {
      referencia:
        'Jiménez, C. (1950). Lecciones sobre las enfermedades de la nutrición. Madrid, España: Científico médica. ',
      link: '',
    },
    {
      referencia:
        'Romero, A. (2003). Actividad física beneficiosa para la salud.',
      link: 'http://www.efdeportes.com/efd63/activ.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta Temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
