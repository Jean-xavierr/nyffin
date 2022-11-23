import React, { FC } from 'react';
import socialMedia from '~/config/social-media';

interface Props {
	className?: string;
	iconClassName?: string;
}

const SocialBar: FC<Props> = ({ className, iconClassName }) => {
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
						<Icon className={iconClassName} />
					</a>
				);
			})}
		</div>
	);
};

export default SocialBar;
