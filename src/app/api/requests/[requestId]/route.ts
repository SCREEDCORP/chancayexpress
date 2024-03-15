import { ProductRequestStatus } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

import { db } from "@/server/db";
import type { ZodInferSchema } from "@/types";

const updateSchema = z.object<ZodInferSchema<{ status: ProductRequestStatus }>>(
  {
    status: z.nativeEnum(ProductRequestStatus),
  },
);

async function updateRequest(
  req: NextRequest,
  ctx: { params: { requestId: string } },
) {
  try {
    const { requestId } = ctx.params;

    const body = await req.json();
    const parse = updateSchema.safeParse(body);

    if (!parse.success) {
      console.error(parse.error.issues);
      return NextResponse.json(
        {
          message: "Peticion invalida",
          errors: parse.error.issues,
        },
        {
          status: 400,
        },
      );
    }

    const request = await db.productRequest.update({
      where: {
        id: requestId,
      },
      data: {
        status: parse.data.status,
      },
    });

    return NextResponse.json(
      {
        data: request,
        message: "Solicitud exitosa",
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

export { updateRequest as PATCH };
