import { ref } from "vue";

import preview from "#storybook/preview.ts";

import AccordionChevron from "./AccordionChevron.vue";
import AccordionContent from "./AccordionContent.vue";
import AccordionHeader from "./AccordionHeader.vue";
import AccordionItem from "./AccordionItem.vue";
import AccordionRoot, { type Props } from "./AccordionRoot.vue";
import AccordionTrigger from "./AccordionTrigger.vue";

const accordionComponents = {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionChevron,
  AccordionContent,
};

const meta = preview.meta({
  title: "Components/Accordion",
  component: AccordionRoot,
  subcomponents: {
    AccordionItem,
    AccordionHeader,
    AccordionTrigger,
    AccordionChevron,
    AccordionContent,
  },
});

/**
 * For long content the user explores one section at a time.
 * An FAQ is typical. With `collapsible`, clicking the open item closes it.
 */
export const Default = meta.story({
  args: { collapsible: true },
  render: (args: Props<boolean>) => ({
    components: accordionComponents,
    setup() {
      return { args };
    },
    template: `
      <AccordionRoot v-bind="args" class="max-w-lg">
        <AccordionItem value="shipping">
          <AccordionHeader>
            <AccordionTrigger class="w-full">
              Shipping<AccordionChevron />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            Orders ship within 2 business days. Tracking is emailed as soon
            as the parcel leaves our warehouse.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionHeader>
            <AccordionTrigger class="w-full">
              Returns<AccordionChevron />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            You have 30 days to return an item. The refund is issued to the
            original payment method.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="warranty">
          <AccordionHeader>
            <AccordionTrigger class="w-full">
              Warranty<AccordionChevron />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            All products are covered for two years, parts and labor included.
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
    `,
  }),
});

/**
 * For sections the user reads or compares together.
 * With `multiple`, opening an item keeps the others open, and `v-model`
 * becomes an array of values.
 */
export const Multiple = meta.story({
  render: (args: Props<boolean>) => ({
    components: accordionComponents,
    setup() {
      return { args };
    },
    template: `
      <AccordionRoot
        v-bind="args"
        multiple
        :default-value="['profile', 'notifications']"
        class="max-w-lg"
      >
        <AccordionItem value="profile">
          <AccordionHeader>
            <AccordionTrigger class="w-full">
              Profile<AccordionChevron />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            Name, avatar and the email shown to your organization.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="notifications">
          <AccordionHeader>
            <AccordionTrigger class="w-full">
              Notifications<AccordionChevron />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            Choose what you get notified about, and where.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="security">
          <AccordionHeader>
            <AccordionTrigger class="w-full">
              Security<AccordionChevron />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            Two-factor authentication and active sessions.
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
    `,
  }),
});

/**
 * For a section that exists but is not available yet.
 * A disabled item cannot be opened, with the mouse or the keyboard.
 */
export const DisabledItem = meta.story({
  args: { collapsible: true },
  render: (args: Props<boolean>) => ({
    components: accordionComponents,
    setup() {
      return { args };
    },
    template: `
      <AccordionRoot v-bind="args" class="max-w-lg">
        <AccordionItem value="shipping">
          <AccordionHeader>
            <AccordionTrigger class="w-full">
              Shipping<AccordionChevron />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            Orders ship within 2 business days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="billing" disabled>
          <AccordionHeader>
            <AccordionTrigger class="w-full">
              Billing<AccordionChevron />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            Available once your account is verified.
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
    `,
  }),
});

/**
 * For syncing the open section with your own state.
 * Bind it with `v-model`, for example to keep it in the URL.
 */
export const Controlled = meta.story({
  args: { collapsible: true },
  render: (args: Props<boolean>) => ({
    components: accordionComponents,
    setup() {
      const open = ref("returns");
      return { args, open };
    },
    template: `
      <div class="flex flex-col gap-4">
        <AccordionRoot v-bind="args" v-model="open" class="max-w-lg">
          <AccordionItem value="shipping">
            <AccordionHeader>
              <AccordionTrigger class="w-full">
                Shipping<AccordionChevron />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              Orders ship within 2 business days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="returns">
            <AccordionHeader>
              <AccordionTrigger class="w-full">
                Returns<AccordionChevron />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              You have 30 days to return an item.
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
        <p class="text-fg-muted">Open section: {{ open || "none" }}</p>
      </div>
    `,
  }),
});
