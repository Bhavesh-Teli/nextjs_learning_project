import { Button } from "@/components/ui/button";
import { signIn } from "./actions/signin";
import { signOut } from "./actions/signout";
import { auth } from "@/auth";

export default async function  Home() {
  const session=await auth()
  return (
    <div>
      <h1>Home page</h1>
     
    </div>
  );
}
