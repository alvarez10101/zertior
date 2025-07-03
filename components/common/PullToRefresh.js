// components/common/PullToRefresh.js
import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { colors } from '../../constants/colors';

const PullToRefresh = ({ children, onRefresh, ...props }) => {
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = async () => {
        setRefreshing(true);
        try {
            await onRefresh?.();
        } finally {
            setRefreshing(false);
        }
    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    tintColor={colors.accent}
                    colors={[colors.accent]}
                    progressBackgroundColor={colors.surface}
                    title="Actualizando..."
                    titleColor={colors.accent}
                />
            }
            showsVerticalScrollIndicator={false}
            {...props}
        >
            {children}
        </ScrollView>
    );
};

export default PullToRefresh;