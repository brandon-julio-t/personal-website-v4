import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const ComponentsPage = () => {
  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle>Components</CardTitle>
          <CardDescription>
            Collection of animated components that I developed in my spare time
            to satisfy my curiosity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-inside">
            <li className="list-disc">
              <Button variant="link" className="-mx-4" asChild>
                <Link href="/components/image-zoom">Image Zoom</Link>
              </Button>
            </li>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
};

export default ComponentsPage;
