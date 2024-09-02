"use client";
import type { PaymentMethod } from "@prisma/client";
import React from "react";

type ProductContextValue = {
	address: string;
	setAddress: (address: string) => void;
	paymentMethodId: number | undefined;
	setPaymentMethodId: (paymentMethodId: number) => void;
	selectedPaymentMethodType: PaymentMethod["type"] | undefined;
	phone: string;
	setPhone: (phone: string) => void;
};

const ProductContext = React.createContext<ProductContextValue | null>(null);

export function ProductProvider({
	children,
	validPaymentMethods,
}: React.PropsWithChildren<{ validPaymentMethods: PaymentMethod[] }>) {
	const [address, setAddress] = React.useState("");
	const [paymentMethodId, setPaymentMethodId] = React.useState<
		number | undefined
	>(validPaymentMethods[0]?.id);
	const [phone, setPhone] = React.useState("");

	const selectedPaymentMethodType = React.useMemo(() => {
		return validPaymentMethods.find(pm => pm.id === paymentMethodId)?.type;
	}, [paymentMethodId, validPaymentMethods]);

	return (
		<ProductContext.Provider
			value={{
				address,
				setAddress,
				paymentMethodId,
				setPaymentMethodId,
				phone,
				setPhone,
				selectedPaymentMethodType,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
}

export function useProductContext() {
	const context = React.useContext(ProductContext);

	if (!context) {
		throw new Error("useProductContext must be used within a ProductProvider");
	}

	return context;
}
