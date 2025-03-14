import { NextResponse } from "next/server";

export async function POST() {
  try {
    return NextResponse.json({ message: "Email enviado exitosamente" });
  } catch (error) {
    console.error("Error al enviar email:", error);
    return NextResponse.json(
      { message: "Error al enviar el email" },
      { status: 500 }
    );
  }
}
