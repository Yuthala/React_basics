const MySelect = ({options, defaultValue, value, onChange}) => {
	return ( 
		<select 
			value={value}
			// передаем значение, которое выбрал пользователь (не event). Значение берем из target поля value
			onChange={e => onChange(e.target.value)}
		>
			<option disabled value="">{defaultValue}</option>
			{options.map(option => 
			//key должен быть уникальным. Подразумевается, что value для select уникально
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			)}
      	</select>
	 );
}
 
export default MySelect;