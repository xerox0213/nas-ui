import { CreditCard, KeyRound, User } from "@lucide/vue";
import { ref } from "vue";

import preview from "#storybook/preview.ts";

import { Icon } from "../Icon";
import TabsContent from "./TabsContent.vue";
import TabsIndicator from "./TabsIndicator.vue";
import TabsList from "./TabsList.vue";
import TabsRoot, { type Props } from "./TabsRoot.vue";
import TabsTrigger from "./TabsTrigger.vue";
import TabsTriggerNumber from "./TabsTriggerNumber.vue";

const meta = preview.meta({
  title: "Components/Tabs",
  component: TabsRoot,
  subcomponents: {
    TabsList,
    TabsTrigger,
    TabsTriggerNumber,
    TabsIndicator,
    TabsContent,
  },
});

/**
 * For switching between related views in the same place.
 * The indicator slides to the active tab and joins it to its panel.
 */
export const Default = meta.story({
  args: { defaultValue: "account" },
  render: (args: Props) => ({
    components: { TabsRoot, TabsList, TabsTrigger, TabsIndicator, TabsContent },
    setup() {
      return { args };
    },
    template: `
      <TabsRoot v-bind="args">
        <TabsList>
          <TabsIndicator />
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Manage your account settings.</TabsContent>
        <TabsContent value="password">Change your password.</TabsContent>
        <TabsContent value="billing">Review your billing details.</TabsContent>
      </TabsRoot>
    `,
  }),
});

/**
 * For many tabs or long labels.
 * The list stacks on the side and the panel takes the remaining width.
 */
export const Vertical = meta.story({
  args: { defaultValue: "general", orientation: "vertical" },
  render: (args: Props) => ({
    components: { TabsRoot, TabsList, TabsTrigger, TabsIndicator, TabsContent },
    setup() {
      return { args };
    },
    template: `
      <TabsRoot v-bind="args">
        <TabsList>
          <TabsIndicator />
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="general">General preferences.</TabsContent>
        <TabsContent value="notifications">Choose what you get notified about.</TabsContent>
        <TabsContent value="security">Two-factor authentication and sessions.</TabsContent>
      </TabsRoot>
    `,
  }),
});

/**
 * For numbered steps or sections.
 * `TabsTriggerNumber` shows the tab position (01, 02, 03…) wherever you place it.
 */
export const Numbered = meta.story({
  args: { defaultValue: "details" },
  render: (args: Props) => ({
    components: {
      TabsRoot,
      TabsList,
      TabsTrigger,
      TabsTriggerNumber,
      TabsIndicator,
      TabsContent,
    },
    setup() {
      return { args };
    },
    template: `
      <TabsRoot v-bind="args">
        <TabsList>
          <TabsIndicator />
          <TabsTrigger value="details"><TabsTriggerNumber />Details</TabsTrigger>
          <TabsTrigger value="shipping"><TabsTriggerNumber />Shipping</TabsTrigger>
          <TabsTrigger value="payment"><TabsTriggerNumber />Payment</TabsTrigger>
        </TabsList>
        <TabsContent value="details">Order details.</TabsContent>
        <TabsContent value="shipping">Shipping address.</TabsContent>
        <TabsContent value="payment">Payment method.</TabsContent>
      </TabsRoot>
    `,
  }),
});

/**
 * For tabs that an icon helps recognize.
 * Place the icon before the label; the trigger handles the spacing.
 */
export const WithIcon = meta.story({
  args: { defaultValue: "account" },
  render: (args: Props) => ({
    components: {
      TabsRoot,
      TabsList,
      TabsTrigger,
      TabsIndicator,
      TabsContent,
      Icon,
    },
    setup() {
      return { args, CreditCard, KeyRound, User };
    },
    template: `
      <TabsRoot v-bind="args">
        <TabsList>
          <TabsIndicator />
          <TabsTrigger value="account"><Icon :as="User" />Account</TabsTrigger>
          <TabsTrigger value="password"><Icon :as="KeyRound" />Password</TabsTrigger>
          <TabsTrigger value="billing"><Icon :as="CreditCard" />Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Manage your account settings.</TabsContent>
        <TabsContent value="password">Change your password.</TabsContent>
        <TabsContent value="billing">Review your billing details.</TabsContent>
      </TabsRoot>
    `,
  }),
});

/**
 * For a tab that exists but is not available yet.
 * A disabled tab cannot be selected, with the mouse or the keyboard.
 */
export const DisabledTab = meta.story({
  args: { defaultValue: "account" },
  render: (args: Props) => ({
    components: { TabsRoot, TabsList, TabsTrigger, TabsIndicator, TabsContent },
    setup() {
      return { args };
    },
    template: `
      <TabsRoot v-bind="args">
        <TabsList>
          <TabsIndicator />
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="billing" disabled>Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Manage your account settings.</TabsContent>
        <TabsContent value="password">Change your password.</TabsContent>
        <TabsContent value="billing">Review your billing details.</TabsContent>
      </TabsRoot>
    `,
  }),
});

/**
 * For syncing the active tab with your own state.
 * Bind it with `v-model`, for example to keep it in the URL.
 */
export const Controlled = meta.story({
  render: (args: Props) => ({
    components: { TabsRoot, TabsList, TabsTrigger, TabsIndicator, TabsContent },
    setup() {
      const tab = ref("password");
      return { args, tab };
    },
    template: `
      <div class="flex flex-col gap-4">
        <TabsRoot v-bind="args" v-model="tab">
          <TabsList>
            <TabsIndicator />
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Manage your account settings.</TabsContent>
          <TabsContent value="password">Change your password.</TabsContent>
          <TabsContent value="billing">Review your billing details.</TabsContent>
        </TabsRoot>
        <p class="text-fg-muted">Active tab: {{ tab }}</p>
      </div>
    `,
  }),
});
