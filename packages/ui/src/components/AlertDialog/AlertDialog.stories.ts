import preview from "#storybook/preview.ts";

import Button from "../Button/Button.vue";
import AlertDialogAction from "./AlertDialogAction.vue";
import AlertDialogBody from "./AlertDialogBody.vue";
import AlertDialogCancel from "./AlertDialogCancel.vue";
import AlertDialogContent from "./AlertDialogContent.vue";
import AlertDialogDescription from "./AlertDialogDescription.vue";
import AlertDialogFooter from "./AlertDialogFooter.vue";
import AlertDialogIntro from "./AlertDialogIntro.vue";
import AlertDialogOverlay from "./AlertDialogOverlay.vue";
import AlertDialogPortal from "./AlertDialogPortal.vue";
import AlertDialogRoot, { type Props } from "./AlertDialogRoot.vue";
import AlertDialogTitle from "./AlertDialogTitle.vue";
import AlertDialogTrigger from "./AlertDialogTrigger.vue";

const alertDialogComponents = {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogIntro,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  Button,
};

const meta = preview.meta({
  title: "Components/AlertDialog",
  component: AlertDialogRoot,
  subcomponents: {
    AlertDialogTrigger,
    AlertDialogPortal,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogBody,
    AlertDialogIntro,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
  },
});

/**
 * For a destructive action that needs an explicit choice.
 * Unlike a dialog, clicking outside does not dismiss it, and focus starts
 * on Cancel so a reflex Enter never destroys anything.
 */
export const Default = meta.story({
  render: (args: Props) => ({
    components: alertDialogComponents,
    setup() {
      return { args };
    },
    template: `
      <AlertDialogRoot v-bind="args">
        <AlertDialogTrigger as-child>
          <Button variant="danger">Delete project</Button>
        </AlertDialogTrigger>
        <AlertDialogPortal>
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogBody>
              <AlertDialogIntro>
                <AlertDialogTitle>Delete this project?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. All project data will be
                  permanently removed.
                </AlertDialogDescription>
              </AlertDialogIntro>
            </AlertDialogBody>
            <AlertDialogFooter>
              <AlertDialogCancel as-child>
                <Button variant="secondary">Cancel</Button>
              </AlertDialogCancel>
              <AlertDialogAction as-child>
                <Button variant="danger">Delete</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialogRoot>
    `,
  }),
});

/**
 * For a choice the user must make before continuing.
 * A session expiring is typical. The alert dialog already blocks outside
 * clicks; preventing `escapeKeyDown` too makes it fully blocking.
 */
export const RequiredAction = meta.story({
  render: (args: Props) => ({
    components: alertDialogComponents,
    setup() {
      return { args };
    },
    template: `
      <AlertDialogRoot v-bind="args">
        <AlertDialogTrigger as-child>
          <Button variant="secondary">Expire session</Button>
        </AlertDialogTrigger>
        <AlertDialogPortal>
          <AlertDialogOverlay />
          <AlertDialogContent @escape-key-down.prevent>
            <AlertDialogBody>
              <AlertDialogIntro>
                <AlertDialogTitle>Session expired</AlertDialogTitle>
                <AlertDialogDescription>
                  Sign in again to keep working, or leave and lose unsaved
                  changes.
                </AlertDialogDescription>
              </AlertDialogIntro>
            </AlertDialogBody>
            <AlertDialogFooter>
              <AlertDialogCancel as-child>
                <Button variant="secondary">Leave</Button>
              </AlertDialogCancel>
              <AlertDialogAction as-child>
                <Button variant="primary">Sign in</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialogRoot>
    `,
  }),
});
