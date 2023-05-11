import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { steps, sections } from '../../data/data'

export default function Home() {
	return (
		<>
			<Header />

			<header className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>
				<div className='relative z-30 p-5 text-2xl text-white rounded-xl mx-auto max-w-xl text-center'>
					<img src='/bsr-logo-white.png' alt='bsr logo' className='center' />
					<h1 className='text-3xl font-extrabold sm:text-5xl'>
						Find the home and the Holistic-Luxury
						<strong className='font-extrabold text-emerald-600 sm:block'>
							Lifestyle that you have been looking for
						</strong>
					</h1>
					<p className='mt-4 sm:text-xl/relaxed'>
						Our personalized approach ensures a seamless buying or selling process, helping you achieve top dollar for
						your home with ease.
					</p>
				</div>
				<video autoPlay loop muted className='absolute z-10 w-auto min-w-full min-h-full max-w-none'>
					<source src='/broken-sounds-video.mp4' type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			</header>

			<main className='mx-auto max-w-screen-xl'>
				<div className='mx-auto max-w-5xl px-4 py-8 my-40'>
					<section className='rounded-lg bg-gray-100 p-8'>
						<div className='grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center'>
							<img
								alt='Man'
								src='https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
								className='aspect-square w-full rounded-lg object-cover'
							/>

							<blockquote className='sm:col-span-2'>
								<p className='text-xl font-medium sm:text-2xl'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis cumque neque ut nobis
									excepturi, quasi iure quisquam autem alias.
								</p>

								<cite className='mt-8 inline-flex items-center not-italic'>
									<span className='hidden h-px w-6 bg-gray-400 sm:inline-block'></span>
									<p className='text-sm uppercase text-gray-500 sm:ms-3'>
										<strong>Justin Harrison</strong>, Beatle Inc.
									</p>
								</cite>
							</blockquote>
						</div>
					</section>
				</div>

				{sections.map(section => {
					return (
						<section key={section.id}>
							<div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-40 lg:px-8 '>
								<div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
									<div className={`relative h-64 overflow-hidden rounded-lg sm:h-80 ${section.order} lg:h-full`}>
										<img alt='Party' src={section.img} className='absolute inset-0 h-full w-full object-cover' />
									</div>

									<div className='lg:py-24'>
										<h2 className='text-3xl font-bold sm:text-4xl'>{section.title}</h2>
										{section.subTitle && <h4 className='text-gray-600 sm:text-4xl'>{section.subTitle}</h4>}

										<p className='mt-4 text-gray-600'>{section.description}</p>

										<div className='mt-8 flex flex-wrap gap-4'>
											<a
												className='block w-full rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring active:bg-emerald-500 sm:w-auto'
												href='/get-started'>
												For Buyers
											</a>

											<a
												className='block w-full rounded px-12 py-3 text-sm font-medium text-emerald-600 shadow hover:text-emerald-700 focus:outline-none focus:ring active:text-emerald-500 sm:w-auto'
												href='/about'>
												For Sellers
											</a>
										</div>
									</div>
								</div>
							</div>
							<hr />
						</section>
					)
				})}

				<iframe
					src='https://www.google.com/maps/embed?pb=!4v1683679498772!6m8!1m7!1sCAoSLEFGMVFpcE41cER6YUd4SnI5RWJ2Yk5pSFV1b2tRN2VzLTJzVjNqVmNTYXZB!2m2!1d26.39548429891705!2d-80.13625969999998!3f7.150000095367432!4f0!5f0.7820865974627469'
					width='100%'
					height='450'
					allowFullScreen={true}
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>

				<section className='flex flex-row my-36'>
					{steps.map(step => {
						return (
							<article
								key={step.id}
								className='mr-5 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm'>
								<img
									alt='Office'
									src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
									className='h-56 w-full object-cover'
								/>

								<div className='p-4 sm:p-6'>
									<a href='#'>
										<h3 className='text-lg font-medium text-gray-900'>{step.title}</h3>
									</a>

									<p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>{step.description}</p>

									<a href='#' className='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600'>
										Find out more
										<span aria-hidden='true' className='block transition-all group-hover:ms-0.5 rtl:rotate-180'>
											&rarr;
										</span>
									</a>
								</div>
							</article>
						)
					})}
				</section>

				<iframe
					src='https://www.google.com/maps/embed?pb=!4v1683679674809!6m8!1m7!1sCAoSLEFGMVFpcFBpcXV6R0VBeDAxd2x2MTdsRVZfYTEyTTgtLWNGNmhWMXlZd1l6!2m2!1d26.39659659199523!2d-80.11636204720537!3f31.69!4f-20.049999999999997!5f0.5970117501821992'
					width='100%'
					height='450'
					allowFullScreen={true}
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>
			</main>

			<Footer />
		</>
	)
}
