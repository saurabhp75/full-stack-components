// 🐨 finish the owl

import { json } from "@remix-run/node";

export async function loader() {
	return json({ hello: 'world' })
}
