import { NextResponse, type NextRequest } from "next/server";

import { db } from "@/server/db";

async function deleteProduct(
  req: NextRequest,
  ctx: { params: { productId: string } },
) {
  try {
    const { productId } = ctx.params;

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

    if (!product.status) {
      return NextResponse.json(
        {
          message: "El producto ya ha sido eliminado",
        },
        {
          status: 400,
        },
      );
    }

    await db.product.update({
      where: {
        id: productId,
      },
      data: {
        status: false,
      },
    });

    return NextResponse.json(
      {
        message: "Solicitud exitosa",
      },
      {
        status: 200,
      },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 },
    );
  }
}

export { deleteProduct as DELETE };
