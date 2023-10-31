import { GeistSans, GeistMono } from "geist/font";
import { Inter, Lusitana, Noto_Sans_JP } from "next/font/google";

export const sans = GeistSans;
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const sansJp = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
});
