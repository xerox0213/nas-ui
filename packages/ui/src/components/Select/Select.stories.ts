import { Apple, Banana, Carrot, Cherry, Globe, Leaf, Wheat } from "@lucide/vue";
import { type ConcreteComponent, ref } from "vue";

import preview from "#storybook/preview.ts";

import SelectContent from "./SelectContent.vue";
import SelectGroup from "./SelectGroup.vue";
import SelectIcon from "./SelectIcon.vue";
import SelectItem from "./SelectItem.vue";
import SelectLabel from "./SelectLabel.vue";
import SelectRoot from "./SelectRoot.vue";
import SelectTrigger from "./SelectTrigger.vue";
import SelectValue from "./SelectValue.vue";

const selectComponents = {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
};

const meta = preview.meta({
  title: "Components/Select",
  component: SelectRoot,
  subcomponents: {
    SelectTrigger,
    SelectValue,
    SelectIcon,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem: SelectItem as ConcreteComponent,
  },
});

/**
 * For picking one value among a short, known list, such as a country or a status.
 * The trigger shows the placeholder until a value is picked, then the text of
 * the selected option. For a handful of options always visible, prefer radio
 * buttons; for a long list the user needs to search, prefer a combobox.
 */
export const Default = meta.story({
  render: (args) => ({
    components: selectComponents,
    setup() {
      return { args };
    },
    template: `
      <SelectRoot v-bind="args">
        <SelectTrigger placeholder="Choose a fruit" aria-label="Fruit" />
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes" disabled>Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectContent>
      </SelectRoot>
    `,
  }),
});

/**
 * For a value that fails validation, for example a required choice left empty
 * when the form is submitted. Set `invalid` on the root: the trigger shows the
 * error style and sets `aria-invalid`. Say what is wrong in a message linked
 * with `aria-describedby`, so screen readers announce it.
 */
export const Invalid = meta.story({
  args: { invalid: true },
  render: (args) => ({
    components: selectComponents,
    setup() {
      return { args };
    },
    template: `
      <SelectRoot v-bind="args">
        <SelectTrigger placeholder="Choose a country" aria-label="Country" />
        <SelectContent>
          <SelectItem value="be">Belgium</SelectItem>
          <SelectItem value="fr">France</SelectItem>
          <SelectItem value="lu">Luxembourg</SelectItem>
          <SelectItem value="nl">Netherlands</SelectItem>
        </SelectContent>
      </SelectRoot>
    `,
  }),
});

/**
 * For options that fall into categories, so the user finds them faster.
 * Start each group with a `SelectLabel`: it names the group for screen readers.
 * Groups are separated automatically.
 */
export const Grouped = meta.story({
  render: (args) => ({
    components: selectComponents,
    setup() {
      return { args };
    },
    template: `
      <SelectRoot v-bind="args">
        <SelectTrigger placeholder="Choose a food" aria-label="Food" />
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="leek">Leek</SelectItem>
          </SelectGroup>
        </SelectContent>
      </SelectRoot>
    `,
  }),
});

/**
 * For picking several values from the same list, such as tags or days.
 * Set `multiple`: the value becomes an array and the trigger lists the
 * selected options, separated by commas.
 */
export const Multiple = meta.story({
  args: { multiple: true },
  render: (args) => ({
    components: selectComponents,
    setup() {
      const days = ref<string[]>(["monday", "wednesday"]);
      return { args, days };
    },
    template: `
      <div class="flex flex-col gap-4">
        <SelectRoot v-bind="args" v-model="days">
          <SelectTrigger placeholder="Choose days" aria-label="Delivery days" />
          <SelectContent>
            <SelectItem value="monday">Monday</SelectItem>
            <SelectItem value="tuesday">Tuesday</SelectItem>
            <SelectItem value="wednesday">Wednesday</SelectItem>
            <SelectItem value="thursday">Thursday</SelectItem>
            <SelectItem value="friday">Friday</SelectItem>
          </SelectContent>
        </SelectRoot>
        <p class="text-fg-muted">Days: {{ days }}</p>
      </div>
    `,
  }),
});

/**
 * For options easier to recognise with a visual cue.
 * Put the icon before the text, inside the item. Only the text is shown in the
 * trigger and used for keyboard search, so keep the text meaningful on its own.
 */
export const WithIcons = meta.story({
  render: (args) => ({
    components: { ...selectComponents, Apple, Banana, Carrot, Cherry, Leaf, Wheat },
    setup() {
      return { args };
    },
    template: `
      <SelectRoot v-bind="args">
        <SelectTrigger placeholder="Choose a food" aria-label="Food" />
        <SelectContent>
          <SelectItem value="apple"><Apple />Apple</SelectItem>
          <SelectItem value="banana"><Banana />Banana</SelectItem>
          <SelectItem value="cherry"><Cherry />Cherry</SelectItem>
          <SelectItem value="carrot"><Carrot />Carrot</SelectItem>
          <SelectItem value="leek"><Leaf />Leek</SelectItem>
          <SelectItem value="rice"><Wheat />Rice</SelectItem>
        </SelectContent>
      </SelectRoot>
    `,
  }),
});

/**
 * For a trigger that needs more than the value and the chevron, such as a
 * leading icon. Filling the trigger replaces its default content: rebuild it
 * with `SelectValue` and `SelectIcon`.
 */
export const CustomTrigger = meta.story({
  render: (args) => ({
    components: { ...selectComponents, Globe },
    setup() {
      return { args };
    },
    template: `
      <SelectRoot v-bind="args">
        <SelectTrigger aria-label="Language">
          <Globe />
          <SelectValue placeholder="Choose a language" />
          <SelectIcon />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="fr">Français</SelectItem>
          <SelectItem value="nl">Nederlands</SelectItem>
        </SelectContent>
      </SelectRoot>
    `,
  }),
});

/**
 * For a choice the user can see but not change right now, for example one
 * locked by their plan or by an admin. The trigger keeps showing the value.
 */
export const Disabled = meta.story({
  args: { disabled: true, defaultValue: "monthly" },
  render: (args) => ({
    components: selectComponents,
    setup() {
      return { args };
    },
    template: `
      <SelectRoot v-bind="args">
        <SelectTrigger placeholder="Choose a billing cycle" aria-label="Billing cycle" />
        <SelectContent>
          <SelectItem value="monthly">Monthly</SelectItem>
          <SelectItem value="yearly">Yearly</SelectItem>
        </SelectContent>
      </SelectRoot>
    `,
  }),
});

/**
 * For reading or setting the value from your own state.
 * Bind it with `v-model`, for example to filter a list as soon as the value changes.
 */
export const Controlled = meta.story({
  render: (args) => ({
    components: selectComponents,
    setup() {
      const status = ref("open");
      return { args, status };
    },
    template: `
      <div class="flex flex-col gap-4">
        <SelectRoot v-bind="args" v-model="status">
          <SelectTrigger placeholder="Choose a status" aria-label="Status" />
          <SelectContent>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="in-progress">In progress</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </SelectRoot>
        <p class="text-fg-muted">Status: {{ status }}</p>
      </div>
    `,
  }),
});
