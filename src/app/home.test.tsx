import React from 'react';
import { reverse } from '@/components/Reverse/Reverse';

describe('reverse', () => {
	// J'ai déjà fait le premier test, à toi de rajouter les autres !
	test('return an empty array if array is empty', () => {
		const reversed = reverse([]);
		expect(reversed).toEqual([]);
	});
});
