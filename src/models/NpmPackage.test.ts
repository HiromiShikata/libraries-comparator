import { NpmPackage } from './NpmPackage';

describe('NpmPackage', () => {
  describe('Constractor', () => {
    test('success', () => {
      const npmPackage = new NpmPackage(
        'name',
        'comment',
        1,
        2,
        3,
        4,
        new Date('2000-01-01T00:00:00Z'),
        5,
        'MIT',
      );
      expect(npmPackage).toBeDefined();
    });
  });
});
