import { DeleteChecklistItemMutationPropsType } from '../../../shared/mutations/deleteChecklistItem.mutation';
import { ChecklistStateType } from '../states/checklist.state';

interface DeleteItemProps {
  newChecklistState: ChecklistStateType;
  setChecklistState: (newChecklistState: ChecklistStateType) => void;
  deleteChecklistItemMutationState: (
    variables: DeleteChecklistItemMutationPropsType,
  ) => any;
}

export const deleteItem = ({
  newChecklistState,
  setChecklistState,
  deleteChecklistItemMutationState,
}: DeleteItemProps) => {
  if (
    !newChecklistState.inputContent ||
    newChecklistState.inputContent === ''
  ) {
    throw new Error('Input content is empty');
  }

  setChecklistState({
    ...newChecklistState,
    status: 'loading',
    message: 'Deleting item...',
  });

  deleteChecklistItemMutationState({
    itemId: newChecklistState.targetItem.itemId,
  })
    .then((response) => {
      if (response.error) {
        throw new Error(response.error.message);
      }

      const newItems = newChecklistState.user.items.filter(
        (targetItem) =>
          targetItem.itemId !== newChecklistState.targetItem.itemId,
      );

      setChecklistState({
        ...newChecklistState,
        ...newChecklistState.resetProps,
        user: {
          ...newChecklistState.user,
          items: newItems,
        },
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
