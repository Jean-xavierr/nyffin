import React, { FC } from 'react';

interface Props {
	className?: string;
	title: string;
	subtitle: string;
	backtext: string;
	mainColor: string;
	secondColor: string;
	backtextColor: string;
	placement: string;
	id?: string;
}

const SectionTitle: FC<Props> = ({
	className,
	title,
	subtitle,
	backtext,
	mainColor,
	secondColor,
	backtextColor,
	placement,
	id,
}) => {
	return (
		<div id={id} className={className + ' w-full relative py-[60px]'}>
			<p
				aria-hidden="true"
				className={
					'select-none absolute z-0 leading-[80px] tracking-[.10em] sm:tracking-[.20em] uppercase font-bebasNeue text-outline lg:text-[200px] md:text-[150px] text-[95px] top-[20px] md:top-auto ' +
					placement +
					' ' +
					backtextColor
				}
			>
				{backtext}
			</p>
			<div className="relative text-center z-40">
				<h2
					className={
						'uppercase font-anton text-[35px] sm:text-[46px] ' + mainColor
					}
				>
					{title}
				</h2>
				<p
					className={
						' mt-[-12px] uppercase font-bebasNeue text-xl ' + secondColor
					}
				>
					{subtitle}
				</p>
			</div>
		</div>
	);
};

export default SectionTitle;
