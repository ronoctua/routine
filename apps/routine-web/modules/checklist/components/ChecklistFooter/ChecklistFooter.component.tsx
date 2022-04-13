import {
  SOLArrowRotate,
  SOLTrashCan,
  SOLPlay,
  SOLXMark,
} from '@routine/ui-icons';
import { Button, Label, Surface, TextField } from '@routine/ui-react';
import { useAtom } from 'jotai';
import { useMutation } from 'urql';

import {
  createChecklistItemMutation,
  CreateChecklistItemMutationDataType,
  CreateChecklistItemMutationPropsType,
} from '../../../../shared/mutations/createChecklistItem.mutation';
import {
  deleteChecklistItemMutation,
  DeleteChecklistItemMutationDataType,
  DeleteChecklistItemMutationPropsType,
} from '../../../../shared/mutations/deleteChecklistItem.mutation';
import {
  updateChecklistItemMutation,
  UpdateChecklistItemMutationDataType,
  UpdateChecklistItemMutationPropsType,
} from '../../../../shared/mutations/updateChecklistItem.mutation';
import { CommandBar } from '../../../dashboard/components/CommandBar';
import { DashboardMenu } from '../../../dashboard/components/DashboardMenu';
import { checklistState as checklistAtomState } from '../../states/checklist.state';
import { addItem } from '../../utils/addItem';
import { deleteItem } from '../../utils/deleteItem';
import { updateItem } from '../../utils/updateItem';

export const ChecklistFooter = () => {
  const [checklistState, setChecklistState] = useAtom(checklistAtomState);

  const [, createChecklistItemMutationState] = useMutation<
    CreateChecklistItemMutationDataType,
    CreateChecklistItemMutationPropsType
  >(createChecklistItemMutation);

  const [, updateChecklistItemMutationState] = useMutation<
    UpdateChecklistItemMutationDataType,
    UpdateChecklistItemMutationPropsType
  >(updateChecklistItemMutation);

  const [, deleteChecklistItemMutationState] = useMutation<
    DeleteChecklistItemMutationDataType,
    DeleteChecklistItemMutationPropsType
  >(deleteChecklistItemMutation);

  const handleAddNewItem = () => {
    addItem({
      newChecklistState: checklistState,
      setChecklistState,
      createChecklistItemMutationState,
    });
  };

  const handleUpdateItem = () => {
    updateItem({
      newChecklistState: checklistState,
      setChecklistState,
      updateChecklistItemMutationState,
    });
  };

  const handleDeleteItem = () => {
    deleteItem({
      newChecklistState: checklistState,
      setChecklistState,
      deleteChecklistItemMutationState,
    });
  };

  const handleCancelUpdateItem = () => {
    setChecklistState({
      ...checklistState,
      ...checklistState.resetProps,
    });

    const checklistField = document.querySelector(
      `[data-id="${checklistState.inputId}"]`,
    ) as HTMLElement;
    checklistField.innerText = '';
  };

  return (
    <CommandBar
      rightChildrenDirection="column"
      rightChildren={
        checklistState.status === 'loading' ? (
          <Button variant="ghost" radius="none" status={'loading'} disabled />
        ) : checklistState.inputContent === '' ||
          checklistState.inputContent === null ? (
          <DashboardMenu />
        ) : checklistState.status === 'item-selected' ? (
          <>
            <Button
              variant="ghost"
              radius="none"
              leftIcon={<SOLXMark />}
              onClick={handleCancelUpdateItem}
            />
            <Button
              radius="none"
              leftIcon={<SOLTrashCan />}
              onClick={handleDeleteItem}
            />
            <Button
              radius="none"
              leftIcon={<SOLArrowRotate />}
              onClick={handleUpdateItem}
            />
          </>
        ) : (
          <Button
            radius="none"
            leftIcon={<SOLPlay />}
            onClick={handleAddNewItem}
          />
        )
      }>
      {checklistState.status === 'loading' ? (
        <Surface
          status="down"
          border="none"
          padding="none"
          radius="none"
          fullWidth
          centerContent
          secondaryText>
          {checklistState.message}
        </Surface>
      ) : (
        <Label arial-label="Create/edit a item">
          <TextField
            data-id={checklistState.inputId}
            variant="div"
            border="none"
            radius="none"
            fullWidth
            onInput={(event) =>
              setChecklistState({
                ...checklistState,
                inputContent: event.target.innerText,
              })
            }
          />
        </Label>
      )}
    </CommandBar>
  );
};
