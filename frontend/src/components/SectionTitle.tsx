import React, { FC } from 'react';

interface Props {
	className?: string;
	title: string;
	subtitle: string;
	backtext: string;
	mainColor: string;
	secondColor: string;
}

const SectionTitle: FC<Props> = ({
	className,
	title,
	subtitle,
	backtext,
	mainColor,
	secondColor,
}) => {
	return (
		<div className={className + ' w-full relative py-[60px]'}>
			<p
				aria-hidden="true"
				className="select-none absolute z-0 leading-[80px] tracking-[.20em] uppercase font-bebasNeue text-nyffinGray text-outline text-[200px]"
			>
				{backtext}
			</p>
			<div className="relative text-center z-40">
				<h2 className={'uppercase font-anton text-[38px] ' + mainColor}>
					{title}
				</h2>
				<p
					className={
						' mt-[-12px] uppercase font-bebasNeue text-lg ' + secondColor
					}
				>
					{subtitle}
				</p>
			</div>
		</div>
	);
};

export default SectionTitle;
