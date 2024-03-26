import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

interface AuthFormProps {
  title: string,
  link: string,
  linkText: string,
}

const AuthForm = ({ title, link, linkText }: AuthFormProps) => {
  return (
    <Card className="w-[350px] bg-background-900 border-none">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Username</Label>
              <Input id="name" placeholder="username" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input id="name" placeholder="password" />
            </div>
          </div>
        </form>
        <div className="mt-2 text-sm">
          Don't have an account yet? <Link to={"/"+link} className="font-bold">{linkText}</Link>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
