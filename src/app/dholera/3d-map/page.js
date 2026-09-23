import Dholera3DClient from "./Dholera3DClient";

export const metadata = {
  title: "Dholera SIR 3D Map | Krishna Land Developers",
  description:
    "Explore the Dholera SIR development plan in 3D: TP schemes, TP splits, expressway alignment and DSIR boundaries on an interactive map.",
};

export default async function Dholera3DMapPage({ searchParams }) {
  const { view } = await searchParams;
  return <Dholera3DClient initialView={view === "3d" ? "3d" : "2d"} />;
}
