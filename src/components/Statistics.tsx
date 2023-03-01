import React, { FC, useEffect, useRef, useState } from 'react';

const Statistics: FC = () => {
	const stats = [
		{
			num: '2022',
			text: 'SINCE',
			order: 'min-[450px]:order-2 md:order-1',
		},
		{
			num: '2',
			text: 'TEAMS',
			order: 'min-[450px]:order-1 md:order-2',
		},
		{
			num: '7',
			text: 'PLAYERS',
			order: 'min-[450px]:order-3 md:order-3',
		},
	];
	const delay = 3000;
	const timeoutRef = useRef(0);
	const resetTimeout = () => clearTimeout(timeoutRef.current);

	const shouldSliderActive = () => window.innerWidth <= 450;
	const [index, setIndex] = useState(0);
	const [isSliderActive, setIsSliderActive] = useState(shouldSliderActive());

	useEffect(() => {
		if (!isSliderActive) {
			resetTimeout();
			setIndex(0);
			return;
		}
		resetTimeout();
		timeoutRef.current = setTimeout(
			() => setIndex((prevIndex) => (prevIndex + 1) % stats.length),
			delay
		);
	}, [index, isSliderActive]);

	useEffect(() => {
		const handleResize: EventListener = (_event) => {
			setIsSliderActive(shouldSliderActive());
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<div className="SLIDESHOW mx-auto my-0 overflow-hidden max-w-[250px] min-[450px]:max-w-[800px] min-[450px]:overflow-visible md:py-[80px]">
			<div
				className={`SLIDESHOWSLIDER whitespace-nowrap transition-transform ease-in-out duration-[1000ms] min-[450px]:transform-none min-[450px]:flex min-[450px]:justify-around `}
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
			>
				{stats.map((stat, id) => {
					return (
						<div
							key={id}
							className={`SLIDE w-full min-w-[150px] inline-block font-bold ${stat.order}`}
						>
							<p className="text-[80px] leading-[60px] text-center">
								{stat.num}
							</p>
							<p className="text-[20px] text-center">{stat.text}</p>
						</div>
					);
				})}
			</div>
			<div className="SLIDESHOWDOTS text-center min-[450px]:hidden ">
				{stats.map((_, idx) => (
					<div
						key={idx}
						className={
							'SLIDESHOW inline-block h-[10px] w-[10px] rounded-[50%] cursor-pointer mt-[25px] mx-[7px] mb-0 transition ease-in-out duration-[500ms] ' +
							(idx == index ? 'bg-nyffinRed' : 'bg-nyffinGray')
						}
						onClick={() => {
							setIndex(idx);
						}}
					></div>
				))}
			</div>
		</div>
	);
};

export default Statistics;
