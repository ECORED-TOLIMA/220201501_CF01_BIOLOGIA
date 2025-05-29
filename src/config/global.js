export default {
  global: {
    componenteFormativo: 'Entorno vivo',
    descripcionCurso:
      'El entorno vivo hace que el aprendiz reconozca los referentes que conciben un ser vivo como un sistema que permite su manifestación, desde lo morfológico, fisiológico, reproductivo e interactivo con el ambiente. A su vez establece relación con el entorno químico y físico como parte del mundo de la vida.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Referente celular',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Teoría celular moderna',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de las células',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Organelos celulares',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Niveles de organización de los seres vivos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Referente organísmico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Funciones vitales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Funciones de relación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'La reproducción',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Referente ecosistémico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Clasificación de los factores abióticos del medio ambiente físico',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Factores bióticos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ciclos biogeoquímicos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Biotecnología',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Ventajas y desventajas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Aplicaciones',
            hash: 't_4_2',
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
        download: 'downloads/CFA_01_12350004_DU.pdf',
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
      tema: '1. Referente celular',
      referencia:
        'Roa García, A. (2019). La vida y lo vivo.  Una inquietud por la enseñanza de la Biología en Colombia.',
      tipo: 'Artículo',
      link:
        'https://revistas.upn.edu.co/index.php/bio-grafia/article/view/10494/9280',
    },
    {
      tema: '3.3. Ciclos biogeoquímicos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). Ciclos biogeoquímicos. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Kw8g93wl5fc',
    },
    {
      tema: '4. Biotecnología',
      referencia:
        'Muñoz, M. (2024). El poder transformador de la biotecnología en América Latina: avances, desafíos y perspectivas.',
      tipo: 'Artículo',
      link:
        'https://revistas.unal.edu.co/index.php/biotecnologia/article/view/118015/93664',
    },
  ],
  glosario: [
    {
      termino: 'Ácido nucleico',
      significado:
        'polímeros compuestos por nucleótidos, que en los organismos vivos se basan en uno de dos azúcares, ribosa o desoxirribosa, lo que da origen a los términos ácido ribonucleico (RNA) y ácido desoxirribonucleico (DNA).',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'se refiere a la diversidad de especies, tanto vegetales como animales que viven en un espacio determinado.',
    },
    {
      termino: 'Descomponedores',
      significado:
        'son los organismos que se alimentan de restos orgánicos, transformándolos en inorgánicos. Los descomponedores más conocidos y destacados, son los hongos y las bacterias, pero en este grupo entran las babosas, lombrices y algunos insectos.',
    },
    {
      termino: 'Enzima',
      significado:
        'las enzimas son moléculas de naturaleza proteica que catalizan reacciones químicas. Casi todos los procesos en las células necesitan enzimas. A las reacciones mediadas por enzimas, se las denomina reacciones enzimáticas.',
    },
    {
      termino: 'Estímulo',
      significado:
        'cualquier cosa en el medio ambiente que causa que una cosa viviente reaccione.',
    },
    {
      termino: 'Homeostasis',
      significado:
        'es la tendencia de un sistema a mantener la estabilidad interna.',
    },
    {
      termino: 'Precipitación',
      significado:
        'en meteorología, la precipitación es cualquier forma de hidrometeoro que cae de la atmósfera y llega a la superficie terrestre. Este fenómeno incluye lluvia, llovizna, nieve, aguanieve, granizo, neblina y rocío, que son formas de condensación y no de precipitación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Audersirk, T., Audersirk, G. & Byers, B. (2009). Biología: la vida en la tierra.',
      link: '',
    },
    {
      referencia:
        'Campbell, N. & Reece, J. (2007). Biología. Editorial Panamericana.',
      link: '',
    },
    {
      referencia:
        'Curtis, H. (2008). Biología general. Ed. Médica Panamericana.',
      link: '',
    },
    {
      referencia:
        'Lodish, H., Berk, A., Kaiser, C., Krieger, M., Bretscher, A., Ploegh, H., Amon, A. & Scott, M. (2016). Biología celular y molecular. Editorial Médica Panamericana.',
      link: '',
    },
    {
      referencia:
        'Thieman, W. J. (2009). Introducción a la biotecnología. 4.ª ed. Pearson Education India.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
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
          nombre: 'Diana Julieth Núñez Ortegón',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Víctor Julián Ardila Botero',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
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
