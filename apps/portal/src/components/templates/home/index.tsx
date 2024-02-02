"use client";

// import { UsersTable } from "@/components/portal/users/UsersTable";
import { Button } from "ui/components/buttons/Button";
import { useTestHook } from "hooks/Test/";

export default function HomePage() {
	const { testMessage, setTestMessage } = useTestHook();
	return (
		<div className="content">
			<h1>Portal project</h1>
			<Button onPress={() => setTestMessage("Changed the test message")}>
				Change test message
			</Button>
			<h1>{testMessage}</h1>
		</div>
	);
}
