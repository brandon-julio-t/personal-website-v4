"use client";

import { CodeHighlight } from "@/components/code-highlighter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GitHubIcon } from "@/components/ui/devicons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TypographyH4,
  TypographyLarge,
  TypographySmall,
} from "@/components/ui/typography";
import {
  IosMailTabs,
  IosMailTabsContent,
  IosMailTabsList,
  IosMailTabsTrigger,
} from "@/registry/new-york/ios-mail-tabs/ios-mail-tabs";
import {
  InboxIcon,
  MegaphoneIcon,
  MessageSquareTextIcon,
  ShoppingCartIcon,
  UserRoundIcon,
} from "lucide-react";
import Link from "next/link";

const IosMailTabsComponentPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <header className="container flex max-w-2xl flex-col gap-1">
        <TypographyH4>iOS Mail Tabs</TypographyH4>

        <TypographySmall className="font-normal">
          A set of animated, iOS-inspired mail tabs for React apps. Switch
          between tabs like Primary, Transactions, Updates, Promotions, and All
          Mail with smooth transitions. Great for email clients or any UI
          needing visually distinct, interactive tab navigation.
        </TypographySmall>

        <div>
          <Button variant="ghost" className="-mx-4" asChild>
            <Link
              href="https://github.com/brandon-julio-t/personal-website-v4/tree/main/app/components/ios-mail-tabs"
              target="_blank"
            >
              <GitHubIcon className="fill-foreground" />
              View on GitHub
            </Link>
          </Button>
        </div>
      </header>

      <section className="flex flex-col gap-1">
        <div className="container max-w-2xl">
          <TypographyLarge>Examples</TypographyLarge>
        </div>

        <Tabs defaultValue="preview">
          <div className="container max-w-2xl">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="preview">
            <Card>
              <CardContent className="flex flex-col items-center gap-1.5 overflow-auto md:flex-row md:justify-center">
                <IosMailTabs defaultValue="primary">
                  <IosMailTabsList>
                    <IosMailTabsTrigger
                      value="primary"
                      icon={UserRoundIcon}
                      className="bg-sky-600 text-white"
                    >
                      Primary
                    </IosMailTabsTrigger>
                    <IosMailTabsTrigger
                      value="transactions"
                      icon={ShoppingCartIcon}
                      className="bg-emerald-600 text-white"
                    >
                      Transactions
                    </IosMailTabsTrigger>
                    <IosMailTabsTrigger
                      value="updates"
                      icon={MessageSquareTextIcon}
                      className="bg-violet-600 text-white"
                    >
                      Updates
                    </IosMailTabsTrigger>
                    <IosMailTabsTrigger
                      value="promotions"
                      icon={MegaphoneIcon}
                      className="bg-pink-600 text-white"
                    >
                      Promotions
                    </IosMailTabsTrigger>
                    <IosMailTabsTrigger
                      value="all-mail"
                      icon={InboxIcon}
                      className="bg-neutral-900 text-white"
                    >
                      All Mail
                    </IosMailTabsTrigger>
                  </IosMailTabsList>
                  <IosMailTabsContent value="primary">
                    <p>Primary</p>
                  </IosMailTabsContent>
                  <IosMailTabsContent value="transactions">
                    <p>Transactions</p>
                  </IosMailTabsContent>
                  <IosMailTabsContent value="updates">
                    <p>Updates</p>
                  </IosMailTabsContent>
                  <IosMailTabsContent value="promotions">
                    <p>Promotions</p>
                  </IosMailTabsContent>
                  <IosMailTabsContent value="all-mail">
                    <p>All Mail</p>
                  </IosMailTabsContent>
                </IosMailTabs>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="code">
            <CodeHighlight className="language-tsx">{CODE}</CodeHighlight>
          </TabsContent>
        </Tabs>
      </section>

      <section className="flex flex-col gap-1">
        <TypographyLarge>Installation</TypographyLarge>
        <CodeHighlight className="language-bash">
          npx shadcn@latest add
          https://brandonjuliothenaro.my.id/r/ios-mail-tabs.json
        </CodeHighlight>
      </section>
    </section>
  );
};

const CODE = `
"use client";

import {
  IosMailTabs,
  IosMailTabsContent,
  IosMailTabsList,
  IosMailTabsTrigger,
} from "@/components/ios-mail-tabs";
import {
  InboxIcon,
  MegaphoneIcon,
  MessageSquareTextIcon,
  ShoppingCartIcon,
  UserRoundIcon,
} from "lucide-react";

const IosMailTabs = () => {
  return (
    <IosMailTabs defaultValue="primary">
      <IosMailTabsList>
        <IosMailTabsTrigger
          value="primary"
          icon={UserRoundIcon}
          className="bg-sky-600 text-white"
        >
          Primary
        </IosMailTabsTrigger>
        <IosMailTabsTrigger
          value="transactions"
          icon={ShoppingCartIcon}
          className="bg-emerald-600 text-white"
        >
          Transactions
        </IosMailTabsTrigger>
        <IosMailTabsTrigger
          value="updates"
          icon={MessageSquareTextIcon}
          className="bg-violet-600 text-white"
        >
          Updates
        </IosMailTabsTrigger>
        <IosMailTabsTrigger
          value="promotions"
          icon={MegaphoneIcon}
          className="bg-pink-600 text-white"
        >
          Promotions
        </IosMailTabsTrigger>
        <IosMailTabsTrigger
          value="all-mail"
          icon={InboxIcon}
          className="bg-neutral-900 text-white"
        >
          All Mail
        </IosMailTabsTrigger>
      </IosMailTabsList>
      <IosMailTabsContent value="primary">
        <p>Primary</p>
      </IosMailTabsContent>
      <IosMailTabsContent value="transactions">
        <p>Transactions</p>
      </IosMailTabsContent>
      <IosMailTabsContent value="updates">
        <p>Updates</p>
      </IosMailTabsContent>
      <IosMailTabsContent value="promotions">
        <p>Promotions</p>
      </IosMailTabsContent>
      <IosMailTabsContent value="all-mail">
        <p>All Mail</p>
      </IosMailTabsContent>
    </IosMailTabs>
  );
}
`.trim();

export default IosMailTabsComponentPage;
