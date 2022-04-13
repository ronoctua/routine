import { SOLEllipsisVertical, SOLXMark } from '@routine/ui-icons';

import { Button, ButtonProps } from '../Button';
import { useMenu, MenuStateTypes } from './Menu.hook';

export type MenuButtonProps = ButtonProps & {
  menuState: MenuStateTypes;
  isCloseButton?: boolean;
};

export const MenuButton: React.FC<MenuButtonProps> = ({
  menuState,
  isCloseButton = false,
  variant = 'ghost',
  radius = 'none',
  'aria-label': ariaLabel,
  ...props
}) => {
  const { menuToggle } = useMenu(menuState);

  return (
    <Button
      variant={variant}
      radius={radius}
      leftIcon={isCloseButton ? <SOLXMark /> : <SOLEllipsisVertical />}
      aria-label={ariaLabel || isCloseButton ? 'Close menu' : 'Open menu'}
      onClick={() =>
        isCloseButton
          ? menuToggle({ isVisible: false })
          : menuToggle({ isVisible: true })
      }
      {...props}
    />
  );
};
