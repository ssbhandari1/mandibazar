import { getOrderById, updateOrderStatus, deleteOrder } from "../../../../server/services/order";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const order = await getOrderById(params.id);
    if (!order) return NextResponse.json({ message: "Order not found" }, { status: 404 });

    return NextResponse.json(order, { status: 200 });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { status } = await req.json();
    if (!["shipped", "delivered", "cancelled"].includes(status))
        return NextResponse.json({ message: "Invalid status" }, { status: 400 });

    const order = await updateOrderStatus(params.id, status);
    if (!order) return NextResponse.json({ message: "Order not found" }, { status: 404 });

    return NextResponse.json(order, { status: 200 });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const order = await deleteOrder(params.id);
    if (!order) return NextResponse.json({ message: "Order not found" }, { status: 404 });

    return NextResponse.json({ message: "Order deleted successfully" }, { status: 200 });
}
