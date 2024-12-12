import { NextRequest, NextResponse } from "next/server";
import { CartItem, CartResponse, Product } from "@/app/types";

// Simulated cart storage (replace with database in production)
let cart: CartItem[] = [];

export async function GET() {
  try {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return NextResponse.json<CartResponse>(
      {
        cart,
        total,
        message: "Cart retrieved successfully"
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json<CartResponse>(
      {
        cart: [],
        total: 0,
        message: "Error retrieving cart"
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const product: Product = await request.json();
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return NextResponse.json<CartResponse>(
      {
        cart,
        total,
        message: "Product added to cart successfully"
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json<CartResponse>(
      {
        cart: [],
        total: 0,
        message: "Error adding product to cart"
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = parseInt(searchParams.get("id") || "", 10);

    cart = cart.filter((item) => item.id !== productId);

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return NextResponse.json<CartResponse>(
      {
        cart,
        total,
        message: "Product removed from cart successfully"
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json<CartResponse>(
      {
        cart: [],
        total: 0,
        message: "Error removing product from cart"
      },
      { status: 500 }
    );
  }
}

export async function PUT() {
  try {
    cart = [];

    return NextResponse.json<CartResponse>(
      {
        cart,
        total: 0,
        message: "Cart cleared successfully"
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json<CartResponse>(
      {
        cart: [],
        total: 0,
        message: "Error clearing cart"
      },
      { status: 500 }
    );
  }
}
