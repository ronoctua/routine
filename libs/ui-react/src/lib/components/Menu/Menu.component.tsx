import { styled } from '@stitches/react';

import { StyledComponentProps } from '../../types/styled-component.types';
import { ButtonProps } from '../Button';
import { useMenu, MenuStateTypes } from './Menu.hook';
import { MenuContentStyles, MenuContentWrapperStyles } from './Menu.styles';
import { MenuButton } from './MenuButton.component';

export type MenuProps = StyledComponentProps<typeof StyledMenuContent> & {
  menuState: MenuStateTypes;
  openButtonProps?: ButtonProps;
  closeButtonProps?: ButtonProps;
  closeButtonPosition?: 'top' | 'bottom';
};

const StyledMenuContent = styled('div', MenuContentStyles);
const StyledMenuContentWrapper = styled('div', MenuContentWrapperStyles);

/**
 * Menu component
 *
 * @example
 * ```tsx
 * const [menuState, setMenuState] = useState({ isVisible: false });
 *
 * <Menu
 *   menuState={menuState}
 *   contentPosition="bottomRight"
 *   closeButtonPosition="bottom">
 *   // Here goes the menu content
 * </Menu>
 * ```
 *
 * @param menuState - Menu state. Must be an object with the `isVisible` property.
 * @param contentPosition - Menu content position.
 * @param closeButtonPosition - Close button position.
 */
export const Menu: React.FC<MenuProps> = ({
  children,
  display,
  menuState,
  contentPosition,
  closeButtonPosition = 'top',
  openButtonProps,
  closeButtonProps,
  ...props
}) => {
  const { currentMenuState } = useMenu(menuState);

  const OpenMenuButton = () => (
    <MenuButton menuState={menuState} {...openButtonProps} />
  );

  const CloseMenuButton = () => (
    <MenuButton isCloseButton menuState={menuState} {...closeButtonProps} />
  );

  return (
    <>
      {currentMenuState.isVisible && (
        <StyledMenuContent
          display={display || currentMenuState.isVisible}
          contentPosition={contentPosition || 'left'}>
          <StyledMenuContentWrapper data-id="menu-content-wrapper" {...props}>
            {closeButtonPosition === 'top' && <CloseMenuButton />}
            {children}
            {closeButtonPosition === 'bottom' && <CloseMenuButton />}
          </StyledMenuContentWrapper>
        </StyledMenuContent>
      )}

      <OpenMenuButton />
    </>
  );
};
