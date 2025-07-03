// services/DataService.js
class DataService {
    async refreshHomeData() {
        console.log('🔄 Refreshing home data...');

        // Simular carga de datos (reemplazar con tus APIs reales)
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('✅ Home data refreshed successfully');
        return { success: true };
    }
}

export default new DataService();