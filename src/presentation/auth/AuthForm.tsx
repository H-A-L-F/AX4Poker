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
import useViewModel from "./AuthFormViewModel";

interface AuthFormProps {
  title: string,
  link: string,
  linkTextPrefix?: string,
  linkText: string,
}

const AuthForm = ({ title, link, linkTextPrefix, linkText }: AuthFormProps) => {
  const {
    unameRef,
    passwordRef,
    handleSubmit,
    errorMsg
  } = useViewModel(title)

  return (
    <Card className="w-[350px] bg-background-900 border-none">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-red-500">{errorMsg}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Username</Label>
              <Input id="name" placeholder="username" ref={unameRef}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input id="name" placeholder="password" type="password" ref={passwordRef}/>
            </div>
          </div>
        </form>
        <div className="mt-2 text-sm">
          {linkTextPrefix} <Link to={"/"+link} className="font-bold">{linkText}</Link>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSubmit}>Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
