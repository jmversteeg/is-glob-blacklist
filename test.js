import test from 'ava';
import isGlobBlacklist from './';

test('Detect whether an array of globs is a blacklist', t => {
	t.false(isGlobBlacklist([]));
	t.false(isGlobBlacklist(['foo']));
	t.true(isGlobBlacklist(['!foo']));
	t.false(isGlobBlacklist(['foo', '!foo/bar']));
	t.true(isGlobBlacklist(['!foo', 'foo/bar']));
});
