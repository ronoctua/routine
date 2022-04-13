import { PrimitiveAtom, useAtom } from 'jotai';

export type MenuStateTypes = PrimitiveAtom<{ isVisible: boolean }>;

export const useMenu = (menuState: MenuStateTypes) => {
  const [currentMenuState, setCurrentMenuState] = useAtom(menuState);

  const menuToggle = ({ isVisible }: { isVisible?: boolean }) => {
    setCurrentMenuState({
      isVisible: isVisible ?? !currentMenuState.isVisible,
    });
  };

  return { currentMenuState, menuToggle };
};
