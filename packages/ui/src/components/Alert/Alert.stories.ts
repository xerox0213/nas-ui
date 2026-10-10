import { ref } from "vue";

import preview from "#storybook/preview.ts";

import Button from "../Button/Button.vue";
import AlertActions from "./AlertActions.vue";
import AlertClose from "./AlertClose.vue";
import AlertDescription from "./AlertDescription.vue";
import AlertIcon from "./AlertIcon.vue";
import AlertRoot, { type Props } from "./AlertRoot.vue";
import AlertTitle from "./AlertTitle.vue";

const alertComponents = {
  AlertRoot,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertActions,
  AlertClose,
  Button,
};

const meta = preview.meta({
  title: "Components/Alert",
  component: AlertRoot,
  subcomponents: {
    AlertIcon,
    AlertTitle,
    AlertDescription,
    AlertActions,
    AlertClose,
  },
});

/**
 * For contextual information the user should notice.
 * The icon follows the variant; a description is optional.
 */
export const Default = meta.story({
  args: { variant: "neutral" },
  render: (args: Props) => ({
    components: alertComponents,
    setup() {
      return { args };
    },
    template: `
      <AlertRoot v-bind="args" class="max-w-lg">
        <AlertIcon />
        <AlertTitle>Scheduled maintenance</AlertTitle>
        <AlertDescription>
          The service will be read-only on Sunday from 2:00 to 4:00 AM UTC.
        </AlertDescription>
      </AlertRoot>
    `,
  }),
});

/**
 * For confirming an action completed as expected.
 * Prefer it close to what just changed.
 */
export const Success = meta.story({
  args: { variant: "success" },
  render: (args: Props) => ({
    components: alertComponents,
    setup() {
      return { args };
    },
    template: `
      <AlertRoot v-bind="args" class="max-w-lg">
        <AlertIcon />
        <AlertTitle>Changes saved</AlertTitle>
        <AlertDescription>
          Your profile has been updated.
        </AlertDescription>
      </AlertRoot>
    `,
  }),
});

/**
 * For a situation that needs attention soon.
 * Nothing is broken yet; tell the user what to watch.
 */
export const Warning = meta.story({
  args: { variant: "warning" },
  render: (args: Props) => ({
    components: alertComponents,
    setup() {
      return { args };
    },
    template: `
      <AlertRoot v-bind="args" class="max-w-lg">
        <AlertIcon />
        <AlertTitle>Storage almost full</AlertTitle>
        <AlertDescription>
          You are using 90% of your storage. Uploads will fail once it is
          full.
        </AlertDescription>
      </AlertRoot>
    `,
  }),
});

/**
 * For an error that blocked an action.
 * Say what failed and how to recover.
 */
export const Danger = meta.story({
  args: { variant: "danger" },
  render: (args: Props) => ({
    components: alertComponents,
    setup() {
      return { args };
    },
    template: `
      <AlertRoot v-bind="args" class="max-w-lg">
        <AlertIcon />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>
          Your card was declined. Update your payment method and try again.
        </AlertDescription>
      </AlertRoot>
    `,
  }),
});

/**
 * For an alert the user can act on directly.
 * Actions sit under the description, aligned with the text.
 */
export const WithActions = meta.story({
  args: { variant: "warning" },
  render: (args: Props) => ({
    components: alertComponents,
    setup() {
      return { args };
    },
    template: `
      <AlertRoot v-bind="args" class="max-w-lg">
        <AlertIcon />
        <AlertTitle>Storage almost full</AlertTitle>
        <AlertDescription>
          You are using 90% of your storage.
        </AlertDescription>
        <AlertActions>
          <Button size="sm">Upgrade plan</Button>
          <Button variant="secondary" size="sm">Manage files</Button>
        </AlertActions>
      </AlertRoot>
    `,
  }),
});

/**
 * For an alert the user can acknowledge and close.
 * `AlertClose` dismisses it on its own; bind `v-model:open` only to reopen
 * it or react to the dismissal.
 */
export const Dismissible = meta.story({
  args: { variant: "neutral" },
  render: (args: Props) => ({
    components: alertComponents,
    setup() {
      const open = ref(true);
      return { args, open };
    },
    template: `
      <div class="flex max-w-lg flex-col items-start gap-4">
        <AlertRoot v-bind="args" v-model:open="open" class="w-full">
          <AlertIcon />
          <AlertTitle>Tips are enabled</AlertTitle>
          <AlertDescription>
            You can turn them off at any time in the settings.
          </AlertDescription>
          <AlertClose />
        </AlertRoot>
        <Button v-if="!open" variant="secondary" @click="open = true">
          Show the alert again
        </Button>
      </div>
    `,
  }),
});
