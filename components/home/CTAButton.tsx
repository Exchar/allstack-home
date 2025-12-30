import { Button } from "@/components/ui/button";
// import { BotIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <Link
      href="https://chat.allstack.online"
      target="_self"
      rel="noopener noreferrer nofollow"
    >
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="Get Boilerplate"
      >
        <Image width="24" height="24" src={'/images/robot.png'} alt="robot-chat"></Image>
        {locale.title}
      </Button>
    </Link>
  );
};

export default CTAButton;
