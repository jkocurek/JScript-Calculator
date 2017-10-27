'use strict';

class Calculator {
	add(operand1, operand2) {
		return operand1 + operand2;
	}
	subtract(operand1, operand2) {
		return operand1 - operand2;
	}
	multiply(operand1, operand2) {
		return operand1 * operand2;
	}
	divide(operand1, operand2) {
		if(operand2 == 0) {
			return NaN;
		} else {
			return operand1 / operand2;
		}
	}
}

class ScientificCalculator extends Calculator {
	sin(operand) {
		return Msth.sin(operand);
	}
	cos(operand) {
		return Msth.cos(operand);
	}
	tan(operand) {
		return Msth.tan(operand);
	}
}

class withExponents extends Calculator with Exponents {
	pow(base, exponent) {
		return Math.pow(base,exponent);
	}
	multiplyExp(arr1, arr2) {
		return Math.pow(arr1[0],arr1[1]) * Math.pow(arr2[0], arr2[1]);
	}
	divideExp(arr1, arr2) {
		return Math.pow(arr1[0],arr1[1]) / Math.pow(arr2[0], arr2[1]);
	}
}

