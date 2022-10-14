import { createMachine } from "xstate";
import { options } from "./options";

/**
 * Try and build a state machine to power
 * the UI! You can only edit _this_ file.
 *
 * Here are the tools you have to
 * play with:
 *
 * States:
 *
 * 'loading' shows a loading state
 * 'complete' shows a state with the data loaded
 *
 * Services:
 *
 * 'fetchData' waits for a second, then
 * returns some data
 *
 * Events:
 *
 * REFETCH can be called from the 'complete'
 * state, and should reload the data
 *
 * Context:
 *
 * 'id': the data you get from the 'fetchData'
 * service should be on the 'id' key
 *
 * Try to make a machine which handles all of
 * these parts.
 */
export const machine = createMachine({}, options);
