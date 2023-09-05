import { Tooltip } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

interface IProps {
  title: string;
  mainLink: string;
  links: {
    name: string;
    link: string;
  }[];
}

const LinkItem = ({ mainLink, title, links }: IProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  //   <LightTooltip
  //   interactive
  //   open={showTooltip}
  //   onOpen={() => setShowTooltip(true)}
  //   onClose={() => setShowTooltip(false)}
  //   title={
  //     <React.Fragment>
  //       {menus.map((item) => {
  //         return <MenuItem onClick={item.action}>{item.name}</MenuItem>;
  //       })}
  //     </React.Fragment>
  //   }
  // >
  //   <IconButton
  //     aria-label='more'
  //     aria-controls='long-menu'
  //     aria-haspopup='true'
  //     className={classes.tableActionButton}
  //   >
  //     <MoreVertIcon />
  //   </IconButton>
  // </LightTooltip>

  return (
    <Tooltip
      title={
        <ul>
          {links.map((data, i) => (
            <li key={data.name + i}>
              <Link href={mainLink + data.link}>{data.name}</Link>
            </li>
          ))}
        </ul>
      }
      open={showTooltip}
      onOpen={() => setShowTooltip(true)}
      onClose={() => setShowTooltip(false)}
    >
      <li>
        <Link href={mainLink}>{title}</Link>
      </li>
    </Tooltip>
  );
};

export default LinkItem;
