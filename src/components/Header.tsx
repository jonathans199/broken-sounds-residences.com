export const Header = () => {
	return (
		<header aria-label='Site Header' className='bg-white'>
			<div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
				<div className='flex h-16 items-center justify-between'>
					<a className='block text-emerald-600 ' href='/'>
						<img src='/bsr-logo.png' alt='bsr logo' width='90px' />
					</a>

					<div className='md:flex md:items-center md:gap-12'>
						<div className='flex items-center gap-4'>
							<a
								className='rounded-md bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow'
								href='/'>
								Buyers
							</a>

							<a
								className='rounded-md bg-gray-100 hover:bg-emerald-600 hover:text-emerald-100 px-5 py-2.5 text-sm font-medium text-emerald-600'
								href='/'>
								Sellers
							</a>

							<a
								className='rounded-md bg-gray-100 px-5 hover:bg-emerald-600 hover:text-emerald-100 py-2.5 text-sm font-medium text-emerald-600'
								href='/'>
								Call Me
							</a>

							{/* <div className='block md:hidden'>
								<button className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										stroke-width='2'>
										<path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16M4 12h16M4 18h16' />
									</svg>
								</button>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
