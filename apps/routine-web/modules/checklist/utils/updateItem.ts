import { ChecklistStatusKeys } from '../../../shared/keys/ChecklistStatusKeys';
import { UpdateChecklistItemMutationPropsType } from '../../../shared/mutations/updateChecklistItem.mutation';
import { ChecklistStateType } from '../states/checklist.state';

interface UpdateItemProps {
  newChecklistState: ChecklistStateType;
  setChecklistState: (newChecklistState: ChecklistStateType) => void;
  updateChecklistItemMutationState: (
    variables: UpdateChecklistItemMutationPropsType,
  ) => any;
}

export const updateItem = ({
  newChecklistState,
  setChecklistState,
  updateChecklistItemMutationState,
}: UpdateItemProps) => {
  if (
    !newChecklistState.inputContent ||
    newChecklistState.inputContent === ''
  ) {
    throw new Error('Input content is empty');
  }
  setChecklistState({
    ...newChecklistState,
    status: ChecklistStatusKeys.LOADING,
    message: 'Updating item...',
  });
  updateChecklistItemMutationState({
    itemId: newChecklistState.targetItem.itemId,
    itemOrder: newChecklistState.targetItem.itemOrder,
    content: newChecklistState.inputContent,
    isDone: newChecklistState.targetItem.item.isDone,
  })
    .then((response) => {
      const newItems = newChecklistState.user.items.map((targetItem) =>
        targetItem.itemId === newChecklistState.targetItem.itemId
          ? {
              ...targetItem,
              item: {
                ...targetItem.item,
                content: newChecklistState.inputContent,
              },
            }
          : targetItem,
      );
      if (response.error) {
        throw new Error(response.error.message);
      }
      setChecklistState({
        ...newChecklistState,
        user: {
          ...newChecklistState.user,
          items: newItems,
        },
        ...newChecklistState.resetProps,
      });
      const checklistField = document.querySelector(
        `[data-id="${newChecklistState.inputId}"]`,
      ) as HTMLElement;
      checklistField.innerText = '';
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
};
