"use client";

import { useState } from "react";

export const useTestHook = () => {
	const [testMessage, setTestMessage] = useState("Hello, World!");
	return { testMessage, setTestMessage };
};
