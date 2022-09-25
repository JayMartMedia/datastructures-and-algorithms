(() => {
    function binarySearch<T>(
        array: T[],
        item: T,
        startIdx: number = 0,
        endIdx: number = array.length - 1
    ): boolean {
        // Base not found case
        if(startIdx > endIdx) return false;

        // Find bounds of array
        const middleIdx = Math.floor((startIdx+endIdx)/2);
        const middleItem = array[middleIdx];

        // Recursively search
        if(middleItem === item){
            return true
        }else if(item < middleItem){
            return binarySearch(array, item, startIdx, middleIdx - 1);
        }else{
            return binarySearch(array, item, middleIdx + 1, endIdx);
        }
    }

    // Update test cases for your need
    const testCases: TestCase[] = [
        {
            actual: binarySearch([], 3),
            expected: false,
            meta: 'should return false when empty array'
        },
        {
            actual: binarySearch([1,2,3,4,5], 4),
            expected: true,
            meta: 'should return true when item is in array'
        },
        {
            actual: binarySearch([1], 2),
            expected: false,
            meta: 'should return false when item is not in array'
        },
        {
            actual: binarySearch([2], 2),
            expected: true,
            meta: 'should return true if item is in array'
        },
        {
            actual: binarySearch([2,4,6,8], 7),
            expected: false,
            meta: 'should return false if item is not in array of multiple items'
        },
        {
            actual: binarySearch([2, 4, 6, 8, 9, 10], 6),
            expected: true,
            meta: 'should return true if item is in array of multiple items'
        },
        {
            actual: binarySearch([2, 4, 6, 9, 10], 9),
            expected: true,
            meta: 'should return true if item is in array of multiple items'
        },
        {
            actual: binarySearch(["a", "b", "c", "e", "h", "j"], "j"),
            expected: true,
            meta: 'should return true if item is in array of multiple items'
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
                JSON.stringify({expected: testCase.expected, actual: testCase.actual, meta: testCase.meta }, null, 2)
            );
        }
    }

    runTests(testCases);

    console.log('Finished tests');
    /* End don't need to modify */
})();
