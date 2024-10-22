import React, { useState } from 'react';
import { View, Text} from 'react-native';
import styles from './style';
import CalculatorButton from './CalculatorButton';

const App = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  // Handle button press for numbers
  const handlePress = (value) => {
    if (currentValue === '0') {
      setCurrentValue(value);
    } else {
      setCurrentValue(currentValue + value);
    }
  };

  // Handle operator press
  const handleOperatorPress = (value) => {
    setOperator(value);
    setPreviousValue(currentValue);
    setCurrentValue('0');
  };

  // Handle the equals press
  const handleEqualPress = () => {
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    if (operator === '+') {
      setCurrentValue((prev + current).toString());
    } else if (operator === '-') {
      setCurrentValue((prev - current).toString());
    } else if (operator === '*') {
      setCurrentValue((prev * current).toString());
    } else if (operator === '/') {
      setCurrentValue((prev / current).toString());
    }

    setOperator(null);
    setPreviousValue(null);
  };

  // Clear the display
  const handleClear = () => {
    setCurrentValue('0');
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.displayText}>{currentValue}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {/* Row 1 */}
        <View style={styles.row}>
          <CalculatorButton title="7" onPress={() => handlePress('7')} />
          <CalculatorButton title="8" onPress={() => handlePress('8')} />
          <CalculatorButton title="9" onPress={() => handlePress('9')} />
          <CalculatorButton title="÷" onPress={() => handleOperatorPress('/')} style={styles.operator}/>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <CalculatorButton title="4" onPress={() => handlePress('4')} />
          <CalculatorButton title="5" onPress={() => handlePress('5')} />
          <CalculatorButton title="6" onPress={() => handlePress('6')} />
          <CalculatorButton title="×" onPress={() => handleOperatorPress('*')} style={styles.operator}/>
        </View>

        {/* Row 3 */}
        <View style={styles.row}>
          <CalculatorButton title="1" onPress={() => handlePress('1')} />
          <CalculatorButton title="2" onPress={() => handlePress('2')} />
          <CalculatorButton title="3" onPress={() => handlePress('3')} />
          <CalculatorButton title="−" onPress={() => handleOperatorPress('-')} style={styles.operator} />
        </View>

        {/* Row 4 */}
        <View style={styles.row}>
          <CalculatorButton title="0" onPress={() => handlePress('0')} style={{ flex: 2 }} />
          <CalculatorButton title="+" onPress={() => handleOperatorPress('+')} style={styles.operator} />
          <CalculatorButton title="=" onPress={handleEqualPress} style={styles.equalButton}/>
        </View>

        {/* Row 5 */}
        <View style={styles.row}>
          <CalculatorButton title="C" onPress={handleClear}  />
        </View>
      </View>
    </View>
  );
};

export default App;
 

