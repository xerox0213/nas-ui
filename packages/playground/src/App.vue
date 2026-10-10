<script setup lang="ts">
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
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
  TabsTriggerNumber,
} from "@nas-ui/ui";
</script>

<template>
  <main class="flex flex-col gap-8 p-8">
    <h1 class="text-4xl">Playground Nas UI</h1>

    <TabsRoot default-value="account" orientation="horizontal">
      <TabsList>
        <TabsIndicator />
        <TabsTrigger value="account"><TabsTriggerNumber />Account</TabsTrigger>
        <TabsTrigger value="password"
          >Password<TabsTriggerNumber
        /></TabsTrigger>
        <TabsTrigger value="billing"><TabsTriggerNumber />Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings</TabsContent>
      <TabsContent value="password"> Change your password </TabsContent>
      <TabsContent value="billing"> Billing details </TabsContent>
    </TabsRoot>

    <AccordionRoot class="max-w-lg" collapsible>
      <AccordionItem value="shipping">
        <AccordionHeader>
          <AccordionTrigger class="w-full">
            Shipping
            <AccordionChevron />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          Orders ship within 2 business days. Tracking is emailed as soon as the
          parcel leaves our warehouse.
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
          You have 30 days to return an item. The refund is issued to the
          original payment method.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="warranty" disabled>
        <AccordionHeader>
          <AccordionTrigger class="w-full">
            Warranty
            <AccordionChevron />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          All products are covered for two years.
        </AccordionContent>
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
  </main>
</template>
