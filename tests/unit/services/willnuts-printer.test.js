const {VisualNutsPrinterService} = require('../../../src/services');

describe('Printer test', () => {
  it(`Should return 100 items when using default limit`, async () => {
    const response = await VisualNutsPrinterService.compute();
    expect(response.length).toBe(100);

    const expected = [
      {
        'number': 1,
      },
      {
        'number': 2,
      },
      {
        'number': 3,
        'print': 'Visual',
      },
      {
        'number': 4,
      },
      {
        'number': 5,
        'print': 'Nuts',
      },
      {
        'number': 6,
        'print': 'Visual',
      },
      {
        'number': 7,
      },
      {
        'number': 8,
      },
      {
        'number': 9,
        'print': 'Visual',
      },
      {
        'number': 10,
        'print': 'Nuts',
      },
      {
        'number': 11,
      },
      {
        'number': 12,
        'print': 'Visual',
      },
      {
        'number': 13,
      },
      {
        'number': 14,
      },
      {
        'number': 15,
        'print': 'Visual Nuts',
      },
      {
        'number': 16,
      },
      {
        'number': 17,
      },
      {
        'number': 18,
        'print': 'Visual',
      },
      {
        'number': 19,
      },
      {
        'number': 20,
        'print': 'Nuts',
      },
      {
        'number': 21,
        'print': 'Visual',
      },
      {
        'number': 22,
      },
      {
        'number': 23,
      },
      {
        'number': 24,
        'print': 'Visual',
      },
      {
        'number': 25,
        'print': 'Nuts',
      },
      {
        'number': 26,
      },
      {
        'number': 27,
        'print': 'Visual',
      },
      {
        'number': 28,
      },
      {
        'number': 29,
      },
      {
        'number': 30,
        'print': 'Visual Nuts',
      },
      {
        'number': 31,
      },
      {
        'number': 32,
      },
      {
        'number': 33,
        'print': 'Visual',
      },
      {
        'number': 34,
      },
      {
        'number': 35,
        'print': 'Nuts',
      },
      {
        'number': 36,
        'print': 'Visual',
      },
      {
        'number': 37,
      },
      {
        'number': 38,
      },
      {
        'number': 39,
        'print': 'Visual',
      },
      {
        'number': 40,
        'print': 'Nuts',
      },
      {
        'number': 41,
      },
      {
        'number': 42,
        'print': 'Visual',
      },
      {
        'number': 43,
      },
      {
        'number': 44,
      },
      {
        'number': 45,
        'print': 'Visual Nuts',
      },
      {
        'number': 46,
      },
      {
        'number': 47,
      },
      {
        'number': 48,
        'print': 'Visual',
      },
      {
        'number': 49,
      },
      {
        'number': 50,
        'print': 'Nuts',
      },
      {
        'number': 51,
        'print': 'Visual',
      },
      {
        'number': 52,
      },
      {
        'number': 53,
      },
      {
        'number': 54,
        'print': 'Visual',
      },
      {
        'number': 55,
        'print': 'Nuts',
      },
      {
        'number': 56,
      },
      {
        'number': 57,
        'print': 'Visual',
      },
      {
        'number': 58,
      },
      {
        'number': 59,
      },
      {
        'number': 60,
        'print': 'Visual Nuts',
      },
      {
        'number': 61,
      },
      {
        'number': 62,
      },
      {
        'number': 63,
        'print': 'Visual',
      },
      {
        'number': 64,
      },
      {
        'number': 65,
        'print': 'Nuts',
      },
      {
        'number': 66,
        'print': 'Visual',
      },
      {
        'number': 67,
      },
      {
        'number': 68,
      },
      {
        'number': 69,
        'print': 'Visual',
      },
      {
        'number': 70,
        'print': 'Nuts',
      },
      {
        'number': 71,
      },
      {
        'number': 72,
        'print': 'Visual',
      },
      {
        'number': 73,
      },
      {
        'number': 74,
      },
      {
        'number': 75,
        'print': 'Visual Nuts',
      },
      {
        'number': 76,
      },
      {
        'number': 77,
      },
      {
        'number': 78,
        'print': 'Visual',
      },
      {
        'number': 79,
      },
      {
        'number': 80,
        'print': 'Nuts',
      },
      {
        'number': 81,
        'print': 'Visual',
      },
      {
        'number': 82,
      },
      {
        'number': 83,
      },
      {
        'number': 84,
        'print': 'Visual',
      },
      {
        'number': 85,
        'print': 'Nuts',
      },
      {
        'number': 86,
      },
      {
        'number': 87,
        'print': 'Visual',
      },
      {
        'number': 88,
      },
      {
        'number': 89,
      },
      {
        'number': 90,
        'print': 'Visual Nuts',
      },
      {
        'number': 91,
      },
      {
        'number': 92,
      },
      {
        'number': 93,
        'print': 'Visual',
      },
      {
        'number': 94,
      },
      {
        'number': 95,
        'print': 'Nuts',
      },
      {
        'number': 96,
        'print': 'Visual',
      },
      {
        'number': 97,
      },
      {
        'number': 98,
      },
      {
        'number': 99,
        'print': 'Visual',
      },
      {
        'number': 100,
        'print': 'Nuts',
      },
    ];

    for (let i = 0; i < 100; i++) {
      expect(response[i].number).toBe(expected[i].number);
      expect(response[i].print || null).toBe(expected[i].print || null);
    }
  });

  it(`Should return 5 items when passing a limit`, async () => {
    const response = await VisualNutsPrinterService.compute(5);
    expect(response.length).toBe(5);

    const expected = [
      {
        'number': 1,
      },
      {
        'number': 2,
      },
      {
        'number': 3,
        'print': 'Visual',
      },
      {
        'number': 4,
      },
      {
        'number': 5,
        'print': 'Nuts',
      },
    ];

    for (let i = 0; i < 5; i++) {
      expect(response[i].number).toBe(expected[i].number);
      expect(response[i].print || null).toBe(expected[i].print || null);
    }
  });

  it(`Should return 1000000 items when passing a limit greater than the safe threshold`, async () => {
    const response = await VisualNutsPrinterService.compute(Number.MAX_SAFE_INTEGER);
    expect(response.length).toBe(VisualNutsPrinterService.MAX_SAFE_INT);
  });

  it(`Should return 100 items when passing a zero or negative limit`, async () => {
    const response = await VisualNutsPrinterService.compute(0);
    expect(response.length).toBe(100);

    const response2 = await VisualNutsPrinterService.compute(-990);
    expect(response2.length).toBe(100);
  });
});
