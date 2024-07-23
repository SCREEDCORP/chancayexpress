import { notFound } from "next/navigation";

import { db } from "@/server/db";
import { CreateProduct } from "./form";

type Context = {
  params: {
    userHandler: string;
  };
};

export const dynamic = "force-dynamic";

export default async function CreateProductPage({ params }: Context) {
  const user = await db.user.findUnique({
    where: { nameHandler: params.userHandler },
  });

  if (!user) return notFound();

  return <CreateProduct userId={user.id} />;
}
