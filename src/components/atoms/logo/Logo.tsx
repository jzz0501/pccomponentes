import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <Image className="w-[220px] h-[50px] object-fill" src="/img/logo.png" sizes="100vw" alt="" height={0} width={0} priority/>
        </Link>
    )
}