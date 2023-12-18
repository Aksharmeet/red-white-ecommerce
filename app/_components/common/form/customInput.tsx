const CustomInput = ({ type, name, autoComplete, title }: { type: string; name: string; autoComplete: string; title: string }) => {
	return (
		<div>
			<label htmlFor={title} className='block text-sm font-medium text-gray-700'>
				{title}
			</label>
			<div className='mt-1'>
				<input
					type={type}
					id={name}
					name={name}
					autoComplete={autoComplete}
					className='block p-2 w-full rounded-md border-gray-400 shadow-sm focus:border-primary focus:ring-primary sm:text-sm'
				/>
			</div>
		</div>
	)
}

export default CustomInput
