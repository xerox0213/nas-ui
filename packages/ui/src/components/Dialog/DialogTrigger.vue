<script setup lang="ts">
import { DialogTrigger, type DialogTriggerProps } from "reka-ui";

export type Props = DialogTriggerProps;

defineProps<Props>();
</script>

<template>
  <DialogTrigger :as="as" :as-child="asChild">
    <slot></slot>
  </DialogTrigger>
</template>
