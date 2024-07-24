import React, {useState} from 'react';

const Counter = (props) => {
	const [count, setCount] = useState(0);
	const increment = () => {
	  setCount(count + 1);
	};
	const clickString = props.click || "Click"; // 디폴트 설정 값이 없을경우 설정한 값을 사용한다
	return (
		<button onClick={increment}>
			{clickString} {count}
		</button>
	);  
}

export default Counter;