import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <Image className="w-[138px] h-[48px] object-fill" src="/img/logo.png" sizes="100vw" alt="" height={0} width={0} priority/>
        </Link>
    )
}