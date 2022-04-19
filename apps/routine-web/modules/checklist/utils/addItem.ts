import { ChecklistStatusKeys } from '../../../shared/keys/ChecklistStatusKeys';
import { CreateChecklistItemMutationPropsType } from '../../../shared/mutations/createChecklistItem.mutation';
import { ChecklistStateType } from '../states/checklist.state';

interface AddItemProps {
  newChecklistState: ChecklistStateType;
  setChecklistState: (newChecklistState: ChecklistStateType) => void;
  createChecklistItemMutationState: (
    variables: CreateChecklistItemMutationPropsType,
  ) => any;
}

export const addItem = ({
  newChecklistState,
  setChecklistState,
  createChecklistItemMutationState,
}: AddItemProps) => {
  if (
    !newChecklistState.inputContent ||
    newChecklistState.inputContent === ''
  ) {
    return;
  }

  setChecklistState({
    ...newChecklistState,
    status: ChecklistStatusKeys.LOADING,
    message: 'Creating new item...',
  });

  let itemOrder = 100000;

  if (newChecklistState.user.items && newChecklistState.user.items.length > 0) {
    itemOrder =
      newChecklistState.user.items[newChecklistState.user.items.length - 1]
        .itemOrder * 1.2;
  }

  createChecklistItemMutationState({
    itemOrder,
    content: newChecklistState.inputContent,
  })
    .then((newItem) => {
      setChecklistState({
        ...newChecklistState,
        user: {
          ...newChecklistState.user,
          items: [
            ...newChecklistState.user.items,
            newItem.data.createChecklistItem,
          ],
        },
        ...newChecklistState.resetProps,
      });

      const checklistField = document.querySelector(
        `[data-id="${newChecklistState.inputId}"]`,
      );
      checklistField.innerHTML = '';
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
};
