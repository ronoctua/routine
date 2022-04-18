import { delayEffect } from '@routine/ui-effects';
import { NoSSR, Surface } from '@routine/ui-react';
import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { List } from 'react-movable';
import { useMutation } from 'urql';

import {
  updateChecklistItemMutation,
  UpdateChecklistItemMutationDataType,
  UpdateChecklistItemMutationPropsType,
} from '../../../../shared/mutations/updateChecklistItem.mutation';
import { checklistState as checklistAtomState } from '../../states/checklist.state';
import { moveArray } from '../../utils/moveArray';
import { updateItem } from '../../utils/updateItem';
import { ChecklistItem } from '../ChecklistItem';

interface ItemType {
  itemId: string;
  itemOrder: number;
  item: { id: string; content: string; isDone: boolean };
}

export const Checklist = () => {
  const [checklistState, setChecklistState] = useAtom(checklistAtomState);

  const [, updateChecklistItemMutationState] = useMutation<
    UpdateChecklistItemMutationDataType,
    UpdateChecklistItemMutationPropsType
  >(updateChecklistItemMutation);

  const handleMoveArray = useCallback(
    ({ oldIndex, newIndex }) => {
      moveArray({
        oldIndex,
        newIndex,
        newChecklistState: checklistState,
        setChecklistState,
        updateChecklistItemMutationState,
      });
    },
    [checklistState, setChecklistState, updateChecklistItemMutationState],
  );

  const handleCheckItem = useCallback(
    ({ targetItem, isChecked }) => {
      const newChecklistState = {
        ...checklistState,
        status: 'item-checked',
        message: 'Updating item...',
        inputContent: targetItem.item.content,
        targetItem: {
          ...targetItem,
          item: {
            ...targetItem.item,
            isDone: isChecked,
          },
        },
      };

      updateItem({
        newChecklistState,
        setChecklistState,
        updateChecklistItemMutationState,
      });
    },
    [checklistState, setChecklistState, updateChecklistItemMutationState],
  );

  const handleSelectItem = useCallback(
    ({ targetItem }) => {
      setChecklistState({
        ...checklistState,
        status: 'item-selected',
        message: 'Item selected.',
        inputContent: targetItem.item.content,
        targetItem,
      });

      const checklistField = document.querySelector(
        `[data-id="${checklistState.inputId}"]`,
      ) as HTMLElement;
      checklistField.innerText = targetItem.item.content;
    },
    [checklistState, setChecklistState],
  );

  const ChecklistComponent = useCallback(
    ({ checklistState }) => (
      <List
        values={checklistState.user.items as ItemType[]}
        onChange={({ oldIndex, newIndex }) =>
          handleMoveArray({ oldIndex, newIndex })
        }
        renderList={({ children, props }) => (
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              padding: '4px 4px 14px 4px',
            }}
            {...props}>
            {children}
          </ul>
        )}
        renderItem={({ value: itemData, isDragged, props }) => (
          <ChecklistItem
            keyId={itemData.itemId}
            itemData={itemData}
            isDragged={isDragged}
            handleCheckItem={handleCheckItem}
            handleSelectItem={handleSelectItem}
            disabled={checklistState.status === 'loading'}
            {...props}
          />
        )}
      />
    ),
    [handleCheckItem, handleMoveArray, handleSelectItem],
  );

  return (
    <NoSSR>
      <div>
        {checklistState.fetching && (
          <div className={delayEffect()}>Fetching...</div>
        )}

        {checklistState.user && checklistState.user.items && (
          <ChecklistComponent checklistState={checklistState} />
        )}

        {checklistState.error && (
          <Surface status='negative'>
            Fetching Error
            {checklistState.error.message && (
              <>
                <br />
                Message: {checklistState.error.message}
              </>
            )}
          </Surface>
        )}

        {!checklistState.stale &&
          !checklistState.fetching &&
          !checklistState.error &&
          (!checklistState.user ||
            (checklistState.user && !checklistState.user.items)) && (
            <div className={delayEffect()}>No items.</div>
          )}
      </div>
    </NoSSR>
  );
};
