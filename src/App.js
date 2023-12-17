import { useState } from 'react';
import styles from './App.module.css';

const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const App = () => {
	let [operand1, setOperand1] = useState('');
	let [operand2, setOperand2] = useState('');
	let [operator, setOperator] = useState('');
	let [isResult, setIsResult] = useState(false);

	function clear() {
		setOperand1((operand1 = ''));
		setOperand2((operand2 = ''));
		setOperator((operator = ''));
	}

	function output(item) {
		if (operand2 === '' && operator === '') {
			setOperand1(String(operand1) + item);
		} else {
			setOperand2(String(operand2) + item);
		}
	}

	function result(op1, oper, op2) {
		if (oper === '+') {
			setOperand1((operand1 = Number(op1) + Number(op2)));
		} else if (oper === '-') {
			setOperand1((operand1 = Number(op1) - Number(op2)));
		}
		setOperand2((operand2 = ''));
		setOperator((operator = ''));
		console.log('finish!');
	}

	return (
		<div className={styles.app}>
			<h1>Калькулятор</h1>
			<div className={styles.calc}>
				<div className={isResult ? styles.displayResult : styles.display}>
					{String(operand1) + String(operator) + String(operand2)}
				</div>
				<div className={styles.operantPanel}>
					<button
						className={styles.operand}
						onClick={() => {
							setOperator(operator + '+');
							setIsResult((isResult = false));
						}}
					>
						+
					</button>
					<button
						className={styles.operand}
						onClick={() => {
							setOperator(operator + '-');
							setIsResult((isResult = false));
						}}
					>
						-
					</button>
					<button className={styles.operand} onClick={() => clear()}>
						C
					</button>
					<button
						className={styles.operand}
						onClick={() => {
							result(operand1, operator, operand2);
							setIsResult((isResult = true));
						}}
					>
						=
					</button>
				</div>
				<div className={styles.buttonPanel}>
					{NUMS.map((item, index) => (
						<button className={styles.button} onClick={() => output(item)}>
							{index}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
