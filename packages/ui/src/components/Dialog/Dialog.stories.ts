import { ref } from "vue";

import preview from "#storybook/preview.ts";

import Button from "../Button/Button.vue";
import DialogBody from "./DialogBody.vue";
import DialogClose from "./DialogClose.vue";
import DialogContent from "./DialogContent.vue";
import DialogDescription from "./DialogDescription.vue";
import DialogFooter from "./DialogFooter.vue";
import DialogHeader from "./DialogHeader.vue";
import DialogIntro from "./DialogIntro.vue";
import DialogLabel from "./DialogLabel.vue";
import DialogOverlay from "./DialogOverlay.vue";
import DialogPortal from "./DialogPortal.vue";
import DialogRoot, { type Props } from "./DialogRoot.vue";
import DialogTitle from "./DialogTitle.vue";
import DialogTrigger from "./DialogTrigger.vue";

const dialogComponents = {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogLabel,
  DialogClose,
  DialogBody,
  DialogIntro,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
};

const meta = preview.meta({
  title: "Components/Dialog",
  component: DialogRoot,
  subcomponents: {
    DialogTrigger,
    DialogPortal,
    DialogOverlay,
    DialogContent,
    DialogHeader,
    DialogLabel,
    DialogClose,
    DialogBody,
    DialogIntro,
    DialogTitle,
    DialogDescription,
    DialogFooter,
  },
});

/**
 * For a task that interrupts the current view.
 * Editing an item is typical. Without content, `DialogClose` renders the
 * default close button.
 */
export const Default = meta.story({
  args: { size: "md" },
  render: (args: Props) => ({
    components: dialogComponents,
    setup() {
      return { args };
    },
    template: `
      <DialogRoot v-bind="args">
        <DialogTrigger as-child>
          <Button variant="secondary">Edit profile</Button>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent>
            <DialogHeader>
              <DialogLabel>Profile</DialogLabel>
              <DialogClose />
            </DialogHeader>
            <DialogBody>
              <DialogIntro>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile, then save them.
                </DialogDescription>
              </DialogIntro>
              <p>
                Your profile is visible to the other members of your
                organization.
              </p>
            </DialogBody>
            <DialogFooter>
              <DialogClose as-child>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
              <Button variant="primary">Save</Button>
            </DialogFooter>
          </DialogContent>
        </DialogPortal>
      </DialogRoot>
    `,
  }),
});

/**
 * For content taller than the viewport, like a long form.
 * The header and footer stay in place while the body scrolls.
 */
export const ScrollableBody = meta.story({
  args: { size: "md" },
  render: (args: Props) => ({
    components: dialogComponents,
    setup() {
      return { args };
    },
    template: `
      <DialogRoot v-bind="args">
        <DialogTrigger as-child>
          <Button variant="secondary">Open terms</Button>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent>
            <DialogHeader>
              <DialogLabel>Legal</DialogLabel>
              <DialogClose />
            </DialogHeader>
            <DialogBody>
              <DialogIntro>
                <DialogTitle>Terms of service</DialogTitle>
                <DialogDescription>
                  Read the terms below before accepting them.
                </DialogDescription>
              </DialogIntro>
              <p v-for="i in 20" :key="i">
                Section {{ i }}. These terms govern the use of the service.
                They describe your rights and responsibilities as a user, and
                what you can expect from us in return.
              </p>
            </DialogBody>
            <DialogFooter>
              <DialogClose as-child>
                <Button variant="secondary">Decline</Button>
              </DialogClose>
              <Button variant="primary">Accept</Button>
            </DialogFooter>
          </DialogContent>
        </DialogPortal>
      </DialogRoot>
    `,
  }),
});

/**
 * For keeping the dialog state across close and reopen.
 * With `unmountOnHide: false` the content stays mounted while hidden, so a
 * draft survives an accidental dismiss. Type something, close, reopen.
 */
export const PreservedState = meta.story({
  args: { unmountOnHide: false },
  render: (args: Props) => ({
    components: dialogComponents,
    setup() {
      return { args };
    },
    template: `
      <DialogRoot v-bind="args">
        <DialogTrigger as-child>
          <Button variant="secondary">Write feedback</Button>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent>
            <DialogHeader>
              <DialogLabel>Feedback</DialogLabel>
              <DialogClose />
            </DialogHeader>
            <DialogBody>
              <DialogIntro>
                <DialogTitle>Send us feedback</DialogTitle>
                <DialogDescription>
                  Your draft is kept if you close this dialog.
                </DialogDescription>
              </DialogIntro>
              <textarea
                class="border-line rounded-base border p-2"
                rows="4"
                placeholder="Write your feedback…"
              ></textarea>
            </DialogBody>
            <DialogFooter>
              <DialogClose as-child>
                <Button variant="secondary">Close</Button>
              </DialogClose>
              <Button variant="primary">Send</Button>
            </DialogFooter>
          </DialogContent>
        </DialogPortal>
      </DialogRoot>
    `,
  }),
});

/**
 * For opening the dialog from your own state.
 * After an async action, for example. Bind it with `v-model:open`; no
 * trigger is needed.
 */
export const Controlled = meta.story({
  render: (args: Props) => ({
    components: dialogComponents,
    setup() {
      const open = ref(false);
      return { args, open };
    },
    template: `
      <div class="flex flex-col items-start gap-4">
        <Button variant="secondary" @click="open = true">
          Open from outside
        </Button>
        <p class="text-fg-muted">Open: {{ open }}</p>
        <DialogRoot v-bind="args" v-model:open="open">
          <DialogPortal>
            <DialogOverlay />
            <DialogContent>
              <DialogHeader>
                <DialogLabel>Controlled</DialogLabel>
                <DialogClose />
              </DialogHeader>
              <DialogBody>
                <DialogIntro>
                  <DialogTitle>Controlled dialog</DialogTitle>
                  <DialogDescription>
                    This dialog is driven by external state.
                  </DialogDescription>
                </DialogIntro>
              </DialogBody>
              <DialogFooter>
                <Button variant="primary" @click="open = false">Done</Button>
              </DialogFooter>
            </DialogContent>
          </DialogPortal>
        </DialogRoot>
      </div>
    `,
  }),
});
