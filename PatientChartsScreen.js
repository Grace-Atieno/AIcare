import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PatientChartsScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Your Health Reports</Text>

            <View style={styles.chartSection}>
                <Text style={styles.chartTitle}>Blood Sugar Trend (Last 7 Days)</Text>
                <View style={styles.chart}>
                    <Text style={styles.placeholder}>
                        📊 Chart will display here{'\n'}
                        (Using react-native-chart-kit)
                    </Text>
                </View>
            </View>

            <View style={styles.chartSection}>
                <Text style={styles.chartTitle}>Blood Pressure Trend (Last 7 Days)</Text>
                <View style={styles.chart}>
                    <Text style={styles.placeholder}>
                        📈 Chart will display here{'\n'}
                        (Using react-native-chart-kit)
                    </Text>
                </View>
            </View>

            <View style={styles.chartSection}>
                <Text style={styles.chartTitle}>Weight Trend (Last 30 Days)</Text>
                <View style={styles.chart}>
                    <Text style={styles.placeholder}>
                        📉 Chart will display here{'\n'}
                        (Using react-native-chart-kit)
                    </Text>
                </View>
            </View>

            <View style={styles.alertSection}>
                <Text style={styles.alertTitle}>🤖 AI Insights</Text>
                <View style={styles.alertBox}>
                    <Text style={styles.alertText}>
                        ✓ Blood sugar levels stable this week{'\n'}
                        ⚠️ Slight weight increase (2 kg){'\n'}
                        ✓ Blood pressure within normal range
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    chartSection: { marginBottom: 25 },
    chartTitle: { fontSize: 16, fontWeight: '600', marginBottom: 10 },
    chart: {
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 200,
    },
    placeholder: { textAlign: 'center', color: '#999' },
    alertSection: { marginTop: 30, marginBottom: 30 },
    alertTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
    alertBox: {
        backgroundColor: '#e8f5e9',
        padding: 15,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#4CAF50',
    },
    alertText: { fontSize: 14, lineHeight: 22, color: '#2e7d32' },
});
