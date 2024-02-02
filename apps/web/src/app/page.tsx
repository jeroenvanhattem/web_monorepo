"use client";

import { useTestHook } from "hooks/Test";
import { Button } from "ui/components/buttons/Button";

export default function Home() {
	const { testMessage, setTestMessage } = useTestHook();
	return (
		<>
			<h1>Web project</h1>
			<Button onPress={() => setTestMessage("Changed the test message")}>
				Change test message
			</Button>
			<h1>{testMessage}</h1>
		</>
	);
}
