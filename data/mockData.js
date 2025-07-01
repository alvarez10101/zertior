// data/mockData.js
import { colors } from '../constants/colors';

export const regiones = [
  { id: 1, name: 'Región Metropolitana', color: colors.primaryLight, teams: 24 },
  { id: 2, name: 'Valparaíso', color: colors.primaryLight, teams: 18 },
  { id: 3, name: 'Biobío', color: colors.primaryLight, teams: 16 },
  { id: 4, name: 'Araucanía', color: colors.primaryLight, teams: 12 },
  { id: 5, name: 'Los Lagos', color: colors.primaryLight, teams: 14 },
];

export const competenciasData = [
  {
    id: 1,
    name: 'Copa Fútbol',
    tipo: 'futbol',
    color: colors.primary,
    description: 'Torneo principal de fútbol',
    subcategorias: [
      { id: 1, name: 'Fútbol Femenino', participants: '12 equipos', color: 'bg-pink-500', icon: '⚽' },
      { id: 2, name: 'Adultos', participants: '16 equipos', color: 'bg-blue-500', icon: '👨‍💼' },
      { id: 3, name: 'Junior', participants: '8 equipos', color: 'bg-green-500', icon: '🧒' }
    ]
  },
  {
    id: 2,
    name: 'Open Pádel',
    tipo: 'padel',
    color: colors.primary,
    description: 'Competencia de pádel profesional',
    subcategorias: [
      { id: 4, name: 'Femenino', participants: '6 parejas', color: 'bg-pink-500', icon: '🏓' },
      { id: 5, name: 'Masculino', participants: '8 parejas', color: 'bg-blue-500', icon: '🏓' },
      { id: 6, name: 'Mixto', participants: '4 parejas', color: 'bg-purple-500', icon: '🏓' }
    ]
  },
  {
    id: 3,
    name: 'Masters Tenis',
    tipo: 'tenis',
    color: colors.primary,
    description: 'Torneo profesional de tenis',
    subcategorias: [
      { id: 7, name: 'Profesional', participants: '24 jugadores', color: 'bg-yellow-500', icon: '🎾' },
      { id: 8, name: 'Amateur', participants: '16 jugadores', color: 'bg-green-500', icon: '🎾' },
      { id: 9, name: 'Veteranos', participants: '12 jugadores', color: 'bg-gray-500', icon: '🎾' }
    ]
  }
];

export const ligas = {
  1: [
    { id: 1, name: 'Liga Premier Santiago', teams: 8, status: 'EN VIVO' },
    { id: 2, name: 'Copa Metropolitana', teams: 16, status: 'PRÓXIMO' },
  ],
  2: [
    { id: 3, name: 'Liga Porteña', teams: 10, status: 'EN VIVO' },
    { id: 4, name: 'Copa Valparaíso', teams: 8, status: 'FINALIZADA' },
  ]
};

export const noticias = [
  {
    id: 1,
    titulo: 'Campeonato Juvenil 2025',
    time: '2h',
    imagen: { uri: 'https://s3.abcstatics.com/abc/www/multimedia/deportes/2024/02/08/kylian-mbappe-RFv8OJIroNolLu2idkZnJOI-758x531@abc.jpg' },
    enlace: 'https://miligadeportiva.cl/noticias/juvenil2025'
  },
  {
    id: 2,
    titulo: 'Final de la Copa Metropolitana',
    time: '5h',
    imagen: { uri: 'https://s3.abcstatics.com/abc/www/multimedia/deportes/2024/02/08/kylian-mbappe-RFv8OJIroNolLu2idkZnJOI-758x531@abc.jpg' },
    enlace: 'https://miligadeportiva.cl/noticias/copanacional'
  },
];

export const sliderData = [
  {
    id: 1,
    type: 'video',
    title: 'Final Copa Santiago',
    bg: '#1a1a2e',
    uri: require('../assets/video/zertior360.mp4'),
  },
  {
    id: 2,
    type: 'foto',
    title: 'Mejores jugadas',
    bg: '#16213e',
    url: 'https://7x7cajalosandes.cl/images/slide_home/0-19-133791.jpeg',
  },
  {
    id: 3,
    type: 'video',
    title: 'Resumen Fecha 10',
    bg: '#0f3460',
    uri: 'https://www.w3schools.com/html/movie.mp4',
  },
];

export const sponsors = [
  { id: 1, logo: require('../assets/img/sportbyte.png') },
  { id: 2, logo: require('../assets/img/zertior.png') },
];

export const tabs = [
  { id: 'fixture', name: 'Fixture', icon: '📅' },
  { id: 'posiciones', name: 'Posiciones', icon: '🏆' },
  { id: 'equipos', name: 'Equipos', icon: '👥' },
  { id: 'estadisticas', name: 'Stats', icon: '📊' },
];