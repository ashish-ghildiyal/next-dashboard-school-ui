import Image from "next/image";
import Link from "next/link";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="min-h-screen flex">
        {/* Left */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200 p-1">
            <Link href='/'>
               <div className="flex items-center justify-center gap-2 lg:justify-start">
                <Image src="/logo.png" alt="logo" width={32} height={32} />
                <span className="hidden lg:block" >School mngnt</span>
                </div>
            </Link>
            <Menu/>
        </div>

        {/* Right */}
        <div className="w-[96%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll flex flex-col">
          <Navbar/>
          {children}
        </div>

        </div>
  );
}
