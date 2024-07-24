import React from "react";

const InputField = ({
	type,
	value,
	placeholder,
	onChange,
	errorMessage
}) => {
	return (
		<> {/* Fragment 컴포넌트는 하나의 부모태그가 필요하므로 추가함*/}
			<input
				style={{borderColor: 'red'}}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/><br />
			<div style={{color: 'red'}}>{errorMessage}</div>
		</>
	);
};

export default InputField;