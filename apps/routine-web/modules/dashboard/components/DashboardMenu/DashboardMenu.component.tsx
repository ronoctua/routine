import { Menu, Surface } from '@routine/ui-react';
import { atom, useAtom } from 'jotai';
import { useTranslation } from 'next-i18next';

import { Link } from '../../../../shared/components/Link';

const menuState = atom({ isVisible: false });

export const DashboardMenu: React.FC = () => {
  const [, setMenuState] = useAtom(menuState);
  const { t } = useTranslation('common');

  const handleCloseMenu = () => {
    setMenuState({ isVisible: false });
  };

  return (
    <Menu
      menuState={menuState}
      contentPosition="bottomRight"
      closeButtonPosition="bottom">
      <Surface radius="none">
        <Link status="secondary" href="/settings" onClick={handleCloseMenu}>
          @user-nickname
        </Link>

        <Link href="/metrics" onClick={handleCloseMenu}>
          {t('session.metrics')}
        </Link>

        <Link href="/health" onClick={handleCloseMenu}>
          {t('session.sports')}
        </Link>

        <Link href="/notes" onClick={handleCloseMenu}>
          {t('session.notes')}
        </Link>

        <Link href="/checklist" onClick={handleCloseMenu}>
          {t('session.checklist')}
        </Link>
      </Surface>
    </Menu>
  );
};
