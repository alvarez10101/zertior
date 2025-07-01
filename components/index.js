// components/index.js - Exportaciones centralizadas
// Este archivo facilita las importaciones en otros componentes

// ========================================
// COMPONENTES COMUNES
// ========================================
export { default as ActionButtons } from './common/ActionButtons';
export { default as DynamicHeader } from './common/DynamicHeader';
export { default as LigasList } from './common/LigasList';
export { default as LoadingScreen } from './common/LoadingScreen';
export { default as MainHeader } from './common/MainHeader';
export { default as MenuFooter } from './common/MenuFooter';
export { default as MenuHeader } from './common/MenuHeader';
export { default as MenuItem } from './common/MenuItem';
export { default as MenuItems } from './common/MenuItems';
export { default as MenuToggle } from './common/MenuToggle';
export { default as RegionHeader } from './common/RegionHeader';
export { default as SideMenu } from './common/SideMenu';
export { default as TabContent } from './common/TabContent';
export { default as TabNavigation } from './common/TabNavigation';

// Componentes de tarjetas de información
export { DetailCard, DetailRow, InfoCard } from './common/InfoCards';

// ========================================
// SLIDERS
// ========================================
export { default as CompetenciasSlider } from './sliders/CompetenciasSlider';
export { default as MainSlider } from './sliders/MainSlider';
export { default as RegionesSlider } from './sliders/RegionesSlider';
export { default as RegionSlider } from './sliders/RegionSlider';

// ========================================
// SECCIONES
// ========================================
export { default as NoticiasSection } from './sections/NoticiasSection';
export { default as SponsorsSection } from './sections/SponsorsSection';

// ========================================
// EJEMPLO DE USO:
// ========================================
/*
// En lugar de:
import MainHeader from './components/common/MainHeader';
import MainSlider from './components/sliders/MainSlider';
import NoticiasSection from './components/sections/NoticiasSection';

// Puedes usar:
import { MainHeader, MainSlider, NoticiasSection } from './components';

// O importar todo:
import * as Components from './components';
// Uso: <Components.MainHeader />
*/