import { View, Text, TextInput, ScrollView, TouchableOpacity, } from "react-native";
import Styles from "./Style";

const LoginScreen = () =>{
    return (
        <ScrollView>
            <View style = {Styles.container}>
                <Text style = {Styles.title}>Login</Text>
                <TextInput
                style = {Styles.input}
                placeholder="Phone"
                />
                <TextInput
                style = {Styles.input}
                placeholder="Password"
                />
                <TouchableOpacity style = {Styles.Button}>
                    <Text style = {Styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default LoginScreen;