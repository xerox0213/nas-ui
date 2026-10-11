import { ArrowUpRight } from "@lucide/vue";
import { RouterLink } from "vue-router";

import preview from "#storybook/preview.ts";

import Button from "../Button/Button.vue";
import Eyebrow from "../Eyebrow/Eyebrow.vue";
import Icon from "../Icon/Icon.vue";
import CardBody from "./CardBody.vue";
import CardDescription from "./CardDescription.vue";
import CardFooter from "./CardFooter.vue";
import CardHeader from "./CardHeader.vue";
import CardIntro from "./CardIntro.vue";
import CardLink from "./CardLink.vue";
import CardRaised from "./CardRaised.vue";
import CardRoot, { type Props } from "./CardRoot.vue";
import CardTitle from "./CardTitle.vue";

const cardComponents = {
  CardRoot,
  CardHeader,
  CardIntro,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
  CardLink,
  CardRaised,
  Eyebrow,
  Button,
  Icon,
};

const meta = preview.meta({
  title: "Components/Card",
  component: CardRoot,
  subcomponents: {
    CardHeader,
    CardIntro,
    CardTitle,
    CardDescription,
    CardBody,
    CardFooter,
    CardLink,
    CardRaised,
  },
});

/**
 * For grouping related information on one surface.
 * Header, intro, free body content and footer are all optional.
 */
export const Default = meta.story({
  render: (args: Props) => ({
    components: cardComponents,
    setup() {
      return { args };
    },
    template: `
      <CardRoot v-bind="args" class="max-w-md">
        <CardHeader>
          <Eyebrow>Project</Eyebrow>
        </CardHeader>
        <CardBody>
          <CardIntro>
            <CardTitle>Weekly report</CardTitle>
            <CardDescription>
              A summary of what happened this week.
            </CardDescription>
          </CardIntro>
          <p>
            Twelve issues closed, two releases shipped and one incident
            resolved in under an hour.
          </p>
        </CardBody>
        <CardFooter>
          <Button variant="secondary">Share</Button>
          <Button variant="primary">Open report</Button>
        </CardFooter>
      </CardRoot>
    `,
  }),
});

/**
 * For a card that navigates within the app.
 * `CardLink` in the title stretches its click target over the whole card;
 * use one per card. Pass the router link through `as-child`.
 */
export const InternalLink = meta.story({
  render: (args: Props) => ({
    components: { ...cardComponents, RouterLink },
    setup() {
      return { args };
    },
    template: `
      <CardRoot v-bind="args" class="max-w-md">
        <CardHeader>
          <Eyebrow>Blog</Eyebrow>
        </CardHeader>
        <CardBody>
          <CardIntro>
            <CardTitle>
              <CardLink as-child>
                <RouterLink to="/blog/designing-accessible-cards">
                  Designing accessible cards
                </RouterLink>
              </CardLink>
            </CardTitle>
            <CardDescription>
              Why the card root should not be a link, and what to do instead.
            </CardDescription>
          </CardIntro>
        </CardBody>
      </CardRoot>
    `,
  }),
});

/**
 * For a card that leads to another site.
 * Open it in a new tab with `rel="noopener noreferrer"`, and signal the
 * exit with an icon.
 */
export const ExternalLink = meta.story({
  render: (args: Props) => ({
    components: cardComponents,
    setup() {
      return { args, ArrowUpRight };
    },
    template: `
      <CardRoot v-bind="args" class="max-w-md">
        <CardHeader>
          <Eyebrow>Resource</Eyebrow>
          <Icon :as="ArrowUpRight" size="sm" class="text-fg-subtle" />
        </CardHeader>
        <CardBody>
          <CardIntro>
            <CardTitle>
              <CardLink as-child>
                <a
                  href="https://www.w3.org/WAI/ARIA/apg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ARIA Authoring Practices Guide
                </a>
              </CardLink>
            </CardTitle>
            <CardDescription>
              The reference patterns behind most of this library.
            </CardDescription>
          </CardIntro>
        </CardBody>
      </CardRoot>
    `,
  }),
});

/**
 * For a card that triggers an action instead of navigating.
 * `CardLink` wraps a button: the whole card becomes the control.
 */
export const Action = meta.story({
  render: (args: Props) => ({
    components: cardComponents,
    setup() {
      const selectPlan = () => window.alert("Pro plan selected");
      return { args, selectPlan };
    },
    template: `
      <CardRoot v-bind="args" class="max-w-md">
        <CardHeader>
          <Eyebrow>Plan</Eyebrow>
        </CardHeader>
        <CardBody>
          <CardIntro>
            <CardTitle>
              <CardLink as-child>
                <button @click="selectPlan">Pro — 12€/month</button>
              </CardLink>
            </CardTitle>
            <CardDescription>
              Click anywhere on the card to select this plan.
            </CardDescription>
          </CardIntro>
        </CardBody>
      </CardRoot>
    `,
  }),
});

/**
 * For a secondary action inside a clickable card.
 * `CardRaised` lifts it above the stretched link, so it stays clickable on
 * its own.
 */
export const RaisedAction = meta.story({
  render: (args: Props) => ({
    components: cardComponents,
    setup() {
      return { args };
    },
    template: `
      <CardRoot v-bind="args" class="max-w-md">
        <CardHeader>
          <Eyebrow>Blog</Eyebrow>
        </CardHeader>
        <CardBody>
          <CardIntro>
            <CardTitle>
              <CardLink as-child>
                <a href="#">Designing accessible cards</a>
              </CardLink>
            </CardTitle>
            <CardDescription>
              The whole card opens the article, except the button below.
            </CardDescription>
          </CardIntro>
        </CardBody>
        <CardFooter>
          <CardRaised>
            <Button variant="secondary">Bookmark</Button>
          </CardRaised>
        </CardFooter>
      </CardRoot>
    `,
  }),
});
