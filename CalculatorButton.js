import styles from "./style";
import { TouchableOpacity, Text } from 'react-native';

export default CalculatorButton = ({ title, onPress, style }) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);