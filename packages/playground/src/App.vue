<script setup lang="ts">
import {
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
  </main>
</template>
