import CustomInput from '../common/form/customInput'

const ContactInformation = () => {
	return (
		<div>
			<div>
				<h2 className='text-lg font-medium text-gray-900'>Contact information</h2>

				<div className='mt-4'>
					<CustomInput type='email' name='email-address' autoComplete='email' title='Email Address' />
				</div>
			</div>

			<div className='mt-10 border-t border-gray-200 pt-10'>
				<h2 className='text-lg font-medium text-gray-900'>Shipping information</h2>

				<div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
					<CustomInput type='text' name='first-name' autoComplete='first-name' title='First Name' />
					<CustomInput type='text' name='last-name' autoComplete='last-name' title='Last Name' />
					<CustomInput type='text' name='company' autoComplete='company' title='Company' />
					<CustomInput type='text' name='address' autoComplete='address' title='Address' />
					<CustomInput type='text' name='apartment' autoComplete='apartment' title='Apartment, suite, etc.' />
					<CustomInput type='text' name='city' autoComplete='city' title='City' />

					<div>
						<label htmlFor='country' className='block text-sm font-medium text-gray-700'>
							Country
						</label>
						<div className='mt-1'>
							<select
								id='country'
								name='country'
								autoComplete='country-name'
								className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
							>
								<option>United States</option>
								<option>Canada</option>
								<option>Mexico</option>
							</select>
						</div>
					</div>

					<CustomInput type='text' name='region' autoComplete='region' title='State / Province' />
					<CustomInput type='text' name='postal-code' autoComplete='postal-code' title='Postal Code' />
					<CustomInput type='text' name='phone' autoComplete='phone' title='Phone' />
				</div>
			</div>

			{/* Payment */}
			<div className='mt-10 border-t border-gray-200 pt-10'>
				<h2 className='text-lg font-medium text-gray-900'>Payment</h2>

				<div className='mt-6 grid grid-cols-4 gap-y-6 gap-x-4'>
					<div className='col-span-4'>
						<CustomInput type='text' name='card-number' autoComplete='card-number' title='Card Number' />
					</div>

					<div className='col-span-4'>
						<CustomInput type='text' name='name-on-card' autoComplete='cc-name' title='Name on Card' />
					</div>

					<div className='col-span-3'>
						<CustomInput type='text' name='expiration-date' autoComplete='cc-exp' title='Expiration date (MM/YY)' />
					</div>

					<div>
						<CustomInput type='text' name='cvc' autoComplete='csc' title='CVC' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactInformation
