<script setup lang="ts">
import { AlertDialogTrigger, type AlertDialogTriggerProps } from "reka-ui";

export type Props = AlertDialogTriggerProps;

defineProps<Props>();
</script>

<template>
  <AlertDialogTrigger :as="as" :as-child="asChild">
    <slot></slot>
  </AlertDialogTrigger>
</template>
