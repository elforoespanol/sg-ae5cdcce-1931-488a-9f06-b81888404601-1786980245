import dynamic from "next/dynamic";

const AccountPageContent = dynamic(
  () => import("./account-content"),
  { ssr: false, loading: () => <div className="min-h-screen bg-gradient-hero" /> }
);

export default function AccountPage() {
  return <AccountPageContent />;
}