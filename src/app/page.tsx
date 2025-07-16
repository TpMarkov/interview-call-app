import { ModeToggle } from "@/components/ModeToggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="mt-10 ml-10">
      <div className="flex flex-row items-center gap-5 justify-end px-5 py-5">
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
}
