// hooks/usePullToRefresh.js - HOOK FINAL UNIFICADO
import { useState } from 'react';
import { RefreshControl } from 'react-native';

export const usePullToRefresh = (onRefresh) => {
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = async () => {
        setRefreshing(true);
        try {
            await onRefresh();
        } finally {
            setRefreshing(false);
        }
    };

    // ✅ RefreshControl unificado - ocultar spinners nativos para usar indicador custom
    const refreshControl = (
        <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor="transparent"
            colors={['transparent']}
            progressBackgroundColor="transparent"
        />
    );

    return { refreshing, refreshControl };
};