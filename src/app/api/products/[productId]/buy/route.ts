import { ProductRequestStatus, type ProductRequest } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

import { createCode } from "@/lib/utils";
import { db } from "@/server/db";
import type { ZodInferSchema } from "@/types";

const schema = z.object<
  ZodInferSchema<
    Omit<
      ProductRequest,
      "id" | "createdAt" | "updatedAt" | "code" | "productId" | "status"
    >
  >
>({
  quantity: z.number(),
  description: z.string().nullable(),
});

async function buyProduct(
  req: NextRequest,
  ctx: { params: { productId: string } },
) {
  try {
    const { productId } = ctx.params;

    const body = await req.json();
    const parse = schema.safeParse(body);

    if (!parse.success) {
      return NextResponse.json(
        { message: "Peticion invalida", errors: parse.error.issues },
        { status: 400 },
      );
    }

    const product = await db.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      return NextResponse.json(
        {
          message: "El producto no existe",
        },
        {
          status: 400,
        },
      );
    }

    const newRequest = await db.productRequest.create({
      data: {
        ...parse.data,
        productId,
        status: ProductRequestStatus.INACTIVE,
        code: createCode(),
      },
    });

    console.log({ newRequest });

    return NextResponse.json({ message: "Solicitud exitosa" }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export { buyProduct as POST };
