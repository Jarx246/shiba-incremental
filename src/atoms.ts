import { atomWithStorage } from 'jotai/vanilla/utils';
import Decimal from 'break_eternity.js';

const INITIAL_DOG_LIMIT: Decimal = new Decimal(4);

export const limitAtom = atomWithStorage<Decimal>('shiba_limit', INITIAL_DOG_LIMIT, {
	getItem: (key: string): Decimal => {
		const raw = localStorage.getItem(key);
		return raw === null ? INITIAL_DOG_LIMIT : new Decimal(raw);
	},
	setItem: (key: string, value: Decimal): void => localStorage.setItem(key, value.toString()),
	removeItem: (key: string): void => localStorage.removeItem(key),
});

export const remainderAtom = atomWithStorage<Decimal>('shiba_remainder', INITIAL_DOG_LIMIT, {
	getItem: (key: string): Decimal => {
		const raw = localStorage.getItem(key);
		return raw === null ? INITIAL_DOG_LIMIT : new Decimal(raw);
	},
	setItem: (key: string, value: Decimal): void => localStorage.setItem(key, value.toString()),
	removeItem: (key: string): void => localStorage.removeItem(key),
});

export const shibasAtom = atomWithStorage<string[]>('shiba_items', ['#FFA500']);

export const shibaAtom = atomWithStorage<{ id: number; color: string }[]>('shiba_items_2', [
	{ id: 0, color: '#FFA500' },
]);

export const lastSeenAtom = atomWithStorage<number>('shiba_last_seen', Date.now());
