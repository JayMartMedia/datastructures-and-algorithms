(() => {
    function productArrayExcludingSelf(array: number[]): number[] {
        let totalProduct: number = array[0];
        for(let i = 1; i < array.length; i++) {
            totalProduct *= array[i];
        }

        return array.map(num => {
            if(num === 0) return totalProduct;
            return totalProduct/num;
        });
    }

    // Update test cases for your need
    const testCases: TestCase[] = [
        {
            actual: JSON.stringify(productArrayExcludingSelf([1, 2, 3, 4])),
            expected: JSON.stringify([24, 12, 8, 6]),
            meta: 'should match expected result'
        },
        {
            actual: JSON.stringify(productArrayExcludingSelf([1, -2, 3, 4])),
            expected: JSON.stringify([-24, 12, -8, -6]),
            meta: 'should match expected result'
        },
        {
            actual: JSON.stringify(productArrayExcludingSelf([1, 2, 0, 4])),
            expected: JSON.stringify([0, 0, 8, 0]),
            meta: 'should match expected result'
        },
        {
            actual: JSON.stringify(productArrayExcludingSelf([0, 2, 3, 0])),
            expected: JSON.stringify([0, 0, 0, 0]),
            meta: 'should match expected result'
        },
        {
            actual: JSON.stringify(productArrayExcludingSelf([-1, 2, 3, -4])),
            expected: JSON.stringify([-24, 12, 8, -6]),
            meta: 'should match expected result'
        },
    ];

    /* Don't need to modify */
    interface TestCase {
        actual: any;
        expected: any;
        meta: any;
    }
    function runTests(testCases: TestCase[]) {
        for (let i = 0; i < testCases.length; i++) {
            const testCase = testCases[i];
            console.assert(
                testCase.expected === testCase.actual,
                JSON.stringify({ expected: testCase.expected, actual: testCase.actual, meta: testCase.meta }, null, 2)
            );
        }
    }

    runTests(testCases);

    console.log('Finished tests');
    /* End don't need to modify */
})();
