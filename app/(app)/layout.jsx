import { HomeNav } from "@/components/home-nav";

export default function AppLayout({ children }) {
  return (
    <div className=" max-w-screen-lg mx-auto">
      <HomeNav />
      {children}
    </div>
  );
}
