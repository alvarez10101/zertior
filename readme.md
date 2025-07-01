# 🏆 Liga Deportiva App

Una aplicación React Native modular para gestión de competencias deportivas con navegación fluida entre competencias y subcategorías.

## 📱 Características Principales

- ✅ **Navegación Multi-nivel**: Home → Competencias → Subcategorías
- ✅ **Menú Lateral Animado**: Con navegación contextual
- ✅ **Slider de Videos**: Reproducción automática con controles
- ✅ **Sistema de Tabs**: Navegación interna reutilizable
- ✅ **Arquitectura Modular**: Componentes reutilizables y mantenibles
- ✅ **Estilos Centralizados**: Diseño consistente en toda la app
- ✅ **Performance Optimizada**: Carga eficiente de recursos

## 🚀 Tecnologías Utilizadas

- **React Native** - Framework principal
- **Expo** - Herramientas de desarrollo
- **Expo Video** - Reproducción de videos
- **Expo Font** - Fuentes personalizadas
- **React Hooks** - Manejo de estado moderno
- **Animated API** - Animaciones fluidas

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── common/           # Componentes reutilizables
│   │   ├── LoadingScreen.js
│   │   ├── MainHeader.js
│   │   ├── DynamicHeader.js
│   │   ├── SideMenu.js
│   │   ├── MenuHeader.js
│   │   ├── MenuItems.js
│   │   ├── MenuItem.js
│   │   ├── MenuFooter.js
│   │   ├── MenuToggle.js
│   │   ├── TabNavigation.js
│   │   ├── TabContent.js
│   │   ├── RegionHeader.js
│   │   ├── LigasList.js
│   │   ├── InfoCards.js
│   │   └── ActionButtons.js
│   ├── sliders/          # Componentes de slider
│   │   ├── MainSlider.js
│   │   ├── CompetenciasSlider.js
│   │   ├── RegionesSlider.js
│   │   └── RegionSlider.js
│   ├── sections/         # Secciones de contenido
│   │   ├── NoticiasSection.js
│   │   └── SponsorsSection.js
│   └── index.js          # Exportaciones centralizadas
├── screens/              # Pantallas principales
│   ├── HomeScreen.js
│   ├── CompetitionScreen.js
│   ├── SubcategoryScreen.js
│   └── RegionScreen.js
├── constants/            # Constantes globales
│   └── colors.js
├── data/                 # Datos mock
│   └── mockData.js
├── styles/               # Estilos centralizados
│   └── styles.js
├── fonts/                # Fuentes personalizadas
├── img/                  # Imágenes
├── video/                # Videos
└── App.js               # Componente principal
```

## 🎯 Flujo de Navegación

### Navegación Principal
```
Home Screen
├── Competencias → Competition Screen → Subcategory Screen
├── Regiones → Region Screen
└── Menú Lateral → Varias secciones
```

### Estados de la Aplicación
- `currentScreen`: Controla la pantalla activa
- `selectedCompetition`: Competencia seleccionada
- `selectedSubcategory`: Subcategoría seleccionada
- `selectedRegion`: Región seleccionada
- `selectedTab`: Pestaña activa en navegación interna

## 🛠️ Instalación y Configuración

### Prerrequisitos
```bash
Node.js >= 14
npm o yarn
Expo CLI
```

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repo]
cd liga-deportiva-app

# Instalar dependencias
npm install
# o
yarn install

# Iniciar la aplicación
expo start
```

### Fuentes Requeridas
Coloca la fuente `DAZNOscine-Bold.ttf` en la carpeta `/fonts/`

### Recursos Multimedia
- Imágenes: Carpeta `/img/`
- Videos: Carpeta `/video/`

## 🎨 Personalización

### Colores
Modifica `/constants/colors.js` para cambiar la paleta de colores:

```javascript
export const colors = {
  primary: '#1B365D',
  accent: '#FFD700',
  background: '#1A1F2E',
  // ... más colores
};
```

### Datos
Actualiza `/data/mockData.js` para cambiar:
- Competencias y subcategorías
- Regiones y equipos
- Noticias y sponsors
- Configuración de sliders

### Estilos
Todos los estilos están centralizados en `/styles/styles.js`

## 📱 Pantallas Principales

### 🏠 HomeScreen
- Slider principal con videos
- Grid de competencias
- Lista de regiones
- Sección de noticias
- Sponsors

### ⚽ CompetitionScreen
- Banner de competencia
- Lista de subcategorías
- Navegación a subcategorías específicas

### 🎯 SubcategoryScreen
- Banner de subcategoría
- Sistema de tabs (Fixture, Posiciones, Equipos, Stats)
- Detalles específicos
- Botones de acción

### 🌍 RegionScreen
- Header con navegación
- Información de la región
- Lista de ligas
- Sistema de tabs

## 🔧 Componentes Reutilizables

### Headers
- `MainHeader`: Header principal con logo y menú
- `DynamicHeader`: Header con navegación contextual

### Navegación
- `TabNavigation`: Sistema de pestañas reutilizable
- `SideMenu`: Menú lateral con animaciones

### Tarjetas
- `InfoCard`: Tarjetas de información general
- `DetailCard`: Tarjetas con filas de detalles
- `ActionButtons`: Botones de acción configurables

### Sliders
- `MainSlider`: Slider principal con videos
- `CompetenciasSlider`: Lista horizontal de competencias
- `RegionesSlider`: Lista horizontal de regiones

## 🚀 Performance

### Optimizaciones Implementadas
- Componentes modulares para mejor tree-shaking
- Estilos centralizados con StyleSheet.create()
- Lazy loading de pantallas
- Animaciones con useNativeDriver
- Imágenes optimizadas

### Métricas Objetivo
- Tiempo de carga inicial: < 3s
- Navegación fluida: 60 FPS
- Uso de memoria optimizado

## 🧪 Testing

### Estructura de Tests (Recomendada)
```
__tests__/
├── components/
│   ├── common/
│   ├── sliders/
│   └── sections/
├── screens/
└── utils/
```

### Testing Individual
Cada componente puede ser testeado independientemente:

```javascript
import { render } from '@testing-library/react-native';
import MainSlider from '../components/sliders/MainSlider';

test('renders main slider correctly', () => {
  const { getByTestId } = render(<MainSlider />);
  // ... tests
});
```

## 🤝 Contribución

### Estándares de Código
- Usar componentes funcionales con hooks
- Nomenclatura consistente en español/inglés
- Comentarios en código complejo
- PropTypes o TypeScript para tipado

### Workflow
1. Fork del repositorio
2. Crear rama feature/nombre-feature
3. Desarrollar funcionalidad
4. Tests pasando
5. Pull request con descripción detallada

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE.md para detalles.

## 📞 Soporte

Para reportar bugs o solicitar features:
- Issues en GitHub
- Email: dev@ligadeportiva.cl

---

## 🎯 Próximas Funcionalidades

- [ ] Sistema de notificaciones push
- [ ] Integración con API real
- [ ] Modo offline
- [ ] Sistema de favoritos persistente
- [ ] Filtros avanzados
- [ ] Compartir en redes sociales
- [ ] Modo oscuro/claro
- [ ] Múltiples idiomas

---

**Desarrollado con ❤️ para la comunidad deportiva**