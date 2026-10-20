import { ref } from "vue";

import preview from "#storybook/preview.ts";

import SwitchRoot from "./SwitchRoot.vue";
import SwitchThumb from "./SwitchThumb.vue";

const meta = preview.meta({
  title: "Components/Switch",
  component: SwitchRoot,
  subcomponents: { SwitchThumb },
});

/**
 * For a setting that takes effect as soon as it is toggled, with no save step.
 * For a choice confirmed later by submitting a form, use a checkbox instead.
 */
export const Default = meta.story({
  render: (args) => ({
    components: { SwitchRoot, SwitchThumb },
    setup() {
      return { args };
    },
    template: `
      <SwitchRoot v-bind="args" aria-label="Email notifications">
        <SwitchThumb />
      </SwitchRoot>
    `,
  }),
});

/**
 * For a setting that is on unless the user opts out.
 * Start it checked with `defaultValue` when you don't need to track its state.
 */
export const Checked = meta.story({
  args: { defaultValue: true },
  render: (args) => ({
    components: { SwitchRoot, SwitchThumb },
    setup() {
      return { args };
    },
    template: `
      <SwitchRoot v-bind="args" aria-label="Product updates">
        <SwitchThumb />
      </SwitchRoot>
    `,
  }),
});

/**
 * For a setting the user can see but not change right now, for example one
 * locked by their plan or by an admin. A disabled switch keeps showing its value.
 */
export const Disabled = meta.story({
  args: { disabled: true },
  render: (args) => ({
    components: { SwitchRoot, SwitchThumb },
    setup() {
      return { args };
    },
    template: `
      <SwitchRoot v-bind="args" aria-label="SMS notifications">
        <SwitchThumb />
      </SwitchRoot>
    `,
  }),
});

/**
 * For syncing the switch with your own state.
 * Bind it with `v-model`, for example to save the setting as soon as it changes.
 */
export const Controlled = meta.story({
  render: (args) => ({
    components: { SwitchRoot, SwitchThumb },
    setup() {
      const enabled = ref(false);
      return { args, enabled };
    },
    template: `
      <div class="flex flex-col gap-4">
        <SwitchRoot v-bind="args" aria-label="Dark mode" v-model="enabled">
          <SwitchThumb />
        </SwitchRoot>
        <p class="text-fg-muted">Enabled: {{ enabled }}</p>
      </div>
    `,
  }),
});

/**
 * For a setting stored as something other than a boolean, such as an API
 * field that expects `"on"` / `"off"`. `trueValue` and `falseValue` set what
 * `v-model` receives.
 */
export const CustomValues = meta.story({
  args: { trueValue: "on", falseValue: "off" },
  render: (args) => ({
    components: { SwitchRoot, SwitchThumb },
    setup() {
      const newsletter = ref("off");
      return { args, newsletter };
    },
    template: `
      <div class="flex flex-col gap-4">
        <SwitchRoot v-bind="args" aria-label="Newsletter" v-model="newsletter">
          <SwitchThumb />
        </SwitchRoot>
        <p class="text-fg-muted">Newsletter: {{ newsletter }}</p>
      </div>
    `,
  }),
});
