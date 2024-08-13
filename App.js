import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { launchDocumentScannerAsync, ResultFormatOptions } from '@infinitered/react-native-mlkit-document-scanner';
import { useEffect } from 'react';

export default function App() {
	useEffect(() => {
		launchDocumentScannerAsync();
	}, []);

	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
