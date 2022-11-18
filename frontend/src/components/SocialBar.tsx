import React, { FC } from 'react';
import socialMedia from '~/config/social-media';

interface Props {
	className?: string;
}

const SocialBar: FC<Props> = ({ className }) => {
	return (
		<div className={className + ' flex justify-between'}>
			{socialMedia.map((media) => {
				const Icon = media.icon;

				return (
					<a
						href={media.url}
						target="_blank"
						key={media.name}
						className="hover:transition-all hover:scale-125"
					>
						<Icon className="h-[22px] w-[22px]" />
					</a>
				);
			})}
		</div>
	);
};

export default SocialBar;
