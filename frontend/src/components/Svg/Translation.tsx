import React, { FC } from 'react';

interface Props {
  className?: string;
}

const SvgTranslation: FC<Props> = ({ className }) => {
  return (
    <svg
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M14.022 7h1a1.001 1.001 0 0 1 1 1v1a1 1 0 0 0 2 0V8a3.003 3.003 0 0 0-3-3h-1a1 1 0 0 0 0 2Zm-4 9h-1a1.001 1.001 0 0 1-1-1v-1a1 1 0 0 0-2 0v1a3.003 3.003 0 0 0 3 3h1a1 1 0 0 0 0-2Zm11-1a1 1 0 0 0 0-2h-3v-.5a1 1 0 0 0-2 0v.5h-3a1 1 0 0 0 0 2h5.184a6.728 6.728 0 0 1-1.225 2.527a6.668 6.668 0 0 1-.63-.983a1 1 0 1 0-1.779.912a8.678 8.678 0 0 0 .96 1.468a6.618 6.618 0 0 1-2.426 1.099a1 1 0 0 0 .427 1.954a8.635 8.635 0 0 0 3.445-1.622a8.724 8.724 0 0 0 3.469 1.622a1 1 0 1 0 .43-1.954a6.725 6.725 0 0 1-2.446-1.09A8.736 8.736 0 0 0 20.244 15Zm-11.97-3.757a1 1 0 0 0 1.94-.486l-1.757-7.03a2.281 2.281 0 0 0-4.426 0l-1.757 7.03a1 1 0 0 0 1.94.486L5.552 9h2.94ZM6.052 7l.698-2.787a.291.291 0 0 1 .544 0L7.991 7Z"
      />
    </svg>
  );
};

export default SvgTranslation;
