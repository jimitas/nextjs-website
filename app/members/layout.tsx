import Sheet from "../_compornents/Sheet";
import Hero from "../_compornents/Hero";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー"/>
      <Sheet>{children}</Sheet>;
    </>
  );
}
