import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { sumar } from '../site/logic.mjs';

test('suma dos números enteros', () => {
  assert.equal(sumar(2, 3), 5);
});

test('suma números negativos', () => {
  assert.equal(sumar(-4, 3), -1);
});

test('suma números decimales', () => {
  assert.equal(sumar(0.1, 0.2), 0.3);
});

test('suma con cero', () => {
  assert.equal(sumar(0, 15), 15);
});

test('rechaza valores no numéricos', () => {
  assert.throws(() => sumar('2', 3), TypeError);
  assert.throws(() => sumar(Number.NaN, 3), TypeError);
  assert.throws(() => sumar(2, Infinity), TypeError);
});

test('la página incluye título, calculadora y script', async () => {
  const html = await readFile(new URL('../site/index.html', import.meta.url), 'utf8');
  assert.match(html, /<title>Demo Prueba/);
  assert.match(html, /id="calculadora"/);
  assert.match(html, /src="\.\/app\.js"/);
});
