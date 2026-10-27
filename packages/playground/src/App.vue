<script setup lang="ts">
import { Apple, Banana, Carrot, Cherry, Leaf, Salad, Wheat } from "@lucide/vue";
import {
  AccordionChevron,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  AlertActions,
  AlertClose,
  AlertDescription,
  AlertIcon,
  AlertRoot,
  AlertTitle,
  Button,
  CardBody,
  CardDescription,
  CardHeader,
  CardIntro,
  CardLink,
  CardRoot,
  CardTitle,
  Eyebrow,
  Input,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SwitchRoot,
  SwitchThumb,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
  TabsTriggerNumber,
  Textarea,
} from "@nas-ui/ui";
import { ref } from "vue";

const fruit = ref<string>();
const food = ref<string[]>([]);
</script>

<template>
  <main class="flex flex-col gap-8 p-8">
    <h1 class="text-4xl">Playground Nas UI</h1>

    <NumberFieldRoot :default-value="5" :min="5" :max="10" controls="sides">
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldRoot>

    <NumberFieldRoot :default-value="5" :min="5" :max="10" controls="stacked">
      <NumberFieldInput />
      <NumberFieldIncrement />
      <NumberFieldDecrement />
    </NumberFieldRoot>

    <SelectRoot v-model="fruit">
      <SelectTrigger size="md" placeholder="Choose a fruit" />
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes" disabled>Grapes</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
        <SelectItem value="kiwi">Kiwi</SelectItem>
        <SelectItem value="lemon">Lemon</SelectItem>
        <SelectItem value="mango">Mango</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
        <SelectItem value="peach">Peach</SelectItem>
        <SelectItem value="pear">Pear</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
        <SelectItem value="raspberry" disabled>Raspberry</SelectItem>
        <SelectItem value="strawberry">Strawberry</SelectItem>
        <SelectItem value="watermelon">Watermelon</SelectItem>
        <SelectItem value="a-very-long-fruit">
          A fruit with a much longer name than the others
        </SelectItem>
      </SelectContent>
    </SelectRoot>

    <p>Fruit: {{ fruit }}</p>

    <SelectRoot v-model="food" multiple>
      <SelectTrigger placeholder="Choose foods" />
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple"><Apple />Apple</SelectItem>
          <SelectItem value="banana"><Banana />Banana</SelectItem>
          <SelectItem value="cherry"><Cherry />Cherry</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot"><Carrot />Carrot</SelectItem>
          <SelectItem value="leek"><Leaf />Leek</SelectItem>
          <SelectItem value="spinach" disabled><Salad />Spinach</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Grains</SelectLabel>
          <SelectItem value="rice"><Wheat />Rice</SelectItem>
          <SelectItem value="quinoa"><Wheat />Quinoa</SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectRoot>

    <p>Food: {{ food }}</p>

    <TabsRoot default-value="account" orientation="horizontal">
      <TabsList>
        <TabsIndicator />
        <TabsTrigger value="account"><TabsTriggerNumber />Account</TabsTrigger>
        <TabsTrigger value="password">Password<TabsTriggerNumber /></TabsTrigger>
        <TabsTrigger value="billing"><TabsTriggerNumber />Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings</TabsContent>
      <TabsContent value="password"> Change your password </TabsContent>
      <TabsContent value="billing"> Billing details </TabsContent>
    </TabsRoot>

    <SwitchRoot>
      <SwitchThumb />
    </SwitchRoot>

    <AccordionRoot class="max-w-lg" collapsible>
      <AccordionItem value="shipping">
        <AccordionHeader>
          <AccordionTrigger class="w-full">
            Shipping
            <AccordionChevron />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          Orders ship within 2 business days. Tracking is emailed as soon as the parcel leaves our
          warehouse.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="returns">
        <AccordionHeader>
          <AccordionTrigger class="w-full">
            Returns
            <AccordionChevron />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          You have 30 days to return an item. The refund is issued to the original payment method.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="warranty" disabled>
        <AccordionHeader>
          <AccordionTrigger class="w-full">
            Warranty
            <AccordionChevron />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent> All products are covered for two years. </AccordionContent>
      </AccordionItem>
    </AccordionRoot>

    <AlertRoot>
      <AlertIcon />
      <AlertTitle>Article publié</AlertTitle>
      <AlertDescription>Brouillon non enregistré</AlertDescription>
      <AlertActions>
        <Button>Action primaire</Button>
        <Button variant="secondary">Action secondaire</Button>
      </AlertActions>
      <AlertClose />
    </AlertRoot>

    <CardRoot>
      <CardHeader>
        <Eyebrow>Accessibilité</Eyebrow>
      </CardHeader>
      <CardBody>
        <CardIntro>
          <CardTitle>
            <CardLink as-child>
              <a href="https://ui.shadcn.com/docs/components/base/card#image" target="_blank">
                Carte accessible
              </a>
            </CardLink>
          </CardTitle>
          <CardDescription>
            La racine de la carte ne doit pas être un lien car ...
          </CardDescription>
        </CardIntro>
      </CardBody>
    </CardRoot>

    <Input placeholder="email@example.com" invalid />

    <Textarea placeholder="Billie Jean is not my lover..." />
  </main>
</template>
