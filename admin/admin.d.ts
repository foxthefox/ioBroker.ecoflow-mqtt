declare let systemDictionary: Record<string, Record<string, string>>;

declare let load: (settings: Record<string, unknown>, onChange: (hasChanges: boolean) => void) => void;
declare let save: (callback: (settings: Record<string, unknown>) => void) => void;

// make load and save exist on the window object
interface Window {
	load: typeof load;
	save: typeof save;
}

declare const instance: number;
declare const adapter: string;
/** Translates text */
declare function _(text: string, arg1?: string, arg2?: string, arg3?: string): string;
declare const socket: ioBrokerSocket;
declare function sendTo(
	instance: any | null,
	command: string,
	message: any,
	callback: (result: SendToResult) => void | Promise<void>,
): void;

interface SendToResult {
	error?: string | Error;
	result?: any;
}

// tslint:disable-next-line:class-name
interface ioBrokerSocket {
	emit(
		command: 'subscribeObjects',
		pattern: string,
		callback?: (err?: string) => void | Promise<void>,
	): void;
	emit(
		command: 'subscribeStates',
		pattern: string,
		callback?: (err?: string) => void | Promise<void>,
	): void;
	emit(
		command: 'unsubscribeObjects',
		pattern: string,
		callback?: (err?: string) => void | Promise<void>,
	): void;
	emit(
		command: 'unsubscribeStates',
		pattern: string,
		callback?: (err?: string) => void | Promise<void>,
	): void;

	emit(
		event: 'getObjectView',
		view: 'system',
		type: 'device',
		options: ioBroker.GetObjectViewParams,
		callback: (
			err: string | undefined,
			result?: any,
		) => void | Promise<void>,
	): void;
	emit(
		event: 'getStates',
		callback: (
			err: string | undefined,
			result?: Record<string, any>,
		) => void,
	): void;
	emit(
		event: 'getState',
		id: string,
		callback: (err: string | undefined, result?: ioBroker.State) => void,
	): void;
	emit(
		event: 'setState',
		id: string,
		state: unknown,
		callback: (err: string | undefined, result?: any) => void,
	): void;

	on(event: 'objectChange', handler: ioBroker.ObjectChangeHandler): void;
	on(event: 'stateChange', handler: ioBroker.StateChangeHandler): void;
	removeEventHandler(
		event: 'objectChange',
		handler: ioBroker.ObjectChangeHandler,
	): void;
	removeEventHandler(
		event: 'stateChange',
		handler: ioBroker.StateChangeHandler,
	): void;

	// TODO: other events
}
