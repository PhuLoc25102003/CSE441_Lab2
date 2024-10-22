
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#e5e5e5',
    },
    display: {
        flex: 3,
        justifyContent: 'flex-end',
        backgroundColor: '#f5f5f5',
        alignItems: 'center',

    },
    displayText: {
        fontSize: 60,
        color: '#000',
    },
    buttonContainer: {
        flex: 3,
        backgroundColor: '#F5F5F5',
        padding: 30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        margin: 3,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 40,
        elevation: 5,
    },
    buttonText: {
        fontSize: 32,
        color: '#000',

    },
    equalButton: {
        backgroundColor: '#ff9800',
        flex: 1,
        margin: 10,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        color: 'white',
    },
    operator: {
        backgroundColor: '#E9E9E9',
    }
}

)