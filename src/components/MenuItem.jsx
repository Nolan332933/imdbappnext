import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-amber-500">
      <div>
        <Icon className="text-2xl sm:hidden" />
        <p className="uppercase hidden sm:inline">{title}</p>
      </div>
    </Link>
  );
}
