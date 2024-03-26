import React from "react";

import Resizer, { type ResizeImageParams } from "@/core/resize-image";

interface UseInputFileParams {
	type: "image" | "audio";
	// skipResize?: true;
	resizerOptions: Omit<ResizeImageParams, "file" | "responseUriFunc">;
	withPasteAnywhere?: boolean;
	inputId?: string;
}

export function useInputFile({
	type,
	resizerOptions,
	withPasteAnywhere,
	inputId = "file",
}: UseInputFileParams) {
	const [inputValue, setInputValue] = React.useState<File | null>(null);
	const [isLoading, setIsLoading] = React.useState(false);
	const image = inputValue
		? URL.createObjectURL(inputValue)
		: "/images/avatar/1.jpg";

	const onChangeValue = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.item(0);
		if (!file) return;
		if (file.type === "image/gif") return;

		setIsLoading(true);

		if (typeValidator[type].test(file.type)) {
			try {
				const newImage = await Resizer.imageFileResizer({
					file,
					...resizerOptions,
				});

				setInputValue(newImage as File);
			} catch (error) {
				console.error(error);
				setInputValue(null);
			}
		} else if (typeValidator[type].test(file.type)) {
			setInputValue(file);
		} else {
			setInputValue(null);
			(document.getElementById(inputId) as HTMLInputElement).value = "";
		}

		setIsLoading(true);
	};
	const clearInput = () => setInputValue(null);

	React.useEffect(() => {
		const handlePasteAnywhere = (event: React.ClipboardEvent) => {
			const file = event.clipboardData.files?.item(0);

			if (!file) return;

			if (typeValidator.image.test(file.type || "")) {
				setInputValue(file);
				const input = document.getElementById(inputId) as HTMLInputElement;
				const dataTransfer = new DataTransfer();
				dataTransfer.items.add(file);
				input.files = dataTransfer.files;
			}
		};

		if (withPasteAnywhere) {
			window.addEventListener("paste", handlePasteAnywhere as any);
		}

		return () => {
			window.removeEventListener("paste", handlePasteAnywhere as any);
		};
	}, [withPasteAnywhere, inputId]);

	return {
		inputValue,
		onChangeValue,
		clearInput,
		image,
		isLoading,
	};
}

const typeValidator = {
	image: /^image\//,
	audio: /^audio\//,
};
