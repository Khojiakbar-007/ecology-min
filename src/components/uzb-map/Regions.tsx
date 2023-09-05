import React, { useRef, useEffect } from 'react';
import type { Dispatch, SVGProps, SetStateAction } from 'react';
import { useHoverDirty } from 'react-use';

// prettier-ignore
interface IRegionProps {
  Path: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGPathElement>, "ref"> & React.RefAttributes<SVGPathElement>>
  id: number;
  selRegion: number;
  setSelRegion: Dispatch<SetStateAction<number>>
  hoverRegion: number;
  setHoverRegion: Dispatch<SetStateAction<number>>
  hasMouse: boolean;
}

const Region = ({
  Path,
  id,
  setSelRegion,
  selRegion,
  hoverRegion,
  setHoverRegion,
  hasMouse,
}: IRegionProps) => {
  const pathRef = useRef<SVGPathElement>(null);
  // @ts-ignodre
  const isMouseHovering = useHoverDirty(pathRef);
  const isHovering = isMouseHovering && hoverRegion === id;

  const isSelected = id === selRegion;

  useEffect(() => {
    if (isMouseHovering && pathRef.current) {
      pathRef.current?.parentElement?.appendChild(pathRef.current);
      setHoverRegion(id);
    }
  }, [isMouseHovering, pathRef.current]);

  const props: SVGProps<SVGPathElement> = isSelected
    ? { fill: 'var(--green)' }
    : isHovering && hasMouse
    ? {
        fill: 'var(--green)',
        style: {
          filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25))',
          transformOrigin: '50% 50%',
          transformBox: 'fill-box',
          transform: 'scale(1.1)',
        },
      }
    : {};

  const handleClick = () => setSelRegion(id);
  return (
    // @ts-ignore
    <Path onClick={handleClick} ref={pathRef} {...props} />
  );
};

export default Region;
