import { arrayMove } from '../../../shared/libs/arrayHandler';
import { UpdateChecklistItemMutationPropsType } from '../../../shared/mutations/updateChecklistItem.mutation';
import { ChecklistStateType } from '../states/checklist.state';

interface MoveArrayProps {
  oldIndex: number;
  newIndex: number;
  newChecklistState: ChecklistStateType;
  setChecklistState: (newChecklistState: ChecklistStateType) => void;
  updateChecklistItemMutationState: (
    variables: UpdateChecklistItemMutationPropsType,
  ) => any;
}

export const moveArray = ({
  oldIndex,
  newIndex,
  newChecklistState,
  setChecklistState,
  updateChecklistItemMutationState,
}: MoveArrayProps) => {
  if (typeof oldIndex !== 'number' || typeof newIndex !== 'number') {
    throw new Error('>>> moveArray: "oldIndex" and "newIndex" must be numbers');
  }

  const sortedItems = arrayMove({
    array: newChecklistState.user.items,
    arrayItemOrderParam: 'itemOrder',
    oldIndex,
    newIndex,
  });

  const newChecklistStateData = {
    ...newChecklistState,
    user: {
      ...newChecklistState.user,
      items: sortedItems,
    },
  };

  setChecklistState({
    ...newChecklistStateData,
    status: 'loading',
    message: 'Updating item position...',
  });

  updateChecklistItemMutationState({
    itemId: sortedItems[newIndex].itemId,
    itemOrder: sortedItems[newIndex].itemOrder,
    content: sortedItems[newIndex].item.content,
    isDone: sortedItems[newIndex].item.isDone,
  })
    .then(() => {
      setChecklistState({
        ...newChecklistStateData,
        ...newChecklistState.resetProps,
      });
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
};
