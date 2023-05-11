import * as React from 'react'
import { Button, Modal, TextInput, Label, Checkbox } from 'flowbite-react'

export const Header = () => {
	const [openModal, setOpenModal] = React.useState(false)
	return (
		<>
			<React.Fragment>
				<Modal show={openModal} onClose={() => setOpenModal(false)}>
					<Modal.Header>For Buyers</Modal.Header>
					<Modal.Body>
						<div className='space-y-6'>
							<p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
								With less than a month to go before the European Union enacts new consumer privacy laws for its
								citizens, companies around the world are updating their terms of service agreements to comply.
							</p>
							<form className='flex flex-col gap-4'>
								<div>
									<div className='mb-2 block'>
										<Label htmlFor='full-name' value='Your First and Last Name' />
									</div>
									<TextInput placeholder='Jane Doe' id='full-name' type='text' required={true} shadow={true} />
								</div>
								<div>
									<div className='mb-2 block'>
										<Label htmlFor='phone' value='Phone Number' />
									</div>
									<TextInput placeholder='561-444-3434' id='phone' type='tel' required={true} shadow={true} />
								</div>
								<div>
									<div className='mb-2 block'>
										<Label htmlFor='email2' value='Your email' />
									</div>
									<TextInput id='email2' type='email' placeholder='name@flowbite.com' required={true} shadow={true} />
								</div>
								<div className='flex items-center gap-2'>
									<Checkbox id='agree' />
									<Label htmlFor='agree'>
										I agree with the
										<a href='/forms' className='text-blue-600 hover:underline dark:text-blue-500'>
											terms and conditions
										</a>
									</Label>
								</div>
								<Button type='submit'>Download Guide</Button>
							</form>
						</div>
					</Modal.Body>
				</Modal>
			</React.Fragment>

			<header aria-label='Site Header' className='bg-white'>
				<div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
					<div className='flex h-16 items-center justify-between'>
						<a className='block text-emerald-600 ' href='/'>
							<img src='/bsr-logo.png' alt='bsr logo' width='90px' />
						</a>

						<div className='md:flex md:items-center md:gap-12'>
							<div className='flex items-center gap-4'>
								<Button
									className='rounded-md bg-emerald-600 hover:bg-emerald-500 px-2 text-sm font-medium text-white shadow'
									onClick={() => setOpenModal(true)}>
									Buyers
								</Button>

								<Button
									color={'text-emerald-600'}
									className='rounded-md bg-gray-100 hover:bg-emerald-600 text-emerald-600  hover:text-emerald-100 px-2 text-sm font-medium'
									onClick={() => setOpenModal(true)}>
									Sellers
								</Button>

								<a
									className='rounded-md bg-emerald-600 px-5 hover:bg-emerald-500 hover:text-emerald-100 py-2.5 text-sm font-medium text-white'
									href='tel:561-234-3434'>
									Call Me
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
