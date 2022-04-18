import { SOLArrowUpDown } from '@routine/ui-icons';
import {
  Checkbox,
  Icon,
  Label,
  StyledComponentProps,
  Surface,
} from '@routine/ui-react';
import { styled } from '@routine/ui-web';
import { forwardRef, ElementRef, useCallback } from 'react';

import { ChecklistItemStyles } from './ChecklistItem.styles';

const StyledChecklistItem = styled('li', ChecklistItemStyles);

export type ChecklistItemProps = StyledComponentProps<
  typeof StyledChecklistItem
> & {
  keyId: string;
  itemData: any;
  isDragged: boolean;
  handleCheckItem: ({ targetItem, isChecked }) => void;
  handleSelectItem: ({ targetItem }) => void;
  disabled: boolean;
};

export const ChecklistItem = forwardRef<
  ElementRef<typeof StyledChecklistItem>,
  ChecklistItemProps
>(
  (
    {
      keyId,
      itemData,
      isDragged,
      handleCheckItem,
      handleSelectItem,
      disabled,
      ...props
    },
    forwardRef,
  ) => {
    const MoveButton = useCallback(
      () =>
        disabled ? (
          <Surface padding='smallest'>
            <span data-movable-handle style={{ display: 'none' }} />
            <Icon>
              <SOLArrowUpDown />
            </Icon>
          </Surface>
        ) : (
          <Surface
            padding='smallest'
            data-movable-handle
            data-is-dragged={isDragged}
            centerContent='true'>
            <Icon>
              <SOLArrowUpDown />
            </Icon>
          </Surface>
        ),
      [disabled, isDragged],
    );

    const ItemLeftControls = useCallback(
      () => (
        <div data-class='item-left-controls'>
          <Surface padding='smallest' centerContent='true'>
            <Label
              aria-label='Mark as done'
              horizontal='true'
              centerContent='true'>
              <Checkbox
                onChange={(event) => {
                  itemData.item.isDone = event.target.checked;
                  handleCheckItem({
                    targetItem: itemData,
                    isChecked: event.target.checked,
                  });
                }}
                checked={itemData.item.isDone}
                disabled={disabled}
                size='small'
              />
            </Label>
          </Surface>

          <MoveButton />
        </div>
      ),
      [disabled, itemData, handleCheckItem, MoveButton],
    );

    const ItemContent = useCallback(
      () => (
        <Surface
          direction='row'
          padding='small'
          fullHeight
          fullWidth
          data-class='item-content'
          data-is-done={itemData.item.isDone}
          onClick={() => handleSelectItem({ targetItem: itemData })}>
          {itemData.item.content}
        </Surface>
      ),
      [itemData, handleSelectItem],
    );

    return (
      <StyledChecklistItem key={keyId} ref={forwardRef} {...props}>
        <ItemLeftControls />
        <ItemContent />
      </StyledChecklistItem>
    );
  },
);

ChecklistItem.displayName = 'ChecklistItem';
