<script lang="ts">
import { tv } from "../../utils/tv";

const selectContent = tv({
  base: "flex max-h-72 w-(--reka-select-trigger-width) flex-col gap-0.5 overflow-y-scroll rounded-surface border border-line bg-surface p-1 shadow-md",
});
</script>

<script setup lang="ts">
import {
  SelectContent,
  SelectPortal,
  type SelectPortalProps,
  type SelectContentEmits,
  type SelectContentProps,
} from "reka-ui";

export type Props = Omit<SelectPortalProps, "to" | "disabled"> &
  Omit<SelectContentProps, "position"> & {
    /**
     * Where to render the list: `true` moves it to the end of `body`, a selector or an element
     * moves it there, `false` keeps it next to the trigger.
     */
    portal?: boolean | string | HTMLElement;
    /** Extra classes, merged over the content classes. */
    class?: string;
  };

export type Emits = SelectContentEmits;

const props = withDefaults(defineProps<Props>(), {
  forceMount: undefined,
  bodyLock: undefined,
  loop: undefined,
  sideFlip: undefined,
  alignFlip: undefined,
  avoidCollisions: undefined,
  hideShiftedArrow: undefined,
  hideWhenDetached: undefined,
  disableUpdateOnLayoutShift: undefined,
  prioritizePosition: undefined,
  disableOutsidePointerEvents: undefined,
  sideOffset: 4,
  portal: true,
});

const emits = defineEmits<Emits>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <SelectPortal
    :defer="defer"
    :disabled="portal === false"
    :force-mount="forceMount"
    :to="typeof portal === 'boolean' ? undefined : portal"
  >
    <SelectContent
      position="popper"
      :as="as"
      :as-child="asChild"
      :force-mount="forceMount"
      :body-lock="bodyLock"
      :loop="loop"
      :side="side"
      :side-offset="sideOffset"
      :side-flip="sideFlip"
      :align="align"
      :align-offset="alignOffset"
      :align-flip="alignFlip"
      :avoid-collisions="avoidCollisions"
      :collision-boundary="collisionBoundary"
      :collision-padding="collisionPadding"
      :arrow-padding="arrowPadding"
      :hide-shifted-arrow="hideShiftedArrow"
      :sticky="sticky"
      :hide-when-detached="hideWhenDetached"
      :position-strategy="positionStrategy"
      :update-position-strategy="updatePositionStrategy"
      :disable-update-on-layout-shift="disableUpdateOnLayoutShift"
      :prioritize-position="prioritizePosition"
      :reference="reference"
      :dir="dir"
      :memo-dependencies="memoDependencies"
      :disable-outside-pointer-events="disableOutsidePointerEvents"
      :class="selectContent({ class: props.class })"
      v-bind="$attrs"
      @close-auto-focus="emits('closeAutoFocus', $event)"
      @escape-key-down="emits('escapeKeyDown', $event)"
      @pointer-down-outside="emits('pointerDownOutside', $event)"
    >
      <slot></slot>
    </SelectContent>
  </SelectPortal>
</template>
